import { CategoryGroupData } from "./CategoryGroupData"

export interface BudgetData {
    data: BudgetDataContent,
}

interface BudgetDataContent {
    category_groups: Array<CategoryGroupData>,
    server_knowledge: number,
}