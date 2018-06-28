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

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://i.imgur.com/3NXPKwF.png`).then(msg => {
        
        
        
        msg.react(':ugandanknuckles:').then(r=>{
        msg.react('ugandanknuckles').then(r=>{
        msg.react('🖤').then(r=>{
        msg.react('❤️').then(r=>{
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

let y3Filter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let y3 = msg.createReactionCollector(y3Filter, { time: 15000 });
      
                                                    
                               y3.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون اللبني

let y4Filter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let y4 = msg.createReactionCollector(y4Filter, { time: 15000 });
      
                                                    
                               y4.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Aqua"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00BFFF")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let y5Filter = (reaction, user) => reaction.emoji.name === '🐸' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00FF00")

      .setDescription("**:art:تم اعطائك اللون الأخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let y5Filter = (reaction, user) => reaction.emoji.name === '💩' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Brown"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#3B170B")

      .setDescription("**:art:تم اعطائك اللون البني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y5Filter = (reaction, user) => reaction.emoji.name === '😡' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let y5Filter = (reaction, user) => reaction.emoji.name === '😈' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Purple"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#A901DB")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y5Filter = (reaction, user) => reaction.emoji.name === '💀' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "White"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ffffff")

      .setDescription("**:art:تم اعطائك اللون الأبيض**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y5Filter = (reaction, user) => reaction.emoji.name === '😜' && user.id === message.author.id;
     
       let y5 = msg.createReactionCollector(y5Filter, { time: 15000 });
      
                                                    
                               y5.on("collect", r => {
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
       }
                                   
                                   }); 

client.login(process.env.BOT_TOKEN);
