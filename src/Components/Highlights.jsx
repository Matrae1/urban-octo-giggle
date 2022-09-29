import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
            icon={ <FontAwesomeIcon icon="bolt" />} 
            title="Easy and Quick"
            para="Get access to the book you purchased online immediately."/>
            <Highlight
            icon={ <FontAwesomeIcon icon="book-open" />} 
            title="10,000 + Books"
            para=" Library has books in all your favourite genres."/>
            <Highlight
            icon={ <FontAwesomeIcon icon="tags" />} 
            title="Affordable"
            para="Purchase books from as low as £5!"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
