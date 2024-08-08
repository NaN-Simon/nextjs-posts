import api from "@/app/api/axios";
import { POSTS } from "@/app/services/config";

export const getPosts = async (page = 1) => {
    let posts = []
    let totalPage = 0
    const pageSize = 10
    const pageNumber = page || 1

    posts = await api.get(POSTS)
        .then(res => res.data)
        .then(res => {
            totalPage = Math.ceil(res.length/pageSize)
            return res
        })
        .then(res => res.slice((pageNumber-1)*pageSize, pageNumber*pageSize))

        .catch(err => console.log(err))

    // console.log("Count****",count);
    
    return {posts, totalPage};
};

export const getPost = async ({ id = 1 }: { id: number }) => {
    const response = await api.get(POSTS + `/${id}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    return response;
};
