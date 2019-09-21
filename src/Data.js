import img1 from './components/assets/products/shirt1.jpg';
import img2 from './components/assets/products/shirt2.jpg';
import img3 from './components/assets/products/shirt3.jpg';
import img4 from './components/assets/products/hoddie1.jpg';
import img5 from './components/assets/products/jean1.jpg';
import img6 from './components/assets/products/jean2.jpg';

// kind: sh = shirt
//       je = jeans
//       ho = hoddies

const products = [
    {
        img: img1,
        name: 'Kool T-Shirt',
        size: 'S',
        kind: 'Shirt',
        price: 25.00,
        quantify: 0,
        id: 1
    },
    {
        img: img2,
        name: 'Fruit of the room',
        size: 'L',
        kind: 'Shirt',
        price: 35.00,
        quantify: 0,
        id: 2
    },
    {
        img: img3,
        name: 'Harley-Davidson Men',
        size: 'M',
        kind: 'Shirt',
        price: 29.90,
        quantify: 0,
        id: 3
    },
    {
        img: img4,
        name: 'Joes USA - Big Mens Hoodies',
        size: 'S',
        kind: 'Hoddies',
        price: 45.50,
        quantify: 0,
        id: 4
    },
    {
        img: img5,
        name: 'Famous Jeans',
        size: 'M',
        kind: 'Jeans',
        price: 19.99,
        quantify: 0,
        id: 5
    },
    {
        img: img6,
        name: 'Simple Men Jeans Sale',
        size: 'S',
        kind: 'Jeans',
        price: 23.33,
        quantify: 0,
        id: 6
    }
    
]

export default products;