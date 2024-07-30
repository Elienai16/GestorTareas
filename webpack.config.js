const path = require('path');

module.exports = {
    entry: '-/src/index.js', //Punto de entrada de la aplicacion//
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida//
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida//
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Expresion regulr que sirve para identificar archivos css//
                uses: ['style-louder', 'css-loader',] //Librerias Loaders que nos ayudara a procesar archivos css//
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS//
                exclude: /node_modules/, //Excluir la carpeta node_modules//
                use: {
                    loader: 'babel-loader', //Loader para pasar nuestro JS moderno a JS mas antiguo parar todos los navegadores//
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion//
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta principañ del servidor//
        compress: true, //Habilitar la comprensión gzip
        port: 9000, //Puerto del servidor del desarrollo//
    },
};