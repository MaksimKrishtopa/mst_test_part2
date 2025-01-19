const video = document.getElementById('video');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');

const canvas1 = document.createElement('canvas');
const canvas2 = document.createElement('canvas');
const canvas3 = document.createElement('canvas');
const canvas4 = document.createElement('canvas');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');

function setupCanvas() {
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;

  [canvas1, canvas2, canvas3, canvas4].forEach(canvas => {
    canvas.width = videoWidth;
    canvas.height = videoHeight / 4;
  });

  block1.appendChild(canvas1);
  block2.appendChild(canvas2);
  block3.appendChild(canvas3);
  block4.appendChild(canvas4);
}

function draw() {
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;

  ctx1.drawImage(video, 0, 0, videoWidth, videoHeight / 4, 0, 0, canvas1.width, canvas1.height); 
  ctx2.drawImage(video, 0, videoHeight / 4, videoWidth, videoHeight / 4, 0, 0, canvas2.width, canvas2.height); 
  ctx3.drawImage(video, 0, videoHeight / 2, videoWidth, videoHeight / 4, 0, 0, canvas3.width, canvas3.height);
  ctx4.drawImage(video, 0, (videoHeight * 3) / 4, videoWidth, videoHeight / 4, 0, 0, canvas4.width, canvas4.height); 

  requestAnimationFrame(draw);
}

video.addEventListener('loadeddata', () => {
  setupCanvas();
  draw();
});
