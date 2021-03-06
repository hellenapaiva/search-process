import React from "react";
import { format } from 'date-fns'

const TableProcess = (props) => {
  return (
    <>
      <div className="mt-6 ">
        <span className="text-lg font-semibold">Processos Relacionados</span>
      </div>
      <div className="w-full flex justify-center my-4 py-2">
          <div  className="lg:flex items-center w-full">
        {props.data.length === 0 && (
            <p className="italic">Nenhum processo relacionado foi encontrado</p>
        )}
        {props.data.map((item, index) => {
          return (
              <div key={index} className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-100 p-6 shadow rounded">
                <div className="flex items-center border-b border-gray-300 pb-6">
                  <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full">
                      <p className="focus:outline-none text-lg font-medium leading-5 text-gray-800">
                        {item.numero}
                      </p>
                      <p className="focus:outline-none text-sm leading-normal pt-2 text-gray-500">
                        {format(new Date(item.distribuicao_data), 'dd/MM/yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                    {item.natureza}
                  </p>
                  <div className="focus:outline-none flex">
                    <div className="py-2 px-10 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                      {item.tribunal}
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default TableProcess;
