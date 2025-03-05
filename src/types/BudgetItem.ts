import { Category } from "./CategoryEnum";

export interface expense {
    id: number;
    title: string;
    description?: string;
    amount: number;
    category:Category ;
    createdAt: Date;
    updatedAt: Date;
}
