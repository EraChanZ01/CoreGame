import React from "react"
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import MonitorItem from './MonitorItems'
import ModalAddBrend from "Components/modal/ModalAddBrend";


interface MyProps {
    models: any,

}



@saga(ModelEntity)
export class Monitor extends React.Component<MyProps> {









    render() {
        const {models} = this.props
        const res = []
        models?.forEach(model => res.push(<MonitorItem models={model}/>))
        return (
            <div className="grid grid-cols-3 gap-4 w-full">
                {res}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const models = state.entities.get("models")
    console.log(models)
    return {
        models
    };
}

const monitor_connected = connect(mapStateToProps, ModelEntity.triggers())(Monitor);
export default withRouter(monitor_connected);