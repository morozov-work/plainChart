const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'plainChart.js',
    library: 'plainChart',
    libraryTarget: 'var',
    },

    watch: false,

    devtool: "source-map",

    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use: [
                            "style-loader", 
                            "css-loader", 
                            {
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                    plugins: [ ["autoprefixer", {}] ],
                                },
                            },
                        },],
                },
                
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                            "style-loader", 
                            "css-loader", 
                            {
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                    plugins: [ ["autoprefixer", {}] ],
                                        },
                                    },
                                },
                            "sass-loader"
                        ],
                },
        ]
    },

    mode: 'development',
};