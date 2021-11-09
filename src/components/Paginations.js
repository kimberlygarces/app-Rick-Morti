import React from "react";

const Pagination = ({prev, next, onPrevios, onNext}) => {
    
    // funcion para el boton previous
    const handlePrevious = () => {
        onPrevios()
    }
    // funcion para el boton Next
    const handleNext = () => {
        onNext()

    }
 

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {/* Los botones estan condicionados a que existan un NEXT o un Previos */}
                {prev ? (
                    <li className="page-item">
                    <button className="page-link" onClick={handlePrevious}>Previus</button>
                    </li>
                ) : null }
                {next ? (

                 <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                 </li>
               ) : null }

            </ul>
        </nav>
    )
}

export default Pagination