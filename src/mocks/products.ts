export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    images: {
      small: string;
      medium: string;
      large: string;
    };
    size: 'large' | 'medium' | 'small';
  }
  
  export const productMock: Product = {
    id: 1,
    name: "Growth Elixir",
    description: "Premium blend of natural oils for maximum hair growth",
    rating: 5,
    images: {
      small: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400",
      medium: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
      large: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1200"
    },
    size: "large"
  };