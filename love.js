document.getElementById("loveCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateLove();
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

function calculateLove() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    // Generate a random love score between 1 and 100
    let loveScore = Math.floor(Math.random() * 100) + 1;

    let loveMessage = generateLoveMessage(loveScore);
    document.getElementById("loveResult").textContent = name1 + " and " + name2 + " Love Score is " + loveScore + "%" + loveMessage;

    var audio = document.getElementById("audio-love");
    
    if (loveScore >= 80) {
        audio.src= "audio/amazingcouple.mp3";   // Set audio source for amazing couple
        audio.play(); // Play audio for amazing couple
    } else if (loveScore >= 50) {
        audio.src = "audio/friendzone.mp3"; // Set audio source for friendzone
        audio.play(); // Play audio for friendzone
    } else {
        audio.src = "audio/reconsider.mp3"; // Set audio source for reconsideration
        audio.play(); // Play audio for reconsideration
    }

    document.getElementById("popup").style.display = "block";
}

function generateLoveMessage(loveScore) {
    if (loveScore >= 80) {
        return " Amazing couple! 🥰";
    } else if (loveScore >= 50) {
        return " Friendzone 😥";
    } else {
        return " Hmm, maybe you two should reconsider 🫤";
    }
}