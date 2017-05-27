var textElement = document.querySelector(".content");

var textContent = "Please drown yourself.\n\n\n\nUser: byeworld\nPass: *************\n\n...\n\nAuthorization level C2\n\n\nAll activities are monitored\n\n\n\n$ sudo mkdir /mnt/usb1\n\n$ sudo mount -a\n\n$ /mnt/usb1/rootK17.sh\ncutting wrists...\nshooting head...........\nslitting neck.....\nPatching /dev/urandom..\n\nplease wait while i drown myself\n\n$ /mnt/usb1/bnet.sh\n\nConnecting to neck.....................\nOK!\n\nNew nuce registered.\n\n\n$ ssh pce life                              \n\n\n\n\n".split("");

var frameIndex = 0;
var drawIndex = 0;

function draw(time) {
  window.requestAnimationFrame(draw);
  if(frameIndex % Math.floor(Math.random()*4+4) === 0) {
    textElement.innerHTML = textElement.innerHTML + textContent[drawIndex % textContent.length];
    if(textElement.innerHTML.length > 60) {
      textElement.innerHTML = textElement.innerHTML.substr(textElement.innerHTML.indexOf("\n") + 1)
    }
    drawIndex++;
  }
  frameIndex += 1;
}

draw();