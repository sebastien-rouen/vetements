// Configuration file for clothing catalog
// This file contains all the clothing data and can be easily modified

// Sample clothing data following the /assets/images/[personne]/[catégorie]/ structure
const clothingConfig = [
  // Bastou's items
  {
    id: "bastou-chaussures-001",
    name: "Chaussures de Randonnée Outrise Mid Gore-Tex Homme (Noir)",
    category: "chaussures",
    owner: "bastou",
    year: 2024,
    price: "88,99€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3785007",
    images: [
      "assets/images/bastou/chaussures/2024-salomon-outrise-mid-gtx-noir.webp"
    ],
    description: "Chaussures de randonnée Salomon, imperméables et respirantes Gore-Tex"
  },
  {
    id: "magali-techniques-001",
    name: "Veste Wulfenite Femme (Charbon)",
    category: "vestes",
    owner: "magali",
    year: 2024,
    price: "58,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2565628",
    images: [
      "assets/images/magali/techniques/2024-untrakt-veste-wulfenite-charbon.webp"
    ],
    description: "Veste technique Untrakt légère pour femme"
  },
  {
    id: "bastou-techniques-002",
    name: "Veste Viv GTX Pro Homme (Orange)",
    category: "vestes",
    owner: "bastou",
    year: 2024,
    price: "364,99€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3606326",
    images: [
      "assets/images/bastou/techniques/2024-mountainhardwear-viv-gtx-pro-orange.webp"
    ],
    description: "Veste technique Mountain Hardwear Gore-Tex Pro haute protection"
  },
  {
    id: "bastou-chaussures-002",
    name: "Merino Blend Home (Bleu Marine/Orange)",
    category: "chaussures",
    owner: "bastou",
    year: 2024,
    price: "36,99€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1882487",
    images: [
      "assets/images/bastou/chaussures/2024-isobaa-merino-blend-home-42.webp"
    ],
    description: "Chaussons Isobaa Merino confortables pour la maison"
  },
  {
    id: "magali-techniques-002",
    name: "Veste Fjern Aktiv Femme (Bleu)",
    category: "vestes",
    owner: "magali",
    year: 2024,
    price: "91,99€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1820575",
    images: [
      "assets/images/magali/techniques/2024-fjern-veste-aktiv-bleu.webp"
    ],
    description: "Veste Fjern Aktiv coupe-vent et imperméable pour femme"
  },
  {
    id: "bastou-chaussures-003",
    name: "Merino Blend Home (Bleu Marine/Orange)",
    category: "chaussures",
    owner: "bastou",
    year: 2022,
    price: "40,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1882487",
    images: [
      "assets/images/bastou/chaussures/2022-isobaa-merino-blend-home-44.webp"
    ],
    description: "Chaussons Isobaa Merino pour la maison, coloris bleu marine et orange"
  },
  {
    id: "bastou-techniques-003",
    name: "Elite Fastskin Swim Cap (Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2022,
    price: "12,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1405162",
    images: [
      "assets/images/bastou/techniques/2022-speedo-fastskin-cap-noir.webp"
    ],
    description: "Bonnet de bain Speedo Elite Fastskin pour nageurs réguliers"
  },
  {
    id: "magali-techniques-003",
    name: "Maillot de bain Placement Digital Powerback Femme (Noir/Rose)",
    category: "maillots",
    owner: "magali",
    year: 2022,
    price: "13,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2111288",
    images: [
      "assets/images/magali/techniques/2022-speedo-powerback-noir-rose.webp"
    ],
    description: "Maillot de bain Speedo avec design digital, coupe Powerback"
  },
  {
    id: "bastou-techniques-004",
    name: "Short de bain Dario pour homme (Noir / Gris / Rouge)",
    category: "maillots",
    owner: "bastou",
    year: 2022,
    price: "16,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1696599",
    images: [
      "assets/images/bastou/techniques/2022-aquaspeed-short-dario.webp"
    ],
    description: "Short de bain Aquaspeed multicolore pour homme"
  },
  {
    id: "bastou-chaussures-004",
    name: "Chaussures Panama Pool (Noir/Vert)",
    category: "chaussures",
    owner: "bastou",
    year: 2022,
    price: "14,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1696463",
    images: [
      "assets/images/bastou/chaussures/2022-aquaspeed-panama-pool-noir-vert.webp"
    ],
    description: "Sandales de piscine Aquaspeed Panama Pool, coloris noir/vert"
  },
  // New clothing items from order
  {
    id: "bastou-tshirts-001",
    name: "T-Shirt Merino 150 Homme (Petrol)",
    category: "tshirts",
    owner: "bastou",
    year: 2020,
    price: "35,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1450029",
    images: [
      "assets/images/bastou/tshirts/2020-isobaa-merino-150-petrol.webp"
    ],
    description: "T-Shirt Merino 150 Isobaa pour homme, couleur Petrol, taille M"
  },
  {
    id: "bastou-tshirts-002",
    name: "T-Shirt Merino Crew Homme (Vert)",
    category: "tshirts",
    owner: "bastou",
    year: 2020,
    price: "37,95€",
    size: "M",
    link: "#",
    images: [],
    description: "T-Shirt Merino Crew Vulpine pour homme, couleur verte, taille M"
  },
  {
    id: "magali-tshirts-001",
    name: "T-Shirt Elsa Femme (Bleu)",
    category: "tshirts",
    owner: "magali",
    year: 2020,
    price: "41,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1584195",
    images: [
      "assets/images/magali/tshirts/2020-zajo-elsa-bleu.webp"
    ],
    description: "T-Shirt Elsa Zajo pour femme, couleur bleue, taille S"
  },
  {
    id: "magali-tshirts-002",
    name: "T-Shirt Merino Henley Femme (Rouge)",
    category: "tshirts",
    owner: "magali",
    year: 2020,
    price: "45,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1715196",
    images: [
      "assets/images/magali/tshirts/2020-vulpine-henley-rouge.webp"
    ],
    description: "T-Shirt Merino Henley Vulpine pour femme, couleur rouge, taille S"
  },
  {
    id: "bastou-tshirts-003",
    name: "T-Shirt Adventure Homme (Bleu)",
    category: "tshirts",
    owner: "bastou",
    year: 2020,
    price: "33,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1869153",
    images: [
      "assets/images/bastou/tshirts/2020-supernatural-adventure-bleu.webp"
    ],
    description: "T-Shirt Adventure Super Natural pour homme, couleur bleue, taille M"
  },
  {
    id: "bastou-chaussettes-001",
    name: "Chaussettes Trekking Merino (Noir/Rouge)",
    category: "chaussettes",
    owner: "bastou",
    year: 2020,
    price: "10,95€",
    size: "EU 41-43",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1184706",
    images: [
      "assets/images/bastou/chaussettes/2020-viking-trekking-noir-rouge.webp"
    ],
    description: "Chaussettes Trekking Merino Viking Sport, coloris noir/rouge, taille EU 41-43"
  },
  {
    id: "bastou-chaussettes-002",
    name: "Chaussettes Trekking Merino (Noir/Melange)",
    category: "chaussettes",
    owner: "bastou",
    year: 2020,
    price: "10,95€",
    size: "EU 41-43",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1184698",
    images: [
      "assets/images/bastou/chaussettes/2020-viking-trekking-noir-melange.webp"
    ],
    description: "Chaussettes Trekking Merino Viking Sport, coloris noir/melange, taille EU 41-43"
  },
  {
    id: "bastou-chaussettes-003",
    name: "Chaussettes Trekking Merino (Noir/Orange)",
    category: "chaussettes",
    owner: "bastou",
    year: 2020,
    price: "10,95€",
    size: "EU 41-43",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1184702",
    images: [
      "assets/images/bastou/chaussettes/2020-viking-trekking-noir-orange.webp"
    ],
    description: "Chaussettes Trekking Merino Viking Sport, coloris noir/orange, taille EU 41-43"
  },
  {
    id: "bastou-chaussettes-004",
    name: "Chaussettes Merino Mix Moss Stitch (Plusieurs couleurs)",
    category: "chaussettes",
    owner: "bastou",
    year: 2020,
    price: "23,95€",
    size: "S/M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1876943",
    images: [
      "assets/images/bastou/chaussettes/2020-isobaa-merino-moss-stitch.webp"
    ],
    description: "Chaussettes Merino Mix Moss Stitch Isobaa, pack de plusieurs couleurs, taille S/M"
  },
  {
    id: "bastou-polos-001",
    name: "Polo Merino 180 Homme (Petrol)",
    category: "polos",
    owner: "bastou",
    year: 2020,
    price: "47,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1450077",
    images: [
      "assets/images/bastou/polos/2020-isobaa-merino-180-petrol.webp"
    ],
    description: "Polo Merino 180 Isobaa pour homme, couleur Petrol, taille M"
  },
  {
    id: "bastou-polos-002",
    name: "Polo Merino 180 Homme (Bleu)",
    category: "polos",
    owner: "bastou",
    year: 2020,
    price: "47,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1042426",
    images: [
      "assets/images/bastou/polos/2020-isobaa-merino-180-bleu.webp"
    ],
    description: "Polo Merino 180 Isobaa pour homme, couleur bleue, taille M"
  },
  {
    id: "magali-tshirts-003",
    name: "T-Shirt Merino 180 Femme (Bleu)",
    category: "tshirts",
    owner: "magali",
    year: 2020,
    price: "40,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/870948",
    images: [
      "assets/images/magali/tshirts/2020-isobaa-merino-180-bleu.webp"
    ],
    description: "T-Shirt Merino 180 Isobaa pour femme, couleur bleue, taille S"
  },
  {
    id: "bastou-tshirts-004",
    name: "T-Shirt Merino 150 Homme (Bleu)",
    category: "tshirts",
    owner: "bastou",
    year: 2020,
    price: "35,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/870816",
    images: [
      "assets/images/bastou/tshirts/2020-isobaa-merino-150-bleu.webp"
    ],
    description: "T-Shirt Merino 150 Isobaa pour homme, couleur bleue, taille M"
  },
  {
    id: "magali-maillots-001",
    name: "Maillot Putney Merino Femme (Violet)",
    category: "maillots",
    owner: "magali",
    year: 2020,
    price: "34,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1543137",
    images: [
      "assets/images/magali/maillots/2020-vulpine-putney-merino-violet.webp"
    ],
    description: "Maillot Putney Merino Vulpine pour femme, couleur violette, taille S"
  },
  // Additional clothing items from various orders
  {
    id: "bastou-chaussures-005",
    name: "Trotter II Homme (Marron)",
    category: "chaussures",
    owner: "bastou",
    year: 2021,
    price: "179,95€",
    size: "UK 8.5",
    link: "https://www.sportpursuit.com/catalog/product/view/id/409515",
    images: [
      "assets/images/bastou/chaussures/2021-bestard-trotter-ii-marron.webp"
    ],
    description: "Chaussures Trotter II Bestard pour homme, couleur marron, pointure UK 8.5"
  },
  {
    id: "bastou-chaussures-006",
    name: "Chaussures Rockie Hi GTX Leather Homme (Marron)",
    category: "chaussures",
    owner: "bastou",
    year: 2021,
    price: "64,95€",
    size: "UK 8.5",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2294385",
    images: [
      "assets/images/bastou/chaussures/2021-clarks-rockie-hi-gtx-marron.webp"
    ],
    description: "Chaussures Rockie Hi GTX Leather Clarks pour homme, couleur marron, pointure UK 8.5"
  },
  {
    id: "bastou-chaussures-007",
    name: "Ft18 Homme (Gris)",
    category: "chaussures",
    owner: "bastou",
    year: 2020,
    price: "71,95€",
    size: "UK 9",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1630608",
    images: [
      "assets/images/bastou/chaussures/2020-berghaus-ft18-gris.webp"
    ],
    description: "Chaussures Ft18 Berghaus pour homme, couleur grise, pointure UK 9"
  },
  {
    id: "bastou-chaussures-008",
    name: "Johannesburg GTX Homme (Noir)",
    category: "chaussures",
    owner: "bastou",
    year: 2018,
    price: "67,95€",
    size: "42",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1311385",
    images: [
      "assets/images/bastou/chaussures/2018-ecco-johannesburg-gtx-noir.webp"
    ],
    description: "Chaussures Johannesburg GTX Ecco pour homme, couleur noire, pointure 42"
  },
  {
    id: "magali-chaussures-001",
    name: "Bordeaux Ankle Homme (Bleu)",
    category: "chaussures",
    owner: "magali",
    year: 2018,
    price: "89,95€",
    size: "37",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1381968",
    images: [
      "assets/images/magali/chaussures/2018-travelin-bordeaux-ankle-bleu.webp"
    ],
    description: "Chaussures Bordeaux Ankle Travelin pour femme, couleur bleue, pointure 37"
  },
  {
    id: "magali-tshirts-004",
    name: "T-Shirt Cami Femme (Blanc)",
    category: "tshirts",
    owner: "magali",
    year: 2018,
    price: "11,95€",
    size: "36",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1462484",
    images: [
      "assets/images/magali/tshirts/2018-kilpi-cami-blanc.webp"
    ],
    description: "T-Shirt Cami Kilpi pour femme, couleur blanche, taille 36"
  },
  {
    id: "magali-tshirts-005",
    name: "T-Shirt Victory Femme (Fjord)",
    category: "tshirts",
    owner: "magali",
    year: 2018,
    price: "33,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1197145",
    images: [
      "assets/images/magali/tshirts/2018-rewoolution-victory-fjord.webp"
    ],
    description: "T-Shirt Victory Rewoolution pour femme, couleur Fjord, taille S"
  },
  {
    id: "magali-tshirts-006",
    name: "T-Shirt Dreamcatcher Femme (Coralline)",
    category: "tshirts",
    owner: "magali",
    year: 2018,
    price: "33,95€",
    size: "S",
    link: "#",
    images: [],
    description: "T-Shirt Dreamcatcher Rewoolution pour femme, couleur Coralline, taille S"
  },
  {
    id: "bastou-vestes-001",
    name: "Veste Nalma Homme (Pine Grove)",
    category: "vestes",
    owner: "bastou",
    year: 2018,
    price: "194,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/949402",
    images: [
      "assets/images/bastou/vestes/2018-berghaus-nalma-pine-grove.webp"
    ],
    description: "Veste Nalma Berghaus pour homme, couleur Pine Grove, taille M"
  },
  {
    id: "bastou-accessoires-001",
    name: "Balaclava (Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2018,
    price: "19,95€",
    size: "S/M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1136561",
    images: [
      "assets/images/bastou/accessoires/2018-armadillo-balaclava-noir.webp"
    ],
    description: "Balaclava Armadillo Merino, couleur noire, taille S/M"
  },
  {
    id: "bastou-accessoires-002",
    name: "Balaclava (Bleu Foncé)",
    category: "accessoires",
    owner: "bastou",
    year: 2018,
    price: "19,95€",
    size: "S/M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1136567",
    images: [
      "assets/images/bastou/accessoires/2018-armadillo-balaclava-bleu-fonce.webp"
    ],
    description: "Balaclava Armadillo Merino, couleur bleu foncé, taille S/M"
  },
  {
    id: "bastou-chaussettes-005",
    name: "Chaussettes Boot (Light Olive)",
    category: "chaussettes",
    owner: "bastou",
    year: 2018,
    price: "14,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/945778",
    images: [
      "assets/images/bastou/chaussettes/2018-armadillo-boot-light-olive.webp"
    ],
    description: "Chaussettes Boot Armadillo Merino, couleur Light Olive, taille S"
  },
  {
    id: "bastou-vestes-002",
    name: "Veste Arctic GTX Primaloft Parka II Jacket Homme (Brilliant Blue)",
    category: "vestes",
    owner: "bastou",
    year: 2017,
    price: "429,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1219448",
    images: [
      "assets/images/bastou/vestes/2017-musto-arctic-gtx-parka-brilliant-blue.webp"
    ],
    description: "Veste Arctic GTX Primaloft Parka II Jacket Musto pour homme, couleur Brilliant Blue, taille M"
  },
  {
    id: "magali-vestes-001",
    name: "Veste Arctic GTX Primaloft Parka II Jacket Femme (Brilliant Blue)",
    category: "vestes",
    owner: "magali",
    year: 2017,
    price: "429,95€",
    size: "UK 10",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1219493",
    images: [
      "assets/images/magali/vestes/2017-musto-arctic-gtx-parka-brilliant-blue.webp"
    ],
    description: "Veste Arctic GTX Primaloft Parka II Jacket Musto pour femme, couleur Brilliant Blue, taille UK 10"
  },
  // Additional items from various orders (2017 and earlier)
  {
    id: "bastou-accessoires-003",
    name: "Fjalar XL (X Large - Black)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "7,95€",
    quantity: 2,
    link: "https://www.sportpursuit.com/catalog/product/view/id/747695",
    images: [
      "assets/images/bastou/accessoires/2017-fjord-nansen-fjalar-xl-black.webp"
    ],
    description: "Fjalar XL Fjord Nansen, couleur noire, taille X Large, quantité: 2"
  },
  {
    id: "bastou-accessoires-004",
    name: "Merino (Intense)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "12,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/526642",
    images: [
      "assets/images/bastou/accessoires/2017-wdx-merino-intense.webp"
    ],
    description: "Merino WDX, couleur Intense"
  },
  {
    id: "bastou-accessoires-005",
    name: "Merino (Vermillon)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "12,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/603404",
    images: [
      "assets/images/bastou/accessoires/2017-wdx-merino-vermillon.webp"
    ],
    description: "Merino WDX, couleur Vermillon"
  },
  {
    id: "bastou-chaussettes-006",
    name: "Chaussettes Carving Skiing (3 x Bleu Marine)",
    category: "chaussettes",
    owner: "bastou",
    year: 2017,
    price: "19,95€",
    size: "Large",
    link: "#",
    images: [],
    description: "Chaussettes Carving Skiing Mund, pack de 3 paires bleu marine, taille Large"
  },
  {
    id: "bastou-chaussettes-007",
    name: "Chaussettes Allrounder Compression (Lime Green)",
    category: "chaussettes",
    owner: "bastou",
    year: 2017,
    price: "19,95€",
    size: "M/L",
    link: "https://www.sportpursuit.com/catalog/product/view/id/443194",
    images: [
      "assets/images/bastou/chaussettes/2017-sls3-allrounder-compression-lime.webp"
    ],
    description: "Chaussettes Allrounder Compression SLS3, couleur Lime Green, taille M/L"
  },
  {
    id: "bastou-chaussures-009",
    name: "Outback Homme (Nature)",
    category: "chaussures",
    owner: "bastou",
    year: 2017,
    price: "45,95€",
    size: "42",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1185907",
    images: [
      "assets/images/bastou/chaussures/2017-move-mountains-outback-nature.webp"
    ],
    description: "Chaussures Outback Move Mountains pour homme, couleur Nature, pointure 42"
  },
  {
    id: "bastou-sacs-001",
    name: "5ltr (Bleu)",
    category: "sacs",
    owner: "bastou",
    year: 2017,
    price: "11,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1040954",
    images: [
      "assets/images/bastou/sacs/2017-urban-beach-5ltr-bleu.webp"
    ],
    description: "Sac 5ltr Urban Beach, couleur bleue"
  },
  {
    id: "bastou-sacs-002",
    name: "5ltr (Noir)",
    category: "sacs",
    owner: "bastou",
    year: 2017,
    price: "11,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1040953",
    images: [
      "assets/images/bastou/sacs/2017-urban-beach-5ltr-noir.webp"
    ],
    description: "Sac 5ltr Urban Beach, couleur noire"
  },
  {
    id: "magali-sacs-001",
    name: "Sac 10L Waterproof (Rose)",
    category: "sacs",
    owner: "magali",
    year: 2017,
    price: "17,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1011620",
    images: [
      "assets/images/magali/sacs/2017-redkeys-10l-waterproof-rose.webp"
    ],
    description: "Sac 10L Waterproof Redkeys, couleur rose"
  },
  {
    id: "magali-sacs-002",
    name: "Sac 20L Waterproof (Rose)",
    category: "sacs",
    owner: "magali",
    year: 2017,
    price: "22,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1011623",
    images: [
      "assets/images/magali/sacs/2017-redkeys-20l-waterproof-rose.webp"
    ],
    description: "Sac 20L Waterproof Redkeys, couleur rose"
  },
  {
    id: "bastou-sacs-003",
    name: "Sac 20L Waterproof (Bleu)",
    category: "sacs",
    owner: "bastou",
    year: 2017,
    price: "22,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1011622",
    images: [
      "assets/images/bastou/sacs/2017-redkeys-20l-waterproof-bleu.webp"
    ],
    description: "Sac 20L Waterproof Redkeys, couleur bleue"
  },
  {
    id: "bastou-sacs-004",
    name: "Sac 10L Waterproof (Bleu)",
    category: "sacs",
    owner: "bastou",
    year: 2017,
    price: "17,95€",
    link: "#",
    images: [],
    description: "Sac 10L Waterproof Redkeys, couleur bleue"
  },
  {
    id: "magali-sacs-003",
    name: "Sac Waterproof Phone (Rose)",
    category: "sacs",
    owner: "magali",
    year: 2017,
    price: "9,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1011618",
    images: [
      "assets/images/magali/sacs/2017-redkeys-waterproof-phone-rose.webp"
    ],
    description: "Sac Waterproof Phone Redkeys, couleur rose"
  },
  {
    id: "bastou-accessoires-006",
    name: "Lunettes de protection Opal Mirror (Vert/Siler)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "10,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1050575",
    images: [
      "assets/images/bastou/accessoires/2017-speedo-opal-mirror-vert-siler.webp"
    ],
    description: "Lunettes de protection Opal Mirror Speedo, couleur Vert/Siler"
  },
  {
    id: "bastou-sacs-005",
    name: "Grand sac à dos 25L Backpack (Gris)",
    category: "sacs",
    owner: "bastou",
    year: 2017,
    price: "23,95€",
    link: "https://www.sportpursuit.com/catalog/product/view/id/1013483",
    images: [
      "assets/images/bastou/sacs/2017-wps-25l-backpack-gris.webp"
    ],
    description: "Grand sac à dos 25L Backpack WPS, couleur grise"
  },
  {
    id: "bastou-camping-001",
    name: "Sac de couchage ECC 1000 (Bleu)",
    category: "camping",
    owner: "bastou",
    year: 2017,
    price: "244,95€",
    size: "Right Zip",
    link: "https://www.sportpursuit.com/catalog/product/view/id/768064",
    images: [
      "assets/images/bastou/camping/2017-carinthia-ecc-1000-bleu.webp"
    ],
    description: "Sac de couchage ECC 1000 Carinthia, couleur bleue, fermeture à droite"
  },
  {
    id: "bastou-techniques-005",
    name: "Biofuse Training Fins (Vert)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "15,95€",
    size: "UK 8-9",
    link: "https://www.sportpursuit.com/catalog/product/view/id/994167",
    images: [
      "assets/images/bastou/techniques/2017-speedo-biofuse-training-fins-vert.webp"
    ],
    description: "Biofuse Training Fins Speedo, couleur verte, taille UK 8-9"
  },
  {
    id: "magali-techniques-004",
    name: "Biofuse Training Fins (Vert)",
    category: "accessoires",
    owner: "magali",
    year: 2017,
    price: "15,95€",
    size: "UK 4-5",
    link: "https://www.sportpursuit.com/catalog/product/view/id/994167",
    images: [
      "assets/images/bastou/techniques/2017-speedo-biofuse-training-fins-vert.webp"
    ],
    description: "Biofuse Training Fins Speedo, couleur verte, taille UK 4-5"
  },
  {
    id: "bastou-accessoires-007",
    name: "Gants I-Radiator Homme (Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "40,95€",
    size: "7.5 Inches",
    link: "https://www.sportpursuit.com/catalog/product/view/id/978175",
    images: [
      "assets/images/bastou/accessoires/2017-level-i-radiator-noir.webp"
    ],
    description: "Gants I-Radiator Level pour homme, couleur noire, taille 7.5 Inches"
  },
  {
    id: "bastou-accessoires-008",
    name: "Gants I-Radiator Homme (Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2017,
    price: "40,95€",
    size: "9 Inches",
    link: "https://www.sportpursuit.com/catalog/product/view/id/978175",
    images: [
      "assets/images/bastou/accessoires/2017-level-i-radiator-noir.webp"
    ],
    description: "Gants I-Radiator Level pour homme, couleur noire, taille 9 Inches"
  },
  {
    id: "bastou-vestes-003",
    name: "Veste Monkey Man Grid II Homme (Dark Compass)",
    category: "vestes",
    owner: "bastou",
    year: 2017,
    price: "64,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/956087",
    images: [
      "assets/images/bastou/vestes/2017-mountain-hardwear-monkey-man-grid-ii.webp"
    ],
    description: "Veste Monkey Man Grid II Mountain Hardwear pour homme, couleur Dark Compass, taille S"
  },
  {
    id: "magali-vestes-002",
    name: "Veste Monkey Woman Femme (Gossamer Blue/Zinc)",
    category: "vestes",
    owner: "magali",
    year: 2017,
    price: "64,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/955796",
    images: [
      "assets/images/magali/vestes/2017-mountain-hardwear-monkey-woman.webp"
    ],
    description: "Veste Monkey Woman Mountain Hardwear pour femme, couleur Gossamer Blue/Zinc, taille S"
  },
  {
    id: "bastou-chaussures-010",
    name: "Bottines Chocorua Trail GTX Homme (Marron/Vert)",
    category: "chaussures",
    owner: "bastou",
    year: 2016,
    price: "109,95€",
    size: "42",
    link: "https://www.sportpursuit.com/catalog/product/view/id/947889",
    images: [
      "assets/images/bastou/chaussures/2016-timberland-chocorua-trail-gtx.webp"
    ],
    description: "Bottines Chocorua Trail GTX Timberland pour homme, couleur Marron/Vert, pointure 42"
  },
  {
    id: "bastou-chaussettes-008",
    name: "Chaussettes PHD Homme (Noir)",
    category: "chaussettes",
    owner: "bastou",
    year: 2016,
    price: "14,95€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/794214",
    images: [
      "assets/images/bastou/chaussettes/2016-smartwool-phd-noir.webp"
    ],
    description: "Chaussettes PHD Smartwool pour homme, couleur noire, taille M"
  },
  {
    id: "magali-chaussettes-001",
    name: "Chaussettes PHD Femme (2 x Noir)",
    category: "chaussettes",
    owner: "magali",
    year: 2016,
    price: "29,83€",
    size: "Small",
    link: "https://www.sportpursuit.com/catalog/product/view/id/742209",
    images: [
      "assets/images/magali/chaussettes/2016-smartwool-phd-2x-noir.webp"
    ],
    description: "Chaussettes PHD Smartwool pour femme, pack de 2 paires noires, taille Small"
  },
  {
    id: "bastou-pulls-001",
    name: "Pull Oslo World Championships Homme (Bleu marine/Off White/Turquoise/Grey Smoke)",
    category: "pulls",
    owner: "bastou",
    year: 2016,
    price: "119,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/929106",
    images: [
      "assets/images/bastou/pulls/2016-dale-of-norway-oslo-world-championships.webp"
    ],
    description: "Pull Oslo World Championships Dale of Norway pour homme, multicolore, taille S"
  },
  {
    id: "magali-pulls-001",
    name: "Pull Oslo World Championships Femme (Bleu marine/Cream/Allium/Cobalt)",
    category: "pulls",
    owner: "magali",
    year: 2016,
    price: "119,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/929111",
    images: [
      "assets/images/magali/pulls/2016-dale-of-norway-oslo-world-championships.webp"
    ],
    description: "Pull Oslo World Championships Dale of Norway pour femme, multicolore, taille S"
  },
  {
    id: "magali-pantalons-001",
    name: "Pantalon Pingora Femme (Blue Sea/Noir)",
    category: "pantalons",
    owner: "magali",
    year: 2016,
    price: "70,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/857656",
    images: [
      "assets/images/magali/pantalons/2016-marmot-pingora-blue-sea-noir.webp"
    ],
    description: "Pantalon Pingora Marmot pour femme, couleur Blue Sea/Noir, taille S"
  },
  {
    id: "bastou-accessoires-009",
    name: "Packagaiter (Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2016,
    price: "18,95€",
    size: "S/M",
    quantity: 2,
    link: "https://www.sportpursuit.com/catalog/product/view/id/761497",
    images: [
      "assets/images/bastou/accessoires/2016-extremities-packagaiter-noir.webp"
    ],
    description: "Packagaiter Extremities, couleur noire, taille S/M, quantité: 2"
  },
  {
    id: "magali-pantalons-002",
    name: "Pantalon Winter Patera Femme (Noir)",
    category: "pantalons",
    owner: "magali",
    year: 2016,
    price: "82,95€",
    size: "UK Size 8 - 31in Jambe",
    link: "https://www.sportpursuit.com/catalog/product/view/id/778689",
    images: [
      "assets/images/magali/pantalons/2016-berghaus-winter-patera-noir.webp"
    ],
    description: "Pantalon Winter Patera Berghaus pour femme, couleur noire, taille UK Size 8 - 31in Jambe"
  },
  {
    id: "bastou-pantalons-001",
    name: "Pantalon Patera Homme (Carbon/Carbon)",
    category: "pantalons",
    owner: "bastou",
    year: 2016,
    price: "76,95€",
    size: "36in taille - 32in Jambe",
    link: "https://www.sportpursuit.com/catalog/product/view/id/932014",
    images: [
      "assets/images/bastou/pantalons/2016-berghaus-patera-carbon.webp"
    ],
    description: "Pantalon Patera Berghaus pour homme, couleur Carbon/Carbon, taille 36in taille - 32in Jambe"
  },
  {
    id: "bastou-tshirts-005",
    name: "T-Shirt NTS Homme (Gris)",
    category: "tshirts",
    owner: "bastou",
    year: 2016,
    price: "47,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/699437",
    images: [
      "assets/images/bastou/tshirts/2016-smartwool-nts-gris.webp"
    ],
    description: "T-Shirt NTS Smartwool pour homme, couleur grise, taille S"
  },
  {
    id: "magali-vestes-003",
    name: "Veste Ghost Whisperer Femme (Bolt/Mountain)",
    category: "vestes",
    owner: "magali",
    year: 2016,
    price: "119,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/760271",
    images: [
      "assets/images/magali/vestes/2016-mountain-hardwear-ghost-whisperer.webp"
    ],
    description: "Veste Ghost Whisperer Mountain Hardwear pour femme, couleur Bolt/Mountain, taille S"
  },
  {
    id: "bastou-pantalons-002",
    name: "Pantalon Mixaction Homme (Noir)",
    category: "pantalons",
    owner: "bastou",
    year: 2016,
    price: "76,95€",
    size: "Medium - Regular Leg",
    link: "https://www.sportpursuit.com/catalog/product/view/id/623315",
    images: [
      "assets/images/bastou/pantalons/2016-mountain-hardwear-mixaction-noir.webp"
    ],
    description: "Pantalon Mixaction Mountain Hardwear pour homme, couleur noire, taille Medium - Regular Leg"
  },
  {
    id: "magali-vestes-004",
    name: "Veste Whoop Femme (Rose)",
    category: "vestes",
    owner: "magali",
    year: 2016,
    price: "56,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/820457",
    images: [
      "assets/images/magali/vestes/2016-rewoolution-whoop-rose.webp"
    ],
    description: "Veste Whoop Rewoolution pour femme, couleur rose, taille S"
  },
  {
    id: "magali-collants-001",
    name: "Collants Cover Femme (Rose)",
    category: "collants",
    owner: "magali",
    year: 2016,
    price: "36,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/820346",
    images: [
      "assets/images/magali/collants/2016-rewoolution-cover-rose.webp"
    ],
    description: "Collants Cover Rewoolution pour femme, couleur rose, taille S"
  },
  {
    id: "magali-tshirts-007",
    name: "T-Shirt Icy Femme (Blanc)",
    category: "tshirts",
    owner: "magali",
    year: 2016,
    price: "34,95€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/594091",
    images: [
      "assets/images/magali/tshirts/2016-rewoolution-icy-blanc.webp"
    ],
    description: "T-Shirt Icy Rewoolution pour femme, couleur blanche, taille S"
  },
  {
    id: "bastou-accessoires-010",
    name: "Kjus (Blanc/Noir)",
    category: "accessoires",
    owner: "bastou",
    year: 2016,
    price: "15,95€",
    link: "#",
    images: [],
    description: "Accessoire Kjus, couleur Blanc/Noir"
  },
  {
    id: "bastou-tshirts-006",
    name: "T-Shirt Mountain Logo Homme (Bleu)",
    category: "tshirts",
    owner: "bastou",
    year: 2016,
    price: "32,86€",
    size: "M",
    link: "https://www.sportpursuit.com/catalog/product/view/id/699410",
    images: [
      "assets/images/bastou/tshirts/2016-smartwool-mountain-logo-bleu.webp"
    ],
    description: "T-Shirt Mountain Logo Smartwool pour homme, couleur bleue, taille M"
  },
  // Recent orders 2024-2025
  {
    id: "magali-chaussures-002",
    name: "Chaussures de badminton Blade FF Femme (Violet)",
    category: "chaussures",
    owner: "magali",
    year: 2025,
    price: "62,99€",
    size: "37 EU",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3950865",
    images: [
      "assets/images/magali/chaussures/2025-asics-blade-ff-violet.webp"
    ],
    description: "Chaussures de badminton Blade FF Asics pour femme, couleur violette, pointure 37 EU"
  },
  {
    id: "magali-sous-couches-001",
    name: "Sous-couches Merino Femme (Bleu)",
    category: "sous-couches",
    owner: "magali",
    year: 2025,
    price: "22,99€",
    size: "10 UK",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3674476",
    images: [
      "assets/images/magali/sous-couches/2025-dannah-merino-bleu.webp"
    ],
    description: "Sous-couches Merino Dannah pour femme, couleur bleue, taille 10 UK"
  },
  {
    id: "bastou-sous-couches-001",
    name: "Sous-couches Merino Homme (Bleu)",
    category: "sous-couches",
    owner: "bastou",
    year: 2025,
    price: "22,99€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3674456",
    images: [
      "assets/images/bastou/sous-couches/2025-dannah-merino-bleu.webp"
    ],
    description: "Sous-couches Merino Dannah pour homme, couleur bleue, taille S"
  },
  {
    id: "bastou-chemises-001",
    name: "Mens Lenni Shirt (Blue)",
    category: "chemises",
    owner: "bastou",
    year: 2025,
    price: "44,88€",
    size: "Medium",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3632158",
    images: [
      "assets/images/bastou/chemises/2025-mammut-lenni-shirt-blue.webp"
    ],
    description: "Chemise Lenni Mammut pour homme, couleur bleue, taille Medium"
  },
  {
    id: "bastou-sacs-006",
    name: "Mens Talon Velocity 20 L Daysack (Green)",
    category: "sacs",
    owner: "bastou",
    year: 2025,
    price: "124,88€",
    size: "Large/X Large",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3658803",
    images: [
      "assets/images/bastou/sacs/2025-osprey-talon-velocity-20l-green.webp"
    ],
    description: "Sac à dos Talon Velocity 20L Osprey pour homme, couleur verte, taille Large/X Large"
  },
  {
    id: "bastou-vestes-004",
    name: "Veste Explorer Pile Homme (Bleu)",
    category: "vestes",
    owner: "bastou",
    year: 2024,
    price: "65,99€",
    size: "L",
    link: "https://www.sportpursuit.com/catalog/product/view/id/3466520",
    images: [
      "assets/images/bastou/vestes/2024-helly-hansen-explorer-pile-bleu.webp"
    ],
    description: "Veste Explorer Pile Helly Hansen pour homme, couleur bleue, taille L"
  },
  {
    id: "magali-pantalons-003",
    name: "Pantalons Taiss Guide SO Femme (Violet)",
    category: "pantalons",
    owner: "magali",
    year: 2024,
    price: "105,99€",
    size: "EU36",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2643957",
    images: [
      "assets/images/magali/pantalons/2024-mammut-taiss-guide-so-violet.webp"
    ],
    description: "Pantalons Taiss Guide SO Mammut pour femme, couleur violette, taille EU36"
  },
  {
    id: "magali-vestes-005",
    name: "Veste Taiss Light ML Femme (Rose/Marine)",
    category: "vestes",
    owner: "magali",
    year: 2024,
    price: "76,99€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2678946",
    images: [
      "assets/images/magali/vestes/2024-mammut-taiss-light-ml-rose-marine.webp"
    ],
    description: "Veste Taiss Light ML Mammut pour femme, couleur Rose/Marine, taille S"
  },
  {
    id: "magali-tshirts-008",
    name: "T-Shirt MC 140 Femme (Vert)",
    category: "tshirts",
    owner: "magali",
    year: 2024,
    price: "43,99€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2425728",
    images: [
      "assets/images/magali/tshirts/2024-fjork-mc140-vert.webp"
    ],
    description: "T-Shirt MC 140 Fjork Merino pour femme, couleur verte, taille S"
  },
  {
    id: "magali-tshirts-009",
    name: "T-Shirt MC 140 Femme (Rose)",
    category: "tshirts",
    owner: "magali",
    year: 2024,
    price: "49,99€",
    size: "S",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2425704",
    images: [
      "assets/images/magali/tshirts/2024-fjork-mc140-rose.webp"
    ],
    description: "T-Shirt MC 140 Fjork Merino pour femme, couleur rose, taille S"
  },
  {
    id: "magali-pantalons-004",
    name: "Pantalons Pordoi Femme (Rose)",
    category: "pantalons",
    owner: "magali",
    year: 2024,
    price: "116,99€",
    size: "EU Size 36 - Regular",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2764794",
    images: [
      "assets/images/magali/pantalons/2024-mammut-pordoi-rose.webp"
    ],
    description: "Pantalons Pordoi Mammut pour femme, couleur rose, taille EU Size 36 - Regular"
  },
  {
    id: "magali-pulls-002",
    name: "Pull Crew Femme (Bleu)",
    category: "pulls",
    owner: "magali",
    year: 2024,
    price: "5,99€",
    size: "XS",
    link: "https://www.sportpursuit.com/catalog/product/view/id/2615036",
    images: [
      "assets/images/magali/pulls/2024-marmot-crew-bleu.webp"
    ],
    description: "Pull Crew Marmot pour femme, couleur bleue, taille XS"
  },
  {
    id: "bastou-chaussures-011",
    name: "PLYMOUTH TRAIL MID GTX - Chaussures randonnée Homme (Marron foncé)",
    category: "chaussures",
    owner: "bastou",
    year: 2024,
    price: "125,00€",
    size: "42 EU/8 UK",
    link: "#",
    images: [],
    description: "Chaussures randonnée Plymouth Trail Mid GTX Timberland pour homme, couleur marron foncé, pointure 42 EU/8 UK"
  },
  {
    id: "bastou-tshirts-007",
    name: "MERINO 150 EMBLEM - Tee-shirt Homme (Lime)",
    category: "tshirts",
    owner: "bastou",
    year: 2024,
    price: "57,50€",
    size: "M",
    link: "#",
    images: [],
    description: "T-Shirt Merino 150 Emblem Isobaa pour homme, couleur lime, taille M"
  },
  {
    id: "bastou-tshirts-008",
    name: "MERINO 150 EMBLEM - Tee-shirt Homme (Sky)",
    category: "tshirts",
    owner: "bastou",
    year: 2024,
    price: "57,50€",
    size: "M",
    link: "#",
    images: [],
    description: "T-Shirt Merino 150 Emblem Isobaa pour homme, couleur sky, taille M"
  },
  {
    id: "magali-tshirts-010",
    name: "MERINO 150 EMBLEM - Tee-shirt Femme (Lime)",
    category: "tshirts",
    owner: "magali",
    year: 2024,
    price: "57,50€",
    size: "S",
    link: "#",
    images: [],
    description: "T-Shirt Merino 150 Emblem Isobaa pour femme, couleur lime, taille S"
  },
  {
    id: "magali-tshirts-011",
    name: "MERINO 150 EMBLEM - Tee-shirt Femme (Rouge)",
    category: "tshirts",
    owner: "magali",
    year: 2024,
    price: "57,50€",
    size: "S",
    link: "#",
    images: [],
    description: "T-Shirt Merino 150 Emblem Isobaa pour femme, couleur rouge, taille S"
  }
];

// Export configuration for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { clothingConfig };
}
