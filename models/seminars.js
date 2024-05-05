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

module.exports.array = seminare;