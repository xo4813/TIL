const songsReducer = () => {
    return[
        {title : "a", artist: "a", duration:"2:50"},
        {title : "b", artist: "b", duration:"3:00"},
        {title : "c", artist: "c", duration:"3:40"},
    ]
};

const selectedSongReducer = (action,selectedSong=null) => {
    
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }
    else 
    {
        return selectedSong;
    }
}

export default combineReducers({
    song: songsReducer,
     selectedSong: selectedSongReducer
});