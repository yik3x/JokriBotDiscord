module.exports = {
    name: 'ready',
    once: 'true',
    async execute(client) {
        console.log(`Estou online em ${client.user.tag}`);
    }
}