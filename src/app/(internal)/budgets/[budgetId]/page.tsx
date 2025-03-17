import NotFound from "@/components/error";
// import { BudgetData } from "@/types/BudgetData";
// import { CategoryData } from "@/types/CategoryData";
// import { CategoryGroupData } from "@/types/CategoryGroupData";
import { ReactNode } from "react";
import { PrismaClient } from '@prisma/client';
    
//import { budgets } from "@/utils/data";

//import { Budget } from "@/types/Budget";

interface Params {
    budgetId: number;
}

export default async function BudgetDetailsPage({
    params
}: { params: Params }): Promise<ReactNode> {
    const budgetId = (await params).budgetId
    const prisma = new PrismaClient()

    //fetching data
    const budget = await prisma.budget.findUnique({
        where: {
         id: Number(budgetId)
        }
    })

    const incomes = await prisma.income.findMany({
        where: {
            budgetId: Number(budgetId)
        }
        
    })

    const expenses = await prisma.expense.findMany({
        where: {
            budgetId: Number(budgetId)
        }
        
    })
    

     //mock budget data 
    // const data = await fetch(`https://api.ynab.com/v1/budgets/${budgetId}/categories`, {
    //     headers: {
    //       Authorization: `Bearer ${process.env.API_KEY}`,
    //     }})
    // const budget: BudgetData = await data.json()
    // console.log(budget)

    // const allCategories = budget.data.category_groups.reduce(
    //     (acc: Array<CategoryData>, current: CategoryGroupData) => [...acc, ...current.categories], 
    // [])


    if (!budget) {
        return <NotFound />
    }
    const totalIncome: number = incomes.reduce((acc, curr) => acc + curr.amount, 0)
    const totalExpenditure: number = expenses.reduce((acc, curr) => acc + curr.amount, 0)
    return (
        <main className="w-full h-full flex item-center justify-center">
            <div className="w-[75%] h-[98%] border border-gray-400 p-10">
                <h1 className="text-center font-bold text-2xl">Budget details for the month of {budget.month}</h1>
                <section className="w-full">
                    <h4 className="font-semibold text-xl font-sans mb-2">Source of Income</h4>
                    <div className="w-full">
                        <table className="w-1/4">
                                <thead className="w-1/2">
                                    <tr className="w-full text-lg">
                                        <th>Source</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                {incomes.map((item) => (
                                <tbody key={item.id} className="w-1/2">
                                    <tr className="w-full text-center">
                                        <td>{item.source}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                </tbody>
                                ))}
                                <tfoot className="w-1/2">
                                    <tr className="w-full text-center">
                                        <th scope='row'>Total</th>
                                        <td >{totalIncome}</td>
                                    </tr>
                                </tfoot>    
                        </table>    
                    </div>
                </section>
                <section className="w-full">
                    <h4 className="font-semibold text-xl font-sans mb-2 mt-4">Expenditure details for the month</h4>
                    <div className="w-full">
                        <table className="w-full">
                            <thead className="w-full">
                                <tr className="text-lg">
                                    <th>Items</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            {expenses.map((item) => (
                            <tbody key={item.id} className="w-full text-center">
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.createdAt.toDateString()}</td>
                                </tr>
                            </tbody>
                            ))}
                            <tfoot className="w-full">
                                <tr className="">
                                    <th scope='row' colSpan={2} className="text-center text-lg">Total Expenditure</th>
                                    <td className="text-center font-semibold">{totalExpenditure}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
           </div>
        </main>
    );
  }

 