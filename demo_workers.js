var i = 0;
function timeCount() {
    i = i+1;
    postMessage(i);
    setTimeout("timedcount()",500);
}
timeCount();    