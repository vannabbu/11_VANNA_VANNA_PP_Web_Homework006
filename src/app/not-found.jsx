// src/app/not-found.js
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full text-center relative">
        
     
        <div className="absolute top-0 left-0 right-0 z-0 select-none">
          <h1 className="text-[200px] font-black text-gray-100/70 tracking-tighter leading-none opacity-30">
            404
          </h1>
        </div>

      
        <div className="relative z-10 pt-16"> 
          
      
          <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-8 leading-tight">
            Oops! Page not found.
          </h2>

        
          <p className="text-gray-500 max-w-lg mx-auto mb-12 leading-relaxed text-base">
            The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.worry, our
            products are still here!
          </p>

       
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
            
            
            <Link 
              href="/" 
              className="flex items-center gap-2.5 px-8 py-3.5 bg-[#3c5aff] text-white rounded-full font-bold text-sm shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 w-full sm:w-auto"
            >
              <Home  />
              Back to Homepage
            </Link>

           
            <Link 
              href="/products" 
              className="flex items-center gap-2.5 px-8 py-3.5 bg-white text-slate-700 border border-gray-100 rounded-full font-bold text-sm hover:border-gray-200 transition-all active:scale-95 w-full sm:w-auto"
            >
              <Search size={18} className="text-gray-400" />
              Browse Products
            </Link>
          </div>

         
          <p className="text-xs text-gray-400">
            Need help? {' '}
            <Link href="/support" className="text-blue-600 font-semibold hover:underline">
              Contact Support
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}