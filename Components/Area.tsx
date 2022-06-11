import React from "react";
import Layout from "../Components/Layout/Layout"
import Link from "next/Link"


interface MyProps {
    children: React.ReactNode;
}

interface MyState {

}


export default class Area extends React.Component<MyProps, MyState>  {


    constructor(props) {
        super(props);
        this.state = {


        };

        //this. = this..bind(this);

    };



    render() {
        const { children } = this.props

        return (
            <div className="mt-[85px] bg-customize-blace111">
                <Layout>
                    <div>
                        1
                    </div>

                    

                </Layout>
            </div>
        )
    }

}