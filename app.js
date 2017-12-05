#! /usr/bin/env node

var yargs = require('yargs');

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RtmClient = require('@slack/client').RtmClient;
var MemoryDataStore = require('@slack/client').MemoryDataStore;

var windowsAlert = require('./alert-windows');
var macOSAlert = require('./alert-macOs');
var path = require('path');

var WindowsToaster = require('node-notifier/notifiers/toaster')



console.log(yargs.argv);



var config = {
    TOKEN : yargs.argv.token ,
    MY_USERNAME : null,
    CHANNEL :null,
    PRESENCE_USER_ID : null
}


if(config.TOKEN) {


    var rtmClient = new RtmClient(config.TOKEN, { logLevel: 'error', dataStore: new MemoryDataStore() });
    //console.log(rtmClient);



    rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmDataStart) => {

        config.MY_USERNAME = rtmDataStart.self.name;
        config.CHANNEL = rtmDataStart.channels[1].id;
    });





    rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
        console.log(config.CHANNEL);
        //rtmClient.sendMessage('hello from nodejs client', channel);
    });

    rtmClient.on(RTM_EVENTS.PRESENCE_CHANGE , (data) => {
       console.log('presence change',data);
        var user = rtmClient.dataStore.getUserById(data.user);
       let status ;
       if(data.presence === 'away'){
           status = 'offline' ;
       }

       if(data.presence === 'active'){
           status = 'online'
       }

       if(config.MY_USERNAME === user.name){
           user.name = "you" ;
       }



       var notificationMessage = user.name + " has just went " + status ;

       //windowsAlert(notificationMessage);

       console.log('node notifier');


    });

    rtmClient.start();
}

else {
    const message = "HELP[!]\n--token : set your slack token, to get it go ahead to " +
        "(https://api.slack.com/docs/oauth-test-tokens) and generate one using your team slack account";

    console.log(message);
    process.exit();
}