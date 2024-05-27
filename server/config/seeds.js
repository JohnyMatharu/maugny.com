
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
 { name: 'Butterfly Rings' },
 { name: 'Initial Rings' },
 { name: 'Plastic Bead Rings' },
 


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


{ name: 'Women Continuum High Zip Sports Bra and Mid Sports Bra' },
{ name: 'Women Run Everywhere Tank and Velocity Solid Tank' },
 { name: 'Women Compression Short Sleeves and Velocity Short Sleeves' },
 { name: 'Qualifier Run 2.0 K Zip and Women Rival Terry Crop Hoodie' },
 { name: 'Women Mission Vest, and Infrared Crinkle Vest' },
 { name: 'Women Train Cold Weather Jackets and Reversible Bomber Jacket' },



{ name: ' Women Unstoppable, Hybrid Pants' },
 { name: 'Women Link Pants' },
 { name: 'Women Fleece Tapered Pants' },
 { name: 'Men Unstoppable Joggers' },
{ name: ' Men Armour and Rival Fleece Joggers' },
 { name: 'Men Tapered and Golf Tapered Pants' },



 { name: 'Men’s Velocity and Charged T-Shirt' },
 { name: 'Men’s Tech Zip and Infra Red Zip T-Shirt' },
 { name: 'Compression T-Shirt' },
 { name: 'Rival Fleece T-Shirts/Hoodies and Hustle Fleece Hoodies' },
{ name: 'Hockey Warm Up and Varsity Jackets' },
{ name: 'Infrared and Insulated Jackets' },







{ name: 'Snake Earrings and Sparkley Hoops'}, 
{ name: 'Butterfly Necklace/Hot Collars Chokers/Chain and Snake Necklace'}, 
{ name: 'Mettalic and Bone or Bark Cuff Bengles/Snake Bracelets'},
{ name: 'Women Play Up Shorts'},
{ name: 'Motion/Breathelux Ankle Leggings'},

{ name: 'Men Hats'},
{ name: 'Forged Carbon iPhone 15 Phone cases'},
{ name: 'Drinkware 18oz Beyond Water Bottle'},
{ name: 'Undeniable Sackpack Bags'},
{ name: 'Varnish Energy Emboss Women Crop Tops'},
{ name: 'Women Bubble Push Up Legging'}
 



 ]);

 console.log('categories seeded');


