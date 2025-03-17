interface Ad {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ads: Ad[] = [
  {
    id: "1",
    title: "Memorics",
    description:
      "Tired of spending hours making flashcards? Just snap a photo of your study material, let the AI turn it into cards, and start learning.",
    image: "/memorics.png",

    link: "https://memorics.ignotum.dev/landing",
  },
  {
    id: "2",
    title: "FreezeIt",
    description:
      "Ein Wassereis das in Sekundenschnelle gefroren ist. Lust auf eine süße Abkühlung? Unsere coolen Wassereishüllen bringen dir den perfekten Sommer-Moment – egal ob am Strand, im Park oder auf dem Balkon!",
    image: "/freezeit.png",
    link: "https://www.instagram.com/p/DG3sRUfNNNQ/",
  },
];
