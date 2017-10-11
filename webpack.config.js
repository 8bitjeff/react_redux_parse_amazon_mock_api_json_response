module.exports = {
    entry:"./dev/entry.js",
    output:{
        filename: "./public/build/bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" },
            { 
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude: /node_modules/, 
                query:{
                    presets:['es2016','react']
                }
            }
    
        ]
    }
};