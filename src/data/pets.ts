import { Pet } from "@/types/pet";

export const pets: Pet[] = [
  {
    id: "1",
    name: "Flauschi",
    race: "Perserkatze",
    category: "Katze",
    images: ["https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww"],
    location: {
      distance: 12.5,
      city: "Augsburg",
    },
    price: 35,
  },
  {
    id: "2",
    name: "Bello",
    race: "Golden Retriever",
    category: "Hund",
    images: ["https://images.unsplash.com/photo-1612774412771-005ed8e861d2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29sZGVuJTIwUmV0cmlldmVyfGVufDB8fDB8fHww"],
    location: {
      distance: 20.3,
      city: "Ingolstadt",
    },
    price: 45,
  },
  {
    id: "3",
    name: "Schnurri",
    race: "Siamkatze",
    category: "Katze",
    images: ["https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lhbWVzZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"],
    location: {
      distance: 35.8,
      city: "Regensburg",
    },
    price: 30,
  },
  {
    id: "4",
    name: "Rex",
    race: "Deutscher Schäferhund",
    category: "Hund",
    images: ["https://images.unsplash.com/photo-1605725657590-b2cf0d31b1a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2VybWFuJTIwc2hlcGhlcmR8ZW58MHx8MHx8fDA%3D"],
    location: {
      distance: 50.0,
      city: "Nürnberg",
    },
    price: 40,
  },
  {
    id: "5",
    name: "Luna",
    race: "Maine Coon",
    category: "Katze",
    images: ["https://images.unsplash.com/photo-1611236628716-ae1a7e98591b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1haW5lJTIwQ29vbnxlbnwwfHwwfHx8MA%3D%3D"],
    location: {
      distance: 10.4,
      city: "Freising",
    },
    price: 38,
  },
  {
    id: "6",
    name: "Hopsi",
    race: "Zwergkaninchen",
    category: "Kleintier",
    images: ["https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVubnl8ZW58MHx8MHx8fDA%3D"],
    location: {
      distance: 25.6,
      city: "Rosenheim",
    },
    price: 20,
  },
  {
    id: "7",
    name: "Kiki",
    race: "Wellensittich",
    category: "Vogel",
    images: ["https://images.unsplash.com/photo-1594911588637-c9e891bd7858?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVkZ2llfGVufDB8fDB8fHww"],
    location: {
      distance: 40.7,
      city: "Passau",
    },
    price: 22,
  },
  {
    id: "8",
    name: "Strolchi",
    race: "Dackel",
    category: "Hund",
    images: ["https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFjaHNodW5kfGVufDB8fDB8fHww"],
    location: {
      distance: 18.2,
      city: "Landsberg am Lech",
    },
    price: 50,
  },
  {
    id: "9",
    name: "Moppel",
    race: "Meerschweinchen",
    category: "Kleintier",
    images: ["https://images.unsplash.com/photo-1533152162573-93ad94eb20f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3VpbmVhJTIwcGlnfGVufDB8fDB8fHww"],
    location: {
      distance: 30.3,
      city: "Bayreuth",
    },
    price: 25,
  },
  {
    id: "10",
    name: "Rocky",
    race: "Border Collie",
    category: "Hund",
    images: ["/placeholder.svg?height=300&width=300"],
    location: {
      distance: 45.9,
      city: "Würzburg",
    },
    price: 48,
  },
  ...Array.from({ length: 40 }, (_, i) => ({
    id: (11 + i).toString(),
    name: `Pet-${11 + i}`,
    race: ["Labrador", "Bengal Cat", "Cockatiel", "Hamster", "Schnauzer"][
      Math.floor(Math.random() * 5)
    ],
    category: ["Hund", "Katze", "Vogel", "Kleintier"][
      Math.floor(Math.random() * 4)
    ],
    images: ["/placeholder.svg?height=300&width=300"],
    location: {
      distance: parseFloat((Math.random() * 50).toFixed(1)),
      city: ["Bamberg", "Erlangen", "Straubing", "Kempten", "Weiden"][
        Math.floor(Math.random() * 5)
      ],
    },
    price: Math.floor(Math.random() * 31) + 20,
  })),
];
