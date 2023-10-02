import { useState } from "react";


function App() {
  const [count, setCount] = useState("0");
  const [text, setText] = useState ("");
  const [spaces, setSpaces] = useState(false); 
  const [numbers, setNumbers] = useState(false); 


  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const countAll = () =>{

    let checkText = text;
    if (!spaces){
           checkText = checkText.replace(/\s/g, "");

    }
    if(!numbers){
           checkText = checkText.replace(/\d/g, "");

    }
    setCount(checkText.length)
  }

  const handleSpacesCheckbox = () => {
    setSpaces(!spaces);
  }

  const handleNumbersCheckbox = () => {
    setNumbers(!numbers);
  }

  return (      
  <div>

    <div>
      <h4>Collez votre texte ici:</h4>
      <textarea maxLength="20" cols="100" rows="18" onChange={inputHandler} />
      <div>

        <input type="checkbox" checked={spaces} onChange={handleSpacesCheckbox}/>
        <label>spaces</label>
        <input type="checkbox" checked={numbers} onChange={handleNumbersCheckbox}/>
        <label>numbers</label>
        <button onClick={countAll} color="blue">Comptez</button>
        <h6>{count} characters </h6>      

      </div>    

    </div>
</div>
  );
}

export default App;
