const main = document.querySelector("main");
const plusKachel = document.createElement("section");
const btn = document.createElement("button");

btn.textContent = "➕";
plusKachel.append(btn);
main.appendChild(plusKachel);

btn.onclick = () => {
    const titel = prompt("Geben sie einen Titel ein!", "");
    const url = prompt("Geben sie eine Url ein!", "");
    const sectionNeu = document.createElement("section");
    const link = document.createElement("a");
    if (titel && url != null) {
        link.textContent = titel;
        link.href = `https://${url}`;
        sectionNeu.append(link);
        main.removeChild(main.lastChild);
        main.appendChild(sectionNeu);
        main.appendChild(plusKachel);
    }
};

