import { useCallback, useState, useEffect, useRef } from "react"

export default function App() {
  const [length, setLength] = useState(8); 
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setChracterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRefrence = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabvdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789";
    };

    if(characterAllowed){
      str += "!@#$%^&*-_+=[]{}~`";
    };

    for(let start =1; start <=length; start++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length,numberAllowed,characterAllowed,setPassword]);

  const copyToClipBord = useCallback(()=>{
    passwordRefrence.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700">
    <h1 className="text-center text-lg py-2">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRefrence}      
        />
        <button className="px-2 bg-blue-600 text-white outline-none hover:bg-blue-300"
        onClick={copyToClipBord}
        >copy</button>

      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={8}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>Length : {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} 
          />
          <label className="mx-2">Number</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={characterAllowed}
          id="charInput"
          onChange={()=>{
            setChracterAllowed((prev)=>!prev)
          }}
          />
          <label className="mx-2">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}