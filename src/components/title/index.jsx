import { colors } from "..";

export const Title = ({ children }) => {
  return (
    <h1 data-testid="title" style={styles.h1}>
      {children}
    </h1>
  );
};

const styles = {
  h1: {
    background: colors.blue,
    color: colors.white,
    padding: "1em",
  },
};
