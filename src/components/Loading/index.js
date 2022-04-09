import React from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const Loading = (props) => {
  if (!props.loading) {
    return <div></div>;
  }
  return (
    <div className=" flex justify-center items-center animate-spin  border-b-transparent">
      <CgSpinnerAlt loading={props.loading} size={60} color="#a11d29" className="w-full w-24 h-24"/>
    </div>
  );
};

export default Loading;
