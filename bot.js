var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
var pg = require('pg');
var nodemailer = require('nodemailer');
var ffmpeg = require('ffmpeg');
eval(fs.readFileSync('slam.js')+'');
eval(fs.readFileSync('memesongs.js')+'');
eval(fs.readFileSync('songs.js')+'');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arcal.bot.discord',
    pass: '.S$.Rm&N2T3d*#6)'
  }
});


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


bot.on('message', function (user, userID, channelID, message, evt) {

	bot.setPresence({
		
		game:{
			
				name:'!hilfe'
		}
		
	});
	

	var i = randomIntInc(0,100000)
	if(i == 5)
		bot.uploadFile({
			to:channelID,
			file:"obrazki/inkwizycja.jpg"
		})
	msg = message;
	message = message.toLowerCase();
	if(message.indexOf("penis") > -1){
		bot.uploadFile({
			to:channelID,
			file:"obrazki/beniz.jpg"
			})
		
	}
	
	if(message.indexOf("omae wa mou shindeiru") > -1){
		bot.uploadFile({
			to:channelID,
			file:"obrazki/nani.jpg"
			})		
		
	}
	
	if(message.indexOf("gwidon") > -1 && message.indexOf(":gwidon") == -1){
		i = randomIntInc(0,1)
		if(i == 0){
		bot.uploadFile({
			to:channelID,
			file:"obrazki/Guido0.png"
			})
		}
		else
		bot.uploadFile({
			to:channelID,
			file:"obrazki/Guido1.png"
			})
		}			
	

		
	
	
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		
        args = args.splice(1);

		var i = 0;

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
				bot.sendMessage({
                    to: channelID,
                    message: 'addmeme <link>, addslam <link>, addsong <link>'
					
                });
				
				break;
				
			case 'help':
				bot.uploadFile({
					to:channelID,
					file:"obrazki/helping.jpg"
				})
				break;
			case 'facepalm':
				bot.uploadFile({
					to:channelID,
					file:"obrazki/facepalm.jpg"
				})
				break;			
			case 'dolary':
				bot.sendMessage({
					to:channelID,
					message:"https://www.tenor.co/IULU.gif "
				})
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
				i = randomIntInc(0,slam.length-1)
				bot.sendMessage({
					to: channelID,
					message: slam[i]
				})
				
				break;
				
			case 'memesong':
				i = randomIntInc(0,songmemes.length-1)
				bot.sendMessage({
					to: channelID,
					message: songmemes[i]
				})
				
				break;
			
			case 'song':
				i = randomIntInc(0,songs.length-1)
				bot.sendMessage({
					to: channelID,
					message: songs[i]
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
				var lnk = msg;
				var duplikat = false;
				lnk = lnk.substr(9,lnk.length-9);
				if(msg.indexOf("kJQP7kiw5Fk") > -1){
					bot.uploadFile({
					to:channelID,
					file:"obrazki/fuck you.png"
					})
				}
			
				else{
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
					if(!duplikat){
					songmemes.push(lnk);
					bot.sendMessage({
							to:channelID,
							message:"Pomyślnie dodano piosenkę"
						});
					}
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
				}
				break;
				
				
			case 'addslam':
				var lnk = msg;
				var duplikat = false;
				lnk = lnk.substr(9,lnk.length-9);
				
				if(msg.indexOf("kJQP7kiw5Fk") > -1){
					bot.uploadFile({
					to:channelID,
					file:"obrazki/fuck you.png"
					})
				}
				
				else{
				if(lnk.indexOf("youtube.com") > -1 || lnk.indexOf("youtu.be") > -1){	
					if(lnk.indexOf("watch?v=") > -1){
						
						lnkh = lnk.substr(lnk.indexOf("watch?v=")+8,lnk.length - lnk.indexOf("watch?v=")+8)
						
						for(var i = 0; i < slam.length; i++){
							if(slam[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
					}
					else if(lnk.indexOf("youtu.be") > -1){
						
						lnkh = lnk.substr(lnk.indexOf(".be/")+4,lnk.length - lnk.indexOf(".be/")+4)
						
						for(var i = 0; i < slam.length; i++){
							if(slam[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
						
					}
					if(!duplikat){
					slam.push(lnk);
					bot.sendMessage({
							to:channelID,
							message:"Pomyślnie dodano piosenkę"
						});
					}
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
				}
				break;
				
				
			case 'addsong':
				var lnk = msg;
				var duplikat = false;
				lnk = lnk.substr(9,lnk.length-9);
				
				if(msg.indexOf("kJQP7kiw5Fk") > -1){
					bot.uploadFile({
					to:channelID,
					file:"obrazki/fuck you.png"
					})
				}
				else{
				if(lnk.indexOf("youtube.com") > -1 || lnk.indexOf("youtu.be") > -1){	
					if(lnk.indexOf("watch?v=") > -1){
						
						lnkh = lnk.substr(lnk.indexOf("watch?v=")+8,lnk.length - lnk.indexOf("watch?v=")+8)
						
						for(var i = 0; i < songs.length; i++){
							if(songs[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
					}
					else if(lnk.indexOf("youtu.be") > -1){
						
						lnkh = lnk.substr(lnk.indexOf(".be/")+4,lnk.length - lnk.indexOf(".be/")+4)
						
						for(var i = 0; i < songs.length; i++){
							if(songs[i].indexOf(lnkh) > -1){
								duplikat = true;
								break;
							}
							
						}
						
						
					}
					if(!duplikat){
					songs.push(lnk);
					bot.sendMessage({
							to:channelID,
							message:"Pomyślnie dodano piosenkę"
						});
					}
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
				}
				break;	
				
				
			case 'backup':
				var backup = "songmemes = [<br>";
				var i = 0;
				
				while(i < songmemes.length-1){
					backup += "'";
					backup += songmemes[i];
					backup += "',<br>";
					i++;
				}
				
				backup += "'";
				backup += songmemes[i];
				backup += "']";
				
				backup +="<br><br><br>";
				backup += "slam = [<br>";
				i = 0;
				
				while(i < slam.length-1){
					backup += "'";
					backup += slam[i];
					backup += "',<br>";
					i++;
				}
				
				backup += "'";
				backup += slam[i];
				backup += "']";
				
				
				backup += "<br><br><br>";
				backup += "songs = [<br>";
				i = 0;
				
				while(i < songs.length-1){
					backup += "'";
					backup += songs[i];
					backup += "',<br>";
					i++;
				}
				
				backup += "'";
				backup += songs[i];
				backup += "']";
				
				var mailOptions = {
					from:'arcal.bot.discord@gmail.com',
					to:'mistrztmn@gmail.com',
					subject:"backup",
					html: backup
				}	
							   
				transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					bot.sendMessage({
							to:channelID,
							message:error
						});
				  } else {
						bot.sendMessage({
							to:channelID,
							message:"Wykonano backup"
						});
				  }
				}); 
			
			
						
				break;
				
				
		/*	case 'addtoqueue':
				var i = 0
					bot.sendMessage({
						to:channelID,
						message:'-play https://www.youtube.com/playlist?list=PLqfLhD08RH0iirCop3mjwnKiVx8PCxczS'
					})
					
				setTimeout(function(){
					bot.sendMessage({
					to:channelID,
					file: '-play https://www.youtube.com/playlist?list=PLLJKjN9iWoaKT7TDxHULap3IQ1OUAB2f5'
				})},2000
				);
				setTimeout(function(){
					bot.sendMessage({
					to:channelID,
					file: '-play https://www.youtube.com/playlist?list=PL6UpIf1I58wO3dyhVlo9A3KbYzw4hErtB'
				})},4000
				);
			
			break; 
			*/
			
			case 'sotasty':
				for (var serverID in bot.servers) {
					console.log(bot.servers[serverID].id);
}
				var voice = bot.servers[serverID].members[userID].voice_channel_id;

				//Let's join the voice channel, the ID is whatever your voice channel's ID is.
				bot.joinVoiceChannel(voice, function(error, events) {
				  //Check to see if any errors happen while joining.
				  if (error) return console.error(error);

				  //Then get the audio context
				  bot.getAudioContext(voice, function(error, stream) {
					//Once again, check to see if any errors exist
					if (error) return console.error(error);

					//Create a stream to your file and pipe it to the stream
					//Without {end: false}, it would close up the stream, so make sure to include that.
					fs.createReadStream('mp3/so_tasty.mp3').pipe(stream, {end: false});

					//The stream fires `done` when it's got nothing else to send to Discord.
					stream.on('done', function() {
					   //Handle
					   bot.leaveVoiceChannel(voice);
					});
				  });
				});
			
			
			break;
			
			case 'tuturu':
				for (var serverID in bot.servers) {
					console.log(bot.servers[serverID].id);
}
				var voice = bot.servers[serverID].members[userID].voice_channel_id;
				
				bot.joinVoiceChannel(voice, function(error, events) {

				  if (error) return console.error(error);


				  bot.getAudioContext(voice, function(error, stream) {

					if (error) return console.error(error);


					fs.createReadStream('mp3/tuturu_1.mp3').pipe(stream, {end: false});

					
					stream.on('done', function() {
	
					   bot.leaveVoiceChannel(voice);
					});
				  });
				});
			
			
			break;			
			
			case 'mmm':
				for (var serverID in bot.servers) {
					console.log(bot.servers[serverID].id);
}
				var voice = bot.servers[serverID].members[userID].voice_channel_id;
				
				bot.joinVoiceChannel(voice, function(error, events) {

				  if (error) return console.error(error);


				  bot.getAudioContext(voice, function(error, stream) {

					if (error) return console.error(error);


					fs.createReadStream('mp3/mmm.mp3').pipe(stream, {end: false});

					
					stream.on('done', function() {
	
					   bot.leaveVoiceChannel(voice);
					});
				  });
				});
			
			
			break;		
			
			case 'tbc':
				for (var serverID in bot.servers) {
					console.log(bot.servers[serverID].id);
}
				var voice = bot.servers[serverID].members[userID].voice_channel_id;
				
				bot.joinVoiceChannel(voice, function(error, events) {

				  if (error) return console.error(error);


				  bot.getAudioContext(voice, function(error, stream) {

					if (error) return console.error(error);


					fs.createReadStream('mp3/tbc.mp3').pipe(stream, {end: false});

					
					stream.on('done', function() {
	
					   bot.leaveVoiceChannel(voice);
					});
				  });
				});
			
			
			break;		
			
			case 'yeee':
				for (var serverID in bot.servers) {
					console.log(bot.servers[serverID].id);
}
				var voice = bot.servers[serverID].members[userID].voice_channel_id;
				
				bot.joinVoiceChannel(voice, function(error, events) {

				  if (error) return console.error(error);


				  bot.getAudioContext(voice, function(error, stream) {

					if (error) return console.error(error);


					fs.createReadStream('mp3/yee.mp3').pipe(stream, {end: false});

					
					stream.on('done', function() {
	
					   bot.leaveVoiceChannel(voice);
					});
				  });
				});
			
			
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


 