module.exports = {
    config: {
        name: "autoseen",
        aliases: [],
        version: "1.0",
        author: "Jasper",
        countDown: 10,
        role: 0,
        shortDescription: "",
        longDescription: "",
        category: "useless",
        guide: "{p}"
    },
    onChat: function({ api, event, args }) {
        api.markAsReadAll(() => {});
    },
    onStart: async function ({}) {}
};