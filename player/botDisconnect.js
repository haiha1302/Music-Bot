module.exports = (client, message, queue) => {
    setInterval(() => {
        message.channel.send(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`);
    }, 5000);
};