# API接口

## 文章

### 分页获取文章

**请求规格**

```yaml
path: /api/article
methods: GET
```

说明

	- params列表

| key     | 必填 | default | 含义       |
| ------- | ---- | ------- | ---------- |
| page    | 否   | 1       | 当前页码   |
| limit   | 否   | 10      | 页容量     |
| keyword | 否   | ""      | 关键字查询 |

响应规格

```yaml
{
	code: 200,
	msg: "",
	total: 786, #总数
		rows: [ # 当前页列表数据
			{
				id:<id>,
				title: "标题",
				description: "描述",
				category: { #所属分类
					id: 3,
					name: "分类3"
				},
				scanNumber: 10,	# 浏览数
				commentNumber: 30,	# 评论数
				thumb: "缩略图地址",
				createDate: 1604976798936
			}
		]
}
```

说明：

	- 按发布时间倒序

## 留言板

### 分页获取留言

**请求规格：**

```yaml
path: /api/comment
methods: GET
```

说明

  - params列表：

    | key   | 必填 | default | 含义     |
    | ----- | ---- | ------- | -------- |
    | page  | 否   | 1       | 当前页码 |
    | limit | 否   | 10      | 页容量   |

**相应规格**

```yaml
{
	code: 200,
	msg: "",
	data: { 
		total: 786, #总数
		rows: [ # 当前页列表数据
			{
        id: <id>,
        nickname: "昵称",
        content: "留言内容，纯文本",
        createDate: 1604976798936,
        avatar: "头像地址",
      }
		]
	}
```

说明

- 按时间倒序排序



### 提交评论

**请求规格**

```yaml
path: /api/comment
methods: POST
```

**响应规格**

```yaml
{
	code: 0,
	msg: "",
	data: {
    id: <id>,
    nickname: "昵称",
    content: "留言内容，纯文本",
    createDate: 1604976798936,
    avatar: "随机的头像地址",
	}
}
```



说明：

 - 有可能出现验证错误，如：
   	- 昵称不能为空
   	- 留言内容不能为空
- 头像随机生成一个即可
- 某个会话在一定的时间内，只能提交指定数量的留言，超出数量将导致406验证错误：

```yaml
{
	code: 406,
	msg: "留言过于频繁，请稍后再试"
}
```

