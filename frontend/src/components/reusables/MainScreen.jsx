import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="">
      <div>
        {title && (
          <>
            <h1 className="text-8xl">{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;
