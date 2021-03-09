const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('The Bot Is Now Online!');
        client.user.setPresence({
            status:"online",
            activity: {
              name: 'For >help',
              type: `WATCHING`
            }
        
      })
})

// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('817120019435094056')message.channel.send(`Welcome <@${guildMember.user.id}> To The Server, Make Sure To Read The Rules!`);

// });

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'echo'){
        client.commands.get('echo').execute(message, args)
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args)
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args)
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args)
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message, args)
    } else if (command == 'dm'){
        client.commands.get('dm').execute(message, args)
    }else if (command == 'support'){
        client.commands.get('support').execute(message, args)
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args)
    } else if (command == 'bruh'){
        client.commands.get('bruh').execute(message, args)
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args)
    }else if (command == 'say'){
        client.commands.get('say').execute(message, args)
    }else if (command == 'mute'){
        client.commands.get('mute').execute(message, args)
    }else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args)
    }
})

client.login('Your Token');