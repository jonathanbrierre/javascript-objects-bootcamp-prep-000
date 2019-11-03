var playlist = {kanyeWest: 'Lift Yourself'}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist.artistName=songTitle
  return(playlist)
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
}