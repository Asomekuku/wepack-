//webpack是基于node.js环境

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
//绝对路径
const  path = require('path')
//entry: path.resolve(__dirname,'./src/main.js')

module.exports = {
    mode: 'production',

    //入口：指定webpack打包或本地服务运行时的程序入口文件
    entry:'./src/main.js',

    //出口：打包之后，打包结果存放 如dist
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    //loaders：用于对代码中各种文件进行编译转换，目标是转换成浏览器能够识别的代码
    //plugins：用于扩展功能
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./public/index.html'),//指定打包的html模板路径
            title:'你的',//指定打包后的title 在html title写<%= htmlWebpackPlugin.options.title %>
        }),
        //用于热更新功能
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    //安装webpack-dev-server -g(-D)
    devServer: {
        //启动命令：webpack-dev-server 
        port: '8090',//端口号
        open: true,//启动服务自动打开浏览器
        contentBase: path.resolve(__dirname,'pulic'),//本地服务静态资源目录
        hot: true,//开启热更新功能
    },
    module: {
        //use使用的loader需进行下载
        rules: [
            //test规则,use用什么loader来转换,顺序：从右到左，从下到上
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
}

