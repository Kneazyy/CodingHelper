const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "<";

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log("Le BOT est connecté !")
});

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0]) {
        case "help":
            bot.commands.get('help').execute(message, args);
        break;

        case "java":
            bot.commands.get('java').execute(message, args);
        break;

        case "python":
            bot.commands.get('python').execute(message, args);
        break;

        case "html":
            bot.commands.get('html').execute(message, args);
        break;
    }  

    });

bot.login("t'auras pas le token haha");