import React from 'react'
import Link from "next/link";
import PostPreview from "@/components/post/PostPreview";
import styles from "./list.module.scss";
import { IPostData } from "@/types/post.types";
const List = ({posts}: {posts: IPostData[]}) => {
  return (
    <ul className={styles['list']}>
    {Array.isArray(posts) &&posts.map((post: IPostData) => (
      <li key={post.id} className={styles['item']}>
        <Link
          href={`/post/${post.id}`}
          className={styles['link']}
        >
          <PostPreview key={post.id} post={post} />
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default List