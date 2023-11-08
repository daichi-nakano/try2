import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("daichi-nakano");
  const ids = ["daichi-naknao", "gaearon", "aws", "google", "facebook"];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.login);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div className="App">
      <Article title={"ハロー"} content={"ヤッホ"} />
      <TextInput />
      <Counter />
      <p>
        {id}の、Github上の名前は{name}です。
      </p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
