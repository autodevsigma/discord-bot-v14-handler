const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")
    ,
    async execute(interaction, client) {

     interaction.reply({content: `Pong 🏓`,  flags: 64})
await client.modLog(
  interaction,
  `Command executed by ${interaction.user} \n Reason: No reason at all its just ping to show you how mod logs will work.`,
);
    }
 };

















/**
 * 
 * This template is made by autodevsigma
 * Free to use without credits
 * Just add sigma bot in your server and we're cool 
 * 
 */