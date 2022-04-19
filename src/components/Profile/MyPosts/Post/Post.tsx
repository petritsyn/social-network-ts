import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../state/state";

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://img.ecartelera.com/noticias/61000/61006-m.jpg'/>
            {props.message}
            <div>
                Like {props.likesCount}
            </div>
        </div>
    )
}

export default Post;