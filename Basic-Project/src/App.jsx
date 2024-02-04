import { useState } from "react"

function App() {
  let [value,setValue] = useState(10)
  const addValue = ()=>{
    if(value < 20) {
      setValue(value+1)
    }
  };

  const removeValue = ()=>{
    if(value>0){
      setValue(value-1)
    }
  }

  return (
    <>
    <div>
      <h1>hello world</h1>
      <h2>{value}</h2>
      <button onClick={addValue}style={{ marginBottom: "5px" }}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue} style={{ marginTop: "5px" }}>
        Remove Value
      </button>
    </div>
    </>
  )
}

export default App