//images will be stored on this file and not backend, later they will be stored on paid/unpaid
//database, Google/AWS cloud etc., can use URL links from web for now if possible and later once
//in live environment after publish site or immidiately before change to real pics as mentioned above



 await Product.deleteMany();

 const products = await Product.insertMany([
 {
 name: 'Akal Purakh',
 category: categories[0]._id,
 description:
 'Waheguru',
 image: 'https://cdn.britannica.com/86/117086-050-81460DD9/Red-tailed-hawk.jpg',
 price: 369,
 quantity: 369,
 displayNumber: 369
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
 displayNumber: 1
 },


 {
 name: 'Diamond Solid Gold Butterfly Ring',
 category: categories[3]._id,
 description:
 'Solid Gold Diamond Handmade Stacking Ring, Butterfly Jewelry, Animal Lover Beauty Band, Gift for Her',
 image: 'https://i.etsystatic.com/31198883/r/il/1c1448/4253698519/il_794xN.4253698519_nzlj.jpg',
 price: 454.62,
 quantity: 450,
 displayNumber: 2
 },
 {
 name: 'Ophelia Baguette Butterfly Ring',
 category: categories[3]._id,
 description:
 'Classic, timeless, and fun, we cant get enough of The Ophelia Baguette Butterfly Ring! Metal Quality & Whats Available: 18k Yellow Gold 18k White Gold',
 image: 'https://rwfine.com/cdn/shop/products/RingWrapsOpheliaRing.jpg?v=1614374239&width=1200',
 price: 9001,
 quantity: 30,
 displayNumber: 2
 },
 {
 name: 'Initial Ring, Diamond Initial Ring',
 category: categories[4]._id,
 description:
 'Personalized Jewelry, Letter Ring, Personalized Gift, Mothers Day Gift, Diamond Letter Ring, Moms Gift',
 image: 'https://i.etsystatic.com/21807200/r/il/f6be3c/3306436628/il_794xN.3306436628_4s0e.jpg',
 price: 37.44,
 quantity: 400,
 displayNumber: 2
 },
 {
 name: 'Initial Letter Ring for Women Girls',
 category: categories[4]._id,
 description:
 'Silver Stackable Alphabet Rings with Initial Adjustable Crystal Inlaid Initial Rings Gifts for Teen Girls',
 image: 'https://m.media-amazon.com/images/I/61OEB0meLfL._AC_SX679_.jpg',
 price: 6.19,
 quantity: 350,
 displayNumber: 2
 },
 {
 name: 'Silver Stackable Alphabet Rings',
 category: categories[5]._id,
 description:
 'Initial Adjustable Crystal Inlaid Initial Rings Gifts for Teen Girls',
 image: 'https://m.media-amazon.com/images/I/71Z-7VplNwL._SY450_.jpg',
 price: 7.50,
 quantity: 750,
 displayNumber: 2
 },
 {
 name: 'Assorted Beaded Rings',
 category: categories[5]._id,
 description:
 'Assorted beaded rings! Made with plastic beads and elastic string',
 image: 'https://i.etsystatic.com/25162821/r/il/6359e7/4536323045/il_794xN.4536323045_46yi.jpg',
 price: 10.74,
 quantity: 500,
 displayNumber: 2
 },
 { name: 'Crystal Ear Climber Earrings ',
 category: categories[6]._id,
 description:
 'Ear crawler earrings Crystal ear cuff Asymmetrical earrings Climbing earrings Bridal earrings Luxury ear cuff',
 image: 'https://i.etsystatic.com/19515348/r/il/cc2ac8/2462699081/il_794xN.2462699081_8zec.jpg',
 price: 45.93,
 quantity: 400,
 displayNumber: 3
 },
 { name: 'Glam Ear Crawler Earings',
 category: categories[6]._id,
 description:
 '925 Sterling Silver, cubic zirconia, Nickel free for sensitive skin',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeX2343egnv5UXO-lVF7g1cMqYhAFFYeyITc47Y5S5rPfLYoXqoXh7i3MT&s=10',
 price: 69,
 quantity: 140,
 displayNumber: 3
 },
 { name: 'Earcuff Climber Earings',
 category: categories[7]._id,
 description:
 'Bridal ear climber, crystal bridal, ear crawler earrings',
 image: 'https://i.etsystatic.com/5997489/r/il/cf0dc9/725032438/il_794xN.725032438_4j0j.jpg',
 price: 89.76,
 quantity: 1600,
 displayNumber: 3
 },
 { name: '92.5 Sterling Silver Climber Earings',
 category: categories[7]._id,
 description:
 'Statement earrings, ear crawler',
 image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3KmDVXMyALTSzdC1ZdmMNaSROSujIvrEnxKP-B9xsKpKlBsGidGPfnlCx_wc_dUlFa_ltkVE71P6dCnq2byrU3ehBWcGq',
 price: 10,
 quantity: 200,
 displayNumber: 3
},
 { name: 'Coadipress Bohemian Big Butterfly Earings',
 category: categories[8]._id,
 description:
 'For girls good dainty gold double plated double butterflies, animal drop earings, elegant stud statement charms',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBvWNmK1JysodRAYdvI8SUbnvXk5oCkfnVQ&usqp=CAU',
 price: 36.83,
 quantity: 989,
 displayNumber: 3
 },
 { name: 'Bohemia Big Butterfly Earings',
 category: categories[8]._id,
 description:
 'Gold Dangle Drop Stud Earrings',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vdXCFYxyORWSf57lNpJ-NFkXqAjo55RQHw&usqp=CAU',
 price: 33.80,
 quantity: 890,
 displayNumber: 3
},
 { name: 'Hearts Earings',
 category: categories[9]._id,
 description:'Big old style',
 image: "https://media.nastygal.com/i/nastygal/agg54453_gold_xl/female-gold-she's-got-a-big-old-heart-earrings/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit%27",
 price: 8.67,
 quantity: 640,
 displayNumber: 4
 },
 { name: 'Lovergirl Hearts Earings',
 category: categories[9]._id,
 description:
 'Double Heart Earrings and double statement',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2mWYE13rM4HdEwAYRo0I3lvtBj3WvOFn7Q&usqp=CAU',
 price: 400,
 quantity: 300,
 displayNumber: 4
 },
 { name: 'Trendy Cuffing Season',
 category: categories[10]._id,
 description:'Copper alloy, zircon stones, gold and Rhodium color options ',
 image: 'https://www.kushals.com/cdn/shop/files/trendy-earring-trendy-earring-163116-37678950285468.jpg?v=1709781030',
 price: 60,
 quantity: 1500,
 displayNumber: 4
},
 { name: 'Cuffing Season Earrings',
 category: categories[10]._id,
 description:'Set of 2 18 kt gold, plate over Copper size ',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg36NR8aTF-pXYc0FTDTOiGCvn6tfiT10g8e4_TXDnEI8_frmytDHwmbXy&s=10',
 price: 49,
 quantity: 700,
 displayNumber: 4
},
 { name: 'Supersized Hoop Earings',
 category: categories[11]._id,
 description:'2 mm Gold Tube',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR880kHlMJ8eviSNSuBWCZZs6oifYrdWOlWlg&usqp=CAU',
 price: 120,
 quantity: 500,
 displayNumber: 4
 },
 { name: 'FX Mimior Supersized Hoop Earings',
 category: categories[11]._id,
 description:
 'Big wire simple hoop earrings ', 
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hru_Bv_hZMrOXP7oMiXx_Txd6A1mwdzrZhyX0pWVGARcBImuAItJnrdr&s=10',
 price: 249,
 quantity: 7,
 displayNumber: 4
 }, 

 
 { name: 'Palmonas Charms Bracelet' , 
category: categories[12]._id,
 description:
 'Hearts All Over Bracelet - 18 k gold plated',
 image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/2/62e42abPM-BRACELETS-035_1.jpg?rnd=20200526195200&tr=w-900',
 price: 47.50,
 quantity: 840, 
 displayNumber: 5


},

{ name: 'Sterling Silver Charms Bracelet' , 
category: categories[12]._id,
 description:
 'Free silver pendant',
 image: 'https://whitehaathi.com/cdn/shop/files/IMG_9640-1.jpg?v=1690884216',
 price: 60,
 quantity: 1200,
 displayNumber: 5


},


 { name: 'Punk Chainlink Charm Bracelet Bangle' , 
category: categories[13]._id,
 description:
 'Colorful heart charms bracelet',
 image: 'https://images-static.nykaa.com/media/catalog/product/c/e/cefb573CB050495_1.jpg?tr=w-750',
 price: 12,
 quantity: 300,
 displayNumber: 5


},

 { name: 'Gilded Charm Bracelet',
category: categories[13]._id,
 description: 'Combination of carved, cap pearls, and compass inspired charms with toggle 24 k gold plate',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrJ3RDQ6xMrMsWL5PEi-J6L5fLyoWS8yZDg&usqp=CAU',
 price: 3.12,
 quantity: 900,
 displayNumber: 5

},



 { name: 'Silver Charm Bracelet' , 
category: categories[14]._id,
 description:
 'White Haathi Design',
 image: 'https://cdn.shopify.com/s/files/1/0359/8221/products/CharmChainBraceletAdditionalPhoto3_1200x1200.jpg?v=1638478296',
 price: 10.25,
 quantity: 500,
 displayNumber: 5


},

{ name: 'Sterling Silver Charm Bracelet' , 
category: categories[14]._id,
 description:
 '92.5% Sterling Silver',
 image: 'https://whitehaathi.com/cdn/shop/files/IMG_9640-1.jpg?v=1690884216',
 price: 20,
 quantity: 600,
 displayNumber: 5
},



 { name: 'Y2K Word Clay Bead Bracelets',
category: categories[15]._id,
 description: 
 'Choose any Name Possible',
 image: 'https://i.etsystatic.com/37443521/r/il/34aa12/4186735378/il_fullxfull.4186735378_bhmx.jpg',
 price: 20.1,
 quantity: 400,
 displayNumber: 6

},

{ name: 'Y2K Bracelets', 

category: categories[15]._id,
 description:'4 different styles, with Pearl Spacer Beads',
 image: 'https://i.etsystatic.com/32646346/r/il/5f3e78/4190490462/il_794xN.4190490462_5w9g.jpg',
 price: 12.50,
 quantity: 500,
 displayNumber: 6

},



 { name: 'Personalized Beaded Stretch Bracelet' , 

category: categories[16]._id,
 description:
 'Stackable ID bracelet, white letter beads, 4mm Czeck glass multicolour, opaque and stripe mix color bead',
 image: 'https://i.etsystatic.com/6087133/r/il/dc73e0/2529502363/il_794xN.2529502363_le7p.jpg',
 price: 14.12,
 quantity: 700,
 displayNumber: 6

},

{ name: 'Handmade Colourful Customizable Beaded Bracelets' , 
category: categories[16]._id,
 description:
 'Seed bead bracelets, 90’s inspired trendy, rainbow',
 image: 'https://i.etsystatic.com/18204207/r/il/f73269/3323625187/il_794xN.3323625187_f4t4.jpg',
 price: 13.21,
 quantity: 980,
 displayNumber: 6


},

 { name: 'Kute Baguette Butterfly Bangles' , 
category: categories[17]._id,
 description: 
 'High quality always sparkly, tarnish free hypoallergenic materials',
 image: 'https://bbykute.com/cdn/shop/files/4_faa42d77-a295-4f2e-99dc-a748d262f560.jpg?v=1711927830&width=1000',
 price: 146,
 quantity: 250,
 displayNumber: 6


},

 { name: 'Kute Butterfly Bracelets' , 
category: categories[17]._id,
 description:
 ' High quality always sparkly, tarnish free hypoallergenic materials',
 image: 'https://bbykute.com/cdn/shop/products/2_a53488d2-d953-49fa-ae3b-6fcd97be0363-103461.jpg?v=1657596722&width=800',
 price: 227,
 quantity: 1000,
 displayNumber: 6

}, 













{
 name: 'Women Continuum High Zip Sports Bra ',
 description:
 'Zippable on an off can be locked, adjustable straps, four way stretch material dries fast',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1374122-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 category: categories[18]._id,
 price: 45.97,
 quantity: 900,
 displayNumber: 7
 },
 {
 
 name: 'Women Continuum Mid Sports Bra',
 description:'For medium support activities, like cycling and weight training, PU injected, one piece padding',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1372559-676_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 category: categories[18]._id,
 price: 33.97,
 quantity: 750,
 displayNumber: 7
 },
 {
 name:'Women Run Everywhere Tank', 
 category: categories[19]._id,
 description:'General dropped armholes for full motion, cropped body length with shaped hem',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1381844-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 37.97,
 quantity: 70,
 displayNumber: 7
 },
 
 {
 name: 'Women Velocity Solid Tank',
 category: categories[19]._id,
 description: 
 'Special made of nylon material, which wicks sweat dries faster',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1358539-001_FC_Main?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 15.97,
 quantity: 300,
 displayNumber: 7
 },
 {
 name: 'Women Compression Short Sleeves',
 category: categories[20]._id,
 description:'Base layer, made of stretchy material, makes you move more',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1365460-100_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 30,
 quantity: 600,
 displayNumber: 7
 },
 {
 name: 'Women Velocity Short Sleeves',
 category: categories[20]._id,
 description:'Special made of nylon material, which wicks sweat dries faster, twists moves all directions',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1291292-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 15.97 ,
 quantity: 90 ,
 displayNumber: 7
 },


 {
 name: 'Women Qualifier Run 2.0 K Zip',
 category: categories[21]._id,
 description:'Snag free finish, ribbed collar, four way stretch material easy for running',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1365632-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 48.97,
 quantity: 1000,
 displayNumber: 8
 },
 {
 name: 'Women Rival Terry Crop Hoodie',
 category: categories[21]._id,
 description:'Smooth outer layer and softer inner layer, dropped shoulder hem and cropped body length',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1378986-012_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 37.97,
 quantity: 500,
 displayNumber: 8
 },
 {
 name: 'Women Mission Vest ',
 category: categories[22]._id,
 description:'Sherpa Fleece fabric, internal chest pocket and waterproof', 
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1378864-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 100 ,
 quantity: 200 ,
 displayNumber: 8
 },
 {
 name: 'Infrared Crinkle Vest',
 category: categories[22]._id,
 description:
 'Infrared lining to absorb the body heat, wide collar or warmth',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1381660-112_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 149.97 ,
 quantity: 375,
 displayNumber: 8
 },
 {
 name: 'Women Train Cold Weather Jackets',
 category: categories[23]._id,
 description: 'Base layer, double layer fabric',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1373968-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 38.97 ,
 quantity: 90,
 displayNumber: 8
 },
 {
 name: 'Mission Reversible Women Bomber Jacket' ,
 category: categories[23]._id,
 description: 'Water resistant, reversible, ribbed collar cuffs, and bottom',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1378863-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 149,
 quantity: 320,
 displayNumber: 8
 },
 { name: 'Women Unstoppable Pants',
 category: categories[24]._id,
 description: 'Fast drying fabric, adjustable internal waistband, open hand pockets inside zip pockets',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1376927-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 100 ,
 quantity: 350 ,
 displayNumber: 9
 },
 { name: 'Women Hybrid Pants',
 category: categories[24]._id,
 description: 
 'water repellent, soft and stretchy knit pants ',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1379115-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 85,
 quantity: 250,
 displayNumber: 9
 }, 
 { name: 'Women Link Pants',
 category: categories[25]._id,
 description:'Light durable, stretchable, we spend with adjustable inner elastic',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1362772-410_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
 price: 63,
 quantity: 163,
 displayNumber: 9
 },
 { name: 'Women Cold Gear Infrared Link Pants',
 category: categories[25]._id,
 description:'Five pocket pants, cold gear infrared technology, repels water, lightweight and thermal conductive ',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1380134-480_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
 price: 55.97,
 quantity: 150 ,
 displayNumber: 9
},
 { name:'Women Essential Fleece Tapered Pants',
 category: categories[26]._id,
 description:'Warm up pants, ultrasoft tech fabric quick drying',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1379443-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 60,
 quantity: 900 ,
 displayNumber: 9
 },
 { name: 'Women Rival Fleece Joggers',
 category: categories[26]._id,
 description:'Ultrasoft, midweight, cotton, blend, fleece, elastic waistband and open side pockets',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1356416-035_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
 price: 70,
 quantity: 177 ,
 displayNumber: 9
},
 { name: 'Men Unstoppable Joggers',
 category: categories[27]._id,
 description:'Storm technology, easy stretch, material, wicks, sweat, elastic waistband, and side zip pocket',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1352027-018_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 120 ,
 quantity: 249 ,
 displayNumber: 10
 },
 { name: 'Men Unstoppable Fleece Joggers',
 category: categories[27]._id,
 description:
 'Repels water, stretch material, elastic waistband, open hand pockets',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1379808-802_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 100 ,
 quantify: 240,
 displayNumber: 10
 },
 { name: 'Men Armour Fleece Joggers',
 category: categories[28]._id,
 description: 'Double knit fabric is ultra soft, material wicks sweat, elastic waistband',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1379808-802_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 100,
 quantity: 200, 
 displayNumber: 10
},
 { name: 'GB Men Rival Fleece Joggers',
 category: categories[28]._id,
 description:'Light, super soft, cotton blend fleece, elastic waistband and open hand pockets',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1357128-012_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 58.97,
 quantity: 119,
 displayNumber: 10
},
 { name: 'Men Unstoppable Tapered Pants',
 category: categories[29]._id,
 description:'Repels water, fabric is lightweight, elastic waist band',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1352028-001_FSFADD_MAIN?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 95,
 quantity: 210 ,
 displayNumber: 10
 },
 { name: 'Men Drive Tapered Pants',
 category: categories[29]._id,
 description:
 'Fit Tapered Leg, repels water, comfortable light fabric, flat front 4 pocket design', 
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1364410-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 100,
 quantity: 169,
 displayNumber: 10
 }, 

 
 { name: 'Men’s Velocity T-Shirt' , 
 category: categories[30]._id,
 description:' Light, loose, tech fabric, made with recycled, traceable polyester and reuse five bottles per shirt',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1327965-390_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 22.97,
 quantity: 67, 
 displayNumber: 11
},

{ name: 'Men’s Sport-style Left Chest Short Sleeve T-shirt', 
 category: categories[30]._id,
 description:'Light, soft, cotton, ribbed collar',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1326799-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 30 ,
 quantity: 67,
 displayNumber: 11
},


 { name: 'Men’s Long Sleeves Tech Zip T-shirt' , 
 category: categories[31]._id,
 description:
 'Loose, light, tech fabric, quick dry, 90% body recycled polyester',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1328495-409_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 55 ,
 quantity: 78 ,
 displayNumber: 11
},

 { name: 'Men Heat Gear Compression T-shirt' , 
 category: categories[31]._id,
 description: 'Cold gear infrared technology holds body heat. Dual layer fabric',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1257468-001_BC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 14.97 ,
 quantity: 40,
 displayNumber: 11
},



 { name: 'Men’s Compression Tactical Heat Gear T-shirt' , 
 category: categories[32]._id,
 description:' Heat gear fabric, comfortable stretch for ventilation, stretch, mesh under arm panels for venting',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1216007-499_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 24.95 ,
 quantity: 56 ,
 displayNumber: 11

},

{ name: 'Men’s Cold Gear, Infrared Hoodie' , 
category: categories[32]._id,
 description:' Super light, heat gear fabric, stretch material',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1368020-422_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 59.97,
 quantity: 120 ,
 displayNumber: 11
},



 { name: 'Men’s Rival Fleece Hoodies' ,
 category: categories[33]._id,
 description: ' Super soft cotton blend fleece, brushed interior, front kangaroo pocket',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1357092-012_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 65,
 quantity: 134 ,
 displayNumber: 12

},

{ name: 'Men’s Hustle Fleece Hoodies', 
 category: categories[33]._id,
 description:' Lightweight ultra soft, 225 g cotton blend fleece, front kangaroo pocket',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1300123-410_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 66,
 quantity: 135,
 displayNumber: 12

},



 { name: 'Men’s Hockey Warm-Up Jackets' , 
category: categories[34]._id,
 description:
 'Lightweight, water resistant, stretch fabric',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1317185-001_FC_Main?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 90 ,
 quantity: 189 ,
 displayNumber: 12

},

{ name: 'Men’s Mesh Varsity Jackets' , 
 category: categories[34]._id,
 description:'Light and double knit fabric with mesh overlay, ribbed collar, cuff and bottom hem',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377437-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 127.97 ,
 quantity: 300 ,
 displayNumber: 12


},

 { name: 'Men’s Cold Gear Infrared Jackets', 
 category: categories[35]._id,
 description: 'Technology holds heat, without adding bulk, bonded three layer soft shell material',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1371586-012_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 130,
 quantity: 370 ,
 displayNumber: 12


},

 { name: 'Men’s Store Insulated Jackets' , 
 category: categories[35]._id,
 description:
 'Repels, water, lightweight, mock mesh collar',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1380871-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 110 ,
 quantity: 247,
 displayNumber: 12

},








{ name: 'Sparkly Hoops', 
category: categories[36]._id,
 description:'Gold hardware and baguette hoop style',
 image:'https://www.sheike.com.au/cdn/shop/files/1006511_SPARKLE_HOOP_EARRINGS_GOLD.jpg?v=1709266791&width=1280',
 price: 39.50,
 quantity: 89,
 displayNumber: 13
},




 
 { name: 'Snake Earings', 
category: categories[36]._id,
 description:'Yellow brass hoop, oxidized color, antique gold plating',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqV36dVu68EYYvmd4Ai0TqeSemu5VwgtO4SQ0VUx2K0hXimEYBod50oU7E&s=10',
 price: 11.95 ,
 quantity: 24  ,
 displayNumber: 13
},


 { name: 'Butterfly Necklace', 
category: categories[37]._id,
 description:'Blue of white beaded shell',
 image:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/b/ab444e0NL051275_1.jpg?rnd=20200526195200&tr=w-900',
 price: 12.95 ,
 quantity: 27 ,
 displayNumber: 13
 },

{ name: 'Hot Collars Chokers', 
category: categories[37]._id,
 description:'Leather Chokers Fashion Trendy, black white suede band',
 image: 'https://s.alicdn.com/@sc04/kf/HTB1IqRLNVXXXXa5XVXXq6xXFXXXq.jpg_720x720q50.jpg',
 price: 1.50 ,
 quantity: 300 ,
 displayNumber: 14
 },

 { name: 'Chain Necklace', 
 category: categories[37]._id,
  description:' Joker and witch, Lianne chain link, gold layered necklace',
  image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/j/w/jwj963_1_e136de75.jpg?rnd=20200526195200&tr=w-900',
  price: 11.50 ,
  quantity: 36 ,
  displayNumber: 14
  },


{ name: 'Snake Necklaces', 
category: categories[37]._id,
 description:
 ' Multi-styling bendable choker necklace, adjustable twist and turn',
 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86mMsF_clTM1onKx_TBg9Wv3IhrXbWt2VsoLHmu5_rg&s',
 price: 63,
 quantity: 126,
 displayNumber: 14

 },

 { name: 'Mettalic Bengles',
category: categories[38]._id,
 description:
 ' Pipa Bella, set of 3 gold classic bangles',
 image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/a8ec5c5DPIPAB00007884_1.jpg?rnd=20200526195200&tr=w-1536',
 price: 33.50,
 quantity: 68  ,
 displayNumber: 15
 },


 { name: 'Bone or Bark Cuffs',
 category: categories[38]._id,
  description:
  ' Matt gold hammered bangle, gold plated and hand made cuff',
  image: 'https://i.etsystatic.com/37794166/r/il/7b6f69/5733119410/il_794xN.5733119410_s0kh.jpg',
  price: 12.32,
  quantity: 32 ,
  displayNumber: 15
  },


 

{ name: 'Snake Bracelets',
category: categories[38]._id,
 description:'Waterproof, non fading, anti tarnishing',
 image: 'https://www.jewelleryhat.com/cdn/shop/files/SnakeBracelet_2_ea4103fc-0879-4b05-91d0-ee337635fe0d.jpg?v=1714218592&width=1445',
 price: 53,
 quantity:  127,
 displayNumber: 15
 }, 

{ name: 'Women Play Up Shorts', 
category: categories[39]._id,
 description:' Lightweight, anti-pill, soft elastic and waistband',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1362517-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 25.97,
 quantity: 56 ,
 displayNumber: 16

},



//HERE




 { name: 'Women Motion Ankle Leggings',  
category: categories[40]._id,
 description:'Ultrasoft fabric, double knit, flat waistband',
 image:'https://underarmour.scene7.com/is/image/Underarmour/V5-1369488-001_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 65 ,
 quantity: 143 ,
 displayNumber: 16

 },
 { name: 'Women Breathelux Ankle Leggings', 
category: categories[40]._id,
 description:'Silky, smooth, high-rise waist and waistband pocket',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1362387-446_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 56.19,
 quantity: 123 ,
 displayNumber: 16

 },










{ name: 'Men Hats',
category: categories[41]._id,
 description: 'Breatheable, starch band, embroidered',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/1376700-273_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 35,
 quantity: 76,
 displayNumber: 17
},

{ name: 'Forged Carbon iPhone 15 Phone cases',
category: categories[42]._id,
description:'Pro max case, rugged design, carbon fibre, built in magnet module',
image: 'https://images.ctfassets.net/9hslf09drsil/uSHe5KFqpvafP1YSZ9Hyf/002c8cbd13d6668352aa979efd2f3c3a/UAG_HS_APPLE_IPHONE-15-PRO-MAX-B-2023-SUPERMAN_MONARCH-PRO-MAGSAFE_FORGED-CARBON_STD_01_MS.png?w=1920&q=70&fm=webp',
price: 149.95,
quantity: 345 ,
displayNumber: 17
},

{ name: 'Drinkware 18oz Beyond Water Bottle',
category: categories[43]._id,
 description:'Pop up lid, vacuum insulated, stainless steel interior, lockable lid and nonslip bottom',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/1364829-900_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 30,
 quantity: 78 ,
 displayNumber: 17

},

{ name: 'Undeniable Sackpack Bags',
category: categories[44]._id,
 description:'Insulated bottle sleeve and highly water repellent, and adjustable cording straps',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/1369220-400_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 25,
 quantity: 50,
 displayNumber: 18
},

 
{ name: 'Varnish Energy Emboss Women Crop Tops',
category: categories[45]._id,
 description:'Perfect fit and keeps dry, cropped body length and odour protection',
 image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1383640-561_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708',
 price: 40 ,
 quantity: 90 ,
 displayNumber: 18
},

{ name: 'Women Bubble Push Up Legging',
category: categories[46]._id,
 description:'Thermoactive fabric, flat seams, stretchy and soft',
 image: 'https://ocs-pl.oktawave.com/v1/AUTH_630f86eaa3774cda8593b8a9710b1aa4/lte/carpatree/2020/0508/20200508101317_zSyKx65RnMUw1NsZ_800x960.webp',
 price: 32.99,
 quantity: 68,
 displayNumber: 18
}

//7 items from bottom need to be adjusted

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