---
title: 修复input[type=file]在EDGE下无限弹出的问题
categories:
  - 技术一二
tags:
 - html
 - 前端开发
date: 2017-03-08 19:23:35
---


之前在某项目中使用了大量的input[type=file]，为了样式以及大量使用的方便，我将所有的input都包进label里面，这也是很通常的写法：

结构：

```html
	<label>
		上传文件
		<input type="file" @change="doaction"/>
	</label>
```

样式：

```css
label {
	display: inline-block;
	padding: 8px 12px;
	color: #fff;
	background: #08b;
}
input[type=file] {
	display: none;
}
```

在谷歌以及火狐下操作，完全没问题啊！

打开IE11和EDGE浏览器，点击label，啊~ 我的眼睛！！——————关闭掉一个文件上传窗口后又紧接着弹出一个，然后关闭，又弹出...又关闭，又弹出...

没完没了了！！

怎么办？

打开百度，结果很感人，满屏的广告，没有一篇可用可参考的资料。
打开谷歌，嗯，看不懂，嗯，不是我描述的问题。
打开张鑫旭大大的博客，哈哈，果然还是这里比较容易解决问题！

修改一下结构：

```html 
	<label for="upload">上传文件呀</label>
	<input type="file" id="upload" @change="doaction">
```

修改下样式（IE下不允许不可见元素的动作啊！！！）

```css
input[type=file] {
	width: 0;
	height: 0;
	font-size: 0;
	opacity: 0;
	margin: 0;
	padding: 0;
}
```

嗯，就这么点，然后就解决了，然后。。。。我TM花了一整天在搞这个BUG，QNMD