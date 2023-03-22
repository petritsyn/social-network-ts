import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    auth: () => void
    logout: () => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType>{

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {auth: getAuthUserData, logout})(HeaderContainer);