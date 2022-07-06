import {useEffect, useState} from "react";

export default function ComponentInitialRender() {
  const [name, setName] = useState("");

  const fillName = () => {
    setName("octocat");
  }

  useEffect(() => {
    fillName();
  }, []);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}