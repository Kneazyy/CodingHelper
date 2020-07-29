module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        message.channel.send('afficher les commandes/actions du BOT');
    }
};