export interface CardType {
  _id: string;
  title: string;
  location: string;
  images: {
    url: string;
    publicId: string;
  }[];
  features: {
    video: boolean;
    meals: boolean;
    stay: boolean;
    sightseeing: boolean;
    medical: boolean;
    transport: boolean;
  };
  popular: boolean;
}