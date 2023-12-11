const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Promt to select media stream, pass to video element, then play 

async function selectMediaScreen() {
  try {
    const mediaScreen = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaScreen;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    console.log(err)
  }
}
//button 

button.addEventListener('click', async () => {
  //disabled button
  button.disabled = true;

  //start picture in picture

  await videoElement.requestPictureInPicture();

  button.disabled = false;

})

selectMediaScreen();