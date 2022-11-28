import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    profileTh: (userId: number) => void
}
type PropsType = RouteComponentProps & MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) userId = '8484'
        this.props.profileTh(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>

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
        isAuth: state.auth.isAuth
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {profileTh: getProfile})(ProfileContainerWithRouter);