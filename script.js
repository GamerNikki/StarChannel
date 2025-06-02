// script.js

document.querySelectorAll('.channel-btn').forEach(button => {
    button.addEventListener('click', function() {
        const channelNumber = this.getAttribute('data-channel');
        switchChannel(channelNumber);
    });
});

function switchChannel(channelNumber) {
    const channelName = document.getElementById('channel-name');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    let playlist = [];

    switch (channelNumber) {
        case '1':
            channelName.textContent = "Channel 1 - News";
            playlist = [
                "https://path_to_channel_1_video1.mp4", // Replace with actual URLs
                "https://path_to_channel_1_video2.mp4",
                "https://path_to_channel_1_video3.mp4"
            ];
            break;
        case '2':
            channelName.textContent = "Channel 2 - Sports";
            playlist = [
                "https://path_to_channel_2_video1.mp4", 
                "https://path_to_channel_2_video2.mp4"
            ];
            break;
        case '3':
            channelName.textContent = "Channel 3 - Movies";
            playlist = [
                "https://path_to_channel_3_video1.mp4",
                "https://path_to_channel_3_video2.mp4"
            ];
            break;
        default:
            channelName.textContent = "Select a channel to watch";
            videoSource.src = "";
            videoPlayer.load();
            return;
    }

    let currentVideo = 0;

    // Set the first video source
    videoSource.src = playlist[currentVideo];
    videoPlayer.load();

    // Event listener for when the video ends, load the next one
    videoPlayer.addEventListener('ended', function() {
        currentVideo++;
        if (currentVideo < playlist.length) {
            videoSource.src = playlist[currentVideo];
            videoPlayer.load();
            videoPlayer.play();
        } else {
            currentVideo = 0; // Loop back to the first video in the playlist
        }
    });
}
