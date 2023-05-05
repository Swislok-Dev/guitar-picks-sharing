import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Cory',
      password: bcrypt.hashSync('cmacma'),
      isAdmin: true,
    },
    {
      name: 'Bob',
      password: bcrypt.hashSync('123asd'),
      isAdmin: false,
    },
  ],

  guitars: [
    {
      brand: 'Schecter',
      model: 'Omen 6',
      imageUrl:
        'https://m.media-amazon.com/images/I/71ZlrIEmxOL._AC_SY879_.jpg',
      style: 'Electric',
    },
    {
      brand: 'Gibson',
      model: 'Les Paul Standard',
      style: 'Electric',
      imageUrl:
        'https://c1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_40878-415561e4d53a9ab83db782d02d3487bf.jpg',
    },
    {
      brand: 'Jackson',
      model: 'JS Series RR Minion JS1X',
      style: 'Electric',
      imageUrl:
        'https://m.media-amazon.com/images/I/51dk8encHuL._AC_SL1200_.jpg',
    },
    {
      brand: 'Kramer',
      model: "EVH's 1982 Frankenstein",
      style: 'Electric',
      imageUrl:
        'https://image.invaluable.com/housePhotos/profilesinhistory/44/428244/H3257-L48251857.jpg',
    },
    {
      brand: 'Fender',
      model: 'Stratocaster',
      style: 'Electric',
      imageUrl:
        'http://fosterfollynews.net/wp-content/uploads/2021/01/fender-guitar.jpg',
    },
    {
      brand: 'Ibanez',
      model: 'RG470AHM',
      style: 'Electric',
      imageUrl:
        'https://www.bhphotovideo.com/images/images2500x2500/ibanez_rg470ahmbmt_rg_standard_6_string_electric_1311754.jpg',
    },
    {
      brand: 'Epiphone',
      model: 'Les Paul Classic',
      style: 'Electric',
      imageUrl:
        'https://taodangmusic.com/14439-thickbox_default/-epiphone-les-paul-classic-worn-ebony.jpg',
    },
    {
      brand: 'ESP',
      model: 'LTD Viper 50',
      style: 'Electric',
      imageUrl:
        'http://static.keymusic.com/products/80420/XL/esp-ltd-viper-50-black.jpg',
    },
  ],
};

export default data;
