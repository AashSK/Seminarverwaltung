function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}
console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}`);

function Seminar(titel, nameSemLeiter, ort, startZeit, endZeit, freiPlaetze, plaetzeGesamt, tutoren) {
    this.titel = titel;
    this.nameSemLeiter = nameSemLeiter;
    this.ort = ort;
    this.startZeit = new Date(startZeit);
    this.endZeit = new Date(endZeit);
    this.freiPlaetze = freiPlaetze;
    this.plaetzeGesamt = plaetzeGesamt;
    this.tutoren = tutoren;
}
function belegt(seminar) {
    return seminar.plaetzeGesamt - seminar.freiPlaetze;
}
const seminar = new Seminar(
    "Web Technologien",
    "Sven Jörges",
    "A.E.01",
    new Date(2019, 10, 29, 12, 30),
    new Date(2019, 10, 29, 14, 30),
    "10",
    "30",
    ["thomas", "Hans"]
);
const seminar1 = new Seminar(
    "Softwaretechnik 2",
    "Ecke schürth",
    "A.E.02",
    new Date(2019, 10, 29, 13, 30),
    new Date(2019, 10, 29, 15, 30),
    "5",
    "30",
    ["Mirko", "Marko"]
);
const seminar2 = new Seminar(
    "Programmierkurs",
    "Rettinger",
    "A.E.02",
    new Date(2019, 10, 29, 8, 30),
    new Date(2019, 10, 29, 10, 30),
    "5",
    "30",
    ["Mirko", "Marko"]
);

const seminare = [];
seminare.push(seminar, seminar1, seminar2);

console.log(seminare);
belegt(seminar1);

seminare.sort((a, b) => {
    return a.startZeit - b.startZeit;
});
console.log(seminare);

seminare.forEach(seminar => {
    console.log(`${seminar.titel} (${seminar.startZeit.toLocaleDateString()}, ${belegt(seminar)} von ${seminar.plaetzeGesamt} plätzen belegt)`);
})

const tbody = document.querySelector("tbody");

const createTd = content => {
    let td = document.createElement("td");
    td.textContent = content;
    return td;
}

const createTdWithLink = content => {
    let td = document.createElement("td");
    td.append(content);
    return td;
}

seminare.forEach(s => {
    const tr = document.createElement("tr");
    const link = document.createElement("a");
    link.textContent = s.titel;
    link.href = '../detailSeminar.html';
    tr.append(createTdWithLink(link), createTd(s.startZeit.toLocaleDateString()), createTd(s.ort));
    tbody.append(tr);
});


