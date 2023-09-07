const Discord = require("discord.js");
require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { TOKEN } = process.env
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./src/functions/${folder}/${file}`)(client);
}

//definir ação do bot no status
client.once(Events.ClientReady, (c) => {
  client.user.setActivity({
    name: "Bring Me The Horizon",
    type: Discord.ActivityType.Listening,
  });
});

client.handleEvents();
client.handleCommands();
client.login(TOKEN);
