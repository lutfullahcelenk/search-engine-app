import React, { useState } from "react";
import { useHistory } from "react-router";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";

const ResultPage = () => {
  const { output, handleAlphabetic, handleDate, sortedValue } = useContext(engineContext);

  console.log(sortedValue)
  const history = useHistory();
  const goMain = () => {
    history.push("/");
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(3);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexofFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = sortedValue.slice(indexofFirstCard, indexOfLastCard);
  //   console.log(currentCards);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="logobutton btn btn-outline-primary btn-lg mt-5 p-3 "
          onClick={goMain}
        >
          <i className="fas fa-arrow-left"></i> Return To Main Page
        </button>


      </div>
        <div className="dropdown d-flex justify-content-center mt-5">
          <button
            className="btn btn-secondary btn-lg "
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-sort me-2"></i>Sort By
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              className="dropdown-item btn h5"
              href="#"
              onClick={() => handleAlphabetic(output)}
            >
              Alphabetic
            </button>
            <button
              className="dropdown-item btn h5"
              href="#"
              onClick={() => handleDate(output)}

            >
              Newest Date
            </button>
          </div>
        </div>



      <div className="output col-md-10">
        {currentCards.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
        {output.length>3 ?  (<Pagination
        paginate={paginate}
        output={output}
        cardPerPage={cardPerPage}
      />) : null }
     
    </div>
  );
};

export default ResultPage;
