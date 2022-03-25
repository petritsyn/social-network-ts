import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
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