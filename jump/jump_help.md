### Tobby URL Jump 使用说明

首先，这是jump.html的位置
https://tobby3600.github.io/jump/jump.html

接下来，怎样提交跳转呢？
看一个例子
https://tobby3600.github.io/jump/jump.html?to_url=http://www.baidu.com

你可以在浏览器打开它，然后你就跳转到了http://www.baidu.com

## 目前，jump提供两个参数:to_url和is_base64

to_url是一个字符串，你需要输入网址(含http/https协议头)
is_base64是附带的base64开关
is_base64=true时，你的to_url需要输入一个base64字符串
然后jump.html会自动解码

例子
https://tobby3600.github.io/jump/jump.html?to_url=aHR0cDovL3d3dy5iYWlkdS5jb20=&is_base64=true
结果是你也到达了http://www.baidu.com

*is_base64是可选参数，若不写默认为false

以上是目前的全部功能