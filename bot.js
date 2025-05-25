const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.GuildPresences, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

function isDaytime() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 7 && hour < 24; // běží od 7 do půlnoci
}

if (!isDaytime()) {
  console.log('Noční režim aktivní, bot se vypíná.');
  process.exit(0);
}

client.once('ready', () => {
  console.log(`Přihlášen jako ${client.user.tag}`);
});

const adminIDs = [
  '361941430194929665', // Tay
  // další ID doplníš později
];

client.on('presenceUpdate', (oldPresence, newPresence) => {
  if (!newPresence || !newPresence.userId) return;

  if (adminIDs.includes(newPresence.userId)) {
    const status = newPresence.status; // online, offline, idle, dnd
    console.log(`Status uživatele ${newPresence.userId}: ${status}`);
    // tady můžeš přidat kód, co s tím udělat (např. API, ukládání atd.)
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);