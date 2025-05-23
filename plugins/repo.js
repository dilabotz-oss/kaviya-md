

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "repo",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *DILA*

> *pkdriller REPO:*
*|* SOO 

> *SUPPORT GROUP:*
*|* https://chat.whatsapp.com/FMbSSQx42UII926kAt3rvf
*╰──────────────●●►*

> *CREATED BY 🔥DILA🔥*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363400603971944@g.us',
      newsletterName: "KAVIYA MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'KAVIYA MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "SOON" ,
thumbnailUrl: "https://files.catbox.moe/cctwo6.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🔥",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/bmbxmd/B.M.B-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 🔥KAVIYA MD🔥 𝐖.𝐀 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!* 

> *a whatsapp bot that enhance your experience with amazing features,developed by DILA*🔥

*𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐄𝐈𝐍𝐆 🔥KAVIYA MD🔥* 

> *ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴*

https://github.com/bmbxmd/B.M.B-XMD
──────────────────
${readMore}
\`BOT NAME:\`🇹🇿
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱.𝙼.𝙱-𝚇𝙼𝙳* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/cctwo6.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400603971944@g.us',
                    newsletterName: '☇ KAVIYA suppσrt  ⃪🔥𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/1uh5pq.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400603971944@g.us',
                    newsletterName: '☇ KAVIYA MD suppσrt⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
