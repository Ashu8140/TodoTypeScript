import {FC} from "react";
import {AiOutlineCheckSquare} from "react-icons/ai"

type ThinkType={
    task:string[]
    DeleteData:any

}

const ThinkDone: FC<ThinkType> = ({task,DeleteData}) =>{
    return(
        <div>
            <h1 className="text-xl font-bold mt-3">Think Complete</h1>
            {  task.map(function(data:string,index:number){
     return(
        <li onClick={()=>DeleteData(index)} className="flex mt-2 text-xl "><span className="mt-auto text-xl font-bold mr-3"><AiOutlineCheckSquare/></span> {data} </li>
        )
      })
      
      }
        </div>
    );
}
export default ThinkDone;