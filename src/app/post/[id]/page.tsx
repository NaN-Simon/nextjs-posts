import Post from "@/components/post/Post";

import { getPost } from "@/app/services/postService/postService";

import styles from "./post.module.scss";

const page = async ({ params }: { params: { id: number } }) => {
  const response = await getPost({ id: params.id })
  return (
    <main>
      <div className={styles["main"]}>
        <Post key={params.id} post={response} />
      </div>
    </main>
  );
};

export default page;
