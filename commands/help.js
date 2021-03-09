const Discord = require('discord.js')
const { execute } = require('./echo')

module.exports = {
    name: 'help',
    description: 'This is the Help Command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()

        .setTitle('Commands')
        .setDescription('**MODERATION** \n `>ban`, `>kick`, `>mute`, `>unmute`, `>clear`, `>dm`, `>say` \n\n **HELP** \n `>help`, `>invite`, `>support`\n\n **FUN**\n `>bruh`')
        .setFooter('Prefix: >')
        .setTimestamp()

        message.channel.send(embed)
        console.log('Someone Used the help Command')

    }
}