const axios = require('axios');

module.exports = {
  config: {
    name: "draw",
    version: "1.1",
    author: "JARiF",
    countDown: 10,
    role: 0,
    category: "image"
  },

  onStart: async function ({ message, args }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("Please provide a prompt.");
    }

    let prompt, model;
    if (text.includes("|")) {
      const [promptText, modelText] = text.split("|").map((str) => str.trim());
      prompt = promptText;
      model = modelText;
    } else {
      prompt = text;
      model = "2";  
    }

    let id; 

    message.reply("✅| Creating your Imagination...").then((info) => {
      id = info.messageID;  
    });

    try {
      const API = `https://www.annie-jarif.repl.co/animefy?model=${model}&prompt=${encodeURIComponent(prompt)}&apikey=anniejarif`;
      const imageStream = await global.utils.getStreamFromURL(API);

      return message.reply({
        attachment: imageStream
      });
    } catch (error) {
      message.reply(error.message).then(() => {
        message.delete(id);
      });
    }
  }
};
