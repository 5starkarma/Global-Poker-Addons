console.log("Table open. Activating hotkeys..");

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
//set hotkeys. 81 is 'Q'. 68 is '
document.onkeydown = function(e) {
    if (e.which == 81) {
        const futureFoldBtn = document.querySelector('.future-actions.fold')
        const foldBtn = document.querySelector('.action-button.action-fold.show')
            if (futureFoldBtn) futureFoldBtn.click();
            else if (foldBtn) foldBtn.click();
    } else if (e.which == 68) {
        const betBtn = document.querySelector('.action-button.action-bet.show')
        const raiseBtn = document.querySelector('.action-button.action-raise.show')
            if (betBtn) betBtn.click();
            else if (raiseBtn) raiseBtn.click();
    } else if (e.which == 69) {
        const callBtn = document.querySelector('.action-button.action-call.show')
        const checkBtn = document.querySelector('.action-button.action-check.show')
            if (callBtn) callBtn.click();
            else if (checkBtn) checkBtn.click();
    } else if (e.which == 38) {
        const betInputBox = document.querySelector('.bet-input')
            if (betInputBox) betInputBox.click();
    }
};

console.log("Hotkeys activated. Tiling and joining table...");
//tile tables and join newly opened table
delay(function(){
    document.querySelector('.tile-tables').click();
    const joinBtn = document.querySelector('.action-join')
        if (joinBtn) joinBtn.click();
}, 900 ); // end delay

console.log("Adding mouseover active table styling..");

//Add red color to bets when mouse is over table
document.querySelector('.view-container').addEventListener("mouseover", mouseOver);
document.querySelector('.view-container').addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.querySelector('.view-container').style.color = "white";
}
function mouseOut() {
    document.querySelector('.view-container').style.color = "grey";
}

console.log("This is the end. My only friend - the end.");
