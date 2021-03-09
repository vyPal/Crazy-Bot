const Discord = require('discord.js')

module.exports = {
    name: 'support',
    description: 'This is the Support Command',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()

        .setTitle('Support Server')
        .setDescription('https://discord.gg/sfHPgQuzdF')
        .setFooter('Prefix: >')
        .setTimestamp()

        message.channel.send(embed)
        console.log('Someone Used the support Command')

    }
}