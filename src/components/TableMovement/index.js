import React, { useState } from "react";

const TableMovement = (props) => {
  const [page, setPage] = useState(0);
  const pageSize = 10;

  function previousPage() {
    page--;
    if (page <= 0) {
      page = 0;
    }
    setPage(page);
  }

  function nextPage() {
    page++;
    if (page * pageSize >= props.data.length) {
      page--;
    }
    setPage(page);
  }

  return (
    <>
      <div className="flex flex-col mb-16">
        <div className="overflow-x-auto lg:-mx-4 md:-mx-2 min-w-full min-h-full">
          <div className="py-4 md:py-2 inline-block min-w-full md:px-2 lg:px-4">
            <div className="mb-4">
              <span className="text-lg font-semibold">Movimentações</span>
            </div>
            <div className="overflow-hidden rounded-lg">
              <table className="min-w-full text-center ">
                <thead className="border-b bg-red-800 md:px-2 lg:px-4">
                  <tr>
                    <th
                      scope="col"
                      className="text-md font-medium text-white px-6 py-4"
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Tipos
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Texto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data
                    .slice(page * pageSize, page * pageSize + pageSize)
                    .map((row, index) => {
                      return (
                        <tr key={index} className="bg-white border-b">
                          {row.slice(0, 3).map((item, i) => {
                            return (
                              <td
                                key={i}
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                {item}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="rounded-lg border border-red-700 text-red-700 block  font-bold py-2 px-4 mr-2 items-center hover:bg-red-700 hover:text-white"
            onClick={previousPage}
          >
            Anterior
          </button>
          <button
            className="border border-red-700 bg-red-700 text-white block rounded-lg font-bold py-2 px-4 ml-2  items-center"
            onClick={nextPage}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
};

export default TableMovement;
