const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config({ path: "./.env" });

const topa = /t+h*o+p+[aeiou]/i;
const iva = /\bi+v+[aeiou]\b/;

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
  if (topa.test(content)){
    if(msg.author.bot == false)
      msg.channel.send(
        `@X-Æ-A-293, \n ${poruke[Math.floor(Math.random() * poruke.length)]}`
      );
  }
  if (iva.test(content)){
    msg.channel.send(
      `Topalovic? R.I.P.`
    );
  }
});

client.login(process.env.TOKEN);
