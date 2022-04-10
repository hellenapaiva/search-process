import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent">
        <div className="bg-white rounded-lg w-1/2 shadow-md">
          <div className="flex flex-col items-start p-4">
            <div className="flex flex-col items-center w-full  mb-10">
              <button className="flex w-full justify-end text-2xl" onClick={closeModal}>
                <AiOutlineClose />
              </button>
              <div className="text-red-700 font-bold text-xl">
                Processo não encontrado
              </div>
            </div>
            <hr />
            <div className=" flex  w-full text-lg text-center  items-center justify-center mb-10"> Certifique-se que o CNJ foi digitado corretamente.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
