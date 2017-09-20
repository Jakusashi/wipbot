var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
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
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
		// tutaj dodawać linki do remixów z Barkleyem
		slam = ['https://www.youtube.com/watch?v=bwv_2OKxZr8',
		'https://www.youtube.com/watch?v=uints81YYMc',
		'https://www.youtube.com/watch?v=VjR7JZbdONs',
		'https://www.youtube.com/watch?v=qH4NbO74A1k',
		'https://www.youtube.com/watch?v=O4J_S3NdIUE',
		'https://www.youtube.com/watch?v=J9FImc2LOr8',
		'https://youtu.be/cCeovAd7iOQ',
		'https://youtu.be/SCivYNvACCU'
		]
		
		// memiczne piosenki tutaj
		songmemes = ['https://www.youtube.com/watch?v=f3IgwLT_mYc',
		'https://youtu.be/8CvqmD0CZao',
		'https://youtu.be/WM-fTkO6BI4',
		'https://youtu.be/ETfiUYij5UE',
		'https://www.youtube.com/watch?v=K5tVbVu9Mkg',
		'https://www.youtube.com/watch?v=9a4exztEy6g',
		'https://www.youtube.com/watch?v=1w5_IktEDOI',
		'https://www.youtube.com/watch?v=FGiwDwmoJLk'
		]
        switch(cmd) {
			case 'hilfe':
				bot.sendMessage({
                    to: channelID,
                    message: 'Prefix ! - hestiastep everythingwillfreeze sandstorm rickroll karny memesong slam'
					
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
				bot.sendMessage({
					to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/359694153791176706/360027584958038019/received_967748513299093.jpeg'							
				})
				
			break;
			
			case 'slam':
				var i = randomIntInc(1,8)
				bot.sendMessage({
					to: channelID,
					message: slam[i]
				})
				break;
				
			case 'memesong':
			var i = randomIntInc(1,8)
				bot.sendMessage({
					to: channelID,
					message: songmemes[i]
				})
				break;
         }
     }
});
 