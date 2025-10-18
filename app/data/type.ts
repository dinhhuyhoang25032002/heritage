export interface SightseeingTour {
  name: string;
  type: string;
  image: string;
  policy: string[];
  notes: string[];
  location?: string;
  introduction: string;
  price: {
    child?: number;
    default?: number;
    extend: {
      title: string;
      content: string[];
    };
    services?: {
      title: string;
      content: string[];
    };
  };
  schedules: TourDetail[];
}

type TourDetail = {
  image?: string[];
  schedule: {
    section?: string;
    time: TourTime[];
  }[];
};
type TourTime = {
  start: string;
  end?: string;
  details: string;
};

export interface TouristAttractions {
  name: string;
  map: string;
  type: string;
  introduction: string;
  location: string;
  description: {
    content: string[];
    title?: string;
    image?: string;
  }[];
  image: string;
  activities?: {
    content: string[];
    image?: string;
    title?: string;
  }[];
}

export interface Restaurant {
  name: string;
  address: string;
  numberPhone: string;
  introduction: string[];
  image: string[];
  menu: string[];
}
