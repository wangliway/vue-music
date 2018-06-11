# vue-music
慕课网vue 音乐app 的 一些笔记
> a music webapp demo by vue 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

--- 

# Notes

- ```.gitkeep``` git 不跟踪空文件夹 加.gitkeep 防止忽略该文件夹
---
- npm install module-name -save 自动把模块和版本号添加到dependencies部分
- npm install module-name -save-dve 自动把模块和版本号添加到devdependencies部分

---
- fastclick 
> 在移动浏览器中，当你点击按钮的单击事件时，将会等待大约300ms的时间。这是因为，浏览器是等着看，如果你是真正执行双击。 fastclick 取消300ms 延迟

---
- babel-polyfill
> Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
>  举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

--- 
- 像素比
根据设备不同的尺寸加载不同的logo
[常见设备像素比](https://guide.aotu.io/docs/css/query.html)

```css
// 背景图片
bg-image($url)
  background-image: url($url + "@2x.png")  //正常的logo
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
    background-image: url($url + "@3x.png")  //像素比是3的时候的logo

```
---

- & 引用父级元素

```css
&.router-link-active       
```
--- 

- jsonp
> -  跨域的安全限制都是对浏览器端来说的，服务器端是不存在跨域安全限制的。
> - 浏览器的同源策略限制从一个源加载的文档或脚本与来自另一个源的资源进行交互。
> -  如果协议，端口和主机对于两个页面是相同的，则两个页面具有相同的源，否则就是不同源的。
> - 如果要在js里发起跨域请求，则要进行一些特殊处理了。或者，你可以把请求发到自己的服务端，再通过后台代码发起请求，再将数据返回前端。

- encodeURIComponent
> 对URL进行转义
---
- 不换行
```css
white-space:nowrap;
overflow:hidden; 

//文字显示省略号
white-space:nowrap
overflow:hidden
text-overflow:ellipsis
```
--- 

- [box-sizing](https://www.jianshu.com/p/e2eb0d8c9de6)
> 设置盒子模型 盒子的宽度就是width

--- 
- 挂载时间
```javascript
    //浏览器刷新频率为17ms 
    mounted(){
      setTimeout(()=>{

      },20)
    }
```
---
- mounted
> 在轮播组件引入时为了在数据加载后设置轮播组件mounted 里的函数 加 v-if 进行判断 有数据了才进行挂载轮播组件
> scroll 插件使用时 需要监听传入滚动数据内容 因为在mounted的时候 可能数据还没有请求加载完 导致没有撑开高度
所以需要监听滚动的数据重新刷新 best-scroll 插件


- es6 class
> 类的所有方法都定义在类的prototype属性上面
```javascript
export default class singer {
  //对象的结构赋值  此时的this 代表实例
  constructor({id,name}){
    this.id = id
    this.name = name
    this.avatar =  `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
```

- 歌手快速选择的时候的布局
> 先将顶部top 到y轴50% 然后 利用transform 对半分shortcut
```css
      right 0
      top 50%
      transform translateY(-50%)
```

- line-height
>   - normal
  取决于用户端。桌面浏览器（包括Firefox）使用默认值，约为1.2，这取决于元素的 font-family。
>  - <数字>
  该属性的应用值是这个无单位数字<数字>乘以该元素的字体大小。计算值与指定值相同。大多数情况下，这是设置line-height的推荐方法，不会在继承时产生不确定的结果。
>  - <长度>
  指定<长度>用于计算 line box 的高度。查看<长度> 获取可能的单位。以em为单位的值可能会产生不确定的结果（见下面的例子）。
>  - <百分比>
  与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。百分比值可能会带来不确定的结果（见下面第二个例子）。


```css
line-height: 1px;
```


- js | 的小技巧
>  在js整数操作的时候，相当于去除小数点，parseInt。在正数的时候相当于Math.floor(),负数的时候相当于Math.ceil() 注：
```javascript
Math.ceil()用作向上取整。
Math.floor()用作向下取整。
Math.round() 我们数学中常用到的四舍五入取整。

console.log(0.6|0)//0
console.log(1.1|0)//1
console.log(3.65555|0)//3
console.log(5.99999|0)//5
console.log(-7.777|0)//-7

var foo = 10;
foo == 10 && doSomething(); // 等价于 if (foo == 10) doSomething();
foo == 5 || doSomething(); // 等价于 if (foo != 5) doSomething();

function doSomething(arg1){
    Arg1 = arg1 || 10; // 如果arg1没有被设置的话，Arg1将被默认设成10
}
```
