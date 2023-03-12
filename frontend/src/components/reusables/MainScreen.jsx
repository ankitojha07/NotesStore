import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="container md:mx-auto">
      <div>
        {title && (
          <>
            <h1 className="text-8xl mt-14">{title}</h1>
            <hr className="mt-10" />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;
