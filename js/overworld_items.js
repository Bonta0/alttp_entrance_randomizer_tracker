window.overworldLocations = {
  Pedestal: {
    region: 'Lost Woods',
    tag: 'lw',
    x: '3.88%',
    y: '5.20%',
    isOverworld: true,
    state(items) {
      return items.has('book') ? 'visible' : '';
    },
  },
  Mushroom: {
    region: 'Lost Woods',
    tag: 'lw',
    x: '12.33%',
    y: '8.60%',
    state() {
      return 'available';
    },
  },
  'Spectacle Rock Item': {
    region: 'Death Mountain',
    tag: 'lw',
    x: '51.64%',
    y: '8.60%',
  },
  'Ether Tablet': {
    region: 'Death Mountain',
    tag: 'lw',
    x: '42.47%',
    y: '2.04%',
  },
  'Floating Island': {
    region: 'Death Mountain',
    tag: 'lw',
    x: '81.96%',
    y: '2.26%',
  },
  'Bottle Vendor': {
    region: 'Kakariko',
    tag: 'lw',
    x: '9.13%',
    y: '47.96%',
    state() {
      return 'available';
    },
  },
  'Race game reward': {
    region: 'Kakariko',
    tag: 'lw',
    x: '3.65%',
    y: '69.00%',
  },
  'Shovel dig': {
    region: 'Light World South',
    tag: 'lw',
    x: '29.45%',
    y: '66.29%',
  },
  'Dam sunken item': {
    region: 'Light World South',
    tag: 'lw',
    x: '44.98%',
    y: '91.40%',
  },
  'Desert Ledge': {
    region: 'Desert Area',
    tag: 'lw',
    x: '2.51%',
    y: '91.86%',
  },
  'Bombos Tablet': {
    region: 'Desert Area',
    tag: 'lw',
    x: '22.15%',
    y: '92.53%',
  },
  'Lake Hylia Island': {
    region: 'Lake Hylia',
    tag: 'lw',
    x: '73.06%',
    y: '83.26%',
  },
  'Hobo under the bridge': {
    region: 'Lake Hylia',
    tag: 'lw',
    x: '70.00%',
    y: '69.91%',
  },
  Zora: {
    region: 'Light World East',
    tag: 'lw',
    x: '96.80%',
    y: '14.93%',
  },
  'Zora Ledge': {
    region: 'Light World East',
    tag: 'lw',
    x: '96.80%',
    y: '17.93%',
  },
  'Digging game': {
    region: 'Village of Outcasts',
    tag: 'dw',
    x: '4.11%',
    y: '68.55%',
  },
  'Purple Chest': {
    region: 'Village of Outcasts',
    tag: 'dw',
    x: '29.91%',
    y: '53.17%',
  },
  'Blacksmith frog': {
    region: 'Village of Outcasts',
    tag: 'dw',
    x: '13.50%',
    y: '66.97%',
  },
  'Haunted Grove': {
    region: 'Dark World South',
    tag: 'dw',
    x: '29.91%',
    y: '69.00%',
  },
  'Pyramid Item': {
    region: 'Pyramid Area',
    tag: 'dw',
    x: '57.53%',
    y: '45.48%',
  },
  Catfish: {
    region: 'Dark World East',
    tag: 'dw',
    x: '91.32%',
    y: '17.87%',
  },
};
