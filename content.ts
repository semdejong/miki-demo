/**
 * Alle prospectfeiten voor Schildersbedrijf Miki.
 * Alleen wat op de live site staat; niets verzonnen.
 * slug "miki-demo" is de data-demo van de Sleads-tracker.
 */
export type ProjectPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ServiceId =
  | "schilderwerk"
  | "behang"
  | "glaszetten"
  | "stukadoorswerk"
  | "timmerwerk";

export const photos: ProjectPhoto[] = [
  { id: "01", src: "/img/projecten/01.jpg", width: 573, height: 768, alt: "Schilder in witte werkkleding schildert een wit kozijn in een rode bakstenen gevel." },
  { id: "02", src: "/img/projecten/02.jpg", width: 1024, height: 765, alt: "Zolder met houten dakbeschot, gordingen en een kale vloer." },
  { id: "03", src: "/img/projecten/03.jpg", width: 1024, height: 765, alt: "Zolder tijdens het werk, met een puinzak, stapels dakpannen en open dakbeschot." },
  { id: "04", src: "/img/projecten/04.jpg", width: 1024, height: 684, alt: "Afgewerkte zolder met witte wanden, houten spanten, een dakraam en een wand van glasblokken." },
  { id: "05", src: "/img/projecten/05.jpg", width: 1024, height: 684, alt: "Zolder met wastafel, mozaïektegels, handdoekradiator en een wand van glasblokken." },
  { id: "06", src: "/img/projecten/06.jpg", width: 513, height: 768, alt: "Trapgat omzoomd met glasblokken in een wit kader, met een houten leuning." },
  { id: "07", src: "/img/projecten/07.jpg", width: 1024, height: 576, alt: "Binnenruimte met een vlekkerige wand, een donkere deur met ruiten en een open houten balklaag." },
  { id: "08", src: "/img/projecten/08.jpg", width: 1024, height: 576, alt: "Ruimte met wit metselwerk, een stalen kolom, een oud fornuis en een deels kale wand." },
  { id: "09", src: "/img/projecten/09.jpg", width: 1024, height: 576, alt: "Binnenruimte met een wit geschilderde muur, een bakstenen wand en een stalen kolom." },
  { id: "10", src: "/img/projecten/10.jpg", width: 1024, height: 576, alt: "Donkere houten balklaag met tl-buizen boven een gepleisterde wand." },
  { id: "11", src: "/img/projecten/11.jpg", width: 1024, height: 576, alt: "Wand die wordt gestuct, met twee trappen en een deur waarvan de ruiten met folie zijn afgeplakt." },
  { id: "12", src: "/img/projecten/12.jpg", width: 1024, height: 576, alt: "Witte deuren met ruiten, deels afgeplakt met bloemetjesfolie, naast een gestucte wand." },
  { id: "13", src: "/img/projecten/13.jpg", width: 1024, height: 576, alt: "Wand met gipsplaten en voegen, een trap en deuren met afgeplakte ruiten." },
  { id: "14", src: "/img/projecten/14.jpg", width: 1024, height: 576, alt: "Vers gestuct plafond met een peertje, daaronder een wand met gipsplaten." },
  { id: "15", src: "/img/projecten/15.jpg", width: 1024, height: 576, alt: "Ruimte met wit gestucte wanden en een glad plafond." },
  { id: "16", src: "/img/projecten/16.jpg", width: 1024, height: 576, alt: "Wit geschilderde wand met twee ramen en een kolom." },
  { id: "17", src: "/img/projecten/17.jpg", width: 1024, height: 576, alt: "Witte wanden en kolommen onder een glad plafond, met een gasfles en een werktafel." },
  { id: "18", src: "/img/projecten/18.jpg", width: 1024, height: 576, alt: "Witte deuren met afgeplakte ruiten, een wit plafond en een wasbakje aan de wand." },
  { id: "19", src: "/img/projecten/19.jpg", width: 1024, height: 768, alt: "Witte bakstenen woning met rode dakpannen, zwarte luiken en een carport." },
  { id: "20", src: "/img/projecten/20.jpg", width: 1024, height: 768, alt: "Zijgevel van een wit geschilderde woning met dakkapellen en zwarte luiken." },
  { id: "21", src: "/img/projecten/21.jpg", width: 1024, height: 768, alt: "Witte gevel met witte kozijnen en zwarte luiken boven een donkere plint." },
  { id: "22", src: "/img/projecten/22.jpg", width: 1024, height: 768, alt: "Zwarte voordeur en zwarte garagedeur in een wit geschilderde gevel." },
  { id: "23", src: "/img/projecten/23.jpg", width: 1024, height: 768, alt: "Achterzijde van een wit geschilderde woning met een overkapping en openslaande deuren." },
  { id: "24", src: "/img/projecten/24.jpg", width: 1024, height: 768, alt: "Laminaat in aanleg langs een radiator, met hamer, winkelhaak en rolmaat." },
  { id: "25", src: "/img/projecten/25.jpg", width: 1024, height: 768, alt: "Lichte laminaatvloer langs een radiator en een deuropening." },
  { id: "26", src: "/img/projecten/26.jpg", width: 1024, height: 768, alt: "Laminaatvloer langs een radiator, met een stoel op de voorgrond." },
  { id: "27", src: "/img/projecten/27.jpg", width: 1024, height: 768, alt: "Houten vloer die deels gelakt is, met een verfbak, roller en blik." },
  { id: "28", src: "/img/projecten/28.jpg", width: 1024, height: 768, alt: "Bedrijfsruimte met kalkzandsteen, platen, metalen regels en isolatie op een blauwe vloer." },
  { id: "29", src: "/img/projecten/29.jpg", width: 1024, height: 768, alt: "Kantoorruimte met een trap, een systeemplafond en platen tegen de wand." },
  { id: "30", src: "/img/projecten/30.jpg", width: 1024, height: 768, alt: "Voorzetwand van houten regels met isolatie ertussen." },
  { id: "31", src: "/img/projecten/31.jpg", width: 1024, height: 768, alt: "Detail van een verrotte houten onderdorpel en een afbladderend kozijnstijl." },
  { id: "32", src: "/img/projecten/32.jpg", width: 1024, height: 768, alt: "Wit geschilderd kozijn op een gemetselde onderdorpel, met een restje bruin hout in de hoek." },
  { id: "33", src: "/img/projecten/33.jpg", width: 1024, height: 768, alt: "Sterk aangetast kozijn en een verrotte onderdorpel tegen een bakstenen muur." },
  { id: "34", src: "/img/projecten/34.jpg", width: 1024, height: 768, alt: "Wit geschilderd kozijn in een bakstenen gevel, afgewerkt op de dorpel." },
  { id: "35", src: "/img/projecten/35.jpg", width: 1024, height: 768, alt: "Kozijn waarvan het onderste deel openligt, met folie en latten tussen de stijlen." },
  { id: "36", src: "/img/projecten/36.jpg", width: 1024, height: 768, alt: "Onbehandelde verticale houten delen in een gevelvak, naast een nog open deel met folie." },
  { id: "37", src: "/img/projecten/37.jpg", width: 576, height: 768, alt: "Bakstenen gevel met donkere verticale betimmering tussen de ramen en een ladder ervoor." },
  { id: "38", src: "/img/projecten/38.jpg", width: 576, height: 768, alt: "Groen deurpaneel waarvan het hout rond het raam is weggerot, met een frees op de rand." },
  { id: "39", src: "/img/projecten/39.jpg", width: 1024, height: 768, alt: "Donkergroen geschilderde voordeur met liggende groeven en een raampje." },
  { id: "40", src: "/img/projecten/40.jpg", width: 1024, height: 768, alt: "Onderdorpel van een buitendeur in bewerking, met latten en gereedschap." },
  { id: "41", src: "/img/projecten/41.jpg", width: 1024, height: 768, alt: "Witte onderdorpel onder een buitendeur, met een donkere mat binnen." },
  { id: "42", src: "/img/projecten/42.jpg", width: 1024, height: 768, alt: "Smalle ruimte met grijze vloertegels en donkere mozaïektegels op de zijwanden." },
  { id: "43", src: "/img/projecten/43.jpg", width: 1024, height: 768, alt: "Smalle betegelde ruimte met een donkere achterwand en een afvoer." },
  { id: "44", src: "/img/projecten/44.jpg", width: 1024, height: 768, alt: "Wit betegelde wand met leidingen en een gereedschapskist ervoor." },
  { id: "45", src: "/img/projecten/45.jpg", width: 1024, height: 768, alt: "Donkere wandtegels onder een ruw gestucte strook, naast een raam." },
  { id: "46", src: "/img/projecten/46.jpg", width: 1024, height: 768, alt: "Lichte vloerplanken in een donker kader, op een kale betonvloer." },
  { id: "47", src: "/img/projecten/47.jpg", width: 1024, height: 768, alt: "Donkere glanzende wandtegels en een tegelblok met uitsparingen." },
  { id: "48", src: "/img/projecten/48.jpg", width: 1024, height: 768, alt: "Lichte vloerplanken met afstandhouders, naast een donkere tegelstrook." },
  { id: "49", src: "/img/projecten/49.jpg", width: 1024, height: 768, alt: "Vloertegels in de lijm, met een lijmkam en een deel dat al gelegd is." },
  { id: "50", src: "/img/projecten/50.jpg", width: 1024, height: 768, alt: "Vloer in aanleg: donkere tegels, lichte planken en een bed van lijm met kamstrepen." },
  { id: "51", src: "/img/projecten/51.jpg", width: 1024, height: 768, alt: "Grotendeels gelegde donkere vloertegels, met een licht vak ernaast." },
  { id: "52", src: "/img/projecten/52.jpg", width: 1024, height: 768, alt: "Toilet in een hoek met donkere wandtegels en een witte bedieningsplaat." },
  { id: "53", src: "/img/projecten/53.jpg", width: 1024, height: 768, alt: "Binnenkamer met crème wanden en een doorkijk naar een oranje deur." },
  { id: "54", src: "/img/projecten/54.jpg", width: 1024, height: 768, alt: "Gebogen plaatprofielen op een werkbank, met een boormachine en een stofzuiger." },
  { id: "55", src: "/img/projecten/55.jpg", width: 1024, height: 768, alt: "Gebogen koplat op een werkbank, met hamer en rolmaat, tegen een bakstenen muur." },
  { id: "56", src: "/img/projecten/56.jpg", width: 576, height: 768, alt: "Ronde houten omlijsting om een deuropening, met een oranje deur erachter." },
  { id: "57", src: "/img/projecten/57.jpg", width: 1024, height: 768, alt: "Woonkamer met een crème binnendeur, een lambrisering en een ronde doorgang." },
  { id: "58", src: "/img/projecten/58.jpg", width: 1024, height: 768, alt: "Donker gebeitste houten berging in een tuin, met een raampje en een open deur." },
  { id: "59", src: "/img/projecten/59.jpg", width: 1024, height: 768, alt: "Tuin waarin een houten berging deels is gesloopt, met planken en een ladder." },
  { id: "60", src: "/img/projecten/60.jpg", width: 1024, height: 768, alt: "Houten dakraamwerk van een berging, met platen en ladders." },
  { id: "61", src: "/img/projecten/61.jpg", width: 1024, height: 768, alt: "Houten draagconstructie van een berging met een dakbeschot." },
  { id: "62", src: "/img/projecten/62.jpg", width: 1024, height: 768, alt: "Houten skelet van een berging met een geplaatst raam." },
  { id: "63", src: "/img/projecten/63.jpg", width: 1024, height: 768, alt: "Houten berging met horizontale betimmering en een open deuropening." },
  { id: "64", src: "/img/projecten/64.jpg", width: 1024, height: 768, alt: "Rode bakstenen boog in aanbouw tegen een wit geschilderde muur." },
  { id: "65", src: "/img/projecten/65.jpg", width: 1024, height: 768, alt: "Bakstenen buitenwerk met een boog en penanten, nog zonder afwerking." },
  { id: "66", src: "/img/projecten/66.jpg", width: 1024, height: 768, alt: "Gemetselde boog met een doorlopende bakstenen bovenrand." },
  { id: "67", src: "/img/projecten/67.jpg", width: 1024, height: 768, alt: "Gemetselde opbouw met een ronde plaat en een stalen frame, tegen een wit geschilderde muur." },
  { id: "68", src: "/img/projecten/68.jpg", width: 1024, height: 768, alt: "Gemetselde boog met een tijdelijke bekisting van plaatmateriaal." },
  { id: "69", src: "/img/projecten/69.jpg", width: 1024, height: 768, alt: "Roestvrijstalen spoelbak op een gemetselde rand, tegen een wit geschilderde muur." },
  { id: "70", src: "/img/projecten/70.jpg", width: 1024, height: 768, alt: "Wit geschilderde bakstenen woning met een erker en een donkere dakrand." },
  { id: "71", src: "/img/projecten/71.jpg", width: 1024, height: 768, alt: "Detail van een wit geschilderde gevel met een raam, een bankje en een erker met een zwart dakje." },
  { id: "72", src: "/img/projecten/72.jpg", width: 513, height: 768, alt: "Zwarte voordeur met witte omlijsting in een rode bakstenen gevel." },
  { id: "73", src: "/img/projecten/73.jpg", width: 536, height: 768, alt: "Zwarte openslaande deuren met witte kozijnen onder een donker balkonhek." },
  { id: "74", src: "/img/projecten/74.jpg", width: 1024, height: 717, alt: "Zwarte openslaande deuren met roedeverdeling, zijramen en een witte omlijsting in een bakstenen gevel." },
];

