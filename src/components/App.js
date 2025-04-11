import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [changedRow, setChangedRow] = useState(null);
  const [tableData, setTableData]  = useState([
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "Diana", age: 28 },
  { id: 5, name: "Ethan", age: 35 }
])
  const editedRows = useRef([
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "Diana", age: 28 },
  { id: 5, name: "Ethan", age: 35 }
]) 


  function saveTableData(){
    const rows = editedRows.current.filter((list, index)=>(
      list.age !== tableData[index].age || list.name !== tableData[index].name
    ))?.map(list => list.id)


    setTableData(editedRows.current)
}

  function handleChange(list, value, currentTag){
    editedRows.current = editedRows.current.map(item => list.id == item.id ? {...item, [currentTag]: value}: item)
  }

  console.log("tableData",tableData)


  return (
    <div>
        <table style={{textAlign: "center"}}>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            </tr>
          </thead>
          <tbody>

            {
              editedRows.current.map(list => (
                <tr key={list.id}>
                  <td >
                    {list.id}
                  </td>
                  <td contentEditable={true} style={{border: "1px solid black"}} onInput={(e)=> handleChange(list, e.currentTarget.innerText, "name")}>
                    {list.name} 
                  </td>
                  <td  contentEditable={true} style={{border: "1px solid black"}} onInput={(e)=> handleChange(list, e.currentTarget.innerText, "age")}>
                    {list.age}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button onClick={()=>saveTableData()}>Save Changes</button>
    </div>
  )
}

export default App
