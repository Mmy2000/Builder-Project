export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  price: string;
  category: {
    name: string;
    imageURL: string;
  };
  imageURL?: string;
  colors: string[];
}

export interface IFormInput {
  id: string;
  name: string;
  label: string;
  type: string;
}