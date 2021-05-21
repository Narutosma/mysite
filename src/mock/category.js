import Mock from "mockjs";

Mock.mock("/api/getCategory", "get", {
    code: 200,
    msg: "",
    "data|3-5": [
        {
            id: "@guid",
            "name|+1": `分类${1}`,
            "articleCount|10-20": 0
        }
    ]
});