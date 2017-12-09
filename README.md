# demo

> A Vue.js project

## Build Setup

``` bash
# 安裝 node >= 4.0.0
https://nodejs.org/en/

# 安裝開發所需套件 (package.json)
npm i

# 啟動開發環境 localhost: 8080 支援hot reload 
npm run dev

# 打包所有檔案並產生 dist目錄
npm run build


```


``` 
# 目錄結構
|--dist  // 打包完成的程式碼 ** http server
|--build  //webpack相關程式碼
|  |--build.js //production環境結構相關
|  |--check-version.js //檢查node、npm、等版本
|  |--utils.js  //構建工具
|  |--webpack.base.conf.js //webpack基本配置
|  |--webpack.dev.conf.js //webpack開發環境配置
|  |--webpack.prod.conf.js  //webpack輸出成production環境配置
|--config  //開發環境配置
|  |--dev.env.js  //開發環境變數
|  |--index.js  //基本配置
|  |--prod.env.js  //production環境變數
|--src  // 開發目錄
|  |--router
|  |  |--index.js  //router
|  |--components  //组件
|  |--APP.vue  //入口文件，root組件
|  |--main.js  //程式入口，整合所有程式
|--static  
|--index.html 

```


