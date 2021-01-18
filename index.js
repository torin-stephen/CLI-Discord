const Discord = require('discord.js');
const { exec } = require("child_process");
const client = new Discord.Client();
var config = require('./config.json');


client.on('ready', () => {
    console.log('Ready!')
});

client.on('message', (message) => {
    if (message.author.bot) return;
    

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
})


client.login(config.token);