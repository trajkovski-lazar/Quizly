import { Lecture } from "./lecture";

export type Category = {
    id: string;
    name: string;
    lectures: Lecture[];
}