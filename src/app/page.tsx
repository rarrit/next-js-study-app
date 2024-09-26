// "use client";

import ClientExample from "@/component/ClientExample";

export default function Home() {
  // 유저와 상호 작용 = Client, 나머지는 Server  
  // 둘 다 사용하려면..? => 서버사용 컴포넌트에서 클라이언트 로직 없애셈
  // window.alert("서버입니다만? "); node js에서 실행되어 window 객체가 없음
  // console.log("클라이언트에서 실행될까?"); 근데 서버에서도 실행됨, useEffect를 사용하면 클라이언트에서 실행됨 
  
  // const os = require("os");
  // console.log(os.hostname());

  console.log("안녕, 난 서버 컴포넌트야");
  console.log("Next JS는 서버(LocalHost)에서 실행이 된다. ");
  return (
    <>
      <ClientExample/>
      <h1>Next JS 입니당.</h1>
    </>
  );
}
