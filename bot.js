﻿const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "509397361307680779"; // ايدي السررفر
var channel = "510833917708992522";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA , Universe : discord.gg/bun7CA')
    },305);
})

client.login(process.env.BOT_TOKEN);
