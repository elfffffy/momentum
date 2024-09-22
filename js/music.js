const apiKey = config.googleapikey;
const playlistId = 'PLt7bG0K25iXi07OYe7jBTXvvdGItGM25I';
let music;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('music', {
        height: '390',
        width: '640',
        playerVars: {
            listType: 'playlist',
            list: playlistId,
            controls: 1,
        },
        event: {
            'onReady': onPlayerReady,
            'onStageChange': onPlayerStateChange
        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        console.log('Playlist ended');
    }
}


