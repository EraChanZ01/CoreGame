import React from "react";
import Baner from "Components/Baner";
import Layout from "Components/Layout/Layout";
import { WithRouterProps } from "next/dist/client/with-router";
import Link from "next/Link";
import saga from 'redux/decorators/saga';
import ModelEntity from 'redux/models/model'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Line from '../../Components/Store/Line'
import Content from '../../Components/Store/Content'
import Monitor from '../../Components/Store/ModelContent/Monitor'



interface MyProps extends WithRouterProps {
    fetchAllModels: () => void,

}

export enum PageParams {
    Monitor = "Monitor",
    Body = "Body",
    Keyboard = "Keyboard"
}

@saga(ModelEntity)
export class Stor extends React.Component<MyProps> {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { fetchAllModels } = this.props
        fetchAllModels()
    }

    getStoreContent() {
        const { router } = this.props;



        switch (router.query.index) {
            case PageParams.Monitor:

                return (<Monitor />)
                break;

            case PageParams.Body:

                return (<Body />)
                break;

            case PageParams.Keyboard:

                return (<Keyboard />)
                break;
        }
    }



    render() {
        const Data = this.getStoreContent()
        return (
            <form className=" bg-customize-blacegray relative">
                <Layout>
                    <div className={`mt-20 static `}>
                        <Baner bg={"bg-[url('/baner1.svg')]"} />

                        <div className=" border-y-[1px]  border-black h-[220px] bg-customize-blacegray2/95">
                            <Line />

                        </div>
                        <Content children={Data} />

                    </div>
                </Layout>
            </form>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {

    };
}

const monitor_connected = connect(mapStateToProps, ModelEntity.triggers())(Stor);
export default withRouter(monitor_connected);