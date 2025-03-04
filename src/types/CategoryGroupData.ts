import { CategoryData } from "./CategoryData";

export interface CategoryGroupData {
    id: string,
    name: string,
    hidden: boolean,
    deleted: boolean,
    categories: Array<CategoryData>,
}