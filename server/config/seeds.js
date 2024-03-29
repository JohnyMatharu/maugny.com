const db = require('./connection');
const { User, Product, Category} = require('../models');

db.once('open', async () => {
  await Category.deleteMany();







//All the categories have 7 products each, additions to code has to be for category which is jewelery
//subcategory such as rings, and sub-sub category which is Signet Rings which will have 7 products
//these changes have to be done with models keeping a copy file for models for testing 



  const categories = await Category.insertMany([
    { name: 'Signet Rings' },
    { name: 'Y2K Rings' },
    { name: 'Butterfly Rings' },
    { name: 'Initial Rings' },
    { name: 'Plastic Bead Rings' },
    { name: 'Butterfly Rings' },


    { name: 'Crawler Earings' },
    { name: 'Climber Earings' },
    { name: 'Butterfly Earings' },
    { name: 'Hearts Earings' },
    { name: 'Cuffing Season' },
    { name: 'Supersized Hoop Earings' },
    
    { name: 'Charms Bracelet' },
    { name: 'Gold Charm Bracelet' },
    { name: 'Silver Charm Bracelet' },
    { name: 'Y2K Bracelets and Necklace' },
    { name: 'Beads Bracelets' },
    { name: 'Butterfly Bracelets' },

    




    // this here is to be put in special deals 


    { name: 'Sparkly Hoops and Statement Rings, Snake Earings' },
    { name: 'Butterfly Necklace/Pendants, Hot Collars Chokers, Chain Necklaces, Snake Necklaces' },
    { name: 'Mettalic Bengles/ Bone or Bark Cuffs/ Big Bangles, Chain Bracelets, Snake Bracelets' }

// last part is special party dresses think about it 



  ]);

  console.log('categories seeded');


//images will be stored on this file and not backend, later they will be stored on paid/unpaid
//database, Google/AWS cloud etc., can use URL links from web for now if possible and later once
//in live environment after publish site or immidiately before change to real pics as mentioned above



  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Akal Purakh',
      category: categories[2]._id,
      description:
        'Waheguru',
      image: 'https://cdn.britannica.com/86/117086-050-81460DD9/Red-tailed-hawk.jpg',
        price: 369,
      quantity: 369,
      displayNumber: 1
    },
    {
      name: 'Custom Monogram Signet Ring',
      description:
        'Custom Monogram Signet Rings - Personalized Engraved Monogram Signet Ring - 925',
      image: 'https://i.ebayimg.com/images/g/Sl4AAOSwustkGCJX/s-l1200.jpg',
      category: categories[0]._id,
      price: 62.13,
      quantity: 500,
      displayNumber: 1
    },
    {
     
      name: 'Silver or Gold Signet Ring',
      description:
        'With Hand Engraved Monogram, Crest or Coat of Arms',
      image: 'https://i.ebayimg.com/images/g/9U8AAOSwjVVV0v09/s-l1600.jpg',
      category: categories[0]._id,
      price: 404.77,
      quantity: 500,
      displayNumber: 1
    },
    {
      name: 'Yokawe Vintage Crystal Y2K Rings',
      category: categories[1]._id,
      description:
        'Set Silver Sparkly Rhinestone Moon Hippie Rings Boho Carved Flower Stacking Midi Rings Gem Joint Summer Ring Set with Cresent Knuckle Rings for Women',
      image: 'https://m.media-amazon.com/images/I/611CBDzeqmL._AC_SX679_.jpg',
      price: 10.41,
      quantity: 200,
      displayNumber: 1,
    },
    
    {
      name: 'Y2K Crystal Rings Heart Adjustable Ring',
      category: categories[1]._id,
      description:
        'Vintage Rings Set New Fashion Jewelry',
      image: 'https://i.ebayimg.com/images/g/D2kAAOSw3uNldCUM/s-l1200.jpg',
      price: 2.80,
      quantity: 200,
      displayNumber: 1
    },
    {
      name: '925 Sterling Silver Fashion 18k Gold Butterfly Ring',
      category: categories[2]._id,
      description:
        'Shiny Cubic Zirconia Anniversary Promise Tail Rings CZ Classic Eternity Engagement Wedding Band Ring for Women',
      image: 'https://m.media-amazon.com/images/I/61zmWLyPI+L._AC_SX679_.jpg',
      price: 25.21,
      quantity: 300,
      displayNumber: 1
    },
    {
      name: 'LEPRATO Sparkling Butterfly Ring',
      category: categories[2]._id,
      description:
        'Cubic Zirconia Open Statement Adjustable Butterfly Rings Weddings Jewelry Gifts for Women',
      image: 'https://m.media-amazon.com/images/I/61y-urrmR-L._AC_SX679_.jpg',
      price: 10.57,
      quantity: 400,
      displayNumber: 2
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
   // orders: [
      // {
        // products: [products[0]._id, products[0]._id, products[1]._id]
      // }
    // ]
  });

  await User.create({
    firstName: 'Johny',
    lastName: 'Matharu',
    email: 'jaani.matharu@gmail.com',
    password: 'testPassword'
  });

  console.log('users seeded');

  process.exit();
});
