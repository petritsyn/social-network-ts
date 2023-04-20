import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/profile-reducer";

type PropsType = {
    post: PostType
    cb: () => void
}

const Post: React.FC<PropsType> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://img.ecartelera.com/noticias/61000/61006-m.jpg'/>
            {props.post.message}
            <div>
                Like {props.post.likesCount}
            </div>
            <div onClick={props.cb}>Delete</div>
        </div>
    )
}

export default Post;