const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'OTIxMTM3MTkwOTc5OTA3NjE2.Ybuh3A.zaGviOPq8ixqt8QQIhF-3YvJHdg';

client.on("ready", () => {
    console.log('Estou online!');
});

client.on("message", (msg) => {
    if (msg.content === 'salve') {
        msg.reply('ta salvado meu bom!');
    };
    if (msg.content === 'salve salvador') {
        msg.channel.send('salve ' + msg.author.username + ' seu vagabundo 😂');
    };
});

client.login(TOKEN);