const playIcons = document.querySelectorAll('.play-btn');  // Select all divs with the .play-btn class
const audioPlayer = document.getElementById('audio-player');
const rangeSlider = document.getElementById('range-slider');

// Play icon click event listener
playIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Stop any currently playing audio
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        }

        // Get the song file from the data attribute of the div
        const song = this.getAttribute('data-song');
        audioPlayer.src = song;  // Set the audio source to the selected song
        audioPlayer.play();      // Play the selected song

        // Enable the range slider for this song
        rangeSlider.value = 0;
        rangeSlider.max = audioPlayer.duration;
    });
});

// Update the range slider as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    rangeSlider.value = audioPlayer.currentTime;
});

// Adjust the song's current time based on the range slider
rangeSlider.addEventListener('input', () => {
    audioPlayer.currentTime = rangeSlider.value;
});
