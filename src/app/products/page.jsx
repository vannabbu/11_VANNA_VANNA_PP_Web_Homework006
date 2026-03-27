
import React from 'react'
import Link from 'next/link';

export default async function Page() {
  const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/products");
  if (!res.ok) return <div>Failed to load products</div>;
  const result = await res.json();
  const products = result.payload;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-slate-900">List of All Product</h2>

      <div className='flex flex-wrap gap-6'>
        {products.map((product) => (
          <div key={product.productId} className="flex flex-col w-[320px] bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
    
            <div className="relative h-[280px] bg-[#1a1c2e] m-2 rounded-[24px] overflow-hidden">
              <img 
                className="w-full h-full object-contain p-4" 
                src={product.imageUrl || "/api/placeholder/300/300"} 
                alt={product.productName} 
              />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold text-white tracking-widest uppercase">New</span>
              </div>
              <div className="absolute top-8 left-4 mt-1 flex items-center bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-[10px] font-bold ml-1 text-slate-800">4.9</span>
              </div>
            </div>
            <div className="p-6 pt-2">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  {product.category || "Flagship Series"}
                </span>
                <span className="text-xl font-black text-slate-900">
                  ${product.price?.toLocaleString() || "0"}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 truncate mb-2">
                {product.productName || "Product Name"}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-6">
                {product.description || "Engineered for excellence, this flagship device brings tomorrow's tech to your..."}
              </p>

              <Link 
                href={`/products/${product.productId}`} 
                className="w-full py-4 bg-[#1a1c2e] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                >
                View Product
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}