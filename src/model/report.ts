import { Answer } from ".";

export interface Report {
  id?: number | null;
  loading: boolean;
  date?: Date | null;
  answers: Answer[];
  attachments: any;
  username: string;
  status: string;
}
