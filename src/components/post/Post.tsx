import React, { FC } from 'react'

import styles from './post.module.scss'

import { IPostData } from '@/types/post.types'

interface IPost {
    post: IPostData
}

const Post: FC<IPost> = ({ post }) => {
    return (
        <div className={styles['post__wrapper']}>
            <h3 className={styles['post__title']}>{post.title}</h3>
            <p className={styles['post__body']}>{post.body}</p>
        </div>
    )
}

export default Post