export const projectGroups: { label: string; slug: string; note: string; ids: string[] }[] = [
  {
    label: "01 – 06",
    slug: "01-06",
    note: "Een kozijn in de verf, een zolder met dakbeschot, en een wand van glasblokken.",
    ids: ["01", "02", "03", "04", "05", "06"],
  },
  {
    label: "07 – 18",
    slug: "07-18",
    note: "Binnenwanden en plafonds: kaal, in het stucwerk, en wit afgewerkt.",
    ids: ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
  },
  {
    label: "19 – 23",
    slug: "19-23",
    note: "Een wit geschilderde woning, met luiken, deuren en een carport.",
    ids: ["19", "20", "21", "22", "23"],
  },
  {
    label: "24 – 27",
    slug: "24-27",
    note: "Een vloer in aanleg, en een houten vloer die deels gelakt is.",
    ids: ["24", "25", "26", "27"],
  },
  {
    label: "28 – 30",
    slug: "28-30",
    note: "Wanden in een bedrijfs- of kantoorruimte, met regels, platen en isolatie.",
    ids: ["28", "29", "30"],
  },
  {
    label: "31 – 41",
    slug: "31-41",
    note: "Houtrot aan dorpels en kozijnen, een deur in bewerking, en hout in een gevelvak.",
    ids: ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
  },
  {
    label: "42 – 52",
    slug: "42-52",
    note: "Tegels en vloerplanken, in de lijm en gelegd.",
    ids: ["42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"],
  },
  {
    label: "53 – 57",
    slug: "53-57",
    note: "Een binnenkamer, een gebogen koplat op de werkbank, en een ronde houten omlijsting.",
    ids: ["53", "54", "55", "56", "57"],
  },
  {
    label: "58 – 63",
    slug: "58-63",
    note: "Een houten berging in een tuin, van open skelet tot betimmering.",
    ids: ["58", "59", "60", "61", "62", "63"],
  },
  {
    label: "64 – 69",
    slug: "64-69",
    note: "Een gemetselde boog tegen een wit geschilderde muur.",
    ids: ["64", "65", "66", "67", "68", "69"],
  },
  {
    label: "70 – 74",
    slug: "70-74",
    note: "Geschilderde gevels, een erker, en deuren in een bakstenen muur.",
    ids: ["70", "71", "72", "73", "74"],
  },
];

