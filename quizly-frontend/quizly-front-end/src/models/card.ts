import { Lecture } from "./lecture";

export type Card = {
    id?: string;
    level: string;
    question: string;
    answer: string;
    lecture?: Lecture;
}

