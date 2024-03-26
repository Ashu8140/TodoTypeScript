import { FC } from "react";
import { Link } from 'react-router-dom'

type CreateData = {
  handleChange: any
  handleClick: any
  query: any

}

const CreateThing: FC<CreateData> = ({ handleChange, handleClick, query }) => {

  return (
    <div className="border-2 border-black mr-24 mt-5 py-10">
      <h1 className="-mt-8 ml-4 text-xl">Create to do</h1>
      <div className="flex flex-col ">
        <input value={query} onChange={handleChange} className="ml-4 border-2 py-1 mt-4 mr-4 text-center" placeholder="Write an artical about Xstate " type="text" />
        <div className="ml-4 mt-3">
          <button onClick={handleClick} className=" p-1 px-3 rounded-md bg-yellow-500">Save</button>
          <Link to="/" className="border rounded-md p-1 px-3 ml-2">Cancel</Link>
        </div>
      </div>
    </div>
  );

}

export default CreateThing;