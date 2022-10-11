import React from "react";

const Option = ({ option , result}) => {
  return (
    <div className="p-3 border text-sm cursor-pointer hover:bg-slate-300">
      <li onClick={()=>result(option)}>{option}</li>
    </div>
  );
};

export default Option;
