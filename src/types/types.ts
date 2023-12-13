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
  results: OompaLoompa[];
  current: number;
  total: number;
}

export interface OompaLoompasState {
  oompaLoompas: OompaLoompa[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
}
