const Discord = require("discord.js");
require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("../config.json");
const fs = require("fs");

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}


//comando básico de ligação do bot
client.once(Events.ClientReady, (c) => {
  client.user.setActivity({
    name: "Bring Me The Horizon",
    type: Discord.ActivityType.Listening,
  });
});

client.handleEvents();
client.handleCommands();
client.login(token);
