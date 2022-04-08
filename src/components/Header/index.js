import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-neutral-300 min-h-full h-20 m-4 shadow-md flex justify-center items-center">
        <img className="text-white text-sm max-w-md" width="180px"  src="/logo.png"/>
      </div>
    </div>
  );
}

export default Header;
