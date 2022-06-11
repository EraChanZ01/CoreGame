
import React, { useState, useEffect, useContext } from "react";
import Layout from "../../Components/Layout/Layout"
import Link from "next/Link"
import ProfileContent from "../../Components/Profile/ProfileContent"
import ProfileHeader from "../../Components/Profile/ProfileHeader"
import ProfileMenu from "../../Components/Profile/ProfileMenu"
import Router from "next/router"
import { WithRouterProps } from "next/dist/client/with-router";
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import PersonalData from '../../Components/Profile/ProfContents/PersonalData'
import PrfileBrend from '../../Components/Profile/ProfContents/ProfileBrend'


interface MyProps extends WithRouterProps {


}

interface MyState {

}

export enum PageParams {
    personalData = "PersonalData",
    prfileBrend = "PrfileBrend"
}



export class Profile extends React.Component<MyProps> {

    constructor(props) {
        super(props);
        this.state = {

        };


        //Забинженые функции
        // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.getProfileContent = this.getProfileContent.bind(this);
    };


    getProfileContent() {
        const { router } = this.props;
        console.log(router.query.index)
        switch (router.query.index) {
            case PageParams.personalData:
                return (<PersonalData />)
                break;

            case PageParams.prfileBrend:
                return (<PrfileBrend />)
                break;
        }
    }



    render() {




        const Data = this.getProfileContent()
        return (
            <Layout>
                <div className="mt-20 bg-customize-blace111">
                    <div className='max-w-5xl mx-auto'>
                        <div className="">
                            <ProfileHeader />
                        </div>
                        <div className="flex flex-row justify-between mt-3">
                            <div className=''>
                                <ProfileMenu />
                            </div>
                            <div className='w-[770px]'>
                                <ProfileContent children={Data} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>



        )
    }
}

const mapStateToProps = (state, props) => {
    const users = state.entities.get('users');
    return {
        users,
    };
}

const home = connect(mapStateToProps)(Profile);

export default withRouter(home);