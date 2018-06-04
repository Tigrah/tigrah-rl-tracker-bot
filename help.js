exports.name = "help";
exports.run = (client, message) => {
    try {
        message.author.send(`
= Command List =

!help          :: You are here.
!info          :: Requests information about the bot..
!stats        :: Lookup a player based on Steam, PS4 or Xbox One Tags.

!stats <steam|ps4|xbox> <username>

These commands can only be done in Tigrah's Discord.`, { code: "asciidoc" });
    } catch (e) {
        message.channel.send(e);
    }

}
