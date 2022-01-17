const winston = require('winston');

const logger = winston.createLogger({
    level: 'warn',
    transports: [
        new winston.transports.Console({level: 'verbose'}),
        new winston.transports.Console({ filename: 'error.log',level: 'error'}),
        new winston.transports.Console({filename: 'warn.log', level: 'warn'})
    ]
})

module.exports = logger;