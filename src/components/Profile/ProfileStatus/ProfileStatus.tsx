import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deActivateEditMode = () => {
        this.setState({editMode: false})
    }

    onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    onBlurHandler = () => {
        this.props.updateStatus(this.state.status)
    }

    // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
    //     if (prevProps.status !== this.state.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {
        return (
            <div className={s.profileStatus}>
                <div>
                    {this.state.editMode &&
                        <div onBlur={this.deActivateEditMode}><input autoFocus onChange={this.onInputChangeHandler} onBlur={this.onBlurHandler} value={this.state.status} type="text"/></div>}
                    {!this.state.editMode && <div onDoubleClick={this.activateEditMode}><span>{this.props.status || 'no status'}</span></div>}
                </div>
            </div>
        );
    }
}

export default ProfileStatus;