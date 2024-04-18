//配置文件
module.exports = {
    
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
            },
        ],
    }
}