# CLI Discord Bot

## Introduction

> Code for a discord.js bot which interacts with the command line of the server hosting it.

## Code Samples

> 29 lines, but main code is here
```js
exec(message.content, (error, stdout, stderr) => {
        if (error) {
            message.channel.send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            message.channel.send(`stderr: ${stderr}`);
            return;
        }
        message.channel.send(`stdout: ${stdout}`);
    })
```

## Installation

- Git clone this repository<br><br>
- Run `npm install`
- Add a `config.json` with your  token
```json
{
    "token": "abcde"
}
```
- run `node .`