module.exports = {
  config: {
    name: "botcmds",
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

    api.sendMessage("╭─╮\n│『 𝗕𝗢𝗧 』\n│⭔prefix ⭔setalias ⭔delete ⭔eval ⭔shortreact\n│⭔resend ⭔info ⭔leave ⭔loadconfig\n│⭔cmd ⭔ping ⭔restart ⭔setalias ⭔setavt\n│⭔postfb  ⭔ backupdata\n╰───────────◊", event.threadID, event.messageID);
  }
};