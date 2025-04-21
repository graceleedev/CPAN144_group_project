export const restaurants = [
  {
    id: 'giulietta',
    className: 'giulietta',
    name: 'Giulietta',
    category: 'Italian',
    rating: 4.6,
    reviewsCount: 1482,
    location: '972 College St',
    imageUrl: 'https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1297145.jpg',
    description: 'Giulietta offers an intimate, modern take on traditional Italian cuisine, located in the heart of Toronto. With a menu crafted by expert chefs, the restaurant features house-made pastas, wood-fired pizzas, and an extensive wine list. Its warm ambiance and open kitchen concept provide guests with a front-row seat to the culinary magic.',
    images: ['/images/giulietta1.jpeg', '/images/giulietta2.jpeg'],
    reviews: [
      { user: 'Sarah', rating: 5, comment: 'Fantastic food!' },
      { user: 'Mike', rating: 4, comment: 'Great vibes.' },
    ]
  },
  {
    id: 'matsutei-sukiyaki',
    className: 'matsuteiSukiyaki',
    name: 'Matsutei Sukiyaki',
    category: 'Japanese',
    rating: 4.8,
    reviewsCount: 2553,
    location: '438 Dundas St W',
    imageUrl: 'https://www.sukiyakiyotaro.com/img/reserve.jpg',
    description: 'Located in the heart of Toronto, Matsutei Sukiyaki offers an authentic Japanese dining experience focused on the traditional art of Sukiyaki...',
    images: ['/images/ivy1.jpg', '/images/ivy2.jpg'],
    reviews: [
      { user: 'Emma', rating: 4, comment: 'Lovely atmosphere.' },
      { user: 'John', rating: 5, comment: 'Best pasta ever!' },
    ]
  },
  {
    id: 'la-unica-panaderia',
    className: 'laÚnicaPanadería',
    name: 'La Única Panadería',
    category: 'Mexican',
    rating: 4.5,
    reviewsCount: 329,
    location: '850 Wilson Ave',
    imageUrl: 'https://th.bing.com/th/id/R.629bb5d12f5d03e91436080f1514c4b7?...',
    description: 'La Única Panadería is a charming bakery that brings the authentic taste of traditional Latin American pastries to the heart of the city...',
    images: ['/images/sushi1.jpg', '/images/sushi2.jpg'],
    reviews: [
      { user: 'Liam', rating: 5, comment: 'Incredible sushi!' },
      { user: 'Olivia', rating: 4, comment: 'Unique flavors.' },
    ]
  },
  {
    id: 'aroma-fine-indian-cuisine',
    className: 'aromaFineIndianCuisine',
    name: 'Aroma Fine Indian Cuisine',
    category: 'Indian',
    rating: 4.2,
    reviewsCount: 558,
    location: '287 King St W',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e8/10/95/caption.jpg',
    description: 'Aroma Fine Indian Cuisine brings the vibrant and rich flavors of India to the heart of the city...',
    images: ['/images/pasta1.jpg', '/images/pasta2.jpg'],
    reviews: [
      { user: 'Sophia', rating: 5, comment: 'Delicious and fresh!' },
      { user: 'James', rating: 4, comment: 'Great service.' },
    ]
  },
  {
    id: 'mandarin-restaurant',
    className: 'mandarinRestaurant',
    name: 'Mandarin Restaurant',
    category: 'Chinese',
    rating: 4.1,
    reviewsCount: 213,
    location: '2200 Yonge Street',
    imageUrl: 'https://thefoodxp.com/wp-content/uploads/2022/11/Mandarin-Restaurant-scaled-e1670992703789.jpg',
    description: 'Mandarin Restaurant offers an exceptional dining experience that brings the finest flavors of Chinese cuisine to the heart of the city...',
    images: ['/images/steak1.jpg', '/images/steak2.jpg'],
    reviews: [
      { user: 'Charlotte', rating: 5, comment: 'Perfectly cooked steak!' },
      { user: 'Lucas', rating: 4, comment: 'Nice wine selection.' },
    ]
  },
  {
    id: 'scaramouche-restaurant',
    className: 'scaramoucheRestaurant',
    name: 'Scaramouche Restaurant',
    category: 'French',
    rating: 4.5,
    reviewsCount: 1715,
    location: 'One Benvenuto Place',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c7/31/db/scaramouche-restaurant.jpg',
    description: 'Scaramouche Restaurant offers an elevated dining experience with a refined blend of modern and classical culinary techniques...',
    images: ['/images/ivy1.jpg', '/images/ivy2.jpg'],
    reviews: [
      { user: 'Mia', rating: 5, comment: 'Loved the ambiance!' },
      { user: 'Ethan', rating: 4, comment: 'Great cocktails.' },
    ]
  },
];

export const categories = ['All', 'Italian', 'Japanese', 'Mexican', 'Indian', 'Chinese', 'French'];
