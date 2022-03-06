const { DiscordAPIError } = require("@discordjs/rest");
const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "ping pong!",
    options: [],
/*
1	User
2	Role
3	Channel
4	String
5	Integer
6	Boolean
7	Mentionable
*/
    run: async (client, interaction, args) => {

        interaction.reply({ content: `pong!`})
       
    }
}