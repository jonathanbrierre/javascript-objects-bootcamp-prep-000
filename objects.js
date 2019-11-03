
var playlist = {}

function updatePlaylist(playlist,artistName,songTitle) {
 var newPlaylist ={}
 Object.assign(newPlaylist,playlist,{artistName: songTitle})
 
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
  return playlist
}