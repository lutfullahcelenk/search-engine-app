import React, { useState } from "react";
import { useHistory } from "react-router";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";

const ResultPage = () => {

    const {data,output} = useContext(engineContext)

  const history = useHistory();
  const goMain = () => {
    history.push("/");
  };


  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(3);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexofFirstCard = indexOfLastCard- cardPerPage;
  const currentCards = output.slice(indexofFirstCard, indexOfLastCard);
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

      <div className="output col-md-10">
        {currentCards.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      <Pagination
        paginate={paginate}
        output={output}
        cardPerPage={cardPerPage}
      />
    </div>
  );
};

export default ResultPage;
