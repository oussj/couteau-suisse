import { useState } from "react";

function App() {
  const [count, setCount] = useState("0");
  const [text, setText] = useState ("");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const countAll = () =>{
    setCount(text.length)
  }


  return (
    <div>
      <h4>Collez votre texte ici:</h4>
      <textarea maxLength="10" cols="100" rows="18" onChange={inputHandler} />
      <div>
        <button onClick={countAll} color="blue">Comptez</button>
        <h6>{count} characters </h6>      

      </div>    

    </div>

  );
}

export default App;