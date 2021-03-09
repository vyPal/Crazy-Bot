const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: 'dm',
    description: 'This Dms a User',
    execute(message, args) {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Enough Permission To Use This Command")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(`You Didn't Mention a User `);
        if(!args.slice(1).join(" ")) return message.channel.send("No Message Specified")
        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That User Could Not Be DMed")).then(() => message.channel.send(`Sent A Message to ${user.user.tag}`))
        message.delete()
        console.log('Someone Used the dm Command')
    }
}