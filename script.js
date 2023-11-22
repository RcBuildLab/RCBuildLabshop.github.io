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
        ),
        new angebot(
            "https://www.amazon.de/RUNCCI-Wippschalter%EF%BC%8Ckippschalter-Verdrahtete-Kippschalter-Haushaltsger%C3%A4te/dp/B07MW92CW8?pd_rd_w=02D3i&content-id=amzn1.sym.f81e69b0-8d25-4d0a-a0ba-d47e95a31f14%3Aamzn1.symc.ca948091-a64d-450e-86d7-c161ca33337b&pf_rd_p=f81e69b0-8d25-4d0a-a0ba-d47e95a31f14&pf_rd_r=44F6KMV9DR19H9KPP6M4&pd_rd_wg=jCNd9&pd_rd_r=ba0f24eb-7eb3-4a6a-b612-a40d184e5da7&pd_rd_i=B07MW92CW8&linkCode=ll1&tag=smarthometv0b-20&linkId=22025122f86800d36b899626a9742c0b&language=de_DE&ref_=as_li_ss_tl"
            , "https://m.media-amazon.com/images/I/71Au-FR-V1L._SX522_.jpg",
            "Switches"
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