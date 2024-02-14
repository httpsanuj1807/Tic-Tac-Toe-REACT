import { useState } from "react";

function Player({ initialName, symbol, isActive, onNameChange}) {

  const [isEditing, setisEditing] = useState(false);
  const [currentPlayerName, setPlayername] = useState(initialName);

  function handleEditClick() {
    setisEditing( prevValue => !prevValue );
    if(isEditing){
      onNameChange(symbol,currentPlayerName);
    }
  }

  function inputChangeHandler(event){
    const value = event.target.value;
    setPlayername(() => value);
  }
  
  // not editing/ default
  let playerName = <span className="player-name">{currentPlayerName}</span>;
  let buttonCaption ="Edit";
 
  if(isEditing){
    playerName = <input onChange={inputChangeHandler} type="text" required value={currentPlayerName}/>
    buttonCaption ="Save";
  }
  return (
    <li className={ (isActive) ?  "active" : "undefined" }>
      <span className="player">
       {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}

export default Player;
