import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



const Characters = ({characters = []}) => {
    // CREAR ESTILOS A MODALS
const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',

        },
      };
        // SE CREA POR DEFECTO EN FALSO PARA MANTENER OCULTO EL MODALS
        const [modalIsOpen, setIsOpen] = React.useState(false);

        // FUNCIÓN PARA ABRIR EL MODALS
        function openModal(item, index) {
            // ESTADO PASA A TRUE PARA ABIR Modal
            setIsOpen(true);
        }

    
        // Function PARA CERRAR MODALS
        function closeModal() {
            // ESTADO PASA A FALSO PARA CERRAR MODAL
            setIsOpen(false);
        }
    return(
        
        <div className="row">
            {

                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minWidth:"200px"}}>
                            <img src={item.image} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <hr/>
                                    <p>Spacies: {item.species}</p>
                                    <p>Location: {item.location.name}</p>

                                    <button type="button" className="btn btn-danger justify-content-center" 
                                        onClick={openModal}>Detalle de personaje
                                    </button>

                                    {/* MODAL PARA MOSTRAR INFORMACION ADICIONAL DEL PERSONAJE */}
                                    <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                            >
                                     
                                            <img src={item.image} alt=""/>
                                         
                                            <h5 className="card-title">{item.name}</h5>
                                            <hr/>
                                            <p>Genero: {item.gender}</p>
                                            <p>Created: {item.created}</p>
                                            {/* <p>Origin: {item.origin.name}</p> */}


                                        
                                            <button type="button" className="btn btn-danger" onClick={closeModal}>cerrar</button>
                                  
                                     </Modal>                                 

                               
                                </div>

                        </div>
            
                    </div>
                ))
            }
        
        </div>
    )

}

export default Characters