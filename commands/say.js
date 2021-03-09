module.exports = {
    name: 'say',
    description: 'This is a Say Command',
    execute(message, args){
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return console.log('I don\'t have the right permissions.')
        args = message.content.slice(4).split(" ");
        const saymessage = args.join(" ");
        message.delete();
            message.channel.send(saymessage);

            console.log('Someone just used the say command')
            
            
    }
}