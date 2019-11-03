
var playlist = { kanyeWest: 'Lift Yourself'}

function updatePlaylist(playlist,artistName,songTitle) {
 var newPlaylist ={}
 Object.assign(newPlaylist,playlist,{artistName: songTitle})
 return(newPlaylist)
  // playlist.artistName=songTitle
  // return(playlist)
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
}