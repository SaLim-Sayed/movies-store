import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card">
        <Link to={`/movie/${mov.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt="hu"
          />
        
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>اسم الفيلم : {mov.original_title}</p>
            <p>تاريخ الاصدار:{mov.release_date}</p>
            <p>عدد المقيمين: {mov.vote_count}</p>
            <p>التقييم:{mov.vote_average} </p>
          </div>
        </div></Link>
        <div className="card-footer text-center text-light   bg-dark">{mov.title.slice(0,20 ) }{mov.title.length>20?"....":" "}</div>
      </div>
    </Col>
  );
};

export default CardMovie;
