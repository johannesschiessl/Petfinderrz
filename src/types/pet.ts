export interface Pet {
  id: string;
  name: string;
  race: string;
  category: string;
  images: string[];
  location: {
    distance: number;
    city: string;
  };
  price: number;
}
