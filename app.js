#! /usr/bin/env node

var yargs = require('yargs');

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RtmClient = require('@slack/client').RtmClient;


console.log(yargs.argv);



var config = {
    TOKEN : yargs.argv.token ,
    MY_USERNAME : null,
    CHANNEL :null
}


if(config.TOKEN) {


    var rtmClient = new RtmClient(config.TOKEN);
    //console.log(rtmClient);



    rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmDataStart) => {

        //console.log(JSON.stringify(rtmDataStart));
        config.CHANNEL = rtmDataStart.channels[1].id;
    });





    rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
        console.log(config.CHANNEL);
        //rtmClient.sendMessage('hello from nodejs client', channel);
    });

    rtmClient.start();
}

else {
    const message = "HELP[!]\n--token : set your slack token, to get it go ahead to " +
        "(https://api.slack.com/docs/oauth-test-tokens) and generate one using your team slack account";

    console.log(message);
    process.exit();
}