const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'This is a Avatar Command',
    execute(message, args) {

        message.channel.send(message.author.displayAvatarURL());

        console.log('Someone Used the Avatar Command')

    }
}