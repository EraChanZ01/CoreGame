import React from "react"
import ModalContent from "./ModelContent"

export interface IContentProps {
    children: any
}

export default class Content extends React.Component<IContentProps> {


    render() {

        const { children } = this.props;

        return (
            <div className=" lg:mx-[90px] xl:mx-[250px] mb-10 z-30">
                {children}
            </div>

        )
    }


}