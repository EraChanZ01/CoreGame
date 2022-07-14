import React from "react"
import OptionDevice from "./OptionDevice"

export interface ISelectDeviceProps {

    brends: any,
    СountСategory:(name) => void,

}

export interface ISelectDeviceState {
   brendName: string,


}


export default class SelectDevice extends React.Component <ISelectDeviceProps,ISelectDeviceState>{

    constructor(props) {
        super(props);
        this.state = {
            brendName: ""
        };

        this.handleChange = this.handleChange.bind(this);
        



    };

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });
       

        this.props.СountСategory(this.state.brendName)


    };
    
    render() {
        console.log(this.state.brendName)

        const {brends, СountСategory} = this.props
        const result = [];
        brends?.forEach(element => {
            result.push(<OptionDevice brends={element} />)
        });

        return (
            <select className="bg-customize-text/60 min-w-20 w-96 h-12 ml-6 text-yellow-600 my-5 rounded-lg border-4 border-white/20" onChange={this.handleChange} name="brendName" >
                {result}
            </select>
        )
    }
}





