import React, { useEffect, useState, useRef } from "react";
import useLocalStorageState from "use-local-storage-state";
import api from "../../api";
import Close from "../../images/close.svg";
import Search from "../../images/search.svg";
import Down from "../../images/down-arrow.svg";
import List from "../../images/list.png";
const Filter = ({ HandleSubmit, handleChange, handleSelectCtaegory }) => {
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [recentSearch, setRecentSearch] = useLocalStorageState(
    "recentSearch",
    []
  );
  const wrapperRef = useRef(null);
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const getCategories = async () => {
    let cateList = [];
    api.getCategories().then((res) => {
      if (res.status == 200) {
        const unique = [
          ...new Set(res.data.sources.map((item) => item.category)),
        ];
        unique.forEach(function (unique_cat) {
          cateList.push(unique_cat);
        });
        setCategories(cateList);
      } else {
        setCategories([]);
      }
    });
  };
  const saveSearch = (event) => {
    event.preventDefault();
    setRecentSearch([
      ...recentSearch,
      event.target.querySelector("input").value,
    ]);
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };


  const deleteRecentSearch = (event) => {
    let deletedIndex = event.target.parentNode.parentNode.tabIndex;
    recentSearch.splice(deletedIndex, 1);
    setRecentSearch(recentSearch);
  };

  const handleMobileSearch = (event) => {
    document.querySelector('.filter').querySelector('form').classList.toggle('expand');
  };

  const handleMobileCat = (event) => {
    document.querySelector('.categoryDropdown').classList.toggle('expand');

};

  return (
    <div className="filter">
      <form ref={wrapperRef} onSubmit={saveSearch}>
        <input
          type="text"
          placeholder="Search articles"
          onFocus={() => {
            setDisplay(true);
          }}
          onChange={handleChange}
        />
        <img className="searchImg" src={Search} />
        <img className="closeSearch" src={Close} onClick={handleMobileSearch} />
        {display && (
          <div className="autoContainer">
            {recentSearch.length > 0
              ? recentSearch.map((value, i) => {
                  return (
                    <div
                     
                      className="option"
                      key={i}
                      tabIndex={i}
                    >
                      <span>
                        {value} <img onClick={deleteRecentSearch} src={Close} />
                      </span>
                    </div>
                  );
                })
              : false}
          </div>
        )}
      </form>

      <div className="categoryDropdown">
        <span className="dropdownTitle">
          Select Category <img className="arrowDown" src={Down} /> <img className="closeSearch" src={Close} onClick={handleMobileCat} />

        </span>
        <ul>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <li onClick={handleSelectCtaegory}>
                {" "}
                <span>{cat}</span>
              </li>
            ))
          ) : (
            <li>
              <span>No cat found</span>
            </li>
          )}
        </ul>
      </div>
   
     <div className="filterMobile">
          <div className="searchMobile" onClick={handleMobileSearch}><img src={Search}/></div>
          <div className="categoryMobile" onClick={handleMobileCat}><img src={Down}/><img src={List} /></div>
     </div>
    </div>
  );
};

export default Filter;
