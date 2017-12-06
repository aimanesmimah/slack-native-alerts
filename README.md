## slack-native-alerts

[![npm version](https://badge.fury.io/js/slack-native-alerts.svg)](https://badge.fury.io/js/slack-native-alerts)

Dipslay Desktop alerts that lets the user aware of slack users activity

> support currently only `macOS` and `windows` platforms


<img src="/exemple/images/me.png" width="400">

<img src="/exemple/images/me2.png" width="400">

<img src="/exemple/images/as.png" width="400">


## Install

```
npm install -g slack-native-alerts
```

## Usage

First of all you should get a token for client authentication, grab one from here: https://api.slack.com/docs/oauth-test-tokens

Then using your terminal type:

```
slack-native-alerts --token YOUR_SLACK_TOKEN --os YOUR_OPERATING_SYSTEM
```

arguments list:


`--token` (required) Set your generated slack token

`--os` (required) Set your operating system. (values : mac || win )

`-h` : display the help message. 


## License

MIT
