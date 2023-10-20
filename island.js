var map = L.map('map').setView([64.9631, -19.0208], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker1 = L.marker([64.04433, -16.17766]).addTo(map)
    .bindPopup('64.04433, -16.17766')
    .openPopup();
let marker2 =    L.marker([65.23989, -14.05757]).addTo(map)
    .bindPopup('65.23989, -14.05757')
    .openPopup();
let marker3 =    L.marker([64.90055, -23.94752]).addTo(map)
    .bindPopup('64.90055, -23.94752')
    .openPopup();
let marker4 =    L.marker([66.18627, -18.9313]).addTo(map)
    .bindPopup('66.18627, -18.9313')
    .openPopup();
let marker5 =    L.marker([64.9631, -19.0208]).addTo(map)
    .bindPopup('64.9631, -19.0208')
    .openPopup();
let marker6 =   L.marker([64.39111, -21.25173]).addTo(map)
    .bindPopup('64.39111, -21.25173')
    .openPopup();

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');

let currentButton = null;


marker1.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button1');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

marker2.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button2');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

marker3.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button3');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

marker4.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button4');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

marker5.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button5');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

marker6.on('click', function() {
    if (currentButton) {
        currentButton.style.backgroundColor = '';
    }
    let button = document.getElementById('button6');
    if (button) {
        button.style.backgroundColor = '#749B67';
        button.style.color = '#FFFFFF';
        currentButton = button;
    }
});

