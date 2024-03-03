const { createLogger, format, transports } = require('winston');// createLogger is a (), rest are {}
const { combine, timestamp, label, printf } = format; // destructured the format {}

const customFormat = printf(( { level, message, timestamp } ) => {  //printf takes a cb() as arg which has a destructured {}
    return `${timestamp} : ${level} : ${message}`;
  });


const logger = createLogger({
    format: combine(
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ]
});


module.exports = logger;