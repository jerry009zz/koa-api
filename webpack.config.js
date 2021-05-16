const path=require('path')
const nodeExcternals=require('webpack-node-externals')
const { CleanWebpackPlugin }=require('clean-webpack-plugin')

const webpackConfig={
    target:'node',
    mode:'development',
    entry:{
        server:path.join(__dirname,'./src/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'./dist')
    },
    devtool:'eval-cheap-source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:[path.join(__dirname,'/node_modules')]
            }
        ]
    },
    externals:[nodeExcternals()],
    plugins:[
        new CleanWebpackPlugin()
    ],
    target:'node'
}

module.exports=webpackConfig