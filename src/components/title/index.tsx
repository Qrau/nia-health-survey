import { colors } from "..";

export const Title = ({ title }: { title: string }) => {
  return (
    <h1 data-testid="title" style={styles.h1}>
      {title}
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
