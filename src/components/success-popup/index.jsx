import { Link } from "react-router-dom";
import { colors } from "..";

export const SuccessPopup = ({ setIsVisible }) => {
  const handleClose = () => {
    setIsVisible((prevStates) => ({ ...prevStates, success: false }));
  };

  const successText =
    "thank you ! you have successfully submitted your survey, you can refill another survey or you can return to the homepage";

  return (
    <div onClick={handleClose} style={styles.layout}>
      <div onClick={(e) => e.stopPropagation()} style={styles.card}>
        <h2 style={styles.h2}> " Success :) " </h2>
        <p style={styles.p}>{successText}</p>
        <div style={styles.wrapper}>
          <Link style={styles.Link} to="/">
            <span onClick={handleClose}> homepage </span>
          </Link>
          <button onClick={handleClose} style={styles.button}>
            refill survey
          </button>
        </div>
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
  Link: {
    color: "#33FFFF",
    backgroundColor: colors.blue,
    borderRadius: "46px",
    textDecoration: "none",
    fontSize: ".9em",
    padding: "1em"
  },
  button: {
    color: "#33FFFF",
    backgroundColor: colors.blue,
    borderRadius: "46px",
    border: "0",
    fontSize: ".9em",
    padding: "1em"
  }
};
