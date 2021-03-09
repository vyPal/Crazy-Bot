const Discord = require('discord.js')

module.exports = {
    name: 'echo',
    description: 'This is a echo command',
    execute(message, args) {
        message.channel.send('Hello, World!')
        console.log('Someone Used the echo Command')
    }
}