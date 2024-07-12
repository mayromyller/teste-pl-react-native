export interface RandomUserType {
  results: Result[];
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  cell: string;
  picture: Picture;
  dob: Dob;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
}
