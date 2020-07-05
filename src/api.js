import axios from "axios";
import { API_KEY } from "../keysConfig";
import React, { useState } from "react";

export default {
  async getData(searchTerm) {
    let res;

    try {
      if (searchTerm) {
        res = await axios.get(
         
          `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${API_KEY}`
        );
      } else {
        res = await axios.get(
            `https://newsapi.org/v2/top-headlines?q=a&apiKey=${API_KEY}`

        );
      }
      return res;
    } catch (error) {
      return error;
    }
  },

  async getCategories() {
    let cat;
    try {
      cat = await axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
      return cat;
    } catch (error) {
      return error;
    }
  },

  async getNewsByCat(selectedCat) {
    let article;
    try {
        article = await axios.get(`https://newsapi.org/v2/top-headlines?category=${selectedCat}&apiKey=${API_KEY}`);
      return article;
    } catch (error) {
      return error;
    }
  },
};
