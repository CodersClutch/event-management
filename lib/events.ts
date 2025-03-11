
export interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  geolocation?: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates: string;
  };
  description: string;
  organizer: string;
  mode: string;
  duration: string;
  price: number;
  refundPolicy: string;
  registrationDeadline: string;
  capacity: number;
  ageRange: { min: number; max: number };
  moreEvents: {
    title: string;
    date: string;
    price: number;
    organizer: string;
    imageUrl: string;
  }[];
  category: string[];
  specialDeal: boolean;
}

