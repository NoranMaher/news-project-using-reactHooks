import React, { useState, useEffect } from "react";

import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  return (
    <div>
      <div className="list">
        {news.length > 0 ? (
          news.map((article) => <NewsCard newsItem={article} />)
        ) : (
          <h2>No Articles found</h2>
        )}
      </div>
    </div>
  );
};

export default NewsList;
