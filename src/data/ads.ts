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
    description: "Instantly turn notes into flashcards with AI",
    image: "/placeholder.svg?height=600&width=400",

    link: "https://memorics.ignotum.dev/landing",
  },
  {
    id: "2",
    title: "Studentapp",
    description: "An app for students to keep track of their school life.",
    image: "/placeholder.svg?height=600&width=400",
    link: "https://studentapp.ignotum.dev/landing",
  },
];
