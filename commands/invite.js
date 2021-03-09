const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'This is a Invite Command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()

        .setTitle('Invite Link')
        .setDescription('https://discord.com/oauth2/authorize?client_id=817391899874426953&scope=bot&permissions=2147483647')
        .setFooter('Prefix: >')
        .setTimestamp()

        message.channel.send(embed)
        console.log('Someone Used the invite Command')
    }
}