import  { FC } from "react";
import {BiRectangle} from "react-icons/bi"

type AddThinkData={
    DeleteItem:any
    item:String[]

}

const AddThink: FC<AddThinkData>=({DeleteItem,item})=>{
    return(
        <div>
    <h1 className="text-4xl font-bold">Thinks Add to Done</h1>
<h1 className="text-2xl mt-4 font-bold">Think to do</h1>
        {  item.map(function(data,index){
            return(
<button onClick={()=>DeleteItem(index)} className="flex"><span className="mt-auto text-xl font-bold mr-3"><BiRectangle  /></span> {data}</button>
         ) })}
</div>
    );
}
export default AddThink;