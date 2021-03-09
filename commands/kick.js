const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'This is a Kick Command',
    execute(message, args) {
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You Don't Have Enough Permission To Use This Command")
    
        const user = message.mentions.users.first();
    
        if (user) {
        
        const member = message.guild.member(user);
        
        if (member) {
        
            member
            .kick({
                reason: 'They were bad!',
            })
            .then(() => {
            
                message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
                
                message.reply('I was unable to kick the member');
                
                console.error(err);
            });
        } else {
        
            message.reply("That user isn't in this guild!");
        }
        } else {
        
        message.reply("You didn't mention the user to kick!");
        console.log('Someone Used the kick Command')
        }
    }
}