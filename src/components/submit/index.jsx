import { colors } from "..";

export const Submit = ({ onClick }) => {
  return (
    <button
      style={{
        color: "#33FFFF",
        backgroundColor: colors.blue,
        borderRadius: "46px",
        border: "0",
        fontSize: ".9em",
        padding: "1em 2em",
        margin: "4em auto"
      }}
      onClick={onClick}
    >
      submit
    </button>
  );
};
