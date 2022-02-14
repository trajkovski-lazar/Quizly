import { Card } from "./card";
import { Category } from "./category";

export type Lecture = {
    id: string;
    name: string;
    category: Category;
    cards: Card[];
}