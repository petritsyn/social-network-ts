import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
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
    newPostText: string
}

type mapDispatchPropsType = {
    addPost: () => void
    onPostChange: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (newPostText: string) => {
            dispatch(updateNewPostTextAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);