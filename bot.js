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
		slam = ['https://www.youtube.com/watch?v=bwv_2OKxZr8', //Barkley Bizzare Adventure
		'https://www.youtube.com/watch?v=uints81YYMc', //Slam of the North Star
		'https://www.youtube.com/watch?v=VjR7JZbdONs', //Wonderball 101
		'https://www.youtube.com/watch?v=qH4NbO74A1k', //Epic Slam Guy
		'https://www.youtube.com/watch?v=O4J_S3NdIUE', //Through the Slams and Jams
		'https://www.youtube.com/watch?v=J9FImc2LOr8', //Original
		'https://youtu.be/cCeovAd7iOQ', //Slamstorm
		'https://youtu.be/SCivYNvACCU', //Slamiru
		'https://www.youtube.com/watch?v=Q9Sxy2e6f7Y', //Super Slam Bros
		'https://youtu.be/cQ6C-JTYZ6U', //Pokeslam 2 vs Champion
		'https://youtu.be/-Cqrgan-lwk', // Megaloslamia
		'https://www.youtube.com/watch?v=lveR-U4Y_U0', // Thomas the Slam Engine
		'https://www.youtube.com/watch?v=WmZbUZLHX-k', // Pokeslam Theme
		'https://www.youtube.com/watch?v=awkUfIjl1R0', // Ghostslammers
		'https://youtu.be/m719OZjyDzk', //Feel Good Slam
		'https://youtu.be/etZ5aw1j3Ro', //Nintendo Slams
		'https://www.youtube.com/watch?v=rGGh_NMBAk0', //Moves like Jordan
		'https://www.youtube.com/watch?v=F2meN7deokM', //Everyballer
		'https://www.youtube.com/watch?v=f4HeWNiWto8', //Daft Dunk
		'https://youtu.be/v2Vk435T5e0', //Gusty Space Jam Galaxy
		'https://www.youtube.com/watch?v=e68wBw4Vr4k', //I'll make a slam out of you
		'https://youtu.be/hQKmWjGSXeU', //Let it slam
		'https://www.youtube.com/watch?v=ki0080uob0w', //MORTAL Slam
		'https://www.youtube.com/watch?v=0KlxsBPhiKM', //Ocarina of Jam
		'https://youtu.be/W3ozPQZ95sM', //Green Slam Zone
		'https://www.youtube.com/watch?v=Yy-23lC53fw', //He-man x Barkley
		'https://youtu.be/qT1sd6_Wsug', //Batslam
		'https://youtu.be/A_XG0Q_f9tE', //PEPSISLAM
		'https://www.youtube.com/watch?v=fNaIOsY52hI', //Space Emblem
		'https://youtu.be/sLp-063PWqY', //B-ball of battle
		'https://www.youtube.com/watch?v=1lyQ__CG6Wo', //That Baller's Name Is
		'https://www.youtube.com/watch?v=kPXP32QzTFw', //You're My Hoop
		'https://youtu.be/BwBK2xkjaSU', // My Slaw will Jam On
		'https://www.youtube.com/watch?v=ko4k_Ya4n6w', //Fukkireta
		'https://www.youtube.com/watch?v=iBIf0OgZffU' //Carry on Wayward Slam
		]
		
		// memiczne piosenki tutaj
		songmemes = ['https://www.youtube.com/watch?v=f3IgwLT_mYc', //Everybody's Circulation
		'https://youtu.be/8CvqmD0CZao', //Fuck Bees
		'https://youtu.be/WM-fTkO6BI4', //Tribute
		'https://youtu.be/ETfiUYij5UE', //Thomas the Tank Engine
		'https://www.youtube.com/watch?v=K5tVbVu9Mkg', //Cooking by the book
		'https://www.youtube.com/watch?v=9a4exztEy6g', //Down with the Memes
		'https://www.youtube.com/watch?v=1w5_IktEDOI', //Chop Suey
		'https://www.youtube.com/watch?v=FGiwDwmoJLk', //Bieber
		'https://www.youtube.com/watch?v=rEM6zENiupo', //Everybody's Rooftop Run
		'https://www.youtube.com/watch?v=ZZ5LpwO-An4' //He-man
		]
        switch(cmd) {
			case 'hilfe':
				bot.sendMessage({
                    to: channelID,
                    message: 'Prefix ! - hestiastep everythingwillfreeze sandstorm rickroll memesong slam'
					
                });
				bot.sendMessage({
                    to: channelID,
                    message: 'Obrazki: karny yamero getout ok meh obviously'
					
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
				var i = randomIntInc(0,33)
				bot.sendMessage({
					to: channelID,
					message: slam[i]
				})
				break;
				
			case 'memesong':
			var i = randomIntInc(0,8)
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
				
         }
     }
});
 