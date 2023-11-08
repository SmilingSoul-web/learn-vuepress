<template><div><h1 id="_2021最新阿里代码规范-前端篇" tabindex="-1"><a class="header-anchor" href="#_2021最新阿里代码规范-前端篇" aria-hidden="true">#</a> 2021最新阿里代码规范（前端篇）</h1>
<p>2022-01-07
简介： 2021最新阿里代码规范（前端篇）
此规范根据阿里最新前端规范整理，如有雷同，纯属巧合。</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<p>前端代码规范</p>
<h4 id="一-编程规约" tabindex="-1"><a class="header-anchor" href="#一-编程规约" aria-hidden="true">#</a> 一．编程规约</h4>
<h4 id="一-命名规范" tabindex="-1"><a class="header-anchor" href="#一-命名规范" aria-hidden="true">#</a> (一) 命名规范</h4>
<p>1.1.1 项目命名</p>
<p>1.1.2 目录命名</p>
<p>1.1.3 JS、CSS、SCSS、HTML、PNG 文件命名</p>
<p>1.1.4 命名严谨性</p>
<h4 id="二-html-规范-vue-template-同样适用" tabindex="-1"><a class="header-anchor" href="#二-html-规范-vue-template-同样适用" aria-hidden="true">#</a> (二) HTML 规范 （Vue Template 同样适用）</h4>
<p>1.2.1 HTML 类型</p>
<p>1.2.2 缩进</p>
<p>1.2.3 分块注释</p>
<p>1.2.4 语义化标签</p>
<p>1.2.5 引号</p>
<h4 id="三-css-规范" tabindex="-1"><a class="header-anchor" href="#三-css-规范" aria-hidden="true">#</a> (三) CSS 规范</h4>
<p>1.3.1 命名</p>
<p>1.3.2 选择器</p>
<ol>
<li>
<p>css 选择器中避免使用标签名</p>
</li>
<li>
<p>使用直接子选择器</p>
</li>
</ol>
<p>1.3.3 尽量使用缩写属性</p>
<p>1.3.4 每个选择器及属性独占一行</p>
<p>1.3.5 省略 0 后面的单位</p>
<p>1.3.6 避免使用 ID 选择器及全局标签选择器防止污染全局样式</p>
<h4 id="四-less-规范" tabindex="-1"><a class="header-anchor" href="#四-less-规范" aria-hidden="true">#</a> (四) LESS 规范</h4>
<p>1.4.1 代码组织</p>
<ol>
<li>
<p>将公共 less 文件放置在 style/less/common 文件夹</p>
</li>
<li>
<p>按以下顺序组织</p>
</li>
</ol>
<p>1.4.2 避免嵌套层级过多</p>
<h4 id="五-javascript-规范" tabindex="-1"><a class="header-anchor" href="#五-javascript-规范" aria-hidden="true">#</a> (五) Javascript 规范</h4>
<p>1.5.1 命名</p>
<ol>
<li>
<p>采用小写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线， 也不能以下划线或美元符号结束</p>
</li>
<li>
<p>方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风 格，必须遵从驼峰形式</p>
</li>
<li>
<p>常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长</p>
</li>
</ol>
<p>1.5.2 代码格式</p>
<ol>
<li>
<p>使用 2 个空格进行缩进</p>
</li>
<li>
<p>不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以 提升可读性</p>
</li>
</ol>
<p>1.5.3 字符串</p>
<p>1.5.4 对象声明</p>
<ol>
<li>
<p>使用字面值创建对象</p>
</li>
<li>
<p>使用字面量来代替对象构造器</p>
</li>
</ol>
<p>1.5.5 使用 ES6+</p>
<p>1.5.6 括号</p>
<p>1.5.7 undefined 判断</p>
<p>1.5.8 条件判断和循环最多三层</p>
<p>1.5.9 this 的转换命名</p>
<p>1.5.10 慎用 console.log</p>
<h3 id="二、vue-项目规范" tabindex="-1"><a class="header-anchor" href="#二、vue-项目规范" aria-hidden="true">#</a> 二、Vue 项目规范</h3>
<h4 id="一-vue-编码基础" tabindex="-1"><a class="header-anchor" href="#一-vue-编码基础" aria-hidden="true">#</a> (一) Vue 编码基础</h4>
<p>2.1.1. 组件规范</p>
<ol>
<li>
<p>组件名为多个单词。</p>
</li>
<li>
<p>组件文件名为 pascal-case 格式</p>
</li>
<li>
<p>基础组件文件名为 base 开头，使用完整单词而不是缩写。</p>
</li>
<li>
<p>和父组件紧密耦合的子组件应该以父组件名作为前缀命名</p>
</li>
<li>
<p>在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。</p>
</li>
<li>
<p>组件的 data 必须是一个函数</p>
</li>
<li>
<p>Prop 定义应该尽量详细</p>
</li>
<li>
<p>为组件样式设置作用域</p>
</li>
<li>
<p>如果特性元素较多，应该主动换行。</p>
</li>
</ol>
<p>2.1.2. 模板中使用简单的表达式</p>
<p>2.1.3 指令都使用缩写形式</p>
<p>2.1.4 标签顺序保持一致</p>
<p>2.1.5 必须为 v-for 设置键值 key</p>
<p>2.1.6 v-show 与 v-if 选择</p>
<p>2.1.7 script 标签内部结构顺序</p>
<p>2.1.8 Vue Router 规范</p>
<ol>
<li>
<p>页面跳转数据传递使用路由参数</p>
</li>
<li>
<p>使用路由懒加载（延迟加载）机制</p>
</li>
<li>
<p>router 中的命名规范</p>
</li>
<li>
<p>router 中的 path 命名规范</p>
</li>
</ol>
<h4 id="二-vue-项目目录规范" tabindex="-1"><a class="header-anchor" href="#二-vue-项目目录规范" aria-hidden="true">#</a> (二) Vue 项目目录规范</h4>
<p>2.2.1 基础</p>
<p>2.2.2 使用 Vue-cli 脚手架</p>
<p>2.2.3 目录说明</p>
<ol>
<li>
<p>api 目录</p>
</li>
<li>
<p>assets 目录</p>
</li>
<li>
<p>components 目录</p>
</li>
<li>
<p>constants 目录</p>
</li>
<li>
<p>router 与 store 目录</p>
</li>
<li>
<p>views 目录</p>
</li>
</ol>
<p>2.2.4 注释说明</p>
<p>2.2.5 其他</p>
<ol>
<li>
<p>尽量不要手动操作 DOM</p>
</li>
<li>
<p>删除无用代码</p>
</li>
</ol>
<h3 id="前端代码规范" tabindex="-1"><a class="header-anchor" href="#前端代码规范" aria-hidden="true">#</a> 前端代码规范</h3>
<p>image.png</p>
<h2 id="一-编程规约-1" tabindex="-1"><a class="header-anchor" href="#一-编程规约-1" aria-hidden="true">#</a> 一．编程规约</h2>
<p>(一) 命名规范
1.1.1 项目命名
全部采用小写方式，以中线分隔。</p>
<p>image.png</p>
<p>1.1.2 目录命名
全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。</p>
<p>image.png</p>
<p>image.png</p>
<p>1.1.3 JS、CSS、SCSS、HTML、PNG 文件命名
全部采用小写方式， 以中划线分隔。</p>
<p>image.png</p>
<p>1.1.4 命名严谨性
代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用</p>
<p>image.png</p>
<p>杜绝完全不规范的缩写，避免望文不知义：</p>
<p>image.png</p>
<h2 id="二-html-规范-vue-template-同样适用-1" tabindex="-1"><a class="header-anchor" href="#二-html-规范-vue-template-同样适用-1" aria-hidden="true">#</a> (二) HTML 规范 （Vue Template 同样适用）</h2>
<p>1.2.1 HTML 类型
推荐使用 HTML5 的文档类型申明：</p>
<p>image.png</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>正例：
&lt;!DOCTYPE html>
&lt;html>
  &lt;head> 
      &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge" /> 
    &lt;meta charset="UTF-8" /> 
    &lt;title>Page title&lt;/title> 
  &lt;/head>
  &lt;body> 
   &lt;img src="images/company-logo.png" alt="Company">
 &lt;/body> 
  &lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2.2 缩进
