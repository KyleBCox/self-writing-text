window.onload = function () {
    var selfWritingText = document.getElementsByClassName("self-writing-text");
    for (var i = 0; i <= selfWritingText.length - 1; i++) {
        var element = selfWritingText[i];
        var allLetters = element.getElementsByTagName("span");
        j = showLetter(0, allLetters);

    }
}

function showLetter(j, allLetters) {
    if (j < allLetters.length) {
        setInterval(function () {
            var letter = allLetters[j];
            letter.className = "on"
            showLetter(j++, allLetters)
        }, 250);
    }
}