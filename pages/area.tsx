import React from "react";
import Layout from "../Components/Layout/Layout"
import Link from "next/Link"
import Area from "../Components/Area"
import { useRouter } from "next/router"
import TodoList from "../Components/TodoList"

interface MyProps {
    Todo: JSX.Element

}

interface MyState {

}


export default class PreArea extends React.Component<MyProps, MyState>  {


    constructor(props) {
        super(props);
        this.state = {


        };

        //this. = this..bind(this);

    };



    render() {
        return (
            
          <TodoList Todos={Todos}/>


        )
    }

}

