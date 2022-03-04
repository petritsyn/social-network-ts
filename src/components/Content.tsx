import React from 'react';
import s from './Content.module.css';

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://wikitravel.org/upload/shared/thumb/a/a9/Bahamas_banner.jpg/1200px-Bahamas_banner.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                Posts
            </div>
            <div>
                Post 1
            </div>
        </div>
    )
}

export default Content;