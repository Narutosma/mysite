import Mock from 'mockjs';
import query from 'querystring'

import img from "../assets/gg.jpeg";

// 留言
//  /api/comment?page=1&limit=10
Mock.mock(/^\/api\/comment\/?(\?.+)?$/, "get", function(options){
    const qs = query.parse(options.url);
    return Mock.mock({
        code: 200,
        msg: "",
        data:{
            'total|50-200': 0,
            [`rows|${qs.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname:"@cname()",
                    content: "@cparagraph(1, 10)",
                    createDate: new Date(),
                    avatar: img,
                    children: [
                        {
                            id: "@guid",
                            nickname: "@cname()",
                            content: "@cparagraph(1, 10)",
                            createDate: new Date(),
                            avatar: img
                        }
                    ]
                }
            ]
        }
    });
});

// 发送评论
Mock.mock("/api/comment", "post", {
    code: 200,
    msg: "",
    data: [
        {
            id: "@guid",
            nickname: "@cname()",
            content: "@cparagraph(1, 10)",
            createDate: new Date(),
            avatar: img,
            children: [
                {
                    id: "@guid",
                    nickname: "@cname()",
                    content: "@cparagraph(1, 10)",
                    createDate: new Date(),
                    avatar: img
                }
            ]
        }
    ]
});

// 回复评论
Mock.mock("/api/reply", "post", {
    code: 200,
    msg: "",
    data: [
        {
            id: "@guid",
            nickname: "@cname()",
            content: "@cparagraph(1, 10)",
            createDate: new Date(),
            avatar: img
        }
    ]
});
