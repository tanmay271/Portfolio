// MUSIC TOGGLE
// Audio starts muted by default (autoplay + muted in index.html);
// this control is how a visitor opts in to sound.

let musicBtn = document.querySelector('.sound-settings');
let music = document.querySelector('.player');

function toggleMusic() {
    let soundIcon = musicBtn.querySelector('i');

    if (music.muted) {
        music.muted = false;
        music.play().catch(function () {});
        musicBtn.classList.remove('muted');
        soundIcon.classList.remove('fa-volume-mute');
        soundIcon.classList.add('fa-volume-up');
    } else {
        music.muted = true;
        musicBtn.classList.add('muted');
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-mute');
    }
}

musicBtn.addEventListener('click', toggleMusic);
musicBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMusic();
    }
});
