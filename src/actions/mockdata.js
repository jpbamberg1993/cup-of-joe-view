const mockData = {
  shops: [
    {
      name: 'coffee district',
      streetOne: '325 ne 2nd ave',
      streetTwo: '104',
      city: 'delray beach',
      state: 'florida',
      zip: '33444',
      dateVisited: new Date(),
      description: 'Sorta cool layout, weird painting I can\'t figure out',
    },
  ],
  users: [
    {
      firstName: 'scotty',
      lastName: 'j',
      fav: 'mocha',
    },
  ],
  coffee: [
    {
      type: 'cafe au lait',
      rating: 4,
    },
  ],
  visit: [
    {
      date: new Date(),
      shop: 'JAX',
    },
  ],
};

export default mockData;
