const Discord = require('discord.js') 

module.exports = {
    name: 'ban',
    description: 'This is a Ban Command',
    execute(message, args) {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You Don't Have Enough Permission To Use This Command")

        const user = message.mentions.users.first();

        if (user) {

        const member = message.guild.member(user);
        
        if (member) {
        
            member
            .ban('Optional reason that will display in the audit logs')
            .then(() => {
                
                message.reply(`Successfully Banned ${user.tag}`);
            })
            .catch(err => {
            
                message.reply('I was unable to Ban the member');
            
                console.error(err);
            });
        } else {
        
            message.reply("That user isn't in this guild!");
        }
        
        } else {
        message.reply("You didn't mention the user to Ban!");
        }
        console.log('Someone Used the Ban Command')
    }
    
    
}
