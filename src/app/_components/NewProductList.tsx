import { Product } from "../page";
import Image from "next/image";


const NewProductList = async () => {
  // loading 처리
  
  const res = await fetch("http://localhost:4001/products", {
    cache: "no-store",
  });
  const data: Product[] = await res.json();
  console.log("data===>", data);
  const newData = data.filter((p) => !p.isNew);

  throw new Error("오류!");
  

  return (
    <div className="flex gap-2 oveflow-auto ">
      {newData.map((product) => (
        <div className="flex" key={product.id}>
          <Image
            className="rounded-sm object-scale-down"
            width={80}
            src={product.images}
            alt={product.title}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-md font-medium">{product.title}</h2>
              <p className="mt-4 font-thin">{product.price.amount}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProductList;