fx_version 'cerulean'
game {'gta5'}
author 'GMD-Scripts'
description 'GMD_Loadingscreen'

version '1.0.0'
lua54 'yes'

loadscreen 'html/index.html'

loadscreen_manual_shutdown "yes"
shared_script 'config.lua'

escrow_ignore {
    'config.lua',
    'client/client.lua',
	'config.js',
	'server/steam.lua',
	'server/VersionCheck.lua'
}


files {
    'config.js',
    'html/index.html',
    'html/media/*.mp4',
    'html/media/*.mp3',
    'html/media/*.webm',
    'html/media/*.png',
    'html/scripts/*.js',
    'html/css/index.css'
}

client_scripts {
    'client/client.lua'
}


server_script {
'server/VersionCheck',
'server/steam.lua'
}