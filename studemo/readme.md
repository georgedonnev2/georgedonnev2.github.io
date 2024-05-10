
## 安装
### step-1 初始化项目
```shell
~/0gdh/gdv2web % mkdir studemo
~/0gdh/gdv2web % cd studemo
~/0gdh/gdv2web/studemo % npm init
```
此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：
```shell
entry point: (index.js)
```
键入 studemo.js 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 index.js 文件名，只需按“回车”键即可。

在vscode中查看生成的package.json，或者输入如下cat命令查看
```shell
~/0gdh/gdv2web/studemo % cat package.json
```
以下是npm init 命令生成的package.json
```json
{
  "name": "studemo",
  "version": "1.0.0",
  "description": "demo of student management",
  "main": "studemo.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "George Donne",
  "license": "ISC"
}
```

### step-2 安装express
输入npm install express --save
```shell
~/0gdh/gdv2web/studemo % npm install express --save

added 64 packages, and audited 65 packages in 12s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
安装express完成后，新增node_modules目录和package-lock.json文件。
```shell
~/0gdh/gdv2web/studemo % ls -l
total 72
drwxr-xr-x  67 george1442  staff   2144 May 10 09:22 node_modules
-rw-r--r--   1 george1442  staff  25436 May 10 09:22 package-lock.json
-rw-r--r--   1 george1442  staff    293 May 10 09:22 package.json
-rw-r--r--   1 george1442  staff    935 May 10 09:20 readme.md
```
### step-3 安装express-generator，并指定视图模版引擎为pug
输入命令npx express-generator --view=pug
```shell
~/0gdh/gdv2web/studemo % npx express-generator --view=pug
destination is not empty, continue? [y/N] y

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.pug
   create : views/index.pug
   create : views/layout.pug
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=studemo:* npm start
```