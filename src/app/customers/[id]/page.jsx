
import Link from "next/link";
import { User, Calendar, DollarSign, Fingerprint, ArrowLeft } from "lucide-react";

export default async function CustomerDetailPage({ params }) {
  const { id } = await params;


  const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/customers/${id}`);
  const result = await res.json();
  const customer = result.payload;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        
     
        <div className="md:w-1/3 bg-gray-50/50 p-10 flex flex-col items-center justify-center border-r border-gray-100">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-md mb-6 overflow-hidden">
          
           
          </div>
          <h2 className="text-2xl font-black text-slate-900 text-center">
            {customer.firstName} {customer.lastName} 
          </h2>
        </div>
        
        <div className="md:w-2/3 p-10 md:p-14">
          <Link href="/customers" className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 hover:text-black">
            <ArrowLeft size={14} /> Back to Customer Table
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
           
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</p>
              <div className="flex items-center gap-2 font-bold text-slate-800">
                
                <span>  {customer.firstName} {customer.lastName} </span>
              </div>
            </div>

            
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Spent</p>
              <div className="flex items-center gap-2 font-black text-slate-900 text-xl">
                <div className="p-1 bg-green-100 rounded text-green-600">
                
                </div>
                <span>{customer.moneySpent}</span>
              </div>
            </div>

          
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase  mb-2">Birthdate</p>
              <div className="flex items-center gap-2 font-bold text-slate-800">
               
                <span>{customer.birthDate}</span> 
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase  mb-2">Account ID</p>
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <p className="text-[10px] text-gray-400 break-all font-mono">
                  {id}
                </p>
              </div>
            </div>
          </div>
  
          <div className="flex gap-4">
            <button className="flex-1 bg-[#1a1c2e] text-white py-4 rounded-2xl font-bold hover:bg-black transition-all">
              Edit Profile
            </button>
            <button className="flex-1 bg-red-50 text-red-500 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all border border-red-100">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}