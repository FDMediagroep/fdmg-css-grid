module.exports = {
    /**
    * Application configuration section
    * http://pm2.keymetrics.io/docs/usage/application-declaration/
    */
    apps : [

        // First application
        {
            name        : '[3008] CSS Grid',
            script      : 'dist/index.js',
            watch       : ['dist'],
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production : {
                NODE_ENV: 'production'
            }
        }
    ]
};
