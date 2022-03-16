## 安装

```
npm install tools
```

## 导入

```js
const tolls = require("tools");
```

### 格式化时间

```js
const str = tools.dateFormat(new Date());
console.log(str);
```

### 转义 HTML 中的特殊字符

```js
const htmlStr = '<h1 title="abc>标签<span>&nbsp;</span>/</h1>';
cosnt str = tools.htmlEscape(htmlStr);
console.log(str);
```

### 还原 HTML 中的特殊字符

```js
const htmlStr = tools.htmlEscape('<h1 title="abc>标签<span>&nbsp;</span>/</h1>');
cosnt str = tools.htmlUnEscape(htmlStr) ;
console.log(str);
```

## 开源协议

ISC
