import React, { useState, useEffect, useRef } from "react";
import api from "../../api";
import Filter from "./Filter";
import NewsList from "./NewsList";
import Spinner from '../../images/spinner.gif';
const Home = () => {
  const [news, setNews] = useState([]);
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, [searchTerm]);

  const getNews = async () => {
    setLoading(true);

    api.getData(searchTerm).then((res) => {
      if (res.status == 200) {
        setNews(res.data.articles);
      } else {
        setNews([]);
      }
      setLoading(false);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.querySelector("input").value);
  };

  const handleChange = (event) => {
    if (event.target.value.length < 4) {
      setSearchTerm("");
    } else {
      setSearchTerm(event.target.value);
    }
  };

  const handleSelectCtaegory = async (event) => {
    setLoading(true);
    let selectedCat = event.target.innerText;
    api.getNewsByCat(selectedCat).then((res) => {
        if (res.status == 200) {
            setNews(res.data.articles);
        } else {
         setNews([])
        }
        setLoading(false);
       
      });
  };

  return (
    <div>
      <Filter
        HandleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelectCtaegory={handleSelectCtaegory}
      />
      {loading ? (
        <img
          className="loading"
          src={Spinner}
          alt="loading spinner"
        />
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
};

export default Home;
