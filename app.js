#! /usr/bin/env node

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RtmClient = require('@slack/client').RtmClient;


var token = 'xoxp-279576347152-280233591538-280320322114-cc87930d23883fa47792da284bc84149';
let channel ;

var rtmClient = new RtmClient(token);


rtmClient.on(CLIENT_EVENTS.RTM.AUTHENTICATED,(rtmDataStart) => {
    console.log(JSON.stringify(rtmDataStart));
    channel = rtmDataStart.channels[1].id;
});


rtmClient.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED,() => {
    console.log(channel);
    rtmClient.sendMessage('hello from nodejs client',channel);
});

rtmClient.start();