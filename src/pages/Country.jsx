import { useEffect, useTransition } from "react";

export const Country = () => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {}, []);

  if (isPending) return <div>Loading...</div>;

  return <h1>Country Page</h1>;
};