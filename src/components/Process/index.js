import React from "react";

const Process = ({ title, area }) => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-s px-4 py-5">
        <div classNamee="flex flex-col justify-center">
          <span className="text-red-700 uppercase font-bold">{title}</span>
          <span className="text-gray-500 my-4">{area}</span>
        </div>
        <div className="flex flex-col my-4">
          <span className="text-sm font-bold text-gray-800">
            Detalhes do processo
          </span>
          <div className=" flex flex-col mt-4">
            <span className="text-sm font-sm text-gray-400">
              CIVEL CUMPRIMENTO DE SENTENCA - DIREITO DO CONSUMIDOR /
            </span>
            <span className="text-sm font-sm text-gray-400">
              RESPONSABILIDADE DO FORNECEDOR / INDENIZAÇÃO POR DANO MORAL /
            </span>
            <span className="text-sm font-sm text-gray-400">
              INCLUSÃO INDEVIDA EM CADASTRO DE INADIMPLENTE
            </span>
          </div>
        </div>
       {/* Initial Table */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="mb-4">
                <span className="text-lg font-semibold">Movimentações</span>
              </div>
              <div className="rounded-md">
                <table className="min-w-full text-center ">
                  <thead className="border-b bg-red-700">
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
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        07/03/2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        INTIMACAO
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Intimação (1862925523) - Expedição eletrônica
                        (07/03/2022 18:47:15): Parte: TELEFONICA BRASIL S.A.
                        Prazo: sem prazo Fechado: NÃO
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        07/03/2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        PROFERIDO
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Proferido despacho de mero expediente
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        07/03/2022
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                        CLASSE
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Classe Processual [CÍVEL] CUMPRIMENTO DE SENTENÇA (156)
                        alterada para [CÍVEL] CUMPRIMENTO DE SENTENÇA (156)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Finally Table */}
      </div>
    </div>
  );
};

export default Process;
