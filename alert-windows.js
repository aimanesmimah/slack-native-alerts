var WindowsBalloon = require('node-notifier').WindowsBalloon;



module.exports = function (message) {
    var notifier = new WindowsBalloon({
        withFallback : false// Defaults as 'Node'
    });

    var notification = {
        title: 'Slack',
        message:  message,
        wait : true
    }

    notifier.notify(notification,function (error,response) {
        if(error)
            return console.log(error);
        console.log(response);
        console.log('notifier');
    });
}