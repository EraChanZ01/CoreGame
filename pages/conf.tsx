import Layout from 'Components/Layout/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/Link'
import React from "react";
import Router from 'next/router'
import { stringifyQuery } from 'next/dist/server/server-route-utils';
import Specification from '../Components/ConstructorPc/Specification'
import Icons, { ICO } from '../Components/icons'
import Button from '../Components/ConstructorPc/Button'
import Frame, { Framee } from "../Components/ConstructorPc/Frame";
import saga from 'redux/decorators/saga';
import UserEntity from 'redux/models/users'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import wrapper from 'redux/store';




interface MyProps {
    users: any;
}

interface MyState {
    activeProcessor: string;
    activeMotherboard: string;
    activeRamb: string;
    activeHdd: string;
    activeSsd: string;
    activeBp: string;
    activeKorpus
}
@saga(UserEntity)
class Conf extends React.Component<MyProps, MyState>  {

    constructor(props) {
        super(props);
        this.state = {
            activeProcessor: "",
            activeMotherboard: "",
            activeRamb: "",
            activeHdd: "",
            activeSsd: "",
            activeBp: "",
            activeKorpus: "",

        };

        this.setActiveComponent = this.setActiveComponent.bind(this);
        //this. = this..bind(this);
    };

    public static getInitialProps = wrapper.getInitialAppProps(store => ({ query }) => {
		store.dispatch(UserEntity.triggers().fetchAllUsers());
	});

    setActiveComponent(componentName, value) {
        this.setState<typeof value>({ [componentName]: value });
    }

    render() {

        const { users } = this.props;
        // users.map(user => {
        //     console.log('!!!!!!!!!!!!!!!!!!!!!!', user.toJS())
        // })
        const processorButtons = [
            <Button type={'activeProcessor'} value={'intel'} selected={this.state.activeProcessor} clickCallBack={this.setActiveComponent} className={'px-4 py-2'} icon={<Icons type={ICO.INTEL} />} />,
            <Button type={'activeProcessor'} value={'amd'} selected={this.state.activeProcessor} clickCallBack={this.setActiveComponent} className={'px-4 py-2'} icon={<Icons type={ICO.AMD} />} />,
        ]

        const motherboardButtons = [
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'asus'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.ASUS} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'asrock'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.ASROCK} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'msi'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.MSI} />} />,
            <Button className={'px-3 py-5'} type={'activeMotherboard'} value={'gigabte'} selected={this.state.activeMotherboard} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.GIGABATE} />} />,
        ]

        const ramdButtons = [
            <Button type={'activeRamb'} value={'2x8gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x8gb'} />,
            <Button type={'activeRamb'} value={'2x16gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x16gb'} />,
            <Button type={'activeRamb'} value={'2x32gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'2x32gb'} />,
            <Button type={'activeRamb'} value={'4x8gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x8gb'} />,
            <Button type={'activeRamb'} value={'4x16gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x16gb'} />,
            <Button type={'activeRamb'} value={'4x32gb'} selected={this.state.activeRamb} clickCallBack={this.setActiveComponent} text={'4x32gb'} />,
        ]

        const hddButtons = [
            <Button type={'activeHdd'} value={'120gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'120gb'} />,
            <Button type={'activeHdd'} value={'240gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'240gb'} />,
            <Button type={'activeHdd'} value={'500gb'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'500gb'} />,
            <Button type={'activeHdd'} value={'1TB'} selected={this.state.activeHdd} clickCallBack={this.setActiveComponent} text={'1TB'} />,
        ]

        const sddButtons = [
            <Button type={'activeSsd'} value={'240gb'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'240gb'} />,
            <Button type={'activeSsd'} value={'500gb'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'500gb'} />,
            <Button type={'activeSsd'} value={'1TB'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'1TB'} />,
            <Button type={'activeSsd'} value={'2TB'} selected={this.state.activeSsd} clickCallBack={this.setActiveComponent} text={'2TB'} />,
        ]

        const bp = [
            <Button type={'activeBp'} value={'500w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'500w'} />,
            <Button type={'activeBp'} value={'550w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'550w'} />,
            <Button type={'activeBp'} value={'650w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'650w'} />,
            <Button type={'activeBp'} value={'700w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'700w'} />,
            <Button type={'activeBp'} value={'750w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'750w'} />,
            <Button type={'activeBp'} value={'850w'} selected={this.state.activeBp} clickCallBack={this.setActiveComponent} text={'850w'} />,
        ]

        const KORPUS = [
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus1'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus1} />} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus2'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus2} />} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus3'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus3} />} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus4'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus4} />} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus5'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus5} />} />,
            <Button className={'px-3 py-5'} type={'activeKorpus'} value={'korpus6'} selected={this.state.activeKorpus} clickCallBack={this.setActiveComponent} icon={<Icons type={ICO.Korpus6} />} />,
        ]

        return (
            <div className=' bg-customize-blacegray2/95 text-white '>
                <Layout>
                    <div className='flex flex-col-reverse mt-20'>
                        <div className=''>
                        </div>
                        <div className=' mr-[530px] ml-[220px]'>
                            <div className='flex justify-between mt-20 hover:ring-white/75'>
                                <Frame width={'w-[450px]'} type={Framee.CPU}>
                                    <Specification title={"Проц"} icon={<Icons type={ICO.CPU} />} buttons={processorButtons} grid={"grid-cols-2"} />
                                </Frame>
                                <Frame width={'w-[650px]'} type={Framee.MOTH}>
                                    <Specification title={"Материнская плата"} icon={<Icons type={ICO.MOTH} />} buttons={motherboardButtons} grid={"grid-cols-2"} />
                                </Frame>
                            </div>


                            <div className='flex justify-between my-20'>
                                <Frame width={'w-[450px]'} type={Framee.MONandBP}>
                                    <Specification title={"Модули памяти"} icon={<Icons type={ICO.MON} />} buttons={ramdButtons} grid={"grid-cols-3"}/>
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL}>
                                    <Specification title={"SSD"} icon={<Icons type={ICO.SSD} />} buttons={hddButtons} grid={"grid-cols-2"}/>
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL}>
                                    <Specification title={"HHD"} icon={<Icons type={ICO.HDD} />} buttons={sddButtons} grid={"grid-cols-2"}/>
                                </Frame>
                            </div>
                            <div className='flex justify-between mb-20'>
                                <Frame width={'w-[450px]'} type={Framee.MONandBP}>
                                    <Specification title={"Блок Питания"} icon={<Icons type={ICO.BP} />} buttons={bp} grid={"grid-cols-3"}/>
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL}>
                                    <Specification title={"Видеокарта"} icon={<Icons type={ICO.VIDEO} />} />
                                </Frame>

                                <Frame width={'w-[300px]'} type={Framee.SMALL}>
                                    <Specification title={"Система охлождения"} icon={<Icons type={ICO.COOLING} />} />
                                </Frame>
                            </div>
                            <Frame type={Framee.KORPUS}>
                                <Specification title={"Корпус"} icon={<Icons type={ICO.KORPUS} />} buttons={KORPUS} grid={"grid-cols-4"}/>
                            </Frame>
                        </div>
                    </div>
                    <div>
                        11
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const  users  = state.entities.get('users');
	return {
        users,
    };
}

const home = connect(mapStateToProps, UserEntity.triggers())(Conf);
export default withRouter(home);