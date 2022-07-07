import Layout from "../Components/Layout/Layout"
import React from 'react'
import ReactDOM from 'react-dom'







export default class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.OnKey = this.OnKey.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0, key: null, };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    OnKey(event) {
        console.log(onkeydown)
        this.setState({
            key: event.onKeyDown
        })
    }



    render() {

        return (
            <Layout>
            <div>

                <div className=" bg-yellow-600" style={{ height: '100vh' }} onMouseMove={this.handleMouseMove} onKeyDown={this.OnKey} >


                    <p>Текущее положение курсора мыши: ({this.state.x}, {this.state.y}, {this.state.key})</p>
                </div>
            </div>
            </Layout>
        );
    }
}