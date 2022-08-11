import { colors } from "..";

const styles = {
  h1: {
    background: colors.blue,
    color: colors.white,
    padding: "1em"
  }
};
export const Title = ({ children }) => {
  return (
    <h1 data-testid="title" style={styles.h1}>
      {children}
    </h1>
  );
};
