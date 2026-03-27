// src/app/products/[id]/page.jsx
import Link from "next/link";

export default async function SimpleProductPage({ params }) {
  const { id } = await params;
  
  
  const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/products/${id}`);
  const result = await res.json();
  const product = result.payload;

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      
   
      <div className="w-full max-w-4xl mb-6">
        <Link href="/products" className="text-sm text-gray-500 hover:text-black">
          ← Back to List
        </Link>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 border rounded-3xl p-6 shadow-sm">
        
     
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 rounded-2xl p-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

      
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-blue-500 font-semibold text-xs mb-2 uppercase">
            {product.category || "Product Detail"}
          </p>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-gray-800 mb-6">
            ${product.price}
          </p>

          <p className="text-gray-500 mb-8 leading-relaxed">
            {product.description || "No description available for this item."}
          </p>
          <div className="flex border m-3 w-[100px] rounded-2xl ">
            <button className="hover:bg-white p-2 rounded-xl transition-colors text-slate-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" />
      </svg>
                </button>
                <span className=" font-black text-slate-900 text-lg">
                1
                </span>
                <button className="p-2 hover:bg-white rounded-xl transition-colors text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                </svg>
                </button>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800">
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}