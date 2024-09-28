'use server'

import { Product } from "./type/product";


export async function getProduct(){
  const res = await fetch("http://localhost:4000/products", {});
  const data: Product[] = await res.json();

  return { data };
}