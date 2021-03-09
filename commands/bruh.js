const Discord = require('discord.js')

module.exports = {
    name: 'bruh',
    description: 'This is a Bruh Command lol',
    execute(message, args){
        message.channel.send('bruh')
        message.delete()
        console.log('Someone Used the bruh Command')
    }
}