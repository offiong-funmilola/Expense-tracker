
import { budgets } from "@/utils/data";
interface Params {
    budgetId: number;
}

export default async function BudgetDetailsPage({
    params,
  }: {
    params: Promise<{ budgetId: number}>
  }) {
    //fetching data
    // const budget = await fetch('/budegt.Id')
    const budgetId = (await params).budgetId
    
    const budget = budgets[budgetId]
    const totalIncome: number = budget.income.reduce((acc, curr) => acc + curr.amount, 0)
    const totalExpenditure: number = budget.expenses.reduce((acc, curr) => acc + curr.amount, 0)
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
                                {budget.income.map((item) => (
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
                                {budget.expenses.map((item) => (
                                <tbody key={item.id} className="w-full text-center">
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.amount}</td>
                                        <td>{`${item.createdAt.getDate()} / ${item.createdAt.getMonth()} / ${item.createdAt.getFullYear()}`}</td>
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

 