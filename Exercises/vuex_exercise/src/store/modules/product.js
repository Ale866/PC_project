export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://thermaltake.azureedge.net/pub/media/wysiwyg/key3/img/L20rgbmouse/aa.png',
          title: 'Mouse',
          description: 'Bla bla bla bla bla bla',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            'https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/u/f/ufitblack-red01_1.jpg',
          title: 'Gaming chair',
          description: 'Bla bla bla',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            'https://images.eprice.it/nobrand/0/Lightbox/643/210323643/DAM210323643-0-8a9b09a6-5633-4e22-a429-c334caea1b1e.jpg',
          title: 'Monitor',
          description: 'Bla bla bla bla bla bla',
          price: 6.99
        }
      ]
    };
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};
