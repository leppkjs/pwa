const path = require('path');
const fs = require('fs');
const resolve = dir => path.join(__dirname, dir);

const config = {
    pluginOptions: {
      i18n: {
        localeDir: 'locales',
        enableInSFC: true
      },
      moment: {
        locales: [
          'ko',
          'ja',
          'zh-tw',
          'zh-cn',
          'de',
          'en',
          'es',
          'fr',
          'pt'
        ]
      },
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/'
        ],
        useRenderEvent: true,
        headless: true,
        onlyProduction: true
      }
    },
    devServer: {
        // http2: true,
        // https: {
        //     key: fs.readFileSync('cert/star.onstove.com/onstove_private.key'),
        //     cert: fs.readFileSync('cert/star.onstove.com/onstove_private.crt'),
        //     ca: fs.readFileSync('cert/star.onstove.com/onstove_private.pem')
        // },
        disableHostCheck: true,
        compress: true,
        port: 9000,
        allowedHosts: [
            'localhost',
            'onstove.com'
        ]
    },
    productionSourceMap: false,
    pwa: {
        name: 'Stove'
    }
};

module.exports = config;
