import { WithRouterProps } from "next/dist/client/with-router";
import Link from "next/link"
import Router from "next/router"
import { withRouter } from 'next/router';
import React from "react"


interface IProfileMenuProps extends WithRouterProps {

}

interface IProfileContentState {

}


class ProfileMenu extends React.Component<IProfileMenuProps, IProfileContentState> {


    constructor(props) {
        super(props);
        this.state = {

        };


        //Забинженые функции
        // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        //this.registerUser = this.registerUser.bind(this);
    };



    render() {



        return (
            <div className="mb-10">
                <div className=" border-[1px] border-white/20 bg-customize-button/70 rounded-lg mr-2  mt-2 h-[850px]">
                    <div className=" text-start text-white mt-10 border-1 hover:bg-white/5 hover:text-yellow-600 h-10 mx-6">
                        <Link href={"/profile/PersonalData" }>
                            <button >

                                <p className="p-2">Персональные данные</p>

                            </button>
                        </Link>
                    </div>
                    <div className=" text-start text-white mt-10 border-1 hover:bg-white/5 hover:text-yellow-600 h-10 mx-6">
                        <Link href={"/profile/PrfileBrend" }>
                            <button >

                                <p className="p-2">Бренды</p>

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ProfileMenu);