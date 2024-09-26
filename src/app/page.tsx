import { Suspense } from "react";
import NewProductList from "./_components/NewProductList";
import ProductList from "./_components/ProductList";
import Loading from "./loading";


export default async function Home() {


  return (
    <>
      <Suspense fallback={<Loading/>}>
        <ProductList/>
      </Suspense>  
      <div className="p-8 m-4">
        <Suspense fallback={<Loading/>}>
          <NewProductList/>
        </Suspense>                              
      </div>            
    </>
  );
}

export type Product = {
  id: number;
  handle: string;
  availableForSale: boolean;
  isNew: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: {
    name: string;
    values: string[];
  }[];
  price: {
    amount: string;
    currencyCode: string;
  };
  images: string;
  seo: {
    title: string;
    description: string;
  };
  tags: string[];
  rating: number;
};
