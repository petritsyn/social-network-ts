import React from 'react';
import {addPostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

type mapStatePropsType = {
    posts: Array<PostType>
}

type mapDispatchPropsType = {
    addPost: (postText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);