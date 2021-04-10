const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt user to select a media stream , pass to video element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        //log our errors
        console.log("Whoops, error here: ", error);
    }
}

button.addEventListener("click", async () => {
    //Disable the button
    button.disabled = true;
    //Start the Picture in Picture
    await videoElement.requestPictureInPicture();
    //reset the button
    button.disabled = false;
});
//on load
selectMediaStream();
