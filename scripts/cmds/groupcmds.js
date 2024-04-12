module.exports = {
  config: {
    name: "groupcmds",
    aliases: [],
    author: "Kshitiz",
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "its better not to trigger this cmd haha"// change it
    },
    category: "general",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {

    api.sendMessage("╭─╮\n│『 𝗚𝗥𝗢𝗨𝗣 』\n│⭔adduser ⭔adminonly\n│⭔uid ⭔autosetname \n│⭔badwords ⭔warn ⭔all\n│⭔busy ⭔count ⭔resend\n│⭔filteruser ⭔unsend\n│⭔tid ⭔kick ⭔rules ⭔bannedlist\n│⭔mention ⭔setname  ⭔filteruser\n│⭔setrole ⭔thread ⭔ban\n│⭔grouptag ⭔antichangeinfobox\n│⭔onlyabox ⭔admin ⭔group\n│⭔ignoreonlyad ⭔ignoreonlyadbox\n╰───────────◊", event.threadID, event.messageID);
  }
};