'use strict';
const mediaStreamConstrains = {
	video: true
};
const localVideo = document.querySelector('video');
function gotLocalMediaStream(mediaStream){
	localVideo.srcObject = mediaStream;
}
function handleLocalMediaStreamError(error){
	console.log('navigator.getUserMedia error: ',error);
}
navigator.mediaDevices.getUserMedia(mediaStreamConstrains).then(
	gotLocalMediaStream
).catch(
	handleLocalMediaStreamError
);
