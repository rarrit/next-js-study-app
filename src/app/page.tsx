// "use client";

import ClientExample from "@/component/ClientExample";

// SSG 방식 - next 는 아무것도 하지 않았다면 SSG 방식임


export default async function Home() {
  // 유저와 상호 작용 = Client, 나머지는 Server  
  // 둘 다 사용하려면..? => 서버사용 컴포넌트에서 클라이언트 로직 없애셈
  // window.alert("서버입니다만? "); node js에서 실행되어 window 객체가 없음
  // console.log("클라이언트에서 실행될까?"); 근데 서버에서도 실행됨, useEffect를 사용하면 클라이언트에서 실행됨 
  
  // const os = require("os");
  // console.log(os.hostname());

  console.log("안녕, 난 서버 컴포넌트야");
  console.log("Next JS는 서버(LocalHost)에서 실행이 된다. ");

  // fetch API 사용
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 3, // ISR - 3초마다
    }
  });
  const data: Product[] = await res.json();
  console.log("render");

  return (
    <>
      <ClientExample/>
      <div className="p-8 m-4">
        {data.map((product) => (
          <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
            <img
              className="rounded-smr"
              width={150}
              height={150}
              src={product.images}
              alt={product.title}
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="mt-4 text-2xl">{product.price.amount}$</p>
              </div>
            </div>
          </div>
        ))}
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
