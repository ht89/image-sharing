export default {
  addImage: function(image) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('../../img/pexels-photo-1022921.jpeg');
      }, 3000);
    })
  },
  fetchImages: function(user = null) {
    const images = [
      {
        id: 1,
        src: require('../../img/pexels-photo-1181804.jpeg'),
        user: {
          pic: require('../../img/pexels-photo-119730.jpeg'),
          name: 'Naia'
        }
      },
      {
        id: 2,
        src: require('../../img/pexels-photo-1182252.jpeg'),
        user: {
          pic: require('../../img/pexels-photo-587015.jpeg'),
          name: 'Mike_1982'
        }
      },
      {
        id: 5,
        src: require('../../img/pexels-photo-1182971.jpeg'),
        user: {
          pic: require('../../img/pexels-photo-878979.jpeg'),
          name: 'Sharer1'
        }
      }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(images.filter(img => !user || user === img.user.name));
      }, 1500);
    })
  }
}