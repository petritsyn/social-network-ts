import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    deletePost: (id: number) => void
}

type FormDataType = {
    post: string
}

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post post={{message: p.message, id: p.id, likesCount: p.likesCount}} key={p.id} cb={()=> props.deletePost(p.id ?? 0)}/>)

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
            <Field name={'post'} component={Textarea} placeholder={'Enter post message'}
            validate={[required, maxLength10]}/>
        </div>
        <button>Add post</button>
    </form>
}

const SendMessageReduxForm = reduxForm<FormDataType>({form: 'post'})(AddPostForm);

export default MyPosts;