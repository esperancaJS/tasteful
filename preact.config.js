const CopyWebpackPlugin = require('copy-webpack-plugin');

export default function (config, env, helpers) {

    config.plugins.push(
        new CopyWebpackPlugin([{
            from: 'src/assets/**/**', 
            to: 'build/assets'
        }])
    );

}