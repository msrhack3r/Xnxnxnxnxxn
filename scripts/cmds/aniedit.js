const _0x218e95=_0x1aa9;(function(_0x12ac25,_0x3d6914){const _0x54893d=_0x1aa9,_0x14c0f4=_0x12ac25();while(!![]){try{const _0x5e9c92=-parseInt(_0x54893d(0x144))/0x1+parseInt(_0x54893d(0x149))/0x2*(-parseInt(_0x54893d(0x138))/0x3)+parseInt(_0x54893d(0x137))/0x4*(-parseInt(_0x54893d(0x161))/0x5)+parseInt(_0x54893d(0x14c))/0x6+-parseInt(_0x54893d(0x157))/0x7+-parseInt(_0x54893d(0x13e))/0x8*(parseInt(_0x54893d(0x16a))/0x9)+parseInt(_0x54893d(0x13f))/0xa;if(_0x5e9c92===_0x3d6914)break;else _0x14c0f4['push'](_0x14c0f4['shift']());}catch(_0x5a076a){_0x14c0f4['push'](_0x14c0f4['shift']());}}}(_0x1bd2,0x835d6));function _0x1aa9(_0x22cd5a,_0x1141b2){const _0x1bd2bb=_0x1bd2();return _0x1aa9=function(_0x1aa95b,_0x40dfd4){_0x1aa95b=_0x1aa95b-0x12d;let _0x5d2279=_0x1bd2bb[_0x1aa95b];return _0x5d2279;},_0x1aa9(_0x22cd5a,_0x1141b2);}const axios=require(_0x218e95(0x12f)),fs=require(_0x218e95(0x158)),os=require('os'),yts=require('yt-search'),ytdl=require("@distube/ytdl-core");function _0x1bd2(){const _0x12390e=['16IJeAXU','https://www.googleapis.com/youtube/v3/playlistItems?key=','&playlistId=','2936118NzDnjh','pipe','[ERROR]','floor','[DOWNLOADER]','audioandvideo','Downloading\x20video:\x20','unlinkSync','No\x20video\x20found\x20based\x20on\x20the\x20cached\x20title.','videos','threadID','2497397QETFPx','fs-extra','𝗞𝘀𝗵𝗶𝘁𝗶𝘇\x20&\x20𝗦𝗞𝗬','𝗟𝗼𝗮𝗱𝗶𝗻𝗴\x20𝗿𝗮𝗻𝗱𝗼𝗺\x20𝗮𝗻𝗶𝗺𝗲\x20𝘃𝗶𝗱𝗲𝗼..💫','No\x20unwatched\x20videos\x20left.','data','An\x20error\x20occurred\x20while\x20processing\x20the\x20command.','\x0a⏰|\x20𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:\x20','📹\x20|\x20𝗛𝗲𝗿𝗲\x27𝘀\x20𝘁𝗵𝗲\x20𝗿𝗮𝗻𝗱𝗼𝗺\x20𝗮𝗻𝗶𝗺𝗲\x20𝘃𝗶𝗱𝗲𝗼\x20\x0a\x0a🔮\x20|\x20𝗧𝗶𝘁𝗹𝗲:\x20','length','29410hUHiMU','error','title','response','writeFileSync','aniedit','&part=snippet','https://www.googleapis.com/youtube/v3/videos?key=','createReadStream','480393hkwFct','url','unsendMessage','.mp4','includes','items','senderID','axios','info','/cache/','ytdl-core','timestamp','&part=contentDetails&maxResults=50','tmpdir','❌\x20|\x20The\x20file\x20could\x20not\x20be\x20sent\x20because\x20it\x20is\x20larger\x20than\x2025MB.','508KToQFX','52623McyPxC','/randomVideoTitle.txt','createWriteStream','sentVideos','video','random','24vgRyjq','20136020UDXAmg','messageID','end','statSync','exports','560641hrjgGF','get','sendMessage','size','push'];_0x1bd2=function(){return _0x12390e;};return _0x1bd2();}module[_0x218e95(0x143)]={'sentVideos':[],'config':{'name':_0x218e95(0x166),'version':'2.0','role':0x0,'author':_0x218e95(0x159),'cooldowns':0x28,'shortDescription':'Fetch\x20a\x20random\x20video\x20from\x20a\x20YouTube\x20playlist\x20and\x20send\x20it','longDescription':'','category':_0x218e95(0x13c),'dependencies':{'fs-extra':'','axios':'','ytdl-core':'','yt-search':''}},'onStart':async function({api:_0x2011ae,event:_0x124551,message:_0x3ec960}){const _0x474524=_0x218e95;try{const _0x40e8f5=_0x124551[_0x474524(0x12e)],_0x7a1bc4=await _0x2011ae[_0x474524(0x146)](_0x474524(0x15a),_0x124551[_0x474524(0x156)],null,_0x124551[_0x474524(0x140)]),_0x4bf2c4='AIzaSyAO1tuGus4-S8RJID51f8WJAM7LXz1tVNc',_0x15a29d='PLaPLzpOlr3JSGd0fFH1jpBeZ9-mMeUQ-P',_0x299635=_0x474524(0x14a)+_0x4bf2c4+_0x474524(0x14b)+_0x15a29d+_0x474524(0x134),_0x4ad0ba=await axios[_0x474524(0x145)](_0x299635),_0x30ccc6=_0x4ad0ba['data'][_0x474524(0x12d)],_0x27f623=_0x30ccc6['map'](_0x593179=>_0x593179['contentDetails']['videoId']);this[_0x474524(0x13b)]['length']===_0x27f623[_0x474524(0x160)]&&(this[_0x474524(0x13b)]=[]);const _0x28a577=_0x27f623['filter'](_0x3879f1=>!this[_0x474524(0x13b)][_0x474524(0x16e)](_0x3879f1));if(_0x28a577['length']===0x0)return _0x2011ae[_0x474524(0x16c)](_0x7a1bc4['messageID']),_0x2011ae[_0x474524(0x146)](_0x474524(0x15b),_0x124551[_0x474524(0x156)],null,_0x124551[_0x474524(0x140)]);const _0x404ee1=_0x28a577[Math[_0x474524(0x14f)](Math[_0x474524(0x13d)]()*_0x28a577[_0x474524(0x160)])];this['sentVideos'][_0x474524(0x148)](_0x404ee1);const _0x7bab24=_0x474524(0x168)+_0x4bf2c4+'&id='+_0x404ee1+_0x474524(0x167),_0xfbbb61=await axios[_0x474524(0x145)](_0x7bab24),_0x3d0fa8=_0xfbbb61[_0x474524(0x15c)][_0x474524(0x12d)][0x0]['snippet'],_0x1032c0=_0x3d0fa8[_0x474524(0x163)],_0x39e211=os[_0x474524(0x135)]()+_0x474524(0x139);fs[_0x474524(0x165)](_0x39e211,_0x1032c0);const _0x3d9d70=await yts(_0x1032c0);if(!_0x3d9d70[_0x474524(0x155)][_0x474524(0x160)])return _0x2011ae['unsendMessage'](_0x7a1bc4[_0x474524(0x140)]),_0x2011ae[_0x474524(0x146)](_0x474524(0x154),_0x124551[_0x474524(0x156)],null,_0x124551[_0x474524(0x140)]);const _0x5348ac=_0x3d9d70['videos'][0x0],_0x3c77f1=_0x5348ac[_0x474524(0x16b)],_0xa8b8b0=ytdl(_0x3c77f1,{'filter':_0x474524(0x151)}),_0x9c7d63=_0x40e8f5+_0x474524(0x16d),_0x427486=__dirname+(_0x474524(0x131)+_0x9c7d63);_0xa8b8b0[_0x474524(0x14d)](fs[_0x474524(0x13a)](_0x427486)),_0xa8b8b0['on'](_0x474524(0x164),()=>{const _0x4f6c81=_0x474524;console[_0x4f6c81(0x130)](_0x4f6c81(0x150),'Starting\x20download\x20now!');}),_0xa8b8b0['on'](_0x474524(0x130),_0x5923ff=>{const _0x45d2dc=_0x474524;console[_0x45d2dc(0x130)]('[DOWNLOADER]',_0x45d2dc(0x152)+_0x5923ff['videoDetails'][_0x45d2dc(0x163)]);}),_0xa8b8b0['on'](_0x474524(0x141),()=>{const _0xab1fd5=_0x474524;console[_0xab1fd5(0x130)]('[DOWNLOADER]\x20Downloaded');if(fs[_0xab1fd5(0x142)](_0x427486)[_0xab1fd5(0x147)]>0x1900000)return fs[_0xab1fd5(0x153)](_0x427486),_0x2011ae[_0xab1fd5(0x16c)](_0x7a1bc4['messageID']),_0x2011ae[_0xab1fd5(0x146)](_0xab1fd5(0x136),_0x124551['threadID'],null,_0x124551[_0xab1fd5(0x140)]);const _0x31e06c={'body':_0xab1fd5(0x15f)+_0x1032c0+_0xab1fd5(0x15e)+_0x5348ac['duration'][_0xab1fd5(0x133)],'attachment':fs[_0xab1fd5(0x169)](_0x427486)};_0x2011ae[_0xab1fd5(0x146)](_0x31e06c,_0x124551[_0xab1fd5(0x156)],null,_0x124551[_0xab1fd5(0x140)],()=>{fs['unlinkSync'](_0x427486);}),setTimeout(()=>{const _0x51c94a=_0xab1fd5;_0x2011ae[_0x51c94a(0x16c)](_0x7a1bc4['messageID']);},0x2710);});}catch(_0x53c114){console[_0x474524(0x162)](_0x474524(0x14e),_0x53c114),_0x2011ae[_0x474524(0x146)](_0x474524(0x15d),_0x124551[_0x474524(0x156)],null,_0x124551[_0x474524(0x140)]);}}};