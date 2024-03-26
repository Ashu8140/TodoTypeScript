import  { ChangeEvent, useEffect, useState, FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddThink from './AddThink'
import AddToThink from './AddtoThinkButton';
import CreateThing from './CreateThink';
import ThinkDone from './ThinkDone';
import Xtodo from './Xtodo';

let App: FC = () => {

   let stringData = JSON.parse(localStorage.getItem(`list`) || "");
    let stringTask = JSON.parse(localStorage.getItem(`task`) || "" );

  const [query, setQuery] = useState<string>("");
  const [item, setItem] = useState<string[]>([stringData]);
  const [task, setTask] = useState<any>([stringTask]);


useEffect(()=>{
 localStorage.setItem(`list`, JSON.stringify(item));
},[item]);

  useEffect(()=>{
 localStorage.setItem(`task`, JSON.stringify(task));
    },[task]);
 


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }
  function handleSave() {
    if (query) {
      setItem([...item, query]);
    }
    setQuery("");
  };
  const DeleteItem = (index: number) => {
    var newItem = item;
    setTask([newItem.splice(index, 1), ...task]);
    setItem([...newItem]);
  }
  const DeleteData = (index: number) => {
    var newData = task;
    newData.splice(index, 1);
    setTask([...newData]);
  }

  return (
    <div>
      <Xtodo />
      <div className='ml-10 mt-20'>
        <AddThink DeleteItem={DeleteItem} item={item} />
        <Routes>
          <Route path='add' element={<CreateThing handleChange={handleChange} handleClick={handleSave} query={query} />} />
          <Route path='/' element={<AddToThink />} />
        </Routes>
        <ThinkDone DeleteData={DeleteData} task={task} />

      </div>
    </div>
  );
}

export default App
