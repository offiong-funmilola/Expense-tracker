import { ReactNode } from "react";
import { budget } from "../../../utils/data";
import { Search, ListFilter} from 'lucide-react';
import Table from "@/components/table";



export default function BudgetDetailsPage() {
    const monthlyIncome:number = budget.income.reduce((acc, curr)=> {
        return acc + curr.amount
    }, 0)
    
    const totalExpenditure: number = budget.expenses.reduce((acc, curr) => acc + curr.amount, 0)
    return (
        <main className="w-full h-full flex flex-col gap-5 px-5">
            <section className="w-full h-[70%] grid grid-cols-3 gap-5">
                <div className="col-span-2 grid grid-rows-6 grid-cols-2 gap-5">
                    <div className="col-span-1 row-span-2 border border-gray-400 rounded-md flex flex-col items-center justify-center">
                        <h4 className="text-lg font-sans">Income</h4>
                        <h1 className="font-semibold text-xl font-sans">{monthlyIncome}</h1>
                    </div>
                    <div className="col-start-2 col-end-3 row-span-2 border border-gray-400 rounded-md flex flex-col items-center justify-center">
                        <h4 className="text-lg font-sans">Expneses</h4>
                        <h1 className="text-lg font-sans">{totalExpenditure}</h1>
                    </div>
                    <div className="col-span-2 row-start-3 row-end-7 border border-gray-400 rounded-md bg-orange-500"></div>
                </div>
                <div className="col-start-3 col-end-4 border border-gray-400 rounded-md bg-purple-600"></div>
            </section>
            <section className="w-full h-[30%] border border-gray-400 rounded-md">
                <div className="w-full h-[40%] flex items-center justify-between px-5 border-b border-gray-400">
                    <h4 className="font-sans text-lg">Recent Transaction</h4>
                    <div className="w-1/3 h-full flex items-center justify-end gap-3">
                        <div className="w-2/3 relative">
                            <Search className="absolute top-4 left-3" color='gray'/>
                            <input type='text' placeholder='Search' className="w-full px-10 py-4 bg-gray-100 rounded-md placeholder:text-lg"/>
                        </div>
                        <div className="w-28 relative">
                            <ListFilter className="absolute top-4 right-3" color='black' />
                            <input type='text' placeholder='Filter' className="w-full px-3 py-4 bg-gray-100 rounded-md placeholder:text-lgplaceholder:text-black"/>
                        </div>
                    </div> 
                </div>
                <div className="w-full h-[60%]">
                    <Table/>
                </div>
 
            </section>
        </main>
    );
  }