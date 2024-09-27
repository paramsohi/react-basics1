import { useEffect, useState } from "react";

export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((count) => count + 1);
    console.log(data);
  }

  useEffect(function () {
    getadvice();
  }, []);
  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getadvice}>Click me</button>
      <Message />
    </div>
  );

  function Message() {
    return <p>{count} advices fetched</p>;
  }
}
