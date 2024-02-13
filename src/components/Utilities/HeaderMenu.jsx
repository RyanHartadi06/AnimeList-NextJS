import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="p-8">
      <div className="text-center text-color-primary text-2xl">{title}</div>
    </div>
  );
};

export default HeaderMenu;
