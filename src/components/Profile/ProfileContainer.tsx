import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
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
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {profileTh: getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)