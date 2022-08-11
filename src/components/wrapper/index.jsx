export const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
};
