import { useState } from "react";
import Form from "./components/Form";
import ListUser from "./components/ListUser";
function App() {

  const [data, setData] = useState([]);
  function addData(newData) {
    setData([...data, newData]);
    console.log(data);
  }
 
  return (
    <div>
      <Form setData={addData} />
  
      <ListUser data={data}/>
    </div>
  );
}


export default App;
