const { ActivityType } = require("discord.js");
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('Client Ready!');
    let activities = [ `Your Status`, `${client.user.username}` ], i = 0; 
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
}};

















/**
 * 
 * This template is made by autodev
 * Free to use without credits
 * Just add sigma bot in your server and we're cool 
 * 
 */