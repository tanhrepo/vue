# CSS笔记
## 哪个属性将连续播放嵌入到 audio 元素中的音频(loop)
|属性		|描述
|:-:		|:-
|autoplay	|如果出现该属性，则音频在就绪后马上播放。
|controls	|如果出现该属性，则向用户显示控件，比如播放按钮。
|loop		|如果出现该属性，则每当音频结束时重新开始播放。
|muted		|规定视频输出应该被静音。					
|preload	|如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
|url		|要播放的音频的 URL。

## css 如何使用服务端的字体：@font-face
指定名为"myFirstFont"的字体，并指定在哪里可以找到它的URL：
```
@font-face
{
@font-face
{
	font-family: myFirstFont;
	src: url('Sansation_Light.ttf')
		,url('Sansation_Light.eot'); /* IE9 */
}

div
{
	font-family:myFirstFont;
}
```
#### 属性定义及使用说明
@font-face规则，网页设计师再也不必使用的"web-safe"的字体之一。

字体的名称，font - face规则：
```
font-family: myFirstFont;
```
字体文件包含在您的服务器上的某个地方，参考CSS：
```
src: url('Sansation_Light.ttf')
```
如果字体文件是在不同的位置，请使用完整的URL：
```
src: url('http://www.w3cschool.css/css3/Sansation_Light.ttf')
```

## 不换行必须设置哪些项
word-break;word-space

**通过使用 word-break 属性，可以让浏览器实现在任意位置的换行。**

|值			|描述							|
|:-:		|:-								|
|normal		|使用浏览器默认的换行规则。		|
|break-all	|允许在单词内换行。				|
|keep-all	|只能在半角空格或连字符处换行。		|

**white-space 属性设置如何处理元素内的空白。**

|值			|描述
|:-:		|:-
|normal		|默认。空白会被浏览器忽略。
|pre		|空白会被浏览器保留。其行为方式类似 HTML 中的 \<pre> 标签。
|nowrap		|文本不会换行，文本会在在同一行上继续，直到遇到 \<br> 标签为止。
|pre-wrap	|保留空白符序列，但是正常地进行换行。
|pre-line	|合并空白符序列，但是保留换行符。
|inherit	|规定应该从父元素继承 white-space 属性的值。

## 以下关于跨域的描述哪些是正确的:
>1. CSS文件的加载不受跨域限制  
2. `window.onerror`方法默认情况下无法获取跨域脚本的报错详情  
3. canvas中使用drawImage贴图会受跨域限制