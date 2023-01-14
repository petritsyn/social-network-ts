import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deActivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {this.state.editMode &&
                    <div onBlur={this.deActivateEditMode.bind(this)}><input autoFocus type="text"/></div>}
                {!this.state.editMode && <div onDoubleClick={this.activateEditMode.bind(this)}><span>text</span></div>}
            </div>
        );
    }
}

export default ProfileStatus;