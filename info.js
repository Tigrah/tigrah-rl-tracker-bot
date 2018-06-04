exports.name = "info";
exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const moment = require("moment");
    require("moment-duration-format");

    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    return message.channel.send(`= STATISTICS =

• Servers    :: ${client.guilds.size.toLocaleString()}
• Uptime     :: ${duration}
• Users      :: ${client.users.size.toLocaleString()}
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Channels   :: ${client.channels.size.toLocaleString()}
• Discord.JS :: v${Discord.version}
• Node       :: ${process.version}
• API        :: RocketLeagueStats.com
• Developer  :: Oscar`, { code: "asciidoc" });
}
