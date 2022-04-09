import React, { useState } from "react";
import axios from "axios";

import Header from "../src/components/Header";
import ResultProcess from "../src/components/ResultProcess";
import TableProcess from "../src/components/TableProcess";
import TableMovement from "../src/components/TableMovement";
import Loading from "../src/components/Loading";

const Search = () => {
  const [numberProcess, setNumberProcess] = useState("");
  const [process, setProcess] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSearchProcess(event) {
    event.preventDefault();
    setLoading(true);
    const key = "23c77e25-caf1-4a7b-996d-843101b6a177";
    try {
      const response = await axios.get(
        `/${numberProcess}?tipo_numero=8&api_key=${key}`
      );
      setNumberProcess("");
      setProcess(response.data);
      setLoading(false);
  
    } catch (err) {
      console.log(err);
      setNumberProcess("");
    }
   
    
  }

  console.log("Processos", process);

  return (
    <>
      <Header />
      <div className="p-4">
        <form onSubmit={handleSearchProcess} className="flex flex-col bg-white px-4 py-5 space-y-6 sm:p-6 shadow-md justify-center items-center">
          <h1 className="text-red-700 text-lg font-semibold">
            Busque aqui seu processo no tribunal
          </h1>
          <div className="flex items-center border-b-2 border-red-700 py-2">  
          <input
            type="text"
            value={numberProcess}
            placeholder="Digite o CNJ do processo..."
            onChange={(e) => setNumberProcess(e.target.value)}
            className="border-none mr-2 p-3 leading-tight focus:outline-none mt-2"
          />
          <button type="submit" className="bg-red-700 text-white rounded-md p-2">
          Buscar
          </button>
          </div>
        </form>
      </div>
      <div className="p-4">
      <div className="bg-white shadow-md rounded-s px-4 py-5">
      <Loading loading={loading} />
      <ResultProcess/>
      {/* {process && process?.map((process, index) => (
        <ResultProcess
          key={index}
          title={process.numero}
          subtitle={process.area}
          date={process.alteradoEm}
          details={process.classeNatureza}
          subject={process.assuntoExtra}
        />

      ))}  */}

      <TableProcess/>

      <TableMovement/>

      </div>
      </div>

     
    </>
  );
};

export default Search;
