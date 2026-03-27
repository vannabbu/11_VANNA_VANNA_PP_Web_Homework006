import React from 'react'
import Link from 'next/link';

export default async function Page() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers");
  if (!res.ok) return <div className="p-8">Failed to load customers</div>;
  const result = await res.json();
  const customers = result.payload;
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">List of All Customer</h2>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search customers..." 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-white"
          />
        </div>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="px-8 py-5 text-sm font-bold text-slate-800">Customer Name</th>
              <th className="px-8 py-5 text-sm font-bold text-slate-800">Birthdate</th>
              <th className="px-8 py-5 text-sm font-bold text-slate-800 text-center">Amount Spent</th>
              <th className="px-8 py-5 text-sm font-bold text-slate-800 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerId} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="font-bold text-slate-900">{customer.firstName} {customer.lastName}</div>
                  <div className="text-[10px] text-slate-400 font-mono tracking-tighter">ID: {customer.customerId?.substring(0, 8)}...</div>
                </td>
                <td className="px-8 py-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {customer.birthDate || "2000-01-01"}
                  </span>
                </td>
                <td className="px-8 py-4 text-center">
                  <span className="inline-block px-3 py-1 bg-green-50 text-green-600 font-black rounded-full text-base">
                    ${customer.moneySpent || 0}
                  </span>
                </td>
                <td className="px-8 py-4 text-center">
                  <Link 
                    href={`/customers/${customer.customerId}`} 
                    className="w-full py-4 bg-[white] border text-black-500 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-300 transition-colors"
                    >
                    View profile
                   
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}