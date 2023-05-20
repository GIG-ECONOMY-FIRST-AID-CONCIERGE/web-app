/** @type {import('next').NextConfig} */
const nextConfig = {
    // Adicione esta configuração para copiar o arquivo log.js para a pasta de saída durante o processo de construção
    webpack(config, options) {
        config.module.rules.push({
            test: /log\.js$/,
            loader: 'file-loader',
            options: {
                publicPath: `/_next/static/logs/`, // Caminho público para o arquivo log.js
                outputPath: 'static/logs/', // Caminho de saída relativo dentro da pasta .next
                name: '[name].[hash].[ext]' // Nome do arquivo de saída
            }
        });

        return config;
    }
};

module.exports = nextConfig;

