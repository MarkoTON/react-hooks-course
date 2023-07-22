import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0]);
        console.log("API WAS CALLED");
        console.log(data);
      });
  }, []);

  return (
    <div>
      Hello World
      <p>
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.email}</div>
        <div>{data.body}</div>
      </p>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
