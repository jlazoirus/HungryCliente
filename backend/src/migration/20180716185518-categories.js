'use strict';

module.exports = {

  up(db, next) {
    const categories = [
      {
        id: 1,
        imgUrl: 'https://prod.media.larepublica.pe/720x405/larepublica/imagen/2017/07/15/noticia-pollo-noticia-837176.jpg',
        name: 'Menú'
      },
      {
        id: 2,
        imgUrl: 'https://www.cocacoladeperu.com.pe/content/dam/journey/pe/es/private/historias/producto/ChifaIncaKola.jpg',
        name: 'Chifa'
      },
      {
        id: 3,
        imgUrl: 'http://plusempresarial.com/wp-content/uploads/2016/03/cevicher%C3%ADa-1.jpg',
        name: 'Cevichería'
      },
      {
        id: 4,
        imgUrl: 'http://omammamia.com/traditional/wp-content/uploads/2016/06/248ca95a9c0ba8d502dc21107bac7652.jpg',
        name: 'Italiana'
      },
      {
        id: 5,
        imgUrl: 'https://www.sportsunlimited.es/wp-content/uploads/2016/06/plato-de-autor.jpg',
        name: 'Autor'
      },
      {
        id: 6,
        imgUrl: 'https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/08/598993cd0fc2c.jpeg',
        name: 'Al Paso'
      },
      {
        id: 7,
        imgUrl: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/03/cafe.jpg',
        name: 'Cafés'
      },
      {
        id: 8,
        imgUrl: 'http://www.icoev.es/wp-content/uploads/2015/03/Mesa-comida-empresa.jpg',
        name: 'Reservar'
      },
      {
        id: 9,
        imgUrl: 'http://plusempresarial.com/wp-content/uploads/2016/06/negocio-de-men%C3%BA-delivery.jpg',
        name: 'Reservar'
      }
    ]

    db.collection('category').insert(categories, next);
    next();
  },

  down(db, next) {
    db.collection('category').drop();
    next();
  }

};