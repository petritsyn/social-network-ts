import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {default as axios} from "axios";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/8484`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }

};

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);