import request from './request';

// 获得评论列表
export async function getCommentList(page=1, limit=10){
    return await request.get("/api/comment", {
        params: {
            page,
            limit
        }
    });
}

// 发送评论
export async function addComment(nickname, content){
    return await request.post("/api/comment", {
        nickname,
        content
    });
}
