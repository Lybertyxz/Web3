import React, { ReactNode } from "react";

interface DiamondShapeProps {
  children: ReactNode;
}

const DiamondComponent: React.FC<DiamondShapeProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="diamond-container">
        <div className="diamond-shape">
          <div className="diamond-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DiamondComponent;
