import { redirect } from 'next/navigation'

import Pagination from "@/components/pagination/Pagination";
import List from "@/components/list/List";

import { getPosts } from "@/app/services/postService/postService";
import { getIsAuth } from '@/app/utils/getIsAuth';

import "@/styles/globals.css";
import styles from "./page.module.css";

const Home= async (context: any) => {
  const token = await getIsAuth();
  
  // редирект на страницу логина если пользователь еще не авторизован
  if (!token) redirect('/login')

  const page = context.searchParams.page ? parseInt(context.searchParams.page) : 1;
  const { posts, totalPage } = await getPosts(page);

  return (
    <main className={styles['main']}>
      <List posts={posts} />
      <Pagination totalPage={totalPage} currentPage={page} />
    </main>
  );
}

export default Home

