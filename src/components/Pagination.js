import React from 'react';



const Pagination = ({paginate,output,cardPerPage}) => {
    
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(output.length / cardPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <nav>
        <ul className = "pagination d-flex justify-content-center mt-3">
            {pageNumbers.map(number => (
                <li key = {number} className = "page-item">
                    <a  onClick={() => paginate(number)} href = "#" className = "page-link bg-secondary text-light h5 m-1">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    )
}

export default Pagination;
