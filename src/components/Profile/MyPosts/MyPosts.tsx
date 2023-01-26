import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
}

type FormDataType = {
    post: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.post);
    }

    return (
        <div className={s.myPosts}>
            <SendMessageReduxForm onSubmit={onSubmit}/>
            {postElements}
        </div>
    )
}

const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'post'} component={'textarea'} placeholder={'Enter post message'}/>
        </div>
        <button>Add post</button>
    </form>
}

const SendMessageReduxForm = reduxForm<FormDataType>({form: 'post'})(AddPostForm);

export default MyPosts;