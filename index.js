const Discord = require('discord.js');
const { exec } = require("child_process");
var config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => console.log('Ready!'));

client.on('message', (message) => {
    if (message.author.bot) return;
    exec(message.content, (error, stdout, stderr) => {
        if (error) return message.channel.send(`error: ${error.message}`);
        if (stderr) return message.channel.send(`stderr: ${stderr}`);
        message.channel.send(`stdout: ${stdout}`);
    })
})

client.login(config.token);
