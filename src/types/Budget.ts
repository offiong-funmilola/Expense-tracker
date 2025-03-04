import { expense } from "./BudgetItem";
import { Income } from "./Income";

export interface Budget {
    id: string;
    userId: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    month: string;
    year: string;
    income: Array<Income>
    expenses: Array<expense>;
}

export interface CreateBudget {
    month: string;
    year: string;
    expenses: Array<expense>;
    description: string | null;
}
