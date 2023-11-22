const angebote = document.querySelector(".angebote")

class angebot {
    constructor(link, bildlink, headline) {
        this.link = link;
        this.headline = headline;
        this.bild = bildlink
    }
}


const angeboteListe =
    [
        new angebot(
            "https://www.amazon.de/dp/B0BK98NP95?&linkCode=ll1&tag=smarthometv0b-20&linkId=799fe09522bfa57e76aee0cad8d43520&language=de_DE&ref_=as_li_ss_tl",
            "https://m.media-amazon.com/images/I/51697+FmzmL._AC_SX679_.jpg",
            "Reciver"
        ),
        new angebot(
            "https://www.amazon.de/Gebildet-Getriebemotor-Allradantrieb-Spielzeugauto-Flugzeugspielzeug-Chargennummer/dp/B07Z4PYJY4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KXGPN78FYE9&keywords=gear+motor&qid=1700668384&s=toys&sprefix=gear+motor%2Ctoys%2C131&sr=1-4&linkCode=ll1&tag=smarthometv0b-20&linkId=649c045d001a3a91516b0c8e509701a3&language=de_DE&ref_=as_li_ss_tl",
            "https://m.media-amazon.com/images/I/61eJeiZtiIL._AC_SX679_.jpg",
            "Gear Motors"
        )
    ]


angeboteListe.forEach(ang => {
    renderAngebot(ang.link, ang.bild, ang.headline)
});



function renderAngebot(link, bild, headline) {
    angebote.innerHTML +=
        ` <div class="angebot">
    <a href="${link}"
      target="_blank">
      <button>
        <img alt="Reciver" src="${bild}">
      </button>
      <h5>
      ${headline}
      </h5>
    </a>
    </div>`
}