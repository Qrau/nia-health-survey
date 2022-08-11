import { colors } from "..";

export const Question = ({ question }: { question: string }) => {
  return <h2 style={{ color: colors.darkBlue }}> {question} </h2>;
};
