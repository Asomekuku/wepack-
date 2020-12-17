# 环境

node.js v10+
windows 64bit

# 起步
创建项目文件
npm init -y 生成package.json

cnpm install webpack -g
cnpm install webpack-cli -g

cnpm install webpack -D
cnpm install webpack-cli -D

创建webpack的配置文件，webpack.config.js

配置文件
设置入口文件：entry
出口：output

打包命令：webpack 或webpack --config xxx.js

# 使用plugins
1.HtmlWebpackPligin
    它的作用是自动生成一个index.html单页面，并且把打包后.js脚本文件插入进去

# 搭建devServer
npm install webpack-dev-server -g
npm install webpack-dev-server -D

# 热更新
HMR:局部代码发生变化时，不用刷新整个页面
1.在devServer中，配置hot:true
2.引入webpack模块，添加两个plugin插件
 new webpack.NamedModulesPlugin(),
new webpack.HotModuleReplacementPlugin()

# 使用sass
npm install style-loader -D
npm install css-loader -D
npm install sass-loader -D
npm install node-sass -D
(node-sass安装失败，把nodemodules删除)

