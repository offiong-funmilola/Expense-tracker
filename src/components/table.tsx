import { budget } from "@/utils/data"
import {ArrowDownUp } from 'lucide-react';


export default function Table() {
   
  return (
    <table className='w-full h-full'>
        <thead className="w-full h-1/2">
            <tr className="w-full h-full border-b border-gray-400 flex">
                <th className="w-1/4 h-full flex items-center gap-4 px-3">
                    <span>Transaction</span>
                    <ArrowDownUp />
                </th>
                <th className="w-1/4 h-full flex items-center gap-4 px-3">
                    <span>Transaction</span>
                    <ArrowDownUp />
                </th>
                <th className="w-1/4 h-full flex items-center gap-4 px-3">
                    <span>Transaction</span>
                    <ArrowDownUp />
                </th>
                <th className="w-1/4 h-full flex items-center gap-4 px-3">
                    <span>Transaction</span>
                    <ArrowDownUp />
                </th>
            </tr>
        </thead>
        <tbody className="w-full h-1/2">
            <tr className="w-full h-full">
                <td className="w-1/4">Transaction</td>
                <td className="w-1/4">Wed 12:24:42 AM</td>
                <td className="w-1/4">Amount</td>
                <td className="w-1/4">Status</td>
            </tr>
        </tbody>
    </table>
  )
}

