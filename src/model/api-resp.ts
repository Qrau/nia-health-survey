import { Question } from ".";

export interface ApiResp {
  label: string;
  status: string;
  start_date?: Date | null;
  end_date: Date | null;
  questions: Question[];
}
