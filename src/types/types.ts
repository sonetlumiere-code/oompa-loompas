export interface OompaLoompa {
  id: number;
  first_name: string;
  last_name: string;
  favorite: {
    color: string;
    food: string;
    random_string: string;
    song: string;
  };
  gender: 'F' | 'M';
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
}

export interface OompaLoompasResponse {
  current: number;
  total: number;
  results: OompaLoompa[];
}

export interface OompaLoompasState {
  page: number;
  oompaLoompas: OompaLoompa[];
  isLoading: boolean;
}