enum QuestionType {
  flare_up,
  skin_health,
}

export interface Question {
  id: string;
  question: string;
  type: QuestionType;
  possible_answers: number[];
}
