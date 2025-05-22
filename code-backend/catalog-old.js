function getJsonCatalog(baseUrl) {
  const imagePath = (filename) => `${baseUrl}/catalogue/${filename}`;

  return {
    collections: [
      {
        name: "Blankets/Bedding",
        items: [
          {
            name: "Item# 0134 (Throw) - $8.99 each",
            description: "Polar Fleece Blanket (16112) 50x60”Throw Size",
            products: [
              {
                name: "Thro0134-1601 Black",
                price: 8.99,
                image: imagePath('3.jpg')
              },
              {
                name: "0134-1602 Turquoise",
                price: 8.99,
                image: imagePath('4.jpg')
              },
              {
                name: "0134-1606 Pink",
                price: 8.99,
                image: imagePath('5.jpg')
              },
              {
                name: "0134-1636 Sage",
                price: 8.99,
                image: imagePath('6.jpg')
              },
              {
                name: "0134-1636 Sage",
                price: 8.99,
                image: imagePath('7.jpg'),
                image2: imagePath('11.jpg')
              },
              {
                name: "0134-1632 Royal Blue",
                price: 8.99,
                image: imagePath('8.jpg'),
              },
              {
                name: "0134-1607 Red",
                price: 8.99,
                image: imagePath('9.jpg'),
              },
              {
                name: "0134-1605 Burgundy",
                price: 8.99,
                image: imagePath('10.jpg'),
              },
              {
                name: "0134-1635 Orange",
                price: 8.99,
                image: imagePath('12.jpg'),
              },
              {
                name: "0134-1604 Purple",
                price: 8.99,
                image: imagePath('13.jpg'),
              },
              {
                name: "0134-1640 Lime",
                price: 8.99,
                image: imagePath('14.jpg'),
              },
              {
                name: "0134-1631 Teal",
                price: 8.99,
                image: imagePath('15.jpg'),
              }
            ]
          },
          {
            name: "Item# 0135 (Throw) - $8.99 each",
            description: "Polar Fleece Blanket ( 7 Lakes & Spirit Designs)",
            products: [
              {
                name: "0135-1234 Navy Blue",
                price: 8.99,
                image: imagePath('16.jpg'),
                image2: imagePath('19.jpg')
              },
              {
                name: "0135-2301 Black",
                price: 8.99,
                image: imagePath('17.jpg'),
                image2: imagePath('18.jpg')
              },
              {
                name: "0135-2304 Purple",
                price: 8.99,
                image: imagePath('20.jpg')
              },
              {
                name: "0135-1204 Purple",
                price: 8.99,
                image: imagePath('21.jpg')
              },
              {
                name: "0135-1201 Black",
                price: 8.99,
                image: imagePath('22.jpg')
              },
              {
                name: "0135-1207 Red",
                price: 8.99,
                image: imagePath('23.jpg')
              },
              {
                name: "0135-2331 Teal",
                price: 8.99,
                image: imagePath('24.jpg')
              },
              {
                name: "0135-2305 Burgundy",
                price: 8.99,
                image: imagePath('25.jpg')
              },
              {
                name: "0135-2302 Turquoise",
                price: 8.99,
                image: imagePath('26.jpg')
              },
              {
                name: "0135-2307 Red",
                price: 8.99,
                image: imagePath('27.jpg')
              },
            ]
          }
        ]
      },
      { name: "Living Room", items: [] },
      { name: "Bathroom", items: [] },
      { name: "Apparel", items: [] },
      { name: "Sporting Goods", items: [] },
      { name: "Hats/Headwear", items: [] },
      { name: "Gloves", items: [] },
      { name: "Scarves/Neck Ties", items: [] },
      { name: "Footwear", items: [] }
    ]
  };
}

module.exports = { getJsonCatalog };
