const DIscord = require('discord.js')
module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("You Don't Have Enough Permission To Use This Command")
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
        console.log('Someone used the unmute Command')
    }
}