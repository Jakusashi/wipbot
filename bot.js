var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
eval(fs.readFileSync('slam.js')+'');
eval(fs.readFileSync('memesongs.js')+'');
// eval(fs.readFileSync('songs.js')+'');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	
	
	});

bot.setPresence({
		
		game:{
			
				name:'!hilfe'
		}
		
	});
bot.on('message', function (user, userID, channelID, message, evt) {
	
	

	var i = randomIntInc(0,1000)
	if(i == 5)
		bot.uploadFile({
			to:channelID,
			file:"obrazki/inkwizycja.jpg"
		})

	if(message.indexOf("penis") > -1 || message.indexOf("Penis")> -1 || message.indexOf("PENIS")> -1){
		bot.uploadFile({
			to:channelID,
			file:"obrazki/beniz.jpg"
			})
			
			
		
		
	}

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
		songmemes.length
		

        switch(cmd) {
			case 'hilfe':
				bot.sendMessage({
                    to: channelID,
                    message: 'Prefix ! - hestiastep everythingwillfreeze sandstorm rickroll memesong slam'
					
                });
				bot.sendMessage({
                    to: channelID,
                    message: 'Obrazki: karny yamero getout ok meh obviously sztuczka magic'
					
                });
				
				break;
			case 'hestiastep':
				bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=nZsC5p9M3p8'
					
                });
				
				break;
			case 'everythingwillfreeze':
				bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=lkicMsn-s_8'
					
                });
				
            break;
			
			case 'rickroll':
				bot.sendMessage({
					to: channelID,
                    message: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
									
				})
				
				break;
			case 'sandstorm':
				bot.sendMessage({
					to: channelID,
                    message: 'https://www.youtube.com/watch?v=y6120QOlsfU'
									
				})
				
			break;
			
			case 'karny':			
				bot.uploadFile({
					to: channelID,
                    file: 'obrazki/karny.jpeg'							
				})
				
			break;
			
			case 'slam':
				var i = randomIntInc(0,slam.length-1)
				bot.sendMessage({
					to: channelID,
					message: slam[i]
				})
				
				break;
				
			case 'memesong':
			var i = randomIntInc(0,songmemes.length-1)
				bot.sendMessage({
					to: channelID,
					message: songmemes[i]
				})
				
				break;
			
			case 'yamero':
				bot.uploadFile({
					to: channelID,
                    file: 'obrazki/yamero.jpg'							
				})
				
				break;
				
			case 'getout':
				bot.uploadFile({
					to: channelID,
					file: 'obrazki/get out.png'
				})
			
				
				break;
				
			case 'meh':
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/meh.jpg'
				})
				
				break;
				
			case 'ok':
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/ok.jpg'
					
				})
			
				break;
				
			case 'obviously':
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/obviously.jpg'
				})
				
				break;
				
			case 'magic':
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/magic.jpg'
				})
				
				break;
				
			case 'sztuczka':
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/switch1.png'
				})
				setTimeout(function(){
					bot.uploadFile({
					to:channelID,
					file: 'obrazki/switch2.png'
				})},5000
				);
				
				break;
				
			case 'addmeme':
				var lnk = message;
				var duplikat = false;
				lnk = lnk.substr(9,lnk.length-9);
				
				if(lnk.indexOf("youtube.com") > -1 || lnk.indexOf("youtu.be") > -1){	
					if(lnk.indexOf("watch?v=") > -1){
						
						lnkh = lnk.substr(lnk.indexOf("watch?v=")+8,lnk.length - lnk.indexOf("watch?v=")+8)
						
						for(var i = 0; i < songmemes.length; i++){
							if(songmemes[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
					}
					else if(lnk.indexOf("youtu.be") > -1){
						
						lnkh = lnk.substr(lnk.indexOf(".be/")+4,lnk.length - lnk.indexOf(".be/")+4)
						
						for(var i = 0; i < songmemes.length; i++){
							if(songmemes[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
						
					}
					if(!duplikat)
					songmemes.push(lnk);
						i=0;
						fs.writeFile('memesongs.js', "songmemes = [");
						while(i<songmemes.length){
							if(i != songmemes.length-1)
							fs.appendFile('memesongs.js',"'".concat(songmemes[i],"', \n"));
							else
							fs.appendFile('memesongs.js',"'".concat(songmemes[i],"']"));	
							i++;
						}
						if(!duplikat)
						bot.sendMessage({
							to:channelID,
							message:"Pomyślnie dodano piosenkę"
						});
						else if(duplikat)
						bot.sendMessage({
							to:channelID,
							message:"Taka piosenka już jest na liście"
						});
					
					
				}
				else
				bot.sendMessage({
						to:channelID,
						message:"Przyjmuję tylko linki z youtube"
					})
						
				break;
				
			case 'testmeme':
				bot.sendMessage({
						to:channelID,
						message:songmemes[songmemes.length-1]
					})
						
				break;
				
			case 'rank':
				break;
			case 'levels':
				break;
			default:
				bot.uploadFile({
					to:channelID,
					file: 'obrazki/notwork.png'
				})
         }
     }
});
 