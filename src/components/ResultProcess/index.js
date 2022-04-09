import React from "react";

  const Process = ({title, subtitle, date, details, subject }) => {
  return (
    <>
        <div className="flex flex-col ">
          <span className="text-red-700 uppercase font-bold">
            (numero){title}
          </span>
          <span className="text-gray-500 my-2">
            (tribunal)(uf)(comarca){subtitle}
          </span>
          <span className="text-gray-500 ">
            Última alteração:(alteradoEm){date}
          </span>
        </div>
        <div className="flex flex-col my-4">
          <span className="text-sm font-bold text-gray-800">
            Detalhes do processo
          </span>
          <div className=" flex flex-col mt-4">
            <span className="text-sm font-sm text-gray-400">
              (classes){details}CIVEL CUMPRIMENTO DE SENTENCA - DIREITO DO CONSUMIDOR /
            </span>
            <span className="text-sm font-sm text-gray-400">
              (assuntoExtra){subject}RESPONSABILIDADE DO FORNECEDOR / INDENIZAÇÃO POR
              DANO MORAL /
            </span>
          </div>
        </div>
     
    </>
     
  );
};

export default Process;
