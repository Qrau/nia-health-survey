import React from 'react';

export const Wrapper = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};
