const Discord = require('discord.js')

module.exports = {
    name : 'clear',
    aliases : ['purge', 'clear'],
    execute(message, args) {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Enough Permission To Use This Command")
        if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
        if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if(parseInt(args[0]) > 100) return message.channel.send('The max amount of messages that I can delete is 99')
        message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
            console.log('Someone Used the clear Command')
    }
}
