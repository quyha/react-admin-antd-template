const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1F2531',
                            '@layout-sider-background': '#2d3446',
                            '@layout-header-height': '70px',
                            '@menu-dark-bg': 'transparent',
                            '@menu-icon-margin-right': '30px',
                            '@menu-dark-inline-submenu-bg': '#202739',
                            '@border-radius-base': '5px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};