const photoMap = new Map(photos.map((photo) => [photo.id, photo]));

export function photosByIds(ids: readonly string[]): ProjectPhoto[] {
  return ids.map((id) => {
    const photo = photoMap.get(id);
    if (!photo) throw new Error(`Foto ${id} ontbreekt`);
    return photo;
  });
}

const offerteZin =
  "Graag kom ik vrijblijvend bij u langs om een offerte uit te brengen. De offerte geschiedt op basis van gewerkte uren, maar desgewenst kunnen we ook vooraf een vaste aanneemsom afspreken.";

const onderEenDak =
  "Zo heeft u alles onder één dak voor het totaalonderhoud van uw onroerend goed.";

export const content = {
  slug: "miki-demo",

  company: {
    name: "Schildersbedrijf Miki",
    logoWordmark: "Schilders bedrijf Miki",
    person: "Nusret Jasarevic",
    logo: "/logo.png",
    city: "Lochem",
    street: "Jan Steenlaan 17",
    postalCode: "7242 DT",
  },

  colors: {
    primary: "#3C3816",
    primaryForeground: "#F3F2E4",
    accent: "#7B742D",
    background: "#F3F2E4",
    foreground: "#3C3816",
    muted: "#E7E6C1",
  },

  seo: {
    title: "Schildersbedrijf Miki · schilderwerk en totaalonderhoud in Lochem",
    description:
      "Schildersbedrijf Miki in Lochem: totaalonderhoud van woning, kantoor, winkel of bedrijfsunit. Schilderwerk, behang, beglazing, stucwerk en klein timmerwerk.",
    lang: "nl",
  },

  contact: {
    phone: { label: "Tel.", display: "0573 841 161", href: "tel:+31573841161" },
    mobile: { label: "Mobiel", display: "06 4426 8515", href: "tel:+31644268515" },
    email: { label: "E-mail", display: "j.miki@hotmail.com", href: "mailto:j.miki@hotmail.com" },
  },

  copy: {
    h1: "Een betrouwbaar en professioneel schildersbedrijf in Lochem of omgeving",
    geenTijd: "Heeft u zelf geen tijd of zin om een klus uit te voeren?",
    gespecialiseerd:
      "Wij zijn gespecialiseerd in het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit. Naast het schilderwerk kunnen wij ook uw beglazing, behangwerk, stukadoorswerk en klein timmerwerk en het vervangen van houtrot verzorgen, waardoor u alles onder één dak heeft voor het totaalonderhoud van uw onroerend goed.",
    vertrouwen:
      "Ik zou graag uw vertrouwen winnen door u de beste service aan te bieden die er in mijn bedrijfstak bestaat. Mijn belangrijkste uitgangspunt is dan ook om mijn klanten 100% tevreden te stellen.",
    offerte: offerteZin,
    kortom: "Kortom; van Schildersbedrijf Miki krijgt u kwaliteit voor een eerlijke prijs!",
    vragen: "Heeft u vragen of opmerkingen?",
    beantwoord: "Ik beantwoord ze graag!",
    fotoNote: "Werkfoto's zonder titel, plaats of jaar. Wat u ziet, staat op de foto.",
    formNote:
      "Dit formulier verstuurt niets naar een server. Het opent een e-mail in uw mailprogramma, gericht aan j.miki@hotmail.com, en begint met «Goedendag,». U verstuurt die e-mail zelf.",
    baanLabel: "01 Schilderwerk · 02 Behang · 03 Glas · 04 Stuc en timmer",
    zoek: "Bent u op zoek naar een betrouwbaar en professioneel schildersbedrijf in Lochem of omgeving?",
    pandenKop: "Uw woning, kantoor, winkel of bedrijfsunit",
    langsKop: "Vrijblijvend bij u langs",
    reeksKop: "Wat de reeks toont",
    reeksUitleg:
      "De nummers volgen de oorspronkelijke site. Er is geen titel, plaats of jaar bij bekend. De zin erbij beschrijft alleen wat op de foto's te zien is.",
    nietElkVak:
      "Niet elke foto is een apart vak. Tegels, een berging of metselwerk staan erbij omdat ze op de foto staan. Het aanbod blijft schilderwerk, behangwerk, beglazing, stukadoorswerk en klein timmerwerk, waaronder het vervangen van houtrot.",
  },

  panden: [
    { id: "woning", title: "Woning", grow: 1.15, width: "100%", tone: "vlak" as const },
    { id: "kantoor", title: "Kantoor", grow: 0.78, width: "74%", tone: "white" as const },
    { id: "winkel", title: "Winkel", grow: 0.96, width: "86%", tone: "paper" as const },
    { id: "unit", title: "Bedrijfsunit", grow: 1.28, width: "64%", tone: "vlak" as const },
  ],

  wijzen: [
    {
      id: "uren",
      label: "Op uren",
      title: "De offerte geschiedt op basis van gewerkte uren.",
      grow: 1.35,
      width: "100%",
      tone: "vlak" as const,
    },
    {
      id: "som",
      label: "Aanneemsom",
      title: "Desgewenst spreken we vooraf een vaste aanneemsom af.",
      grow: 0.88,
      width: "82%",
      tone: "white" as const,
    },
  ],

  nav: [
    { href: "/", label: "Home" },
    { href: "/schilderwerk", label: "Schilderwerk" },
    { href: "/behang", label: "Behangen" },
    { href: "/glaszetten", label: "Glaszetten" },
    { href: "/stukadoorswerk", label: "Stukadoorswerk" },
    { href: "/timmerwerk", label: "Timmerwerk" },
    { href: "/projecten", label: "Projecten" },
    { href: "/over", label: "Over" },
    { href: "/contact", label: "Contact" },
    { href: "/offerte", label: "Offerte" },
  ],

  services: {
    schilderwerk: {
      id: "schilderwerk",
      href: "/schilderwerk",
      nav: "Schilderwerk",
      title: "Schilderwerk",
      description:
        "Schilderwerk en totaalonderhoud van woning, kantoor, winkel of bedrijfsunit door Schildersbedrijf Miki in Lochem.",
      h1: "Schilderwerk",
      lead: "Schilderwerk voor het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit.",
      strip: "Totaalonderhoud van woning, kantoor, winkel of bedrijfsunit.",
      grow: 1.5,
      width: "100%",
      tone: "vlak",
      paragraphs: [
        "Bent u op zoek naar een betrouwbaar en professioneel schildersbedrijf in Lochem of omgeving? Heeft u zelf geen tijd of zin om een klus uit te voeren?",
        "Wij zijn gespecialiseerd in het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit. Schilderwerk hoort daarbij.",
        "Naast het schilderwerk kunnen wij ook uw beglazing, behangwerk, stukadoorswerk en klein timmerwerk en het vervangen van houtrot verzorgen. " + onderEenDak,
        "Op de foto's ziet u onder meer een kozijn in de verf, wit geschilderde gevels, deuren en een houten vloer die deels gelakt is. Zonder titel, plaats of jaar.",
        offerteZin,
      ],
      photoIds: ["01", "16", "19", "22", "27", "39", "70", "72"],
    },
    behang: {
      id: "behang",
      href: "/behang",
      nav: "Behangen",
      title: "Behangen",
      description:
        "Behangwerk door Schildersbedrijf Miki, samen met schilderwerk, beglazing, stucwerk en klein timmerwerk.",
      h1: "Behangen",
      lead: "Behangwerk, samen met de rest van het onderhoud onder één dak.",
      strip: "Behangwerk, samen met het overige onderhoud onder één dak.",
      grow: 0.86,
      width: "88%",
      tone: "white",
      paragraphs: [
        "Naast het schilderwerk kunnen wij ook uw behangwerk verzorgen.",
        "Dat geldt voor uw woning, kantoor, winkel of bedrijfsunit in Lochem of omgeving. Samen met beglazing, stukadoorswerk en klein timmerwerk hoort behang bij het totaalonderhoud. " + onderEenDak,
        "Op de werkfoto's is geen behangbeurt als zodanig te herkennen. De foto's hebben geen bijschrift. Behangwerk vraagt u aan via de offerte, samen met de rest van het werk.",
        offerteZin,
      ],
      photoIds: [] as string[],
    },
    glaszetten: {
      id: "glaszetten",
      href: "/glaszetten",
      nav: "Glaszetten",
      title: "Glaszetten",
      description:
        "Glaszetten en beglazing door Schildersbedrijf Miki in Lochem, als onderdeel van het totaalonderhoud.",
      h1: "Glaszetten",
      lead: "Beglazing, naast het schilderwerk, onder hetzelfde dak.",
      strip: "Beglazing als onderdeel van hetzelfde werk.",
      grow: 1.05,
      width: "94%",
      tone: "paper",
      paragraphs: [
        "Naast het schilderwerk kunnen wij ook uw beglazing verzorgen.",
        "Beglazing hoort bij het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit. " + onderEenDak,
        "Op de foto's hieronder ziet u wanden van glasblokken: in een afgewerkte zolder, naast een wastafel, en rond een trapgat. Zonder titel, plaats of jaar. Een raam in een geschilderde gevel staat bij de andere werkfoto's, niet als aparte glaszetklus.",
        offerteZin,
      ],
      photoIds: ["04", "05", "06"],
    },
    stukadoorswerk: {
      id: "stukadoorswerk",
      href: "/stukadoorswerk",
      nav: "Stukadoorswerk",
      title: "Stukadoorswerk",
      description:
        "Stukadoorswerk door Schildersbedrijf Miki, naast schilderwerk, behang, beglazing en klein timmerwerk.",
      h1: "Stukadoorswerk",
      lead: "Stucwerk bij het onderhoud van uw pand.",
      strip: "Stucwerk bij het onderhoud van uw pand.",
      grow: 1.28,
      width: "80%",
      tone: "vlak",
      paragraphs: [
        "Naast het schilderwerk kunnen wij ook uw stukadoorswerk verzorgen.",
        "Wanden en plafonds horen bij het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit. " + onderEenDak,
        "Op de foto's ziet u binnenwanden en plafonds: een kale wand, gipsplaten met voegen, stucwerk dat erop gezet wordt, en een ruimte die wit is afgewerkt. Het zijn werkfoto's, geen benoemde projecten, en geen voor-en-na-paar.",
        offerteZin,
      ],
      photoIds: ["07", "10", "11", "13", "14", "15", "17"],
    },
    timmerwerk: {
      id: "timmerwerk",
      href: "/timmerwerk",
      nav: "Timmerwerk",
      title: "Klein timmerwerk",
      description:
        "Klein timmerwerk en het vervangen van houtrot door Schildersbedrijf Miki in Lochem.",
      h1: "Klein timmerwerk",
      lead: "Klein timmerwerk en het vervangen van houtrot.",
      strip: "Klein timmerwerk en het vervangen van houtrot.",
      grow: 0.96,
      width: "90%",
      tone: "white",
      paragraphs: [
        "Naast het schilderwerk kunnen wij ook klein timmerwerk en het vervangen van houtrot verzorgen.",
        "Het hoort bij het totaalonderhoud van uw woning, kantoor, winkel of bedrijfsunit. " + onderEenDak,
        "Op de foto's ziet u aangetaste dorpels en kozijnen, een deurpaneel waar het hout rond het raam is weggerot, hout in een gevelvak, en een gebogen koplat met een ronde omlijsting. Losse werkfoto's: geen voor-en-na-paar, en geen projectnaam.",
        offerteZin,
      ],
      photoIds: ["31", "33", "35", "36", "38", "40", "55", "56"],
    },
  } satisfies Record<
    ServiceId,
    {
      id: ServiceId;
      href: string;
      nav: string;
      title: string;
      description: string;
      h1: string;
      lead: string;
      strip: string;
      grow: number;
      width: string;
      tone: "vlak" | "white" | "paper";
      paragraphs: string[];
      photoIds: string[];
    }
  >,

  pages: {
    projecten: {
      title: "Projectfoto's",
      description: "Werkfoto's van Schildersbedrijf Miki. Zonder titels, plaatsen of jaartallen.",
      h1: "Projectfoto's",
    },
    over: {
      title: "Over mij",
      description: "Nusret Jasarevic, Schildersbedrijf Miki, Jan Steenlaan 17, 7242 DT Lochem.",
      h1: "Over mij",
    },
    contact: {
      title: "Contact",
      description:
        "Bel of mail Schildersbedrijf Miki in Lochem. Tel. 0573 841 161, mobiel 06 4426 8515, j.miki@hotmail.com.",
      h1: "Contact",
    },
    offerte: {
      title: "Offerte",
      description:
        "Vrijblijvend een offerte van Schildersbedrijf Miki. Op basis van uren, of vooraf een vaste aanneemsom.",
      h1: "Vrijblijvend een offerte",
    },
    privacy: {
      title: "Privacy",
      description:
        "Privacy van deze conceptwebsite: cookieloze statistiek, geen formulier op een server.",
      h1: "Privacy",
      paragraphs: [
        "Dit is een conceptwebsite, gemaakt door Sleads voor Schildersbedrijf Miki. Het is niet de live website van het schildersbedrijf.",
        "De site plaatst geen cookies. Wel laadt een cookieloos statistiekbestand dat bijhoudt welke pagina's van dit concept worden bekeken, zodat Sleads het gebruik van het concept kan zien. Er worden geen accounts aangemaakt.",
        "Het contact- en offerteformulier verstuurt niets naar een server. Als u het formulier gebruikt, opent uw eigen mailprogramma een e-mail aan j.miki@hotmail.com. U verstuurt die e-mail zelf.",
        "Op deze conceptsite staan geen recensies. De projectfoto's zijn werkfoto's zonder titel, plaats of jaartal.",
      ],
    },
  },
};

export type Content = typeof content;
