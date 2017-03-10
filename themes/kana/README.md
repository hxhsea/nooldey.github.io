# hexo theme kana

[Preview](https://bigfa.github.io/kana/)

![](https://raw.githubusercontent.com/bigfa/kana/screenshot/kana.jpg)

## 主题介绍
+ 响应式
+ 独立的分类、标签页面
+ 文章归档、带缩略图的分类归档、标签归档
+ 可控制动画效果的开关
+ 文章列表头像显示开关
+ 更多...

## 依赖插件
+ hexo-front-matter-excerpt
+ hexo-generator-archive
+ hexo-generator-category
+ hexo-generator-feed
+ hexo-generator-tag
+ hexo-renderer-less

## 主题安装

### 安装

```
$ git clone https://github.com/bigfa/kana.git themes/kana

```

### 开启

修改 `_config.yml` 主题设置为`kana`

### 更新

```
cd themes/kana
git pull

```

## 推荐配置

建议关闭年月日归档，所有文章归档为全部文章输出，单页文章显示数量设置无效。

建议关闭代码高亮，主题仅提供了默认`pre`标签样式

主题支持文章摘要，可安装`hexo-front-matter-excerpt`直接设置摘要。

### 主题设置文件

编辑主题设置文件`_config.yml`

```
# 文章列表头像显示
avatar: false
# css 过渡动画
animation: false
# 作者简介，在文章结尾显示
description: I hate you.
```

### 创建分类、标签页面

```
hexo new page category
```

然后编辑页面，头部添加

```
type: categories
```
标签页面则为

```
type: tags
```

### 分类缩略图设置

修改main.less文件，找到`generate-columns(5)`,5为你的分类数，有几个分类就把n设置为几，然后按照你的分类输出顺序设置缩略图，图片命名为1.jpg,2.jpg 类推。

其他都是Hexo　基本配置了，感谢支持。