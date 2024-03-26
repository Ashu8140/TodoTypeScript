
import { FC } from "react";
import {Link} from "react-router-dom"

const AddToThink: FC=()=> {
    return(
        <div className="mt-4">
           <Link to="add" className="bg-yellow-500 p-2 rounded-md text-lg "> <span className="text-2xl">+</span>Add a todo</Link>     
        </div>
    );
}
export default AddToThink;