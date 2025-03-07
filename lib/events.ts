import { eventsAll, Foryou, Online, Today } from '@/constants';

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
  price: number;
  refundPolicy: string;
  capacity: number;
  ageRange: { min: number; max: number };
  moreEvents: {
    title: string;
    date: string;
    price: number;
  }[];
}

export const allEvents: Event[] = [
  ...eventsAll,
  ...Foryou,
  ...Online,
  ...Today
].map(event => ({
  ...event,
  geolocation: event.geolocation || undefined,
  moreEvents: event.moreEvents || []
}));