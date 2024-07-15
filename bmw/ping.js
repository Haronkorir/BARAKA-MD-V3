const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚨', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    let timeStart = Date.now();
    return repondre('*Pong!!*\n ```' + 1200 + '``` *ms*') 
    let timeEnd = Date.now();
    await zk.sendMessage(dest, {texte:'*Pong!*\n *' + (timeStart - timeEnd) + '``` *ms*')
  }
)
