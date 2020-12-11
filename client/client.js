import * as alt from 'alt';
import * as game from 'natives';

let hidden = false;
let webview;
let opened = false;
const url = `http://resource/client/html/auth/index.html`;
let view;


alt.on('keyup', (key) => {
    if (key === 0x73) { //F3 KEY
        if (!webview)
            openWebview();
        else
            closeWebview();
    }
});


alt.onServer('webview:Load', openWebview);

function openWebview() {
    if (!webview) {
        webview = new alt.WebView('http://resource/html/index.html');
        webview.on('ped1', pedgeldi);
    }
    webview.focus();
    alt.showCursor(true);
    alt.toggleGameControls(false);
}

function pedgeldi(pedadi) {
    alt.log(pedadi)
    alt.emitServer('pedspawnla', pedadi)
}

function closeWebview() {
    alt.showCursor(false);
    alt.toggleGameControls(true);
    webview.destroy();
    webview = undefined;
}