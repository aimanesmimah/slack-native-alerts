

var yargs = require('yargs');


module.exports = {
    TOKEN : yargs.argv.token ,
    OS : yargs.argv.os ,
    H : yargs.argv.h ,
    MY_USERNAME : null,
    CHANNEL :null,
    PRESENCE_USER_ID : null,
    CONSOLE_MESSAGE : "HELP[!]\n--token : set your slack token, to get it go ahead to " +
    "(https://api.slack.com/docs/oauth-test-tokens) and generate one using your team slack account" +
    "\n--os : set your operating system (win || mac || linux ) , be sure to provide the right option" +
    "\n--help || -h : display this information"
}