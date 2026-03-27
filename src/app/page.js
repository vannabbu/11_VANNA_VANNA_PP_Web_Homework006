import Image from "next/image";
import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";
export default function Home() {
  return (
    <>
    <div className="flex h-[50%] ">
      <div className="m-10">
        <ProductHomepageCardComponent/>
      </div>
      <div className="m-10">
        <CustomerHomepageCardComponent/>
      </div>
    </div>
    </>
  );
}
