import React from "react";

const TableProcess = () => {
  return (
    <>
      <div className="mt-6 mb-6">
        <span className="text-lg font-semibold">
          (processosRelacionados)Processos Relacionados
        </span>
      </div>

      <div className="w-full flex justify-center my-4 py-4">
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row rounded overflow-hidden shadow-xl">
            <div className="w-full md:w-1/4 h-auto">
              <div className="top flex items-center px-5 h-16 bg-gray-700 text-white">
                <div className="ml-3 flex flex-col text-xl text-center">
                  Processos Relacionados
                </div>
              </div>
              <div className="bg-gray-400 w-full h-full sm:flex md:block">
                <button
                  id="button-1"
                  className="w-full flex justify-center items-center px-5 py-2 hover:bg-gray-500 cursor-pointer focus:outline-none"
                >
                  <span>Número do processo</span>
                </button>
                <button
                  id="button-2"
                  className="w-full flex justify-center items-center px-5 py-2 hover:bg-gray-500 cursor-pointer focus:outline-none"
                >
                  <span>Data de Distribuição</span>
                </button>
                <button
                  id="button-3"
                  className="w-full flex justify-center items-center px-5 py-2 hover:bg-gray-500 cursor-pointer focus:outline-none"
                >
                  <span>Tribunal</span>
                </button>
                <button
                  id="button-4"
                  className="w-full flex justify-center items-center px-5 py-2 hover:bg-gray-500 cursor-pointer focus:outline-none"
                >
                  <span>Natureza</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="top flex items-center px-5 h-16 bg-gray-600 text-white text-2xl" />

              <div className="w-full px-5 py-3 max-h-screen overflow-y-auto">
                <div id="view-1">
                  5001682-88.2020.8.13.0672
                  <hr className="my-2 border-gray-500" />
                </div>
                <div id="view-2">
                  12/02/2020
                  <hr className="my-2 border-gray-500" />
                </div>
                <div id="view-3">
                  TJMG
                  <hr className="my-2 border-gray-500" />
                </div>
                <div id="view-4">
                  CIVEL PROCEDIMENTO DO JUIZADO ESPECIAL CIVEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableProcess;
