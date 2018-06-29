const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


//bc

client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '=bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})

//games

var drown = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(drown[Math.floor(Math.random() * drown.length)])
message.channel.sendEmbed(cat);
    }
});



const Sra7a = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
if (message.content.startsWith('A-شعر')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
        console.log("By : XDROWN#5950");
message.channel.sendEmbed(client);
message.react("??")
}
}); 

//bot

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    

if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Servers🌐 ${client.guilds.size}
Users👥 ${client.users.size}
Channels📚 ${client.channels.size} `)
        message.channel.sendEmbed(embed);
    }
 
});

//colors

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://i.imgur.com/NQy4FI0.png`).then(msg => {
        
        
        
        msg.react('🖤').then(r=>{
        msg.react('❤').then(r=>{
        msg.react('💛').then(r=>{
        msg.react('💚').then(r=>{
        msg.react('💙').then(r=>{
        msg.react('🐸').then(r=>{
        msg.react('💩').then(r=>{
        msg.react('😡').then(r=>{
        msg.react('😈').then(r=>{
        msg.react('💀').then(r=>{
        msg.react('😜').then(r=>{
        msg.react('❌').then(r=>{


       
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Black"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#000000")

      .setDescription("**:art:تم اعطائك اللون الأسود**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر الغامق**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();



   })

 //لون احمر 
let y2Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Yellow"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#e7fa02")

      .setDescription("**:art:تم اعطائك اللون الاصفر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


 
                               })
                               
                               //الون الاخضر

let dgFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let dg = msg.createReactionCollector(dgFilter, { time: 15000 });
      
                                                    
                               dg.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون اللبني

let aqFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let aq = msg.createReactionCollector(aqFilter, { time: 15000 });
      
                                                    
                               aq.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Aqua"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00BFFF")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let grFilter = (reaction, user) => reaction.emoji.name === '🐸' && user.id === message.author.id;
     
       let gr = msg.createReactionCollector(grFilter, { time: 15000 });
      
                                                    
                               gr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00FF00")

      .setDescription("**:art:تم اعطائك اللون الأخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let brFilter = (reaction, user) => reaction.emoji.name === '💩' && user.id === message.author.id;
     
       let br = msg.createReactionCollector(brFilter, { time: 15000 });
      
                                                    
                               br.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Brown"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#3B170B")

      .setDescription("**:art:تم اعطائك اللون البني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let reFilter = (reaction, user) => reaction.emoji.name === '😡' && user.id === message.author.id;
     
       let re = msg.createReactionCollector(reFilter, { time: 15000 });
      
                                                    
                               re.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let prFilter = (reaction, user) => reaction.emoji.name === '😈' && user.id === message.author.id;
     
       let pr = msg.createReactionCollector(prFilter, { time: 15000 });
      
                                                    
                               pr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Purple"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#A901DB")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let whFilter = (reaction, user) => reaction.emoji.name === '💀' && user.id === message.author.id;
     
       let wh = msg.createReactionCollector(whFilter, { time: 15000 });
      
                                                    
                               wh.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "White"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ffffff")

      .setDescription("**:art:تم اعطائك اللون الأبيض**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let orFilter = (reaction, user) => reaction.emoji.name === '😜' && user.id === message.author.id;
     
       let or = msg.createReactionCollector(orFilter, { time: 15000 });
      
                                                    
                               or.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Orange"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FFBF00")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "black"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Red")) 
                                   message.member.removeRole(message.guild.roles.find("name", "Yellow"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Aqua"))
                                   message.member.removeRole(message.guild.roles.find("name", "Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Brown"))
                                   message.member.removeRole(message.guild.roles.find("name", "Red"))
                                   message.member.removeRole(message.guild.roles.find("name", "Purple"))
                                   message.member.removeRole(message.guild.roles.find("name", "White"))
                                   message.member.removeRole(message.guild.roles.find("name", "Orange"))                
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")

      .setDescription("**:art:تم ازالة اللون**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


                               })
        })
})
})
        
})
})
})
})
})
})
})
})
})                             
                                   })
       }
                                   
                                   }); 

client.login(process.env.BOT_TOKEN);