缩进使用 2 个空格（一个 tab）；</p>
<p>嵌套的节点应该缩进。</p>
<p>1.2.3 分块注释
在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。</p>
<p>1.2.4 语义化标签
HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标 签。</p>
<p>正例</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;header>&lt;/header> 
&lt;footer>&lt;/footer>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>反例</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div> 
  &lt;p>&lt;/p>
 &lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2.5 引号
使用双引号(&quot; &quot;) 而不是单引号(’ ') 。</p>
<p>image.png</p>
<p>(三) CSS 规范
1.3.1 命名
image.png</p>
<p>不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.fw-800 {
font-weight: 800;
}
.red {
color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.heavy {
font-weight: 800;
}
.important {
color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3.2 选择器</p>
<ol>
<li>
<p>css 选择器中避免使用标签名
image.png</p>
</li>
<li>
<p>使用直接子选择器
image.png</p>
</li>
</ol>
<p>不推荐:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.content .title {
font-size: 2rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.content > .title {
font-size: 2rem;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3.3 尽量使用缩写属性
不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%; line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3.4 每个选择器及属性独占一行
不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>button {
width: 100px;
height: 50px;
color: #fff;
background: #00a0e9;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>button {
width: 100px; height: 50px;
color: #fff;
background: #00a0e9;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3.5 省略 0 后面的单位
不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div {
padding-bottom: 0px;
margin: 0em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>div {
padding-bottom: 0;
margin: 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3.6 避免使用 ID 选择器及全局标签选择器防止污染全局样式
不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#header {
padding-bottom: 0px;
margin: 0em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.header {
padding-bottom: 0px;
margin: 0em;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(四) LESS 规范
1.4.1 代码组织</p>
<ol>
<li>
<p>将公共 less 文件放置在 style/less/common 文件夹
例: // color.less,common.less</p>
</li>
<li>
<p>按以下顺序组织
1、@import;</p>
</li>
</ol>
<p>2、变量声明;</p>
<p>3、样式声明;</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@import "mixins/size.less";
@default-text-color: #333;
.page {
width: 960px;
margin: 0 auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4.2 避免嵌套层级过多
image.png</p>
<p>不推荐：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.main {
.title {
.name {
color: #fff;  
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐" aria-hidden="true">#</a> 推荐:</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  css
.main-title {
   .name { color: #fff; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-javascript-规范-1" tabindex="-1"><a class="header-anchor" href="#五-javascript-规范-1" aria-hidden="true">#</a> (五) Javascript 规范</h2>
<p>1.5.1 命名</p>
<ol>
<li>
<p>采用小写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线， 也不能以下划线或美元符号结束
反例： name / name / name$</p>
</li>
<li>
<p>方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风 格，必须遵从驼峰形式
正例： localValue / getHttpMessage() / inputUserId</p>
</li>
</ol>
<p>其中 method 方法命名必须是 动词 或者 动词+名词 形式</p>
<p>正例： saveShopCarData /openShopCarInfoDialog</p>
<p>反例： save / open / show / go</p>
<p>特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他（目的是为了统一各个端）</p>
<p>add / update / delete / detail / get
附： 函数方法常用的动词:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>get 获取/set 设置, 
add 增加/remove 删除, 
create 创建/destory 销毁, 
start 启动/stop 停止, 
open 打开/close 关闭, 
read 读取/write 写入, 
load 载入/save 保存,
begin 开始/end 结束, 
backup 备份/restore 恢复,
import 导入/export 导出, 
split 分割/merge 合并,
inject 注入/extract 提取,
attach 附着/detach 脱离, 
bind 绑定/separate 分离, 
view 查看/browse 浏览, 
edit 编辑/modify 修改,
select 选取/mark 标记, 
copy 复制/paste 粘贴,
undo 撤销/redo 重做, 
insert 插入/delete 移除,
add 加入/append 添加, 
clean 清理/clear 清除,
index 索引/sort 排序,
find 查找/search 搜索, 
increase 增加/decrease 减少, 
play 播放/pause 暂停, 
launch 启动/run 运行, 
compile 编译/execute 执行, 
debug 调试/trace 跟踪, 
observe 观察/listen 监听,
build 构建/publish 发布,
input 输入/output 输出,
encode 编码/decode 解码, 
encrypt 加密/decrypt 解密, 
compress 压缩/decompress 解压缩, 
pack 打包/unpack 解包,
parse 解析/emit 生成,
connect 连接/disconnect 断开,
send 发送/receive 接收, 
download 下载/upload 上传, 
refresh 刷新/synchronize 同步,
update 更新/revert 复原, 
lock 锁定/unlock 解锁, 
check out 签出/check in 签入, 
submit 提交/commit 交付, 
push 推/pull 拉,
expand 展开/collapse 折叠, 
enter 进入/exit 退出,
abort 放弃/quit 离开, 
obsolete 废弃/depreciate 废旧, 
collect 收集/aggregate 聚集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长
正例： MAX_STOCK_COUNT</li>
</ol>
<p>反例： MAX_COUNT</p>
<p>1.5.2 代码格式</p>
<ol>
<li>使用 2 个空格进行缩进
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>if (x &lt; y) {
 x += 10;
  } else {
   x += 1; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以 提升可读性
说明：任何情形，没有必要插入多个空行进行隔开。</li>
</ol>
<p>1.5.3 字符串
统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处：</p>
<p>正例:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>   let str = 'foo';
   let testDiv = '&lt;div id="test">&lt;/div>'; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let str = 'foo'; 
let testDiv = "&lt;div id='test'>&lt;/div>";
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.5.4 对象声明</p>
<ol>
<li>使用字面值创建对象
正例： let user = {};</li>
</ol>
<p>反例： let user = new Object();</p>
<ol start="2">
<li>使用字面量来代替对象构造器
正例： var user = { age: 0, name: 1, city: 3 };</li>
</ol>
<p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>var user = new Object(); 
user.age = 0; 
user.name = 0; 
user.city = 0; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.5.5 使用 ES6+
image.png</p>
<p>1.5.6 括号
image.png</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>if (condition) { 
doSomething();
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<p>if (condition) doSomething();
1.5.7 undefined 判断
永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> if (typeof person === 'undefined') { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>if (person === undefined) { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.5.8 条件判断和循环最多三层
image.png</p>
<p>1.5.9 this 的转换命名
image.png</p>
<p>1.5.10 慎用 console.log
image.png</p>
<h2 id="二、vue-项目规范-1" tabindex="-1"><a class="header-anchor" href="#二、vue-项目规范-1" aria-hidden="true">#</a> 二、Vue 项目规范</h2>
<h3 id="一-vue-编码基础-1" tabindex="-1"><a class="header-anchor" href="#一-vue-编码基础-1" aria-hidden="true">#</a> (一) Vue 编码基础</h3>
<p>vue 项目规范以 Vue 官方规范 （https://cn.vuejs.org/v2/style-guide/） 中的 A 规范为基础，在其上面进行项目开发，故所有代码均遵守该规范。</p>
<p>请仔仔细细阅读 Vue 官方规范，切记，此为第一步。</p>
<p>2.1.1. 组件规范</p>
<ol>
<li>组件名为多个单词。
组件名应该始终是多个单词组成（大于等于 2），且命名规范为KebabCase格式。</li>
</ol>
<p>这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export default {
  name: 'TodoItem'
  // ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export default {
  name: 'Todo',
  // ...
}
export default {
  name: 'todo-item',
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>组件文件名为 pascal-case 格式
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- my-component.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- myComponent.vue
|- MyComponent.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>基础组件文件名为 base 开头，使用完整单词而不是缩写。
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>和父组件紧密耦合的子组件应该以父组件名作为前缀命名
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue （完整单词）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
|- UProfOpts.vue （使用了缩写）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;!-- 在单文件组件、字符串模板和 JSX 中 -->
&lt;MyComponent />
&lt;Row>&lt;table :column="data"/>&lt;/Row>
反例：

&lt;my-component /> &lt;row>&lt;table :column="data"/>&lt;/row>

6) 组件的 data 必须是一个函数
   image.png

正例：

export default {
  data () {
    return {
      name: 'jack'
    }
  }
}
反例：

export default {
  data: {
    name: 'jack'
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>Prop 定义应该尽量详细
必须使用 camelCase 驼峰命名</li>
</ol>
<p>必须指定类型</p>
<p>必须加上注释，表明其含义</p>
<p>必须加上 required 或者 default，两者二选其一</p>
<p>如果有业务需要，必须加上 validator 验证</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> props: {
  // 组件状态，用于控制组件的颜色
   status: {
     type: String,
     required: true,
     validator: function (value) {
       return [
         'succ',
         'info',
         'error'
       ].indexOf(value) !== -1
     }
   },
    // 用户级别，用于显示皇冠个数
   userLevel：{
      type: String,
      required: true
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>为组件样式设置作用域
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;button class="btn btn-close">X&lt;/button>
&lt;/template>
&lt;!-- 使用 `scoped` 特性 -->
&lt;style scoped>
  .btn-close {
    background-color: red;
  }
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;button class="btn btn-close">X&lt;/button>
&lt;/template>
&lt;!-- 没有使用 `scoped` 特性 -->

&lt;style>
  .btn-close {
    background-color: red;
  }
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li>如果特性元素较多，应该主动换行。
正例：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;MyComponent foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c"
    foo="a" bar="b" baz="c"
 />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;MyComponent foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b" baz="c"/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.1.2. 模板中使用简单的表达式
组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;p>{{ normalizedFullName }}&lt;/p>
&lt;/template>
// 复杂表达式已经移入一个计算属性

computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
  &lt;p>
       {{
          fullName.split(' ').map(function (word) {
             return word[0].toUpperCase() + word.slice(1)
           }).join(' ')
        }}
  &lt;/p>
&lt;/template>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.1.3 指令都使用缩写形式
指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;input
  @input="onInput"
  @focus="onFocus"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>
<p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;input
  v-on:input="onInput"
  @focus="onFocus"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote></blockquote>
<p>2.1.4 标签顺序保持一致
单文件组件应该总是让标签顺序保持为 `</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>...&lt;/template>
&lt;script>...&lt;/script>
&lt;style>...&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>...&lt;/template>
&lt;style>...&lt;/style>
&lt;script>...&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.1.5 必须为 v-for 设置键值 key
2.1.6 v-show 与 v-if 选择
如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if。</p>
<h3 id="_2-1-7-script-标签内部结构顺序" tabindex="-1"><a class="header-anchor" href="#_2-1-7-script-标签内部结构顺序" aria-hidden="true">#</a> 2.1.7 script 标签内部结构顺序</h3>
<p>components &gt; props &gt; data &gt; computed &gt; watch &gt; filter &gt; 钩子函数（钩子函数按其执行顺序） &gt; methods</p>
<h3 id="_2-1-8-vue-router-规范" tabindex="-1"><a class="header-anchor" href="#_2-1-8-vue-router-规范" aria-hidden="true">#</a> 2.1.8 Vue Router 规范</h3>
<h4 id="_1-页面跳转数据传递使用路由参数" tabindex="-1"><a class="header-anchor" href="#_1-页面跳转数据传递使用路由参数" aria-hidden="true">#</a> 1) 页面跳转数据传递使用路由参数</h4>
<p>页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。</p>
<p>正例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let id = ' 123';
this.$router.push({ name: 'userCenter', query: { id: id } });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用路由懒加载-延迟加载-机制" tabindex="-1"><a class="header-anchor" href="#_2-使用路由懒加载-延迟加载-机制" aria-hidden="true">#</a> 2) 使用路由懒加载（延迟加载）机制</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
 path: '/uploadAttachment',
 name: 'uploadAttachment',
 meta: {
   title: '上传附件'
},
component: () => import('@/view/components/uploadAttachment/index.vue')
 },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-router-中的命名规范" tabindex="-1"><a class="header-anchor" href="#_3-router-中的命名规范" aria-hidden="true">#</a> 3)router 中的命名规范</h4>
<p>path、childrenPoints 命名规范采用kebab-case命名规范（尽量vue文件的目录结构保持一致，因为目录、文件名都是kebab-case，这样很方便找到对应的文件）</p>
<p>name 命名规范采用KebabCase命名规范且和component组件名保持一致！（因为要保持keep-alive特性，keep-alive按照component的name进行缓存，所以两者必须高度保持一致）</p>
<p>//动态加载</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export const reload = [
  {
    path: '/reload',
    name: 'reload',
    component: Main,
    meta: {
      title: '动态加载',
      icon: 'icon iconfont'
    },
    children: [
      {
        path: '/reload/smart-reload-list',
        name: 'SmartReloadList',
        meta: {
          title: 'SmartReload',
          childrenPoints: [
            {
              title: '查询',
              name: 'smart-reload-search'
            },
            {
              title: '执行reload',
              name: 'smart-reload-update'
            },
            {
              title: '查看执行结果',
              name: 'smart-reload-result'
            }
          ]
        },
        component: () =>
          import('@/views/reload/smart-reload/smart-reload-list.vue')
      }
    ]
  }
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-router-中的-path-命名规范" tabindex="-1"><a class="header-anchor" href="#_4-router-中的-path-命名规范" aria-hidden="true">#</a> 4) router 中的 path 命名规范</h4>
<p>path除了采用kebab-case命名规范以外，必须以 / 开头，即使是children里的path也要以 / 开头。如下示例</p>
<p>目的：</p>
<p>经常有这样的场景：某个页面有问题，要立刻找到这个vue文件，如果不用以/开头，path为parent和children组成的，可能经常需要在router文件里搜索多次才能找到，而如果以/开头，则能立刻搜索到对应的组件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    path: '/file',
    name: 'File',
    component: Main,
    meta: {
      title: '文件服务',
      icon: 'ios-cloud-upload'
    },
    children: [
      {
        path: '/file/file-list',
        name: 'FileList',
        component: () => import('@/views/file/file-list.vue')
      },
      {
        path: '/file/file-add',
        name: 'FileAdd',
        component: () => import('@/views/file/file-add.vue')
      },
      {
        path: '/file/file-update',
        name: 'FileUpdate',
        component: () => import('@/views/file/file-update.vue')
      }
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-vue-项目目录规范-1" tabindex="-1"><a class="header-anchor" href="#二-vue-项目目录规范-1" aria-hidden="true">#</a> (二) Vue 项目目录规范</h3>
<p>2.2.1 基础
vue 项目中的所有命名一定要与后端命名统一。</p>
<p>比如权限：后端 privilege, 前端无论 router , store, api 等都必须使用 privielege 单词！</p>
<p>2.2.2 使用 Vue-cli 脚手架</p>
<p>使用 vue-cli3 来初始化项目，项目名按照上面的命名规范。</p>
<p>2.2.3 目录说明</p>
<p>目录名按照上面的命名规范，其中 components 组件用大写驼峰，其余除 components 组件目录外的所有目录均使用 kebab-case 命名。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>src                                  源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- filters                          过滤器，全局工具
|-- datas                            模拟数据，临时存放
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- themes                           自定义样式主题
|-- views                            视图目录
|   |-- role                                 role模块名
|   |-- |-- role-list.vue                    role列表页面
|   |-- |-- role-add.vue                     role新建页面
|   |-- |-- role-update.vue                  role更新页面
|   |-- |-- index.less                       role模块样式
|   |-- |-- components                       role模块通用组件文件夹
|   |-- employee                             employee模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-api-目录" tabindex="-1"><a class="header-anchor" href="#_1-api-目录" aria-hidden="true">#</a> 1) api 目录</h4>
<p>文件、变量命名要与后端保持一致。</p>
<p>此目录对应后端 API 接口，按照后端一个 controller 一个 api js 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。</p>
<p>api 中的方法名字要与后端 api url 尽量保持语义高度一致性。</p>
<p>对于 api 中的每个方法要添加注释，注释与后端 swagger 文档保持一致。</p>
<p>正例：</p>
<p>后端 url： EmployeeController.java</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/employee/add
/employee/delete/{id}
/employee/update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前端： employee.js</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 添加员工
  addEmployee: (data) => {
    return postAxios('/employee/add', data)
  },
  // 更新员工信息
  updateEmployee: (data) => {
    return postAxios('/employee/update', data)
  },
    // 删除员工
  deleteEmployee: (employeeId) => {
    return postAxios('/employee/delete/' + employeeId)
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-assets-目录" tabindex="-1"><a class="header-anchor" href="#_2-assets-目录" aria-hidden="true">#</a> 2) assets 目录</h4>
<p>assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 kebab-case</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>|assets
|-- icons
|-- images
|   |-- background-color.png
|   |-- upload-header.png
|-- styles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-components-目录" tabindex="-1"><a class="header-anchor" href="#_3-components-目录" aria-hidden="true">#</a> 3) components 目录</h4>
<p>此目录应按照组件进行目录划分，目录命名为 KebabCase，组件命名规则也为 KebabCase</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>|components
|-- error-log
|   |-- index.vue
|   |-- index.less
|-- markdown-editor
|   |-- index.vue
|   |-- index.js
|-- kebab-case
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-constants-目录" tabindex="-1"><a class="header-anchor" href="#_4-constants-目录" aria-hidden="true">#</a> 4) constants 目录</h4>
<p>此目录存放项目所有常量，如果常量在 vue 中使用，请使用 vue-enum 插件(https://www.npmjs.com/package/vue-enum)</p>
<p>目录结构：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>|constants
|-- index.js
|-- role.js
|-- employee.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子： employee.js</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: '正常'
  },
  DISABLED: {
    value: 1,
    desc: '禁用'
  },
  DELETED: {
    value: 2,
    desc: '已删除'
  }
};
export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ: {
    value: 1,
    desc: 'QQ登录'
  },
  WECHAT: {
    value: 2,
    desc: '微信登录'
  },
  DINGDING: {
    value: 3,
    desc: '钉钉登录'
  },
  USERNAME: {
    value: 4,
    desc: '用户名密码登录'
  }
};
export default {
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-router-与-store-目录" tabindex="-1"><a class="header-anchor" href="#_5-router-与-store-目录" aria-hidden="true">#</a> 5) router 与 store 目录</h4>
<p>这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。</p>
<p>router 尽量按照 views 中的结构保持一致</p>
<p>store 按照业务进行拆分不同的 js 文件</p>
<h4 id="_6-views-目录" tabindex="-1"><a class="header-anchor" href="#_6-views-目录" aria-hidden="true">#</a> 6) views 目录</h4>
<p>命名要与后端、router、api 等保持一致</p>
<p>components 中组件要使用 PascalCase 规则</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>|-- views                                    视图目录
|   |-- role                                 role模块名
|   |   |-- role-list.vue                    role列表页面
|   |   |-- role-add.vue                     role新建页面
|   |   |-- role-update.vue                  role更新页面
|   |   |-- index.less                      role模块样式
|   |   |-- components                      role模块通用组件文件夹
|   |   |   |-- role-header.vue             role头部组件
|   |   |   |-- role-modal.vue              role弹出框组件
|   |-- employee                            employee模块
|   |-- behavior-log                        行为日志log模块
|   |-- code-generator                      代码生成器模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-4-注释说明" tabindex="-1"><a class="header-anchor" href="#_2-2-4-注释说明" aria-hidden="true">#</a> 2.2.4 注释说明</h3>
<p>整理必须加注释的地方</p>
<p>公共组件使用说明</p>
<p>api 目录的接口 js 文件必须加注释</p>
<p>store 中的 state, mutation, action 等必须加注释</p>
<p>vue 文件中的 template 必须加注释，若文件较大添加 start end 注释</p>
<p>vue 文件的 methods，每个 method 必须添加注释</p>
<p>vue 文件的 data, 非常见单词要加注释</p>
<h4 id="_2-2-5-其他" tabindex="-1"><a class="header-anchor" href="#_2-2-5-其他" aria-hidden="true">#</a> 2.2.5 其他</h4>
<ol>
<li>
<p>尽量不要手动操作 DOM
因使用 vue 框架，所以在项目开发中尽量使用 vue 的数据驱动更新 DOM，尽量（不到万不得已）不要手动操作 DOM，包括：增删改 dom 元素、以及更改样式、添加事件等。</p>
</li>
<li>
<p>删除无用代码
因使用了 git/svn 等代码版本工具，对于无用代码必须及时删除，例如：一些调试的 console 语句、无用的弃用功能代码。</p>
</li>
</ol>
</div></template>


