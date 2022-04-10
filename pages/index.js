import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import Header from "../src/components/Header";
import ResultProcess from "../src/components/ResultProcess";
import TableProcess from "../src/components/TableProcess";
import TableMovement from "../src/components/TableMovement";
import Loading from "../src/components/Loading";
import { formatCnj } from "../src/utils/maskCnj";
import Modal from "../src/components/Modal";

const Search = () => {
  const [numberProcess, setNumberProcess] = useState("");
  const [process, setProcess] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function handleSearchProcess(event) {
    event.preventDefault();
    setLoading(true);
    const key = "46cf74aa-2812-4eab-a1a5-2afa654d94d6";
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
      setLoading(false);
      setShowModal(true);
    }
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <form
          onSubmit={handleSearchProcess}
          className="flex flex-col bg-white px-4 py-5 space-y-6 sm:p-6 shadow-md justify-center items-center"
        >
          <h1 className="text-red-700 text-lg font-semibold">
            Busque aqui seu processo no tribunal
          </h1>
          <div className="flex items-center border-b-2 border-red-700 py-2">
            <input
              type="text"
              value={numberProcess}
              placeholder="Digite o CNJ do processo..."
              onChange={(e) => setNumberProcess(formatCnj(e.target.value))}
              className="border-none mr-2 p-3 leading-tight focus:outline-none mt-2"
              required
            />
            <button
              type="submit"
              className="bg-red-700 text-white rounded-md p-2"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>

      <Loading loading={loading} />

      {process.numero && (
        <div className="p-4">
          <div className="bg-white shadow-md rounded-s px-4 py-5">
            <ResultProcess
              title={`${process.tribunal} - ${process.numero}`}
              titleSecondary={process.foro}
              subtitle={process.area}
              dateCreated={format(new Date(process.criadoEm), "dd/MM/yyyy")}
              dateChanged={format(new Date(process.alteradoEm), "dd/MM/yyyy")}
              details={process.classes}
              subject={process.classeNatureza}
            />

            {showModal && <Modal closeModal={() => setShowModal(false)} />}

            <TableProcess data={process.processosRelacionados || []} />

            <TableMovement data={process.movs || []} />
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
