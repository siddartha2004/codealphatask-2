document.getElementById('play-pause').addEventListener('click', function() {
    let audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause';
    } else {
        audio.pause();
        this.textContent = 'Play';
    }
});

document.getElementById('prev').addEventListener('click', function() {
    
});

document.getElementById('next').addEventListener('click', function() {
    
});

document.getElementById('volume-control').addEventListener('input', function() {
    let audio = document.getElementById('audio');
    audio.volume = this.value / 100;
});
