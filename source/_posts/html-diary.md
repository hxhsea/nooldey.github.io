---
title: 前端开发杂记
categories:
  - 技术一二
tags:
 - javascript
 - 前端开发
date: 2016-05-28 12:00:00
---

最近的一些开发过程遇到的东西或者看到的觉得需要记下来的关于javascript的技巧/代码.
javascript解析json
html移动端
webpack+vue开发
【and so on】
<!-- more -->

### 用javascript解析有不定项子集的json数组？

``` javascript
function jsonToHtml(json){
    var res;
	for(var key in json){
		if(typeof json[key] == "object"){
			data = jsonToHtml(json[key]);
			res += data;
		}else{
			res += json[key];
		}
	}
	return res;
}
```
### PC端的前端开发与后端开发有什么区别？

1. 移动端页面的WEBAPP开发为了模仿顶部通栏和底部工具按钮，常用到 `position: absolute;` 来进行顶部和底部栏的定位，例如设置底部工具栏，则web结构如下：

``` html
<div class="topbar">我是顶部栏</div>
<div class="mainbody">我是主要内容content</div>
<div class="foobar">我是底部栏</div>
```

主要样式：
``` css
.topbar{
	height: 30px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
.mainbody{
	margin-top: 30px;
	margin-bottom: 45px;
	position: relative;
}
.foobar{
	height: 45px;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
}
```

2. 为了兼容低版本浏览器下的H5渲染，常需要在head加入这样一段代码：

``` html
		<!--[if lt IE 9]>
        <script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
        <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
```

同时可能引入normalize.css进行全局样式的初始化。