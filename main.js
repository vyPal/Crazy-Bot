const Discord = require('discord.js');
const DisTube = require('distube');
const client = new Discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new Discord.Collection();
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

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
    }else if (command == 'play'){
        distube.play(message, args.join(' '));
    }else if (command == "stop"){
        distube.stop(message);
    }else if (command == "skip"){
        distube.skip(message);
    }else if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
})

const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });

client.login('Your Token');
