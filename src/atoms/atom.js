import {atom, selector} from "recoil";
import axios from "axios";


export const Post = atom({
    key: "Post",
    default: [],
}) 

export const PostData = atom({
    key: "PostData",
    default: [],
});


//api 호출 selector / selector는 atom의 상태 기반으로 계산하거나 비동기 통신을 하는 함수
//이 selector는 읽기전용이라 수정이 불가능함.
export const GetPostData = selector({
    key: "getPostData",
    get: async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }
});
