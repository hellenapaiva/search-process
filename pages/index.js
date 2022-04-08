import React, { useState } from "react";
import axios from "axios";

import Header from "../src/components/Header";
import Process from "../src/components/process";

const Search = () => {
  const [numberProcess, setNumberProcess] = useState("");
  const [process, setProcess] = useState();

  async function handleSearchProcess(event) {
    event.preventDefault();
    const key = "bdbd1c2a-28f2-428e-b83a-ef42fb1c4018";
    try {
      const response = await axios.get(
        `/${numberProcess}?tipo_numero=8&api_key=${key}`
      );
      setNumberProcess("");
      setProcess(response.data);
      console.log("Response", response.data);
    } catch (err) {
      console.log(err);
      setNumberProcess("");
    }
    
  }

  console.log("Retorna o q?", process);

  return (
    <>
      <Header />
      <div className="p-4">
        <form onSubmit={handleSearchProcess} className="flex flex-col bg-white px-4 py-5 space-y-6 sm:p-6 shadow-md justify-center items-center">
          <h1 className="text-red-700 text-lg font-semibold">
            Busque aqui seu processo no Tribunal
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
      {/* { process && process?.map((process, index) => (
        <Process
          key={index}
          title={process.numero}
          subTitle={process.area}
        />

      ))} */}

      <Process/>
     
    </>
  );
};

export default Search;
