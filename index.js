const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config({ path: "./.env" });

const topalovic = ["iva topalović", "iva topalovic", "topalovic", "topalović"];

const poruke = [
  "https://www.wikihow.com/Overcome-Depression",
  "https://www.webmd.com/depression/understanding-depression-prevention",
  "https://www.drugs.com/comments/sertraline/",
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  const content = msg.content;
  var uvijet = false;
  topalovic.forEach((item) => {
    if (content.toLowerCase().includes(item)) uvijet = true;
  });
  if (uvijet) {
    msg.channel.send(
      `@X-AE-A-293, \n ${poruke[Math.floor(Math.random() * poruke.length)]}`
    );
  }
});

client.login(process.env.TOKEN);
