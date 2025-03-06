navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("lokasi").innerText = data.display_name;
    })
    .catch(err => console.log(err));
});

function updateClock() {
    let waktu = new Date().toLocaleTimeString();
    document.getElementById("jam").innerText = waktu;
}
setInterval(updateClock, 1000);
updateClock();

let audio = document.getElementById("audio");
let playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "PAUSE SEVENTEEN 48";
    } else {
        audio.pause();
        playPauseBtn.textContent = "LAGU SEVENTEEN 48";
    }
});
