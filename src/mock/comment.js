import Mock from 'mockjs';
import query from 'querystring'

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
                    avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcq.qnzs.youth.cn%2Fassets%2Fuploads%2F3c59799925d6840022ddc3f01e3a6c8a.jpg&refer=http%3A%2F%2Fcq.qnzs.youth.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619674478&t=14502e20930b5f983e9bf893615c5122"
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
            avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcq.qnzs.youth.cn%2Fassets%2Fuploads%2F3c59799925d6840022ddc3f01e3a6c8a.jpg&refer=http%3A%2F%2Fcq.qnzs.youth.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619674478&t=14502e20930b5f983e9bf893615c5122"
        }
    ]
});
