import React from 'react';
import Header from "./Header";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {DataType, setAuthUserDataAC} from '../../redux/auth-reducer';
import {AppStateType} from "../../redux/redux-store";

type ResponseAuthType = {
    data: {
        id: number
        login: string
        email: string
    },
    resultCode: number
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuthUserDataAC: (data: DataType) => void
}
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType>{

    componentDidMount() {
        axios.get<ResponseAuthType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(response.data.data)
                }
            })
    }

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

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);