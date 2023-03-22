import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null,
    status: string,
    autorizedUserId: number | null,
    isAuth: boolean
}
type MapDispatchPropsType = {
    profileTh: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PropsType = RouteComponentProps & MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileTh(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }

};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {profileTh: getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)