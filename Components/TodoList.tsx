import React from "react";
import TodoItem from "../Components/TodoItem"


interface MyProps {
    todo?: JSX.Element;
    sr?: String;
    name?: String;
    email: String;
    data: number;
}

interface MyState {

}


export default function TodoList ({Todos})  {


    


        return (
            <div className="">
                {Todos.map(item =><TodoItem key={item.id} {...item} />)}
            </div>

        )
    
}