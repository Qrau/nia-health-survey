import { colors } from "..";
import avatar from "../../assets/avatar-placeholder.png";
export const UserCard = ({
  username,
  totalSurveys
}: {
  username: string;
  totalSurveys: number;
}) => {
  return (
    <div style={styles.main}>
      <img style={styles.img} src={avatar} alt="Avatar" />
      <h2 data-testid="title" style={styles.h2}>
        {username}
      </h2>
      <p> you have submitted {totalSurveys ? totalSurveys : 0} Surveys </p>
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "1em",
    border: "1px solid #ccc",
    margin: "2em auto",
    maxWidth: "20em"
  },
  img: {
    width: "4.5em",
    position: "relative",
    left: ".5em"
  },
  h2: {
    background: colors.blue,
    color: colors.white,
    padding: ".2em 1em"
  }
};
