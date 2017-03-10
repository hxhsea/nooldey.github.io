---
title: vue提取正文的第一张图片
date: 2017-03-10 17:03:21
tags:
  - vue
category:
  - VUEJS
---

开发基于VUE.JS框架的单页面应用、多页面站点已经近一年。

放点存货出来。

获取正文中的第一张图片作为封面图:

```javascript
	const getFirstImg = (d) => {
	    //提取正文第一张图片
	    const defImg = require(<这里是默认图片路径>);
	    if(!d) return defImg;
	    let t = d.match(/<img.+?src=[\'\"].+?[\'\"].+?>/);
	    if(t){
	        d = t.toString().replace(/<img.+?src=[\'\"](.+?)[\'\"].+?>/,'$1');
	    } else {
	        d = defImg;
	    }
	    return d;
	}
```