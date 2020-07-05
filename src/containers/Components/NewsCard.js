import React from 'react'
import Placeholder from '../../images/img-copy.svg';
export const NewsCard = ({ newsItem }) => {

    return (
        <div className="newsCard">
            <div className="cardImg">

                {newsItem.urlToImage ? (

                    <img src={newsItem.urlToImage} />

                ) :
                    (

                        <img src={Placeholder} />
                    )}
            </div>
            <div className="cardInfo">
                <h2>{newsItem.title}</h2>
            </div>

        </div>
    )
};

export default NewsCard;
