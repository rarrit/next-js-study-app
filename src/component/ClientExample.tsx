"use client";

import { useEffect } from "react";

const ClientExample = () => {
  useEffect(() => {
    console.log("난 클라이언트 컴포넌트!");
  }, [])
  return (
    <div>
      클라이언트 컴포넌트입니다!
    </div>
  )
}

export default ClientExample
