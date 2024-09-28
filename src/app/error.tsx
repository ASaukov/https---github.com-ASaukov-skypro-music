"use client";

import { useEffect } from "react";

type ErrorProps = {
    error: string,
}

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Что то пошло не так!</h2>
      
    </div>
  );
}
