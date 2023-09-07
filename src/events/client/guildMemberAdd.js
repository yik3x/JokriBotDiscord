module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const welcomeChannel = await member.guild.channels.cache.find(channel => channel.name === '💬﹕conversas');
        await welcomeChannel.fetch();
        welcomeChannel.send(`Bem Vindo(a) ao Servidor ${member.user}!`);
    }
};