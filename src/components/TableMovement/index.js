import React from 'react'

const TableMovement = () => {
  return (
    <>
     
       <div className="flex flex-col mb-16">
          <div className="overflow-x-auto lg:-mx-4 md:-mx-2 min-w-full min-h-full">
            <div className="py-4 md:py-2 inline-block min-w-full md:px-2 lg:px-4">
              <div className="mb-4">
                <span className="text-lg font-semibold">
                  (movs)Movimentações
                </span>
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
       
    </>
  )
}

export default TableMovement