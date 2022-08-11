import { colors } from "..";

export const ErrorPopup = ({ message, setIsVisible }) => {
  const handleClose = () => {
    setIsVisible((prevStates) => ({ ...prevStates, error: false }));
  };
  return (
    <div onClick={handleClose} style={styles.layout}>
      <div onClick={(e) => e.stopPropagation()} style={styles.card}>
        <h2 style={styles.h2}> "Oops, Something Went Wrong" </h2>
        <p style={styles.p}>
          {message ||
            "undefined error, please contact the suppor and they will help :)"}{" "}
        </p>
        <button onClick={handleClose} style={styles.button}>
          close
        </button>
      </div>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    height: "100%",
    width: "100%",
    position: "fixed",
    background: "rgb(255,255,255,0.8)",
    top: 0,
    justifyContent: "space-evenly"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-evenly",
    height: "400px",
    maxWidth: "400px",
    margin: "auto",
    border: "1px solid #ccc",
    borderRadius: "14px",
    background: "white"
  },
  h2: { padding: "1em" },
  p: { padding: "0 2em" },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "3em"
  },
  button: {
    color: "#33FFFF",
    backgroundColor: colors.blue,
    borderRadius: "46px",
    border: "0",
    fontSize: ".9em",
    padding: "1em 2em",
    margin: "0 auto"
  }
};
