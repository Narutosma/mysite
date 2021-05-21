
import request from './request';

// 分页获取所有文章
export async function getArticles(page=1, limit=5, cateId = -1, key=""){
    return await request.get("/api/article", {
        params: {
            page,
            limit,
            cateId,
            key
        }
    });
}

// 按日期分类得到所有文章列表
export async function getArticlesByDate(){
    return await request.get("/api/articleByDate");
}

// 获取单篇文章
export async function getArticle(id){
    return await request.get("/api/article/" + id);
}