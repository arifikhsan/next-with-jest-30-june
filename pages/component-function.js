import {useState} from "react";

export default function ComponentFunction() {
  const [name, setName] = useState("");

  const fillName = () => {
    setName("octocat");
  }

  const removeName = () => {
    setName("");
  }

  return (
    <div>
      <p>{name}</p>
      <button onClick={fillName}>Fill name</button>
      <button onClick={removeName}>Remove name</button>
    </div>
  );
}