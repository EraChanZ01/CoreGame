import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";


interface IHeaderProps {
    identity: any;
}

function Header(props: IHeaderProps) {
    const { identity } = props;
    const router = useRouter();
    

    return (
        <header className=" flex justify-between box-border items-center fixed right-0 left-0 top-0 p-[25px] m-auto  text-2xl bg-customize-blace111 border-b-[1px]  border-customize-slate200/50 text-white z-50">
            <div className="box-border flex ">
                <div>
                    <img src="/logo2.png" width={150} />
                </div>
                <div className="box-border flex">
                    <div className="box-border pl-5">
                        Home
                    </div>
                    <Link href="/conf">
                        <div className="box-border pl-5">
                            Store
                        </div>
                    </Link>
                    <div className="box-border pl-5">
                        Доставка
                    </div>
                </div>
            </div>

            <div className=" box-border flex pl-10">
                {
                    identity.userId ? (
                        <Link href="/profile/PersonalData">
                            <div className=" box-border pl-5 cursor-pointer" >
                                
                                {identity.firstName} {identity.lastName}
                            </div>
                        </Link>
                    )
                        : (
                            <div className=" box-border pl-5">
                                 
                                <a href="/login">Login</a>
                                
                            </div>
                        )
                }
                
                <div className="box-border pl-5">
                    whatsapp
                </div>
            </div>
        </header >
    )
}

const mapStateToProps = (state, props) => {
    const identity = state.identity;
    return {
        identity
    };
}

export default connect(mapStateToProps, {})(Header);



