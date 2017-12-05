const NotificationCenter = require('node-notifier').NotificationCenter;
const path = require('path');


module.exports = function (message) {
    var notifier  = new NotificationCenter({
        withFallback : false ,

    });

    notifier.notify({
        title : 'slack',
        message : message ,
        sound : true ,
        icon : path.join(__dirname,'slack.png'),
        wait : false
    },function (err,res,metaData) {
        console.log(res,metaData);
    });
}

