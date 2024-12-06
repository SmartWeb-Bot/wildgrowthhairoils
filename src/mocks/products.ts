export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: {
      small: string;
      medium: string;
      large: string;
    },
    size: 'large' | 'medium' | 'small';
  }
  
  export const productMock: Product[] = [
    {
      id: 1,
      name: "Wild Growth Oil",
      description: "Premium blend of natural oils for maximum hair growth",
      rating: 5,
      image: {
        small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png'),
        medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png'),
        large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Benifits of oil.png')
      },
      size: "large"
  },
  {
    id: 2,
    name: "Wild Growth Oil",
    description: "Premium blend of natural oils for maximum hair growth",
    rating: 5,
    image: {
      small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png'),
      medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png'),
      large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/HAIR GROWTH.png')
    },
    size: "large"
},
{
  id: 3,
  name: "Wild Growth Oil",
  description: "Premium blend of natural oils for maximum hair growth",
  rating: 5,
  image: {
    small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/How To Use.png'),
    medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/How To Use.png'),
    large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/How To Use.png')
  },
  size: "large"
},
{
  id: 4,
  name: "Wild Growth Oil",
  description: "Premium blend of natural oils for maximum hair growth",
  rating: 5,
  image: {
    small: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Ingredients mocks.png'),
    medium: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Ingredients mocks.png'),
    large: require('C:/FinalWebsites/wildgrowthhairoils/src/assets/images/products/Ingredients mocks.png')
  },
  size: "large"
},

]