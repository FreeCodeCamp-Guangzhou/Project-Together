# TodoList 

## 用JQuery和BootStrap框架写就的TodoList

    Note:
    FCC活动参加人员（面向参加人员初学者占多数的情况）一起分工合作完成。

### 功能分解

    1. todo的增；
    2. todo的删；
    3. todo的改；
    4. todo的查；// 节选

### 基本架构

```
./
├── images/
│   └── ...
├── javascripts/
│   └── index.js
├── styles/
│   └── index.css
├── index.html
└── README.md
```

### html init:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>todolist</title>
  <link href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./styles/index.css">
</head>
<body>
  <div class="container">
    <div class="jumbotron">
      <h1 class="todos-title text-center">todos</h1>
      <form role="form">
        <div class="form-group form-group-lg has-success">
          <label class="control-label sr-only" for="">add new todo</label>
          <input autofocus type="text" class="form-control input-lg" placeholder="What needs to be done?">
        </div>
      </form>
      <ul class="list-unstyled list-group"></ul>
    </div>
  </div>
  <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
  <script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="./javascripts/index.js"></script>
</body>
</html>
```

### css init

```css
body{
  background-color: #999;
}
.list-group-item{
  font-size: 24px;
}
.jumbotron{
  margin: 0 auto;
  width: 60%;
}
```

### javascript init:

```js
$(function(){
    // 这里添加内容
});
```

### 分工安排

  1. UI润色(大概5位成员)
  2. AI(javascript逻辑实现部分)(剩下的成员)
    a.  ".form-control" 输入框输入 添加新的 todo(增)
    b.  ".glyphicon-remove" 点击 删除该条 todo(删)
    c.  ".item" 点击编辑该条 todo(改)
    d.  ".form-control" 输入框输入时 下拉列表显示包含所写字符的内容(查 //节选)
    e.  代码封装、整理

    Note：
    1. todo用todos数组存储；
    2. 可以添加H5的离线存储，方便数据不丢；
    3. 上面每次 对数据有变化的时候 应该使todos数组、离线存储的相应改变。







    


