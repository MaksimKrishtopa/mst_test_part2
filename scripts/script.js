const sourceVideo = document.getElementById('source-video');
const videoBlocks = document.querySelectorAll('.video-block');

videoBlocks.forEach((block) => {
    const video = document.createElement('video');
    video.src = sourceVideo.src;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    block.appendChild(video);

    video.addEventListener('play', () => {
        video.currentTime = sourceVideo.currentTime;
    });

    sourceVideo.addEventListener('timeupdate', () => {
        if (Math.abs(video.currentTime - sourceVideo.currentTime) > 0.1) {
            video.currentTime = sourceVideo.currentTime;
        }
    });
});


sourceVideo.play();