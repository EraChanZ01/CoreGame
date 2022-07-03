import React from "react";
import TodoItem from "../Components/TodoItem"







export default function TodoList({ Todos }) {



    console.log(Todos)

    return (
        <div className="">
            {Todos.map(item => <TodoItem key={item.id} {...item} />)}
        </div>

    )

}