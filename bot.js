const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
});

const adminIDs = [
  '361941430194929665', // Tay
  // další ID
];

client.once('ready', () => {
  console.log(`Bot přihlášen jako ${client.user.tag}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  if (!newPresence || !newPresence.userId) return;

  if (adminIDs.includes(newPresence.userId)) {
    console.log(`Status uživatele ${newPresence.userId} je nyní: ${newPresence.status}`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
