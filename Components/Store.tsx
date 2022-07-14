import Baner from "./Baner";
import React from "react";
import Link from "next/link"
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

export interface IStoreProps {
    children?: React.ReactNode;
    fetchAllModels:() => void,
   
}

export interface IStoreState {

}


@saga(ModelEntity)
export class Store extends React.Component<IStoreProps, IStoreState> {
    constructor(props: IStoreProps) {
        super(props);

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        const{ fetchAllModels } = this.props
        fetchAllModels()
    }

    public render() {
        
        return (
            <div className={`mt-20 static `}>
                <Baner bg={"bg-[url('/baner1.svg')]"} />

                
                

            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
	return {
        
    };
}

const monitor_connected = connect(mapStateToProps, ModelEntity.triggers())(Store);
export default withRouter(monitor_connected);