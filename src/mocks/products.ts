export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    images: {
      small: string;
      medium: string;
      large: string;
    }[],
    size: 'large' | 'medium' | 'small';
  }
  
  export const productMock: Product = {
    id: 1,
    name: "Growth Elixir",
    description: "Premium blend of natural oils for maximum hair growth",
    rating: 5,
    images:[ {
      small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png'),
      medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png'),
      large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png')
    },
    {
      small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png'),
      medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png'),
      large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png')
    },
  ],
    size: "large"
  };