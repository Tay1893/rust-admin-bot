const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once('ready', () => {
  console.log(`✅ Bot přihlášen jako ${client.user.tag}`);
});

client.login('MTM3NjMwMjY3NjQ5MjQxOTA5Mw.GbvNxu._nRDCd5HCwuaIuPHNzxf5VVZ3vgbdcWlUnNans'); // <- vlož token sem
