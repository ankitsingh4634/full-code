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
                  name: "Throw0134-1601 Black",
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
            }, {
              name: "Item# 0579 - $14.99 each",
              description: "Heavy Polar Fleece Blanket (18125 / Oregon Trail)",
              products: [
                {
                  name: "0579-1801 Black",
                  price: 14.99,
                  image: imagePath('28.jpg')
  
                }, {
                  name: "0579-1834 Navy Blue",
                  price: 14.99,
                  image: imagePath('29.jpg')
  
                },
                {
                  name: "0579-1806 Pink",
                  price: 14.99,
                  image: imagePath('30.jpg'),
                  image2: imagePath('35.jpg')
  
                }, {
                  name: "0579-1804 Purple",
                  price: 14.99,
                  image: imagePath('31.jpg')
  
                },
                {
                  name: "0579-1836 Sage Green",
                  price: 14.99,
                  image: imagePath('32.jpg')
  
                },
                {
                  name: "0579-1831 Teal Green",
                  price: 14.99,
                  image: imagePath('33.jpg')
  
                },
                {
                  name: "0579-1805 Burgundy",
                  price: 14.99,
                  image: imagePath('34.jpg')
  
                },
                {
                  name: "0579-1802 Turquoise",
                  price: 14.99,
                  image: imagePath('36.jpg')
  
                },
  
  
              ]
  
            }, {
              name: "Item# 0578 - $14.99 each",
              description: "Heavy Polar Fleece Blanket (16112)",
              products: [
                {
                  name: "0578-1601 Black",
                  price: 14.99,
                  image: imagePath('37.jpg')
                },
                {
                  name: "0578-1602 Turquoise",
                  price: 14.99,
                  image: imagePath('38.jpg')
  
                },
                {
                  name: "0578-1606 Pink",
                  price: 14.99,
                  image: imagePath('39.jpg')
                },
                {
                  name: "0578-1636 Sage",
                  price: 14.99,
                  image: imagePath('40.jpg')
                },
                {
                  name: "0578-1632 Royal Blue",
                  price: 14.99,
                  image: imagePath('42.jpg')
                },
                {
                  name: "0578-1607 Red",
                  price: 14.99,
                  image: imagePath('43.jpg')
                },
                {
                  name: "0578-1605 Burgundy",
                  price: 14.99,
                  image: imagePath('44.jpg')
                },
                {
                  name: "0578-1638 Neon Yellow",
                  price: 14.99,
                  image: imagePath('45.jpg')
                },
                {
                  name: "0578-1635 Orange",
                  price: 14.99,
                  image: imagePath('46.jpg')
                },
                {
                  name: "0578-1604 Purple",
                  price: 14.99,
                  image: imagePath('47.jpg')
                },
                {
                  name: "0578-1633 Lime",
                  price: 14.99,
                  image: imagePath('48.jpg'),
                  image2: imagePath('41.jpg')
                },
                {
                  name: " 0578-1631 Teal",
                  price: 14.99,
                  image: imagePath('49.jpg')
                },
              ]
            }, {
              name: "Item# 0580 - $14.99 each",
              description: "Heavy Polar Fleece (16112 Team Spirit)",
              products: [
                {
  
                  name: "0580-1912 OAK",
                  price: 14.99,
                  image: imagePath('50.jpg')
  
                },
                {
                  name: "0580-1913 SF9",
                  price: 14.99,
                  image: imagePath('51.jpg')
                },
                {
                  name: "0580-1923 SFG",
                  price: 14.99,
                  image: imagePath('53.jpg')
                },
                {
                  name: "0580-1919 NE",
                  price: 14.99,
                  image: imagePath('54.jpg')
                },
                {
                  name: "0580-1924 NO",
                  price: 14.99,
                  image: imagePath('55.jpg')
                },
                {
                  name: "0580-1920 ASU",
                  price: 14.99,
                  image: imagePath('56.jpg')
                },
                {
                  name: "0580-1921 SJ",
                  price: 14.99,
                  image: imagePath('57.jpg'),
                  image2: imagePath('59.jpg')
                },
                {
                  name: "0580-1920 ASU",
                  price: 14.99,
                  image: imagePath('58.jpg')
                }
              ]
            }, {
              name: "Item# 0577 - $14.99 each",
              description: "Heavy Polar Fleece ( 7 Lakes / Thunder Spirit Designs)",
              products: [
                {
                  name: "0577-1201 Black",
                  price: 14.99,
                  image: imagePath('60.jpg')
                },
                {
                  name: "0577-2304 Purple",
                  price: 14.99,
                  image: imagePath('61.jpg')
  
                },
                {
                  name: "0577-2301 Black",
                  price: 14.99,
                  image: imagePath('64.jpg'),
                  image2: imagePath('62.jpg')
  
                },
                {
                  name: "0577-1204 Purple",
                  price: 14.99,
                  image: imagePath('65.jpg')
                },
                {
                  name: "0577-1234 Navy Blue",
                  price: 14.99,
                  image: imagePath('66.jpg')
  
                },
                {
                  name: "0577-2331 Teal",
                  price: 14.99,
                  image: imagePath('67.jpg')
  
                },
                {
                  name: "0577-2305 Burgundy",
                  price: 14.99,
                  image: imagePath('68.jpg')
  
                },
                {
                  name: "0577-2302 Turquoise",
                  price: 14.99,
                  image: imagePath('69.jpg')
  
                },
                {
                  name: "0577-2307 Red",
                  price: 14.99,
                  image: imagePath('70.jpg')
  
                },
                {
                  name: "0577-1207 Red",
                  price: 14.99,
                  image: imagePath('71.jpg'),
                  image2: imagePath('63.jpg')
  
                }
  
              ]
            }, {
              name: "Item# 0555 - $13.00 each",
              description: "Silk Touch - One Ply (16112)",
              products: [
                {
                  name: "0555-1601 Black",
                  price: 14.99,
                  image: imagePath('72.jpg')
                },
                {
                  name: "0555-1604 Purple",
                  price: 14.99,
                  image: imagePath('73.jpg')
  
                },
                {
                  name: "0555-1608 Grey",
                  price: 14.99,
                  image: imagePath('74.jpg')
  
                },
                {
                  name: "0555-1631 Teal",
                  price: 14.99,
                  image: imagePath('75.jpg')
  
                },
                {
                  name: "0555-1602 Turquoise",
                  price: 14.99,
                  image: imagePath('76.jpg')
  
                },
                {
                  name: "0555-1605 Burgundy",
                  price: 14.99,
                  image: imagePath('77.jpg')
                },
                {
                  name: "0555-1610 White",
                  price: 14.99,
                  image: imagePath('78.jpg')
                },
                {
                  name: "0555-1612 Oak",
                  price: 14.99,
                  image: imagePath('79.jpg'),
                  image2: imagePath('80.png')
                },
  
              ]
  
            },
            {
              name: "Item# 0556 - $22.00 each",
              description: "Silk Touch - One Ply (16112)",
              products: [
                {
                  name: "0556 - 1601 Black/Twin",
                  price: 14.99,
                  image: imagePath('81.jpg')
                }, {
                  name: "0556 - 1608 Grey/Twin",
                  price: 14.99,
                  image: imagePath('82.jpg')
                }, {
                  name: "0556 - 1604 Purple/Twin",
                  price: 14.99,
                  image: imagePath('83.jpg')
                }, {
                  name: "0556 - 1631 Teal/Twin",
                  price: 14.99,
                  image: imagePath('84.jpg')
                }, {
                  name: "0556 -1602 Turquoise/Twin",
                  price: 14.99,
                  image: imagePath('85.jpg')
                }, {
                  name: "0557 - 1612 Oak/Twin",
                  price: 14.99,
                  image: imagePath('86.jpg'),
                  image2: imagePath('88.jpg')
                }, {
                  name: "0556 - 1605 Burgundy/Twin",
                  price: 14.99,
                  image: imagePath('87.jpg')
                }, {
                  name: "0556 - 1610 White/Twin",
                  price: 14.99,
                  image: imagePath('89.jpg')
                },
  
              ]
            },
            {
              name: "Item# 0557 - $26.00 each",
              description: "Silk Touch - One Ply (16112)",
              products: [{
                name: "0557 - 1601 Black/Queen ",
                price: 14.99,
                image: imagePath('81.jpg')
  
              },
              {
                name: "0557 - 1608 Grey/Queen",
                price: 14.99,
                image: imagePath('82.jpg')
  
              }, {
                name: "0557 -1604 Purple/Queen",
                price: 14.99,
                image: imagePath('83.jpg')
  
              }, {
                name: "0557 - 1631 Teal/Queen",
                price: 14.99,
                image: imagePath('84.jpg')
  
              }, {
                name: "0557-1602 Turquoise/Queen",
                price: 14.99,
                image: imagePath('85.jpg')
  
              }, {
                name: "0557 - 1612 Oak/Queen",
                price: 14.99,
                image: imagePath('86.jpg'),
                image2: imagePath('88.jpg')
  
              }, {
                name: "0557 - 1605 Burgundy/Queen",
                price: 14.99,
                image: imagePath('87.jpg')
  
              }, {
                name: "0557 - 1610 White/Queen",
                price: 14.99,
                image: imagePath('89.jpg')
              }
              ]
            }, {
              name: "Item #1556 (Twin) - $13.00 each",
              description: "Silk Touch - One Ply (17426 / 18125 / Geo Horse)",
              products: [{
                name: "1556 - 1708 Grey/Twin",
                price: 14.99,
                image: imagePath('90.jpg')
              },
              {
                name: "1556 - 1702 Turquoise/Twin",
                price: 14.99,
                image: imagePath('91.png')
              },
              {
                name: "1556 - 1709 Tan/Brown/Twin ",
                price: 14.99,
                image: imagePath('93.jpg')
  
              },
              {
                name: "1556-1734 Navy Beige/Twin",
                price: 14.99,
                image: imagePath('94.png')
  
              },
              ]
            },
            {
              name: "Item #1557 (Queen) - $22.00 each",
              description: "Silk Touch - One Ply (17426 / 18125 / Geo Horse)",
              products: [{
                name: "1556 - 1708 Grey/Queen",
                price: 14.99,
                image: imagePath('90.jpg')
              },
              {
                name: "1557 - 1702 Turquoise/Queen",
                price: 14.99,
                image: imagePath('91.png')
              },
              {
                name: "1557-1709 Tan/Brown/Queen",
                price: 14.99,
                image: imagePath('93.jpg')
              },
              {
                name: "1556-1734 Navy Beige/Queen",
                price: 14.99,
                image: imagePath('94.png')
              },]
            },
            {
              name: "Item # 1558 - $26.00 each ",
              description: "One Ply 80 x 80 Queen Size Only",
              products: [{
                name: "1558- Geo Horse Tan/Queen",
                price: 14.99,
                image: imagePath('92.jpg')
              },
              ]
            },
            {
              name: "Item # 1250 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (Starburst)",
              products: [{
                name: "1250- Purple/Turquoise",
                price: 14.99,
                image: imagePath('95.jpg'),
                image2: imagePath('96.jpg')
              },
              {
                name: "1250- Black/Turquoise",
                price: 14.99,
                image: imagePath('97.jpg')
              },
              {
                name: "1250- Navy/Turquoise",
                price: 14.99,
                image: imagePath('98.jpg')
              },
              {
                name: "1250- Yellow/Turquoise",
                price: 14.99,
                image: imagePath('99.jpg')
              },
              {
                name: "1250-Glow/Turquoise",
                price: 14.99,
                image: imagePath('100.jpg')
              },
              {
                name: "1250- Red/Turquoise",
                price: 14.99,
                image: imagePath('101.jpg')
              },
              ]
            },
            {
              name: "Item #0240 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (16112)",
              products: [{
                name: "0240-1602 Turquoise/Black/Baby",
                price: 18.00,
                image: imagePath('102.jpg'),
                image2: imagePath('103.jpg')
              },
              {
                name: "0240-1605 Burgundy/Black/Baby",
                price: 18.00,
                image: imagePath('104.jpg'),
              },
              {
                name: "0240-1609 Camel/Black/Baby",
                price: 18.00,
                image: imagePath('105.jpg'),
              }, {
                name: "0240-1631 Teal/Black/Baby",
                price: 18.00,
                image: imagePath('106.jpg'),
              },
              {
                name: "0240-1604 Purple/Black/Baby",
                price: 18.00,
                image: imagePath('107.jpg'),
              },
              {
                name: "0240-1608 Grey/Black/Baby",
                price: 18.00,
                image: imagePath('108.jpg'),
              }, {
                name: "0240-1610 White/Black/Baby",
                price: 18.00,
                image: imagePath('109.jpg'),
              },
              {
                name: "0240-1632 Royal Blue/Black/Baby",
                price: 18.00,
                image: imagePath('110.jpg'),
              },
              ]
            },
            {
              name: "Item #0244 (Throw) - $20.99 each",
              description: "Silk Touch Reversible Baby Blanket (16112)",
              products: [{
                name: "0244-1602 Turquoise/Black/Throw",
                price: 20.99,
                image: imagePath('102.jpg'),
                image2: imagePath('103.jpg')
              }, {
                name: "0244-1602 Turquoise/Black/Throw",
                price: 20.99,
                image: imagePath('104.jpg')
              }, {
                name: "0244-1609 Camel/Black/Throw",
                price: 20.99,
                image: imagePath('105.jpg')
              }, {
                name: "0244-1631 Teal/Black/Throw ",
                price: 20.99,
                image: imagePath('106.jpg')
  
              }, {
                name: "0244-1604 Purple/Black/Throw",
                price: 20.99,
                image: imagePath('107.jpg')
  
              },
              {
                name: "0244-1608 Grey/Black/Throw",
                price: 20.99,
                image: imagePath('108.jpg')
  
              },
              {
                name: "0244-1610 White/Black/Throw",
                price: 20.99,
                image: imagePath('109.jpg')
              },
              {
                name: "0244-1632 Royal Blue/Black/Throw",
                price: 20.99,
                image: imagePath('110.jpg')
  
              },]
            },
  
            {
              name: "Item # 0245 (Throw) - $22.99 each",
              description: "Silk Touch Reversible Throw Blanket (16112)",
              products: [{
                name: "0245-1602 Turquoise/Black",
                price: 22.99,
                image: imagePath('111.jpg'),
                image2: imagePath('112.jpg')
              },
              {
                name: "0245-1604 Purple/Black",
                price: 22.99,
                image: imagePath('113.jpg')
              }, {
                name: "0245-1606 Hot Pink/Black",
                price: 22.99,
                image: imagePath('114.jpg')
              },
              {
                name: "0245-1610 White/Black",
                price: 22.99,
                image: imagePath('115.jpg')
              },
              {
                name: "0245-1605 Burgundy/Black",
                price: 22.99,
                image: imagePath('116.jpg')
              },
              {
                name: "0245-1609 Camel/Black",
                price: 22.99,
                image: imagePath('117.jpg')
              },
  
              ]
            },
            {
              name: "Item #1660 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (Starburst)",
              products: [{
                name: "1660-2102 Turquoise/Black",
                price: 18.00,
                image: imagePath('118.jpg'),
                image2: imagePath('124.jpg')
              }, {
                name: "1660-2110 White",
                price: 18.00,
                image: imagePath('119.jpg')
              },
              {
                name: "1660-2104 Purple",
                price: 18.00,
                image: imagePath('120.jpg')
              }, {
                name: "1660-2136 Mint",
                price: 18.00,
                image: imagePath('121.jpg')
              }, {
                name: "1660-2107 Burgundy",
                price: 18.00,
                image: imagePath('122.jpg')
              }, {
                name: "1660-2106 Pink",
                price: 18.00,
                image: imagePath('123.jpg')
              },
  
              ]
            },
            {
  
              name: "Item # 1760 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (Medicine Wheel)",
              products: [{
                name: "1760-1102 Turquoise",
                price: 18.00,
                image: imagePath('125.jpg'),
                image2: imagePath('133.jpg')
              }, {
                name: "1760-1108 Grey",
                price: 18.00,
                image: imagePath('126.jpg')
              },
              {
                name: "1760-1104 Purple",
                price: 18.00,
                image: imagePath('127.jpg')
              }, {
                name: "1760-1134 Navy Blue",
                price: 18.00,
                image: imagePath('128.jpg')
              },
              {
                name: "1760-1103 Mint",
                price: 18.00,
                image: imagePath('129.jpg')
              },
              {
                name: "1760-1103 Mint",
                price: 18.00,
                image: imagePath('130.jpg')
              },
              {
                name: "1760-1103 Mint",
                price: 18.00,
                image: imagePath('131.jpg')
              },
              {
                name: "1760-1103 Mint",
                price: 18.00,
                image: imagePath('132.jpg')
              },
              ]
            },
            {
  
              name: "Item #1760 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (Medicine Wheel)",
              products: [{
                name: "1830-2052 Turquoise",
                price: 18.00,
                image: imagePath('134.jpg'),
                image2: imagePath('139.jpg')
              }, {
                name: "1830-2050 White",
                price: 18.00,
                image: imagePath('135.jpg')
              },
              {
                name: "1830-2054 Purple",
                price: 18.00,
                image: imagePath('136.jpg')
              },
              {
                name: "1830-2056 Pink",
                price: 18.00,
                image: imagePath('137.jpg')
              },
  
              ]
            },
            {
              name: "Item #1840 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (7 Lakes)",
              products: [{
                name: "2310 Teal",
                price: 18.00,
                image: imagePath('140.jpg'),
                image2: imagePath('142.jpg')
              }, {
                name: "2302 Turquoise",
                price: 18.00,
                image: imagePath('141.jpg')
              },
              {
                name: "2304 Purple",
                price: 18.00,
                image: imagePath('143.jpg')
              },
              {
                name: "2331 Teal",
                price: 18.00,
                image: imagePath('144.jpg')
              },
              {
                name: "2308 Grey",
                price: 18.00,
                image: imagePath('145.jpg')
              },
              {
                name: "2308 Grey",
                price: 18.00,
                image: imagePath('146.jpg')
              },
              ]
            },
            {
              name: "Item #1830 (Baby) - $18.00 each",
              description: "Silk Touch Reversible Baby Blanket (Native Floral)",
              products: [{
                name: "1830-2052 Turquoise",
                price: 18.00,
                image: imagePath('140.jpg'),
                image2: imagePath('139.jpg')
              }, {
                name: "1830-2050 White",
                price: 18.00,
                image: imagePath('135.jpg')
              },
              ]
  
            },
            {
              name: "Item #0241 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (16112)",
              products: [{
                name: "0241-1602 Turquoise / Black/Twin",
                price: 35.00,
                image: imagePath('148.jpg'),
                image2: imagePath('149.jpg')
              },
              {
                name: "0241-1604 Purple/Twin",
                price: 35.00,
                image: imagePath('150.jpg')
  
              },
              {
                name: "0241-1610 White/Twin",
                price: 18.00,
                image: imagePath('151.jpg')
  
              },
              {
                name: "0241-1608 Grey/Twin",
                price: 18.00,
                image: imagePath('152.jpg')
  
              },
              {
                name: "0241-1605 Burgundy/Twin",
                price: 18.00,
                image: imagePath('153.jpg')
  
              },
              {
                name: "0241-1631 Teal/Twin",
                price: 18.00,
                image: imagePath('154.jpg')
  
              }, {
                name: "0241-1612 Oak/Twin",
                price: 18.00,
                image: imagePath('155.jpg')
  
              },
              {
                name: "0241-1609 Camel/Twin",
                price: 18.00,
                image: imagePath('156.jpg')
  
              },
              ]
  
            },
            {
              name: "#0242 (Queen) - $50.00 each",
              description: "Silk Touch Reversible Blanket (16112)",
              products: [{
                name: "0242-1602 Turquoise / Black/Queen",
                price: 50.00,
                image: imagePath('148.jpg'),
                image2: imagePath('149.jpg')
              },
              {
                name: "0242-1604 Purple/Queen",
                price: 50.00,
                image: imagePath('150.jpg')
  
              },
              {
                name: "0242-1610 White/Queen",
                price: 50.00,
                image: imagePath('151.jpg')
  
              },
              {
                name: "0242-1608 Grey/Queen",
                price: 50.00,
                image: imagePath('152.jpg')
  
              },
              {
                name: "0242-1605 Burgundy/Queen",
                price: 50.00,
                image: imagePath('153.jpg')
  
              },
              {
                name: "0242-1631 Teal/Queen",
                price: 50.00,
                image: imagePath('154.jpg')
  
              }, {
                name: "0242-1612 Oak/Queen",
                price: 50.00,
                image: imagePath('155.jpg')
  
              },
              {
                name: "0242-1609 Camel/Queen",
                price: 50.00,
                image: imagePath('156.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0243 (King) - $60.00 each",
              description: "Silk Touch Reversible Blanket (16112)",
              products: [{
                name: "0243-1602 Turquoise/Black/King",
                price: 60.00,
                image: imagePath('148.jpg'),
                image2: imagePath('149.jpg')
              },
              {
                name: "0243-1604 Purple/King",
                price: 60.00,
                image: imagePath('150.jpg')
  
              },
              {
                name: "0243-1610 White/King",
                price: 60.00,
                image: imagePath('151.jpg')
  
              },
              {
                name: "0243-1608 Grey/King",
                price: 60.00,
                image: imagePath('152.jpg')
  
              },
              {
                name: "0243-1605 Burgundy/King",
                price: 60.00,
                image: imagePath('153.jpg')
  
              },
              {
                name: "0243-1631 Teal/King",
                price: 60.00,
                image: imagePath('154.jpg')
  
              }, {
                name: "0243-1612 Oak/King",
                price: 60.00,
                image: imagePath('155.jpg')
  
              },
              {
                name: "0243-1609 Camel/King",
                price: 60.00,
                image: imagePath('156.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1251 (Twin) - $35.00",
              description: "Silk Touch Reversible Blanket (Starburst),",
              products: [{
                name: "1251 Black/Twin",
                price: 60.00,
                image: imagePath('157.jpg'),
  
              },
              {
                name: "1251 Navy/Twin",
                price: 60.00,
                image: imagePath('158.jpg')
  
              },
              {
                name: "1251 Red/Twin",
                price: 60.00,
                image: imagePath('159.jpg')
  
              },
              {
                name: "1251 Purple/Twin",
                price: 60.00,
                image: imagePath('160.jpg')
  
              },
              {
                name: "1251 Yellow/Twin",
                price: 60.00,
                image: imagePath('161.jpg')
  
              },
              {
                name: "1251 Glow/Twin",
                price: 60.00,
                image: imagePath('162.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1252 (Queen) - $50.00",
              description: "Silk Touch Reversible Blanket (Starburst),",
              products: [{
                name: "1252 Black/Queen",
                price: 60.00,
                image: imagePath('157.jpg'),
  
              },
              {
                name: "1252 Navy/Queen",
                price: 60.00,
                image: imagePath('158.jpg')
  
              },
              {
                name: "1252 Red/Queen",
                price: 60.00,
                image: imagePath('159.jpg')
  
              },
              {
                name: "1252 Purple/Queen",
                price: 60.00,
                image: imagePath('160.jpg')
  
              },
              {
                name: "1252 Yellow/Queen",
                price: 60.00,
                image: imagePath('161.jpg')
  
              },
              {
                name: "1252 Glow/Queen",
                price: 60.00,
                image: imagePath('162.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1253 (King) - $60.00",
              description: "Silk Touch Reversible Blanket (Starburst),",
              products: [{
                name: "1253 Black/King",
                price: 60.00,
                image: imagePath('157.jpg'),
  
              },
              {
                name: "1253 Navy/King",
                price: 60.00,
                image: imagePath('158.jpg')
  
              },
              {
                name: "1253 Red/King",
                price: 60.00,
                image: imagePath('159.jpg')
  
              },
              {
                name: "1253 Purple/King",
                price: 60.00,
                image: imagePath('160.jpg')
  
              },
              {
                name: "1253 Yellow/King",
                price: 60.00,
                image: imagePath('161.jpg')
  
              },
              {
                name: "1253 Glow/King",
                price: 60.00,
                image: imagePath('162.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1661 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (Starburst) Twin Size",
              products: [{
                name: "1661-1502 Turquoise/Black/Twin",
                price: 60.00,
                image: imagePath('163.jpg'),
                image2: imagePath('165.jpg'),
                image3: imagePath('166.jpg')
  
              },
              {
                name: "1661-1504 Purple/Twin",
                price: 60.00,
                image: imagePath('164.jpg')
  
              },
              {
                name: "1661-1505 Burgundy/Twin",
                price: 60.00,
                image: imagePath('167.jpg')
  
              },
              {
                name: "1661-1506 Hot Pink/Twin",
                price: 60.00,
                image: imagePath('168.jpg')
  
              },
              {
                name: "1661-1510 White/Twin",
                price: 60.00,
                image: imagePath('169.jpg')
  
              },
              {
                name: "1661-1536 Light Green (Sage)/Twin",
                price: 60.00,
                image: imagePath('170.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1661 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (Starburst) Twin Size",
              products: [{
                name: "1661-1502 Turquoise/Black/Twin",
                price: 35.00,
                image: imagePath('163.jpg'),
                image2: imagePath('165.jpg'),
                image3: imagePath('166.jpg')
  
              },
              {
                name: "1661-1504 Purple/Twin",
                price: 35.00,
                image: imagePath('164.jpg')
  
              },
              {
                name: "1661-1505 Burgundy/Twin",
                price: 35.00,
                image: imagePath('167.jpg')
  
              },
              {
                name: "1661-1506 Hot Pink/Twin",
                price: 35.00,
                image: imagePath('168.jpg')
  
              },
              {
                name: "1661-1510 White/Twin",
                price: 35.00,
                image: imagePath('169.jpg')
  
              },
              {
                name: "1661-1536 Light Green (Sage)/Twin",
                price: 35.00,
                image: imagePath('170.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1662 (Queen) - $50.00 each",
              description: "Silk Touch Reversible Blanket (Starburst) Twin Size",
              products: [{
                name: "1662-1502 Turquoise/Black/Queen",
                price: 50.00,
                image: imagePath('163.jpg'),
                image2: imagePath('165.jpg'),
                image3: imagePath('166.jpg')
  
              },
              {
                name: "1662-1504 Purple/Queen",
                price: 50.00,
                image: imagePath('164.jpg')
  
              },
              {
                name: "1662-1505 Burgundy/Queen",
                price: 50.00,
                image: imagePath('167.jpg')
  
              },
              {
                name: "1662-1506 Hot Pink/Queen",
                price: 50.00,
                image: imagePath('168.jpg')
  
              },
              {
                name: "1662-1510 White/Queen",
                price: 50.00,
                image: imagePath('169.jpg')
  
              },
              {
                name: "1662-1536 Light Green (Sage)/Queen",
                price: 50.00,
                image: imagePath('170.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1663 (King) - $60.00 each",
              description: "Silk Touch Reversible Blanket (Starburst) Twin Size",
              products: [{
                name: "1663-1502 Turquoise/Black/King",
                price: 60.00,
                image: imagePath('163.jpg'),
                image2: imagePath('165.jpg'),
                image3: imagePath('166.jpg')
  
              },
              {
                name: "1663-1504 Purple/King",
                price: 60.00,
                image: imagePath('164.jpg')
  
              },
              {
                name: "1663-1505 Burgundy/King",
                price: 60.00,
                image: imagePath('167.jpg')
  
              },
              {
                name: "1663-1506 Hot Pink/King",
                price: 60.00,
                image: imagePath('168.jpg')
  
              },
              {
                name: "1663-1510 White/King",
                price: 60.00,
                image: imagePath('169.jpg')
  
              },
              {
                name: "1663-1536 Light Green (Sage)/King",
                price: 60.00,
                image: imagePath('170.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1761 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (Medicine Wheel)",
              products: [{
                name: "1761 - 1103 Mint/Twin",
                price: 35.00,
                image: imagePath('171.jpg'),
                image2: imagePath('173.jpg')
              },
              {
                name: "1761-1104 Purple/Twin",
                price: 35.00,
                image: imagePath('172.jpg')
  
              },
              {
                name: "1761 - 1102 Turquoise/Twin",
                price: 35.00,
                image: imagePath('174.jpg')
  
              },
              {
                name: "1761-1105 Burgundy/Twin",
                price: 35.00,
                image: imagePath('175.jpg')
  
              },
              {
                name: "1761-1134 Navy Blue/Twin",
                price: 60.00,
                image: imagePath('176.jpg')
  
              },
              {
                name: "1761-1108 Grey/Twin",
                price: 60.00,
                image: imagePath('177.jpg')
  
              },
              {
                name: "1761-1110 White/Twin",
                price: 60.00,
                image: imagePath('178.jpg')
  
              },
              {
                name: "1761-1163 Light Blue/Twin",
                price: 60.00,
                image: imagePath('177.jpg')
  
              },
              {
                name: "1761-1108 Grey/Twin",
                price: 60.00,
                image: imagePath('177.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1762 (Queen) - $50.00 each",
              description: "Silk Touch Reversible Blanket (Medicine Wheel)",
              products: [{
                name: "1762 - 1103 Mint/Queen",
                price: 50.00,
                image: imagePath('171.jpg'),
                image2: imagePath('173.jpg')
              },
              {
                name: "1762-1104 Purple/Queen",
                price: 50.00,
                image: imagePath('172.jpg')
  
              },
              {
                name: "1762 - 1102 Turquoise/Queen",
                price: 50.00,
                image: imagePath('174.jpg')
  
              },
              {
                name: "1762-1105 Burgundy/Queen",
                price: 50.00,
                image: imagePath('175.jpg')
  
              },
              {
                name: "1762-1134 Navy Blue/Queen",
                price: 50.00,
                image: imagePath('176.jpg')
  
              },
              {
                name: "1762-1108 Grey/Queen",
                price: 50.00,
                image: imagePath('177.jpg')
  
              },
              {
                name: "1762-1110 White/Queen",
                price: 50.00,
                image: imagePath('178.jpg')
  
              },
              {
                name: "1762-1163 Light Blue/Queen",
                price: 50.00,
                image: imagePath('179.jpg')
  
              },
  
              ]
  
            },
            {
              name: "Item #1763 (King) - $60.00 each",
              description: "Silk Touch Reversible Blanket (Medicine Wheel)",
              products: [{
                name: "1763 - 1103 Mint/Kind",
                price: 50.00,
                image: imagePath('171.jpg'),
                image2: imagePath('173.jpg')
              },
              {
                name: "1763-1104 Purple/King",
                price: 50.00,
                image: imagePath('172.jpg')
  
              },
              {
                name: "1763 - 1102 Turquoise/King",
                price: 50.00,
                image: imagePath('174.jpg')
  
              },
              {
                name: "1763-1105 Burgundy/King",
                price: 35.00,
                image: imagePath('175.jpg')
  
              },
              {
                name: "1763-1134 Navy Blue/King",
                price: 60.00,
                image: imagePath('176.jpg')
  
              },
              {
                name: "1763-1108 Grey/King",
                price: 60.00,
                image: imagePath('177.jpg')
  
              },
              {
                name: "1763-1110 White/King",
                price: 60.00,
                image: imagePath('178.jpg')
  
              },
              {
                name: "1763- 1163 Light Blue/King",
                price: 60.00,
                image: imagePath('179.jpg')
  
              },
  
              ]
  
            },
            {
              name: "Item #1831 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (Native Floral)",
              products: [{
                name: "1831-2054 Purple/Twin",
                price: 50.00,
                image: imagePath('180.jpg'),
                image2: imagePath('181.jpg'),
                image3: imagePath('182.jpg')
              },
              {
                name: "1831-2050 White/Twin",
                price: 50.00,
                image: imagePath('183.jpg')
  
              },
              {
                name: "1831-2056 Pink/Twin",
                price: 50.00,
                image: imagePath('184.jpg')
  
              },
              {
                name: "1831-2052 Turquoise/Twin",
                price: 50.00,
                image: imagePath('185.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1832 (Queen) - $50.00 each",
              description: "Silk Touch Reversible Blanket (Native Floral)",
              products: [{
                name: "1832-2054 Purple/Queen",
                price: 50.00,
                image: imagePath('180.jpg'),
                image2: imagePath('181.jpg'),
                image3: imagePath('182.jpg')
              },
              {
                name: "1832-2050 White/Queen",
                price: 50.00,
                image: imagePath('183.jpg')
  
              },
              {
                name: "1832-2056 Pink/Queen",
                price: 50.00,
                image: imagePath('184.jpg')
  
              },
              {
                name: "1832-2052 Turquoise/Queen",
                price: 50.00,
                image: imagePath('185.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1833 (King) - $60.00 each",
              description: "Silk Touch Reversible Blanket (Native Floral)",
              products: [{
                name: "1833-2054 Purple/King",
                price: 60.00,
                image: imagePath('180.jpg'),
                image2: imagePath('181.jpg'),
                image3: imagePath('182.jpg')
              },
              {
                name: "1833-2050 White/King",
                price: 60.00,
                image: imagePath('183.jpg')
  
              },
              {
                name: "1833-2056 Pink/King",
                price: 60.00,
                image: imagePath('184.jpg')
  
              },
              {
                name: "1833-2052 Turquoise/King",
                price: 50.00,
                image: imagePath('185.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1841 (Twin) - $35.00 each",
              description: "Silk Touch Reversible Blanket (7 Lakes)",
              products: [{
                name: "1841-2305 Burgundy/Twin",
                price: 35.00,
                image: imagePath('186.jpg'),
                image2: imagePath('193.jpg'),
                iamge3: imagePath('188.jpg')
  
              },
              {
                name: "1841-2305 Purple/Twin",
                price: 35.00,
                image: imagePath('187.jpg')
  
              },
              {
                name: "1841-2302 Turquoise/Twin",
                price: 35.00,
                image: imagePath('189.jpg')
  
              },
              {
                name: "1841-2331 Teal/Twin",
                price: 35.00,
                image: imagePath('190.jpg')
  
              },
              {
                name: "1841-2308 Grey/Twin",
                price: 35.00,
                image: imagePath('191.jpg')
  
              },
              {
                name: "1841-2310 White/Twin",
                price: 35.00,
                image: imagePath('192.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1842 (Queen) - $50.00 each",
              description: "Silk Touch Reversible Blanket (7 Lakes)",
              products: [{
                name: "1842-2305 Burgundy/Queen",
                price: 50.00,
                image: imagePath('186.jpg'),
                image2: imagePath('193.jpg'),
                iamge3: imagePath('188.jpg')
  
              },
              {
                name: "1842-2305 Purple/Queen",
                price: 60.00,
                image: imagePath('187.jpg')
  
              },
              {
                name: "1842-2302 Turquoise/Queen",
                price: 60.00,
                image: imagePath('189.jpg')
  
              },
              {
                name: "1842-2331 Teal/Queen",
                price: 50.00,
                image: imagePath('190.jpg')
  
              },
              {
                name: "1842-2308 Grey/Queen",
                price: 50.00,
                image: imagePath('191.jpg')
  
              },
              {
                name: "1842-2310 White/Queen",
                price: 50.00,
                image: imagePath('192.jpg')
  
              },
              ]
  
            },
            {
              name: "#1843 (King) - $60.00 each",
              description: "Silk Touch Reversible Blanket (7 Lakes)",
              products: [{
                name: "1843-2305 Burgundy/King",
                price: 50.00,
                image: imagePath('186.jpg'),
                image2: imagePath('193.jpg'),
                iamge3: imagePath('188.jpg')
  
              },
              {
                name: "1843-2305 Purple/King",
                price: 60.00,
                image: imagePath('187.jpg')
  
              },
              {
                name: "1843-2302 Turquoise/King",
                price: 60.00,
                image: imagePath('189.jpg')
  
              },
              {
                name: "1843-2331 Teal/King",
                price: 50.00,
                image: imagePath('190.jpg')
  
              },
              {
                name: "1843-2308 Grey/King",
                price: 50.00,
                image: imagePath('191.jpg')
  
              },
              {
                name: "1843-2310 White/King",
                price: 50.00,
                image: imagePath('192.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0214 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws (16112)",
              products: [{
                name: "0214- 1612 OAK",
                price: 22.99,
                image: imagePath('194.jpg')
              },
              {
                name: "0214-1609 Camel",
                price: 22.99,
                image: imagePath('195.jpg')
  
              },
              {
                name: "0214-1610 White",
                price: 60.00,
                image: imagePath('196.jpg')
  
              },
              {
                name: "0214-1605 Burgundy",
                price: 50.00,
                image: imagePath('197.jpg')
  
              },
              {
                name: "0214-1602 Turquoise",
                price: 50.00,
                image: imagePath('198.jpg')
  
              },
              {
                name: "0214-1631 Teal",
                price: 50.00,
                image: imagePath('199.jpg')
  
              },
              {
                name: "0214-1601 Black",
                price: 50.00,
                image: imagePath('200.jpg')
  
              },
              {
                name: "0214-1604 Purple",
                price: 50.00,
                image: imagePath('201.jpg')
  
              },
              {
                name: "0214-1608 Grey",
                price: 50.00,
                image: imagePath('202.jpg')
  
              },
              {
                name: "0214-1632 Royal Blue",
                price: 50.00,
                image: imagePath('203.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0215 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws (17426)",
              products: [{
                name: "0215-1702 Turquoise",
                price: 22.99,
                image: imagePath('204.jpg')
              },
              {
                name: "0215-1708 Grey",
                price: 22.99,
                image: imagePath('205.jpg')
  
              },
              {
                name: "0215-1709 Tan",
                price: 22.99,
                image: imagePath('206.jpg')
  
              },
              {
                name: "0215-1634 Navy Beige",
                price: 22.99,
                image: imagePath('207.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws ",
              products: [{
                name: "1703-7101 PRT",
                price: 22.99,
                image: imagePath('208.jpg')
              },
              {
                name: "1703-7363 NL",
                price: 22.99,
                image: imagePath('209.jpg')
  
              },
              {
                name: "1703-7358 ITS",
                price: 22.99,
                image: imagePath('210.jpg')
  
              },
              {
                name: "1703-7370 WA",
                price: 22.99,
                image: imagePath('211.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws ",
              products: [{
                name: "1703-7616 LGD",
                price: 22.99,
                image: imagePath('212.jpg')
              },
              {
                name: "1703-7736 GUI",
                price: 22.99,
                image: imagePath('213.jpg')
  
              },
              {
                name: "1703-7738 WOW",
                price: 22.99,
                image: imagePath('214.jpg')
  
              },
              {
                name: "1703-7739 WS",
                price: 22.99,
                image: imagePath('215.jpg')
  
              },
              {
                name: "1703-7737 SK",
                price: 22.99,
                image: imagePath('216.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1703-2210 BDC",
                price: 22.99,
                image: imagePath('217.jpg')
              },
              {
                name: "1703-2212 WDC",
                price: 22.99,
                image: imagePath('218.jpg')
  
              },
              {
                name: "1703-2211 EDC",
                price: 22.99,
                image: imagePath('219.jpg')
  
              },
              {
                name: "1703-7422 DCW",
                price: 22.99,
                image: imagePath('220.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 Spirit (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1703 - 3293 Indian Wolf Spirit",
                price: 22.99,
                image: imagePath('221.jpg')
              },
              {
                name: "1703 - 3503 Spirit of the Buffalo",
                price: 22.99,
                image: imagePath('222.jpg')
  
              },
              {
                name: "1703 - 3501 Spirit of the Bear",
                price: 22.99,
                image: imagePath('223.jpg')
  
              },
              {
                name: "1703 - 3510 Spirit of the Eagle",
                price: 22.99,
                image: imagePath('224.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1733 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1733 - 7622 Buffalo",
                price: 22.99,
                image: imagePath('225.jpg')
              },
              {
                name: "1733 - 7624 Eagle Scene",
                price: 22.99,
                image: imagePath('226.jpg')
  
              },
              {
                name: "1733 - 7626 Wolf Shield",
                price: 22.99,
                image: imagePath('227.jpg')
  
              },
              {
                name: "1733 - 7623 Chief",
                price: 22.99,
                image: imagePath('228.jpg')
  
              },
              {
                name: "1733 - 7625 Medicine Wheel",
                price: 22.99,
                image: imagePath('229.jpg')
  
              },
              {
                name: "1733 -7621 Bear",
                price: 22.99,
                image: imagePath('230.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1703-7129 AS Lunar Wolf",
                price: 22.99,
                image: imagePath('231.jpg')
              },
              {
                name: "1703-7123 AS Soul Bond",
                price: 22.99,
                image: imagePath('232.jpg')
  
              },
              {
                name: "1703-7130 AS Night Forest Wolf",
                price: 22.99,
                image: imagePath('233.jpg')
  
              },
              {
                name: "1703-7135 AS Wolf Trio",
                price: 22.99,
                image: imagePath('234.jpg')
  
              },
              {
                name: "7651 Medicine Wheel 2",
                price: 22.99,
                image: imagePath('235.jpg')
  
              },
              {
                name: "7625 Medicine Wheel 1",
                price: 22.99,
                image: imagePath('236.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #2014 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "2014-1",
                price: 22.99,
                image: imagePath('237.jpg')
              },
              {
                name: "2014-3",
                price: 22.99,
                image: imagePath('238.jpg')
  
              },
              {
                name: "2014-2",
                price: 22.99,
                image: imagePath('239.jpg')
  
              },
              {
                name: "2014-4",
                price: 22.99,
                image: imagePath('240.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #2014 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1703-7351 AG",
                price: 22.99,
                image: imagePath('241.jpg')
              },
              {
                name: "1703-7215 OSS",
                price: 22.99,
                image: imagePath('242.jpg')
  
              },
              {
                name: "1703-7362 MB",
                price: 22.99,
                image: imagePath('243.jpg')
  
              },
  
              {
                name: "1703-7221 SSS",
                price: 22.99,
                image: imagePath('244.jpg')
  
              },
              {
                name: "1703-7357 HL",
                price: 22.99,
                image: imagePath('245.jpg')
  
              },
              {
                name: "1703-7361 LUR",
                price: 22.99,
                image: imagePath('246.jpg')
  
              },
              {
                name: "1703-7220 RSS",
                price: 22.99,
                image: imagePath('247.jpg')
  
              },
              {
                name: "1703-7356 KC",
                price: 22.99,
                image: imagePath('248.jpg')
  
              },
              {
                name: "1703-7360 LIL",
                price: 22.99,
                image: imagePath('249.jpg')
  
              },
              {
                name: "1703-7302 AD",
                price: 22.99,
                image: imagePath('250.jpg')
  
              },
              {
                name: "1703-7359 LPH",
                price: 22.99,
                image: imagePath('251.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1703 (Throw) - $22.99 each",
              description: "Sherpa Lined Silk Touch Throws",
              products: [{
                name: "1703-7364 ONW",
                price: 22.99,
                image: imagePath('252.jpg')
              },
              {
                name: "1703-7368 SMF",
                price: 22.99,
                image: imagePath('253.jpg')
  
              },
              {
                name: "1703-7421 UNI",
                price: 22.99,
                image: imagePath('254.jpg')
  
              },
  
              {
                name: "1703-7645 WC",
                price: 22.99,
                image: imagePath('255.jpg')
  
              },
              {
                name: "1703-7557 GEO",
                price: 22.99,
                image: imagePath('256.jpg')
  
              },
              {
                name: "1703-7366 PT",
                price: 22.99,
                image: imagePath('257.jpg')
  
              },
              {
                name: "1703-7420 UND",
                price: 22.99,
                image: imagePath('258.jpg')
  
              },
              {
                name: "1703-7644 SQ",
                price: 22.99,
                image: imagePath('259.jpg')
  
              },
              {
                name: "1703-7365 PPP",
                price: 22.99,
                image: imagePath('260.jpg')
  
              },
              {
                name: "1703-7411 AA",
                price: 22.99,
                image: imagePath('261.jpg')
  
              },
              {
                name: "1703-7617 TUR",
                price: 22.99,
                image: imagePath('262.jpg')
  
              },
              {
                name: "1703-7367 RH",
                price: 22.99,
                image: imagePath('263.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1715 (Round Throw) - $23.99 each",
              description: "Round Shaped Sherpa Lined Throw (Medicine Wheel)",
              products: [{
                name: "1715-1508 Grey",
                price: 23.99,
                image: imagePath('264.jpg')
              },
              {
                name: "1715-1502 Turquoise Blue",
                price: 23.99,
                image: imagePath('265.jpg')
  
              },
              {
                name: "1715-1504 Purple",
                price: 22.99,
                image: imagePath('266.jpg'),
                image2: imagePath('270.jpg'),
                image3: imagePath('271.jpg')
              },
  
              {
                name: "1715-1510 White",
                price: 22.99,
                image: imagePath('267.jpg')
  
              },
              {
                name: "1715-1501 Black",
                price: 22.99,
                image: imagePath('268.jpg')
  
              },
              {
                name: "1715-1505 Burgundy",
                price: 22.99,
                image: imagePath('269.jpg')
  
              },
  
              {
                name: "1703-7411 AA",
                price: 22.99,
                image: imagePath('261.jpg')
  
              },
              {
                name: "1703-7617 TUR",
                price: 22.99,
                image: imagePath('262.jpg')
  
              },
              {
                name: "1703-7367 RH",
                price: 22.99,
                image: imagePath('263.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #1208 - $13.99 per pair (set of 2)",
              description: "Pillow Shams (16112)",
              products: [{
                name: "1208-1601 Black",
                price: 13.99,
                image: imagePath('272.jpg')
              },
              {
                name: "1208-1606 Pink",
                price: 13.99,
                image: imagePath('273.jpg')
  
              },
              {
                name: "1208-1604 Purple",
                price: 13.99,
                image: imagePath('274.jpg')
  
              },
  
              {
                name: "1208-1609 Camel",
                price: 13.99,
                image: imagePath('275.jpg')
  
              },
              {
                name: "1208-1602 Turquoise",
                price: 13.99,
                image: imagePath('276.jpg')
  
              },
              {
                name: "1208-1608 Grey",
                price: 13.99,
                image: imagePath('277.jpg')
  
              },
              {
                name: "1715-1505 Burgundy",
                price: 13.99,
                image: imagePath('278.jpg')
  
              },
              {
                name: "1208-1610 White",
                price: 13.99,
                image: imagePath('279.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0218 (Twin) - $45.99 per set",
              description: "Sherpa Lined Blanket Sets (16112) Twin 2pc set",
              products: [{
                name: "1601 Black",
                price: 45.99,
                image: imagePath('280.jpg')
              },
              {
                name: "1608 Grey",
                price: 45.99,
                image: imagePath('281.jpg')
  
              },
              {
                name: "1602 Turquoise",
                price: 45.99,
                image: imagePath('282.jpg')
              },
  
              {
                name: "1605 Burgundy",
                price: 45.99,
                image: imagePath('283.jpg')
  
              },
              {
                name: "1631 Teal Green",
                price: 45.99,
                image: imagePath('284.jpg')
  
              },
              {
                name: "1604 Purple",
                price: 45.99,
                image: imagePath('285.jpg')
  
              },
              {
                name: "1607 Red",
                price: 45.99,
                image: imagePath('286.jpg')
  
              },
              {
                name: "1632 Royal Blue",
                price: 45.99,
                image: imagePath('287.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0205 (Full) - $55.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0205-1601 Black/Full",
                price: 55.00,
                image: imagePath('288.jpg')
              },
              {
                name: "0205-1602 Turquoise/Full",
                price: 55.00,
                image: imagePath('289.jpg')
  
              },
              {
                name: "0205-1605 Burgundy/Full",
                price: 55.00,
                image: imagePath('290.jpg')
              },
  
              {
                name: "0205-1604 Purple/Full",
                price: 55.00,
                image: imagePath('291.jpg')
  
              },
              {
                name: "0205-1608 Grey/Full",
                price: 55.00,
                image: imagePath('292.jpg')
  
              },
              {
                name: "0205-1610 White/Full",
                price: 55.00,
                image: imagePath('293.jpg')
  
              },
              {
                name: "0205-1607 Red/Full",
                price: 55.00,
                image: imagePath('294.jpg')
  
              },
              {
                name: "0205-1631 Teal/Full",
                price: 55.00,
                image: imagePath('295.jpg')
  
              },
              {
                name: "0205-1632 Royal Blue/Full",
                price: 55.00,
                image: imagePath('296.jpg')
  
              },
              {
                name: "0205-1609 Camel/Full",
                price: 55.00,
                image: imagePath('297.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0216 (Queen) - $65.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0216-1601 Black/Queen",
                price: 65.00,
                image: imagePath('288.jpg')
              },
              {
                name: "0216-1602 Turquoise/Queen",
                price: 65.00,
                image: imagePath('289.jpg')
  
              },
              {
                name: "0216-1605 Burgundy/Queen",
                price: 65.00,
                image: imagePath('290.jpg')
              },
  
              {
                name: "0216-1604 Purple/Queen",
                price: 65.00,
                image: imagePath('291.jpg')
  
              },
              {
                name: "0216-1608 Grey/Queen",
                price: 65.00,
                image: imagePath('292.jpg')
  
              },
              {
                name: "0216-1610 White/Queen",
                price: 65.00,
                image: imagePath('293.jpg')
  
              },
              {
                name: "0216-1607 Red/Queen",
                price: 65.00,
                image: imagePath('294.jpg')
  
              },
              {
                name: "0216-1631 Teal/Queen",
                price: 65.00,
                image: imagePath('295.jpg')
  
              },
              {
                name: "0216-1632 Royal Blue/Queen",
                price: 65.00,
                image: imagePath('296.jpg')
  
              },
              {
                name: "0216-1609 Camel/Queen",
                price: 65.00,
                image: imagePath('297.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0217 (King) - $75.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0217-1601 Black/King",
                price: 75.00,
                image: imagePath('288.jpg')
              },
              {
                name: "0217-1602 Turquoise/King",
                price: 75.00,
                image: imagePath('289.jpg')
  
              },
              {
                name: "0217-1605 Burgundy/King",
                price: 75.00,
                image: imagePath('290.jpg')
              },
  
              {
                name: "0217-1604 Purple/King",
                price: 75.00,
                image: imagePath('291.jpg')
  
              },
              {
                name: "0217-1608 Grey/King",
                price: 75.00,
                image: imagePath('292.jpg')
  
              },
              {
                name: "0217-1610 White/King",
                price: 75.00,
                image: imagePath('293.jpg')
  
              },
              {
                name: "0217-1607 Red/King",
                price: 75.00,
                image: imagePath('294.jpg')
  
              },
              {
                name: "0217-1631 Teal/King",
                price: 75.00,
                image: imagePath('295.jpg')
  
              },
              {
                name: "0217-1632 Royal Blue/King",
                price: 75.00,
                image: imagePath('296.jpg')
  
              },
              {
                name: "0217-1609 Camel/King",
                price: 75.00,
                image: imagePath('297.jpg')
  
              },
              ]
  
            },
            {
              name: "Item #0218 -TS Team Spirit (Twin) - $45.99 each",
              description: "Silk Touch with Sherpa Lining 2pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "1612 -TS Oakland (Black - Grey)",
                price: 75.00,
                image: imagePath('298.jpg')
              },
              {
                name: "1616 -TS Dallas (Navy - Grey)",
                price: 75.00,
                image: imagePath('299.jpg')
  
              },
              {
                name: "1619 -TS NE (Navy - Red)",
                price: 75.00,
                image: imagePath('300.jpg')
              },
  
              {
                name: "1624 -TS NO (Black- Gold)",
                price: 75.00,
                image: imagePath('301.jpg')
  
              },
              {
                name: "1621 -TS SJ (Teal - Orange)",
                price: 75.00,
                image: imagePath('302.jpg')
  
              },
              ]
            },
            {
              name: "Item #0205-TS Team Spirit (Full) - $55.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0205-1612 -TS Oakland (Black - Grey)/Full",
                price: 55.00,
                image: imagePath('298.jpg')
              },
              {
                name: "0205-1616 -TS Dallas (Navy - Grey)/Full",
                price: 55.00,
                image: imagePath('299.jpg')
  
              },
              {
                name: "0205-1619 -TS NE (Navy - Red)/Full",
                price: 55.00,
                image: imagePath('300.jpg')
              },
  
              {
                name: "0205-1624 -TS NO (Black- Gold)/Full",
                price: 55.00,
                image: imagePath('301.jpg')
  
              },
              {
                name: "0205-1621 -TS SJ (Teal - Orange)/Full",
                price: 55.00,
                image: imagePath('302.jpg')
  
              },
              ]
            },
            {
              name: "Item #0216-TS Team Spirit (Queen) - $65.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0216-1612 -TS Oakland (Black - Grey)/Queen",
                price: 65.00,
                image: imagePath('298.jpg')
              },
              {
                name: "0216-1616 -TS Dallas (Navy - Grey)/Queen",
                price: 65.00,
                image: imagePath('299.jpg')
  
              },
              {
                name: "0216-1619 -TS NE (Navy - Red)/Queen",
                price: 65.00,
                image: imagePath('300.jpg')
              },
  
              {
                name: "0216-1624 -TS NO (Black- Gold)/Queen",
                price: 65.00,
                image: imagePath('301.jpg')
  
              },
              {
                name: "0216-1621 -TS SJ (Teal - Orange)/Queen",
                price: 65.00,
                image: imagePath('302.jpg')
  
              },
              ]
            },
            {
              name: "Item #0217-TS Team Spirit (King) - $75.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0217-1612 -TS Oakland (Black - Grey)/King",
                price: 65.00,
                image: imagePath('298.jpg')
              },
              {
                name: "0217-1616 -TS Dallas (Navy - Grey)/King",
                price: 65.00,
                image: imagePath('299.jpg')
  
              },
              {
                name: "0217-1619 -TS NE (Navy - Red/King)",
                price: 65.00,
                image: imagePath('300.jpg')
              },
  
              {
                name: "0216-1624 -TS NO (Black- Gold)/King",
                price: 65.00,
                image: imagePath('301.jpg')
  
              },
              {
                name: "0217-1621 -TS SJ (Teal - Orange)/King",
                price: 65.00,
                image: imagePath('302.jpg')
  
              },
              ]
            },
            {
              name: "Item #0236 (Queen) - $65.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0236-1702 Turquoise/Queen",
                price: 65.00,
                image: imagePath('303.jpg')
              },
              {
                name: "0236-1708 Grey/Queen",
                price: 65.00,
                image: imagePath('304.jpg')
  
              },
              {
                name: "0236-1709 Tan/Queen",
                price: 65.00,
                image: imagePath('305.jpg')
              },
  
              {
                name: "0236-1734 Navy Beige/Queen",
                price: 65.00,
                image: imagePath('306.jpg')
  
              },
              ]
            },
            {
              name: "Item #0237 (King) - $75.00 per set",
              description: "Silk Touch with Sherpa Lining 3pc Blanket Set includes 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "0237-1702 Turquoise/King",
                price: 65.00,
                image: imagePath('303.jpg')
              },
              {
                name: "0237-1708 Grey/King",
                price: 65.00,
                image: imagePath('304.jpg')
  
              },
              {
                name: "0237-1709 Tan/King",
                price: 65.00,
                image: imagePath('305.jpg')
              },
  
              {
                name: "0237-1734 Navy Beige/King",
                price: 65.00,
                image: imagePath('306.jpg')
  
              },
              ]
            },
            {
              name: "Item# 0315Q (Queen) - $65.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0315Q-1708 Grey",
                price: 65.00,
                image: imagePath('307.jpg')
              },
              ]
            },
            {
              name: "Item# 0315k (king) - $75.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0315K-1708 Grey",
                price: 65.00,
                image: imagePath('307.jpg')
              },
              ]
            },
            {
              name: "Item# 0316Q (Queen) - $65.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0316Q-1709 Tan",
                price: 65.00,
                image: imagePath('308.jpg')
              },
              ]
            },
            {
              name: "Item# 0315k (king) - $75.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0316K-1709 Tan",
                price: 75.00,
                image: imagePath('308.jpg')
              },
              ]
            },
            {
              name: "Item# 0317Q (Queen) - $65.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0317Q-1734 Navy Beige",
                price: 65.00,
                image: imagePath('309.jpg')
              },
              ]
            },
            {
              name: "Item# 0317K (King) - $75.00 per set",
              description: "Sherpa Lined Blanket Sets (Southwest)",
              products: [{
                name: "0317K-1734 Navy Beige",
                price: 75.00,
                image: imagePath('309.jpg')
              },
              ]
            },
            {
              name: "Item #1834 (Queen) - $65.00 per set",
              description: "Queen 3pc Blanket Set includes: 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "1834-2305 Purple/Queen",
                price: 65.00,
                image: imagePath('310.jpg')
              },
              ]
            },
            {
              name: "Item #1835 (King) - $75.00 per set",
              description: "Queen 3pc Blanket Set includes: 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "1834-2305 Purple/King",
                price: 75.00,
                image: imagePath('310.jpg')
              },
              ]
            },
            {
              name: "Item #1836(Twin) - $45.99 per set",
              description: "Twin 2pc Blanket Set includes:1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "1834-2305 Purple/Twin",
                price: 45.99,
                image: imagePath('310.jpg')
              },
              ]
            },
            {
              name: "Item #2011 (Queen) - $65.00 per set",
              description: "Lodge Series Sherpa Set Queen/King 3pc Blanket Set includes: 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "2011-1/Queen",
                price: 65.00,
                image: imagePath('311.jpg')
              },
              {
                name: "2011-2/Queen",
                price: 65.00,
                image: imagePath('312.jpg')
              },
              {
                name: "2011-3/Queen",
                price: 65.00,
                image: imagePath('313.jpg')
              },
              {
                name: "2011-4/Queen",
                price: 65.00,
                image: imagePath('314.jpg')
              },
              ]
            },
            {
              name: "Item #2012 (King) - $75.00 per set",
              description: "Lodge Series Sherpa Set Queen/King 3pc Blanket Set includes: 1 Thick Blanket and 2 Pillow Shams",
              products: [{
                name: "2012-1/King",
                price: 75.00,
                image: imagePath('311.jpg')
              },
              {
                name: "2012-2/King",
                price: 75.00,
                image: imagePath('312.jpg')
              },
              {
                name: "2012-3/King",
                price: 75.00,
                image: imagePath('313.jpg')
              },
              {
                name: "2012-4/King",
                price: 75.00,
                image: imagePath('314.jpg')
              },
              ]
            },
            {
              name: "Item #1836(Twin) - $45.99 per set",
              description: "Lodge Series Sherpa Set Twin 2pc Blanket Set includes: 1 Thick Blanket and 1 Pillow Shams",
              products: [{
                name: "1836-1/Twin",
                price: 45.99,
                image: imagePath('311.jpg')
              },
              {
                name: "1836-2/Twin",
                price: 45.99,
                image: imagePath('312.jpg')
              },
              {
                name: "1836-3/Twin",
                price: 45.99,
                image: imagePath('313.jpg')
              },
              {
                name: "1836-4/Twin",
                price: 45.99,
                image: imagePath('314.jpg')
              },
              ]
            },
            {
              name: "Item #0266 (Queen) - $65.00 per set",
              description: "3pc Star Thick Reversible Blanket Sets - Soft on both sides, Not sherpa on the back",
              products: [{
                name: "0266-1505 Burgundy/Queen",
                price: 65.00,
                image: imagePath('315.jpg')
              },
              {
                name: "0266-1501 Black/Queen",
                price: 65.00,
                image: imagePath('316.jpg')
              },
              {
                name: "0266-1504 Purple/Queen",
                price: 65.00,
                image: imagePath('317.jpg')
              },
              {
                name: "0266-1502 Turquoise/Queen",
                price: 65.00,
                image: imagePath('318.jpg')
              },
              ]
            },
            {
              name: "Item #0267 (King) - $75.00 per set",
              description: "3pc Star Thick Reversible Blanket Sets - Soft on both sides, Not sherpa on the back",
              products: [{
                name: "0267-1505 Burgundy/King",
                price: 75.00,
                image: imagePath('315.jpg')
              },
              {
                name: "0267-1501 Black/King",
                price: 75.00,
                image: imagePath('316.jpg')
              },
              {
                name: "0267-1504 Purple/King",
                price: 75.00,
                image: imagePath('317.jpg')
              },
              {
                name: "0267-1502 Turquoise/King",
                price: 75.00,
                image: imagePath('318.jpg')
              },
              ]
            },
            {
              name: "Item #0258 (Queen) - $65.00 per set",
              description: "3pc Sherpa Lined Micro-Mink Blanket Sets (The Artist Collection)",
              products: [{
                name: "0258-Buffalo/Queen",
                price: 65.00,
                image: imagePath('319.jpg')
              },
              {
                name: "0258-Bear/Queen",
                price: 65.00,
                image: imagePath('320.jpg')
              },
              {
                name: "0258-Eagle/Queen",
                price: 65.00,
                image: imagePath('321.jpg')
              },
              {
                name: "0258 - Chief/Queen",
                price: 65.00,
                image: imagePath('322.jpg')
              },
              {
                name: "0258 - Wolf/Queen",
                price: 65.00,
                image: imagePath('323.jpg')
              },
              ]
            },
            {
              name: "Item #0259 (King) - $75.00 per set",
              description: "3pc Sherpa Lined Micro-Mink Blanket Sets (The Artist Collection)",
              products: [{
                name: "0259-Buffalo/King",
                price: 75.00,
                image: imagePath('319.jpg')
              },
              {
                name: "0259-Bear/King",
                price: 75.00,
                image: imagePath('320.jpg')
              },
              {
                name: "0259-Eagle/King",
                price: 75.00,
                image: imagePath('321.jpg')
              },
              {
                name: "0259 - Chief/King",
                price: 75.00,
                image: imagePath('322.jpg')
              },
              {
                name: "0259 - Wolf/King",
                price: 75.00,
                image: imagePath('323.jpg')
              },
              ]
            },
            {
              name: "Item #0258MW (Queen) - $65.00 per set",
              description: "3pc Sherpa Lined Micro-Mink Blanket Sets (Medicine Wheel)",
              products: [{
                name: "0258MW - 7651 Medicine Wheel 2/Queen",
                price: 75.00,
                image: imagePath('324.jpg')
              },
              {
                name: "0258MW -7625 Medicine Wheel 1/Queen",
                price: 75.00,
                image: imagePath('325.jpg')
              },
  
              ]
            },
            {
              name: "Item #0259MW (King) - $75.00 per set",
              description: "3pc Sherpa Lined Micro-Mink Blanket Sets (Medicine Wheel)",
              products: [{
                name: "0259MW - 7651 Medicine Wheel 2/King",
                price: 75.00,
                image: imagePath('324.jpg')
              },
              {
                name: "0259MW - 7625 Medicine Wheel 1/King",
                price: 75.00,
                image: imagePath('325.jpg')
              },
  
              ]
            },
            {
              name: "Item #2042 (Queen) - $65.00 per set",
              description: "3 pc Sherpa Lined Micro-Mink Blanket Set ( STAR QUILT )",
              products: [{
                name: "2042 - 2201 Black/Queen",
                price: 65.00,
                image: imagePath('326.jpg')
              },
  
              {
                name: "2042 - 2205 Burgundy/Queen",
                price: 65.00,
                image: imagePath('327.jpg')
              },
              {
                name: "2042 - 2210 White/Queen",
                price: 65.00,
                image: imagePath('328.jpg')
              },
              {
                name: "2042 - 2204 Purple/Queen",
                price: 65.00,
                image: imagePath('329.jpg')
              },
              {
                name: "2042 - 2202 Turquoise/Queen",
                price: 65.00,
                image: imagePath('330.jpg')
              },
  
              ]
            },
            {
              name: "Item #2043 (King) - $75.00 per set",
              description: "3 pc Sherpa Lined Micro-Mink Blanket Set ( STAR QUILT )",
              products: [{
                name: "2043 - 2201 Black/King",
                price: 75.00,
                image: imagePath('326.jpg')
              },
  
              {
                name: "2043 - 2205 Burgundy/King",
                price: 75.00,
                image: imagePath('327.jpg')
              },
              {
                name: "2043 - 2210 White/King",
                price: 75.00,
                image: imagePath('328.jpg')
              },
              {
                name: "2043 - 2204 Purple/King",
                price: 75.00,
                image: imagePath('329.jpg')
              },
              {
                name: "2043 - 2202 Turquoise/King",
                price: 75.00,
                image: imagePath('330.jpg')
              },
  
              ]
            },
            {
              name: "Item #1501 (Queen) - $39.95 each",
              description: "Raschel Blankets",
              products: [{
                name: "1501-G1452",
                price: 75.00,
                image: imagePath('331.jpg')
              },
  
              {
                name: "1501-G531",
                price: 75.00,
                image: imagePath('332.jpg')
              },
              {
                name: "1501-G146",
                price: 75.00,
                image: imagePath('333.jpg')
              },
              {
                name: "1501-860",
                price: 75.00,
                image: imagePath('334.jpg')
              },
              {
                name: "1501-G3031",
                price: 75.00,
                image: imagePath('335.jpg')
              },
              {
                name: "1501-G532",
                price: 75.00,
                image: imagePath('336.jpg')
              },
              {
                name: "1501-502",
                price: 75.00,
                image: imagePath('337.jpg')
              },
              {
                name: "1501-G141",
                price: 75.00,
                image: imagePath('338.jpg')
              },
  
              ]
            },
            {
              name: "Item #1501 (Queen) - $39.95 each",
              description: "Raschel Blankets",
              products: [{
                name: "487 Black",
                price: 75.00,
                image: imagePath('339.jpg')
              },
  
              {
                name: "1501- 487 Blue",
                price: 75.00,
                image: imagePath('340.jpg')
              },
              {
                name: "487 Brown",
                price: 75.00,
                image: imagePath('341.jpg')
              },
              {
                name: "487 Red",
                price: 75.00,
                image: imagePath('342.jpg')
              },
              {
                name: "487 Mint",
                price: 75.00,
                image: imagePath('343.jpg')
              },
              {
                name: "487 Burgundy",
                price: 75.00,
                image: imagePath('344.jpg')
              },
              {
                name: "1501-G532",//wrong pic,
                price: 75.00,
                image: imagePath('345.jpg')
              },
  
              ]
            },
            {
              name: "Item #1501 (Queen) - $39.95 each",
              description: "Raschel Blankets",
              products: [{
                name: "G3226 Turquoise",
                price: 39.95,
                image: imagePath('346.jpg')
              },
  
              {
                name: "G3226 Black",
                price: 39.95,
                image: imagePath('347.jpg')
              },
              {
                name: "G3226 Dark Purple",
                price: 39.95,
                image: imagePath('348.jpg')
              },
              {
                name: "1501- G3226 Camel",
                price: 39.95,
                image: imagePath('349.jpg')
              },
              ]
            },
  
            {
              name: "Item #1501 (Queen) - $39.95 each",
              description: "Raschel Blankets",
              products: [{
                name: "G3226 Turquoise",
                price: 39.95,
                image: imagePath('350.jpg'),
                image2: imagePath('')//again prob
              },
  
              {
                name: "1501-5030 Grey",
                price: 39.95,
                image: imagePath('351.jpg')
              },
              {
                name: "1501-5030 Purple",
                price: 39.95,
                image: imagePath('352.jpg')
              },
              {
                name: "1501-5030 Turquoise",
                price: 39.95,
                image: imagePath('353.jpg')
              },
              ]
            },
  
            {
              name: "Item #1702 (Queen) - $39.95 eachh",
              description: "Medium Weight Signature Blankets",
              products: [{
                name: "1702-7601 End of the Trail",
                price: 39.95,
                image: imagePath('354.jpg')
              },
  
              {
                name: "1702-7335 Legend of the White Buffalo",
                price: 39.95,
                image: imagePath('355.jpg')
              },
              {
                name: "1702-7423 Wolf Pack",
                price: 39.95,
                image: imagePath('356.jpg')
              },
              {
                name: "1702-7424 Winter Spirit",
                price: 39.95,
                image: imagePath('357.jpg')
              },
              {
                name: "1702- 7533 Medicine Wheel",
                price: 39.95,
                image: imagePath('358.jpg')
              },
              {
                name: "1702-7545 Thunderbird",
                price: 39.95,
                image: imagePath('359.jpg')
              },
              {
                name: "1702 Eagles Scream",
                price: 39.95,
                image: imagePath('360.jpg')
              },
              {
                name: "1702-7201 Chief Skull",
                price: 39.95,
                image: imagePath('361.jpg')
              },
              {
                name: "1702 Wolf Treo",
                price: 39.95,
                image: imagePath('362.jpg')
              },
              {
                name: "1702- 7422 Wolf Dreamcatcher",
                price: 39.95,
                image: imagePath('363.jpg')
              },
              ]
            },
            {
              name: "Item #1702 (Queen) - $39.95 each",
              description: "Medium Weight Signature Blankets",
              products: [{
                name: "1702-7601 End of the Trail",
                price: 39.95,
                image: imagePath('364.jpg')
              },
  
              {
                name: "1702-7335 Legend of the White Buffalo",
                price: 39.95,
                image: imagePath('365.jpg')
              },
              {
                name: "1702-7423 Wolf Pack",
                price: 39.95,
                image: imagePath('366.jpg')
              },
              {
                name: "1702-7424 Winter Spirit",
                price: 39.95,
                image: imagePath('367.jpg')
              },
              {
                name: "1702- 7533 Medicine Wheel",
                price: 39.95,
                image: imagePath('368.jpg')
              },
              {
                name: "1702-7545 Thunderbird",
                price: 39.95,
                image: imagePath('359.jpg')
              },
              {
                name: "1702 Eagles Scream",
                price: 39.95,
                image: imagePath('360.jpg')
              },
              {
                name: "1702-7201 Chief Skull",
                price: 39.95,
                image: imagePath('361.jpg')
              },
              {
                name: "1702 Wolf Treo",
                price: 39.95,
                image: imagePath('362.jpg')
              },
              {
                name: "1702- 7422 Wolf Dreamcatcher",
                price: 39.95,
                image: imagePath('363.jpg')
              },
              ]
            },
            {
              name: "Item #1702 (Queen) - $39.95 each",
              description: "Medium Weight Signature Blankets",
              products: [{
                name: "1702-7614 The Observer",
                price: 39.95,
                image: imagePath('364.jpg')
              },
  
              {
                name: "1702 On the Move",
                price: 39.95,
                image: imagePath('365.jpg')
              },
              {
                name: "1702-7419 Ties That Bind",
                price: 39.95,
                image: imagePath('366.jpg')
              },
              {
                name: "1702-7421 Unity",
                price: 39.95,
                image: imagePath('367.jpg')
              },
              {
                name: "1702-7425 Wolves",
                price: 39.95,
                image: imagePath('368.jpg')
              },
              {
                name: "1702-7615 Totem",
                price: 39.95,
                image: imagePath('369.jpg')
              },
              {
                name: "1702-7611 Ancestral Spirit",
                price: 39.95,
                image: imagePath('370.jpg')
              },
              {
                name: "1702 Wolf Camo",
                price: 39.95,
                image: imagePath('371.jpg')
              },
              {
                name: "1702-7612 Call of the Maiden",
                price: 39.95,
                image: imagePath('372.jpg')
              },
              {
                name: "1702 Bear Camo",
                price: 39.95,
                image: imagePath('373.jpg')
              },
              ]
            },
            {
              name: "Item #1702 (Queen) - $39.95 each",
              description: "Medium Weight Signature Blankets",
              products: [{
                name: "1702 MHS In Harmony",
                price: 39.95,
                image: imagePath('374.jpg')
              },
  
              {
                name: "1702-7311 Land of the Eagle",
                price: 39.95,
                image: imagePath('375.jpg')
              },
              {
                name: "1702-7401 Mystic Wolf",
                price: 39.95,
                image: imagePath('376.jpg')
              },
              {
                name: "1702-7432 Together Wolves",
                price: 39.95,
                image: imagePath('377.jpg')
              },
              {
                name: "1702-7431 Bear Pause",
                price: 39.95,
                image: imagePath('378.jpg')
              },
              {
                name: "1701-7301 Adirondack Wolf",
                price: 39.95,
                image: imagePath('379.jpg')
              },
              {
                name: "1702 MHS Mystic Wolf",
                price: 39.95,
                image: imagePath('380.jpg')
              },
              {
                name: "1702-7737 Snow Kisses",
                price: 39.95,
                image: imagePath('381.jpg')
              },
              {
                name: "1702-7417 MHS Nap Time",
                price: 39.95,
                image: imagePath('382.jpg')
              },
              {
                name: "1702-7739 Wolf Song",
                price: 39.95,
                image: imagePath('383.jpg')
              },
              ]
            },
            {
              name: "Item #1702 (Queen) - $39.95 each",
              description: "Medium Weight Signature Blankets",
              products: [{
                name: "1702-7321 Alaskan Collage",
                price: 39.95,
                image: imagePath('384.jpg')
              },
  
              {
                name: "1702-7311 Land of the Eagle",
                price: 39.95,
                image: imagePath('385.jpg')
              },
              {
                name: "1702-7821 Winterland - Wolves",
                price: 39.95,
                image: imagePath('386.jpg')
              },
              {
                name: "1702-7736 Guidance",
                price: 39.95,
                image: imagePath('387.jpg')
              },
              {
                name: "1702-7824 Rocky Road - Black Bear",
                price: 39.95,
                image: imagePath('388.jpg')
              },
              {
                name: "1702-7123 AS Soul Bond",
                price: 39.95,
                image: imagePath('389.jpg')
              },
              {
                name: "1702-7330 Dynamic Trio",
                price: 39.95,
                image: imagePath('390.jpg')
              },
              {
                name: "1702-7129 Lunar Wolf",
                price: 39.95,
                image: imagePath('391.jpg')
              },
              {
                name: "1702 - 7818 Call of the Wild",
                price: 39.95,
                image: imagePath('392.jpg')
              },
              {
                name: "1702-7819 Majestic Flight",
                price: 39.95,
                image: imagePath('393.jpg')
              },
              ]
            },
            {
              name: "Item #1704 (Queen) - $39.95 each",
              description: "Signature Cloud Soft Blankets",
              products: [{
                name: "1704-7641 Beauty Within",
                price: 39.95,
                image: imagePath('394.jpg')
              },
  
              {
                name: "1704-7411 Cheyenne Village",
                price: 39.95,
                image: imagePath('395.jpg')
              },
              {
                name: "1704-7412 Indian Portrait",
                price: 39.95,
                image: imagePath('396.jpg')
              },
              {
                name: "1704-7592 Native Wolf",
                price: 39.95,
                image: imagePath('397.jpg')
              },
              {
                name: "1704-7651 Medicine Wheel Serape",
                price: 39.95,
                image: imagePath('398.jpg')
              },
              {
                name: "1704-7627 Buffalo Skull",
                price: 39.95,
                image: imagePath('399.jpg')
              },
              {
                name: "1704-7591 Native Chief",
                price: 39.95,
                image: imagePath('400.jpg')
              },
  
              ]
            },
            {
              name: "Item #1704 (Queen) - $39.95 each",
              description: "Signature Cloud Soft Blankets",
              products: [{
                name: "1704-7621 Bear Tribal",
                price: 39.95,
                image: imagePath('401.jpg')
              },
  
              {
                name: "1704-7624 Eagle Scene",
                price: 39.95,
                image: imagePath('402.jpg')
              },
              {
                name: "1704-7622 Buffalo",
                price: 39.95,
                image: imagePath('403.jpg')
              },
              {
                name: "1704-7625 Medicine Wheel",
                price: 39.95,
                image: imagePath('404.jpg')
              },
              {
                name: "1704-7623 Chief",
                price: 39.95,
                image: imagePath('405.jpg')
              },
              {
                name: "1704-7626 Wolf Shield",
                price: 39.95,
                image: imagePath('406.jpg')
              },
  
  
              ]
            },
            {
              name: "Item #1704 (Queen) - $39.95 each",
              description: "Medium Weight Signature Blankets - Design SW1830",
              products: [{
                name: "1704-7621 Bear Tribal",
                price: 39.95,
                image: imagePath('407.jpg')
              },
  
              {
                name: "1704-7624 Eagle Scene",
                price: 39.95,
                image: imagePath('408.jpg')
              },
              {
                name: "1704-7622 Buffalo",
                price: 39.95,
                image: imagePath('409.jpg')
              },
  
  
  
              ]
            },
            {
              name: "Item #1714 (King) - $75.00 each",
              description: "Cloud Soft Reversable (2ply) Blankets",
              products: [{
                name: "1714-7621 Bear Tribal",
                price: 75.00,
                image: imagePath('410.jpg')
              },
  
              {
                name: "1714-7623 Chief",
                price: 75.00,
                image: imagePath('411.jpg')
              },
              {
                name: "1714-7624 Eagle Scene",
                price: 75.00,
                image: imagePath('412.jpg')
              },
              {
                name: "1714-7625 Medicine Wheel",
                price: 75.00,
                image: imagePath('413.jpg')
              },
              {
                name: "1714-7626 Wolf Shield",
                price: 75.00,
                image: imagePath('414.jpg')
              }
              ]
            },
            {
              name: "Item #0443 (Twin) - $40.99 per set",
              description: "Comforter Sets (16112) 7 Assorted colors",
              products: [{
                name: "0443-1601 Black/Twin",
                price: 40.99,
                image: imagePath('415.jpg')
              },
  
              {
                name: "0443-1602 Turquoise/Twin",
                price: 40.99,
                image: imagePath('416.jpg')
              },
              {
                name: "0443-1605 Burgundy/Twin",
                price: 40.99,
                image: imagePath('417.jpg')
              },
              {
                name: "0443-1604 Purple/Twin",
                price: 40.99,
                image: imagePath('418.jpg')
              },
              {
                name: "0443-1609 Tan/Twin",
                price: 40.99,
                image: imagePath('419.jpg')
              },
              {
                name: "0443-1610 White/Twin",
                price: 40.99,
                image: imagePath('420.jpg')
              },
              {
                name: "0443-1608 Grey/Twin",
                price: 40.99,
                image: imagePath('421.jpg')
              },
              ]
            },
            {
              name: "Item #0444 (Full) - $42.99 per set",
              description: "Comforter Sets (16112) 7 Assorted colors",
              products: [{
                name: "0444-1601 Black/Full",
                price: 42.99,
                image: imagePath('415.jpg')
              },
  
              {
                name: "0444-1602 Turquoise/Full",
                price: 42.99,
                image: imagePath('416.jpg')
              },
              {
                name: "0444-1605 Burgundy/Full",
                price: 42.99,
                image: imagePath('417.jpg')
              },
              {
                name: "0444-1604 Purple/Full",
                price: 42.99,
                image: imagePath('418.jpg')
              },
              {
                name: "0444-1609 Tan/Full",
                price: 42.99,
                image: imagePath('419.jpg')
              },
              {
                name: "0444-1610 White/Full",
                price: 42.99,
                image: imagePath('420.jpg')
              },
              {
                name: "0444-1608 Grey/Full",
                price: 42.99,
                image: imagePath('421.jpg')
              },
              ]
            },
            {
              name: "Item #0445 (Queen) - $45.00 per set",
              description: "Comforter Sets (16112) 7 Assorted colors",
              products: [{
                name: "0445-1601 Black/Queen",
                price: 45.00,
                image: imagePath('415.jpg')
              },
  
              {
                name: "0445-1602 Turquoise/Queen",
                price: 45.00,
                image: imagePath('416.jpg')
              },
              {
                name: "0445-1605 Burgundy/Queen",
                price: 45.00,
                image: imagePath('417.jpg')
              },
              {
                name: "0445-1604 Purple/Queen",
                price: 45.00,
                image: imagePath('418.jpg')
              },
              {
                name: "0445-1609 Tan/Queen",
                price: 45.00,
                image: imagePath('419.jpg')
              },
              {
                name: "0445-1610 White/Queen",
                price: 45.00,
                image: imagePath('420.jpg')
              },
              {
                name: "0445-1608 Grey/Queen",
                price: 45.00,
                image: imagePath('421.jpg')
              },
              ]
            },
            {
              name: "Item #0446 (King) - $50.00 per set",
              description: "Comforter Sets (16112) 7 Assorted colors",
              products: [{
                name: "0446-1601 Black/King",
                price: 42.99,
                image: imagePath('415.jpg')
              },
  
              {
                name: "0446-1602 Turquoise/King",
                price: 42.99,
                image: imagePath('416.jpg')
              },
              {
                name: "0446-1605 Burgundy/King",
                price: 42.99,
                image: imagePath('417.jpg')
              },
              {
                name: "0446-1604 PurpleKing",
                price: 42.99,
                image: imagePath('418.jpg')
              },
              {
                name: "0445-1609 Tan/King",
                price: 42.99,
                image: imagePath('419.jpg')
              },
              {
                name: "0446-1610 White/King",
                price: 42.99,
                image: imagePath('420.jpg')
              },
              {
                name: "0446-1608 Grey/King",
                price: 42.99,
                image: imagePath('421.jpg')
              },
              ]
            },
            {
              name: "Item #0363 (Twin) - $21.99 per set",
              description: "Sheet Sets (16112) 7 Assorted colors",
              products: [{
                name: "0363 - 1601 Black/Twin",
                price: 21.99,
                image: imagePath('422.jpg')
              },
  
              {
                name: "0363-1610 White/Twin",
                price: 21.99,
                image: imagePath('423.jpg')
              },
              {
                name: "0363-1602 Turquoise/Twin",
                price: 21.99,
                image: imagePath('424.jpg')
              },
              {
                name: "0363-1605 Burgundy/Twin",
                price: 21.99,
                image: imagePath('425.jpg')
              },
              {
                name: "0363-1608 Grey/Twin",
                price: 21.99,
                image: imagePath('426.jpg')
              },
              {
                name: "0363-1604 Purple/Twin",
                price: 21.99,
                image: imagePath('427.jpg')
              },
              {
                name: "0363-1609 Tan/Twin",
                price: 21.99,
                image: imagePath('428.jpg')
              },
              ]
            },
            {
              name: "#0364 (Full) - $23.99 per set",
              description: "Sheet Sets (16112) 7 Assorted colors",
              products: [{
                name: "0364 - 1601 Black/Full",
                price: 23.99,
                image: imagePath('422.jpg')
              },
  
              {
                name: "0364-1610 White/Full",
                price: 23.99,
                image: imagePath('423.jpg')
              },
              {
                name: "0364-1602 Turquoise/Full",
                price: 23.99,
                image: imagePath('424.jpg')
              },
              {
                name: "0364-1605 Burgundy/Full",
                price: 23.99,
                image: imagePath('425.jpg')
              },
              {
                name: "0364-1608 Grey/Full",
                price: 23.99,
                image: imagePath('426.jpg')
              },
              {
                name: "0364-1604 Purple/Full",
                price: 23.99,
                image: imagePath('427.jpg')
              },
              {
                name: "0364-1609 Tan/Full",
                price: 23.99,
                image: imagePath('428.jpg')
              },
              ]
            },
            {
              name: "Item #0365 (Queen) - $25.99 per set",
              description: "Sheet Sets (16112) 7 Assorted colors",
              products: [{
                name: "0365 - 1601 Black/Queen",
                price: 23.99,
                image: imagePath('422.jpg')
              },
  
              {
                name: "0365-1610 White/Queen",
                price: 23.99,
                image: imagePath('423.jpg')
              },
              {
                name: "0365-1602 Turquoise/Queen",
                price: 23.99,
                image: imagePath('424.jpg')
              },
              {
                name: "0365-1605 Burgundy/Queen",
                price: 23.99,
                image: imagePath('425.jpg')
              },
              {
                name: "0365-1608 Grey/Queen",
                price: 23.99,
                image: imagePath('426.jpg')
              },
              {
                name: "0365-1604 Purple/Queen",
                price: 23.99,
                image: imagePath('427.jpg')
              },
              {
                name: "0365-1609 Tan/Queen",
                price: 23.99,
                image: imagePath('428.jpg')
              },
              ]
            },
            {
              name: "#0366 (King) - $27.99 per set",
              description: "Sheet Sets (16112) 7 Assorted colors",
              products: [{
                name: "0366 - 1601 Black/King",
                price: 27.99,
                image: imagePath('422.jpg')
              },
  
              {
                name: "0366-1610 White/King",
                price: 27.99,
                image: imagePath('423.jpg')
              },
              {
                name: "0366-1602 Turquoise/King",
                price: 27.99,
                image: imagePath('424.jpg')
              },
              {
                name: "0366-1605 Burgundy/King",
                price: 27.99,
                image: imagePath('425.jpg')
              },
              {
                name: "0366-1608 Grey/King",
                price: 27.99,
                image: imagePath('426.jpg')
              },
              {
                name: "0366-1608 Grey/King",
                price: 27.99,
                image: imagePath('427.jpg')
              },
              {
                name: "0366-1609 Tan/King",
                price: 27.99,
                image: imagePath('428.jpg')
              },
              ]
            },
            {
              name: "Item #0383 (Twin) - $21.99 per set",
              description: "Sheet Sets (17265) 4 Assorted colors",
              products: [{
                name: "0383-1709 Tan/Twin",
                price: 21.99,
                image: imagePath('429.jpg')
              },
  
              {
                name: "0383-1702 Turquoise/Twin",
                price: 21.99,
                image: imagePath('430.jpg')
              },
              {
                name: "0383-1734 Navy Beige/Twin",
                price: 21.99,
                image: imagePath('431.jpg')
              },
              {
                name: "0383-1708 Grey/Twin",
                price: 21.99,
                image: imagePath('432.jpg')
              },
              ]
            },
            {
              name: "Item #0384 (Full) - $23.99 per set",
              description: "Sheet Sets (17265) 4 Assorted colors",
              products: [{
                name: "0384-1709 Tan/Full",
                price: 21.99,
                image: imagePath('429.jpg')
              },
  
              {
                name: "0384-1702 Turquoise/Full",
                price: 21.99,
                image: imagePath('430.jpg')
              },
              {
                name: "0384-1734 Navy Beige/Full",
                price: 21.99,
                image: imagePath('431.jpg')
              },
              {
                name: "0384-1708 Grey/Full",
                price: 21.99,
                image: imagePath('432.jpg')
              },
              ]
            },
            {
              name: "Item #0385 (Queen) - $25.99 per set",
              description: "Sheet Sets (17265) 4 Assorted colors",
              products: [{
                name: "0385-1709 Tan/Queen",
                price: 21.99,
                image: imagePath('429.jpg')
              },
  
              {
                name: "0385-1702 Turquoise/Queen",
                price: 21.99,
                image: imagePath('430.jpg')
              },
              {
                name: "0385-1734 Navy Beige/Queen",
                price: 21.99,
                image: imagePath('431.jpg')
              },
              {
                name: "0385-1708 Grey/Queen",
                price: 21.99,
                image: imagePath('432.jpg')
              },
              ]
            },
            {
              name: "Item #0386 (King) - $27.99 per set",
              description: "Sheet Sets (17265) 4 Assorted colors",
              products: [{
                name: "0386-1709 Tan/King",
                price: 21.99,
                image: imagePath('429.jpg')
              },
  
              {
                name: "0386-1702 Turquoise/King",
                price: 21.99,
                image: imagePath('430.jpg')
              },
              {
                name: "0386-1734 Navy Beige/King",
                price: 21.99,
                image: imagePath('431.jpg')
              },
              {
                name: "0386-1708 Grey/King",
                price: 21.99,
                image: imagePath('432.jpg')
              },
              ]
            },
            {
              name: "Item #1393 (Twin) - $21.99 per set",
              description: "Sheet Sets (Starburst) 5 Assorted Colors",
              products: [{
                name: "1393-2102 Turquoise/Twin",
                price: 21.99,
                image: imagePath('433.jpg')
              },
  
              {
                name: "1393-2105 Red/Twin",
                price: 21.99,
                image: imagePath('434.jpg')
              },
              {
                name: "1393-2104 Purple/Twin",
                price: 21.99,
                image: imagePath('435.jpg')
              },
              {
                name: "1393-2110 White/Twin",
                price: 21.99,
                image: imagePath('436.jpg')
              },
              {
                name: "1393-2101 Black/Twin",
                price: 21.99,
                image: imagePath('437.jpg')
              },
              ]
            },
            {
              name: "Item #1394 (Full) - $23.99 per set",
              description: "Sheet Sets (Starburst) 5 Assorted Colors",
              products: [{
                name: "1394-2102 Turquoise/Full",
                price: 21.99,
                image: imagePath('433.jpg')
              },
  
              {
                name: "1394-2105 Red/Full",
                price: 21.99,
                image: imagePath('434.jpg')
              },
              {
                name: "1394-2104 Purple/Full",
                price: 21.99,
                image: imagePath('435.jpg')
              },
              {
                name: "1394-2110 White/Full",
                price: 21.99,
                image: imagePath('436.jpg')
              },
              {
                name: "1394-2101 Black/Full",
                price: 21.99,
                image: imagePath('437.jpg')
              },
              ]
            },
            {
              name: "Item #1395 (Queen) - $25.99 per set",
              description: "Sheet Sets (Starburst) 5 Assorted Colors",
              products: [{
                name: "1395-2102 Turquoise/Queen",
                price: 21.99,
                image: imagePath('433.jpg')
              },
  
              {
                name: "1395-2105 Red/Queen",
                price: 21.99,
                image: imagePath('434.jpg')
              },
              {
                name: "1395-2104 Purple/Queen",
                price: 21.99,
                image: imagePath('435.jpg')
              },
              {
                name: "1395-2110 White/Queen",
                price: 21.99,
                image: imagePath('436.jpg')
              },
              {
                name: "1395-2101 Black/Queen",
                price: 21.99,
                image: imagePath('437.jpg')
              },
              ]
            },
            {
              name: "Item #1396 (King) - $27.99 per set",
              description: "Sheet Sets (Starburst) 5 Assorted Colors",
              products: [{
                name: "1396-2102 Turquoise/King",
                price: 21.99,
                image: imagePath('433.jpg')
              },
  
              {
                name: "1396-2105 Red/King",
                price: 21.99,
                image: imagePath('434.jpg')
              },
              {
                name: "1396-2104 Purple/King",
                price: 21.99,
                image: imagePath('435.jpg')
              },
              {
                name: "1396-2110 White/King",
                price: 21.99,
                image: imagePath('436.jpg')
              },
              {
                name: "1396-2101 Black/King",
                price: 21.99,
                image: imagePath('437.jpg')
              },
              ]
            }]
        },
        {
          name: "Living Room",
          items: [
            {
              name: "Item #0310 - $25.00 per set",
              description: "5pc Curtain Sets (16112)",
              products: [{
                name: "0310-1501 Black",
                price: 21.99,
                image: imagePath('438.jpg')
              },
  
              {
                name: "0310-1602 Turquoise",
                price: 21.99,
                image: imagePath('439.jpg')
              },
              {
                name: "0310-1610 White",
                price: 21.99,
                image: imagePath('440.jpg')
              },
              {
                name: "0310-1608 Grey",
                price: 21.99,
                image: imagePath('441.jpg')
              },
              ]
            },
            {
              name: "Item #0310 - $25.00 per set",
              description: "5pc Curtain Sets (16112)",
              products: [{
                name: "0310-1604 Purple",
                price: 21.99,
                image: imagePath('442.jpg')
              },
  
              {
                name: "0310-1605 Burgundy",
                price: 21.99,
                image: imagePath('443.jpg')
              },
              {
                name: "03101609 Tan",
                price: 21.99,
                image: imagePath('444.jpg')
              },
              ]
            },
            {
              name: "Item #0314 - $25.00 per set",
              description: "5pc Curtain Sets (Starburst)",
              products: [{
                name: "0314-2104 Purple",
                price: 21.99,
                image: imagePath('445.jpg')
              },
  
              {
                name: "0314-2105 Red",
                price: 21.99,
                image: imagePath('446.jpg')
              },
              {
                name: "0314-2102 Turquoise",
                price: 21.99,
                image: imagePath('447.jpg')
              },
              {
                name: "0314-2101 Black",
                price: 21.99,
                image: imagePath('448.jpg')
              },
              {
                name: "0314-2110 White",
                price: 21.99,
                image: imagePath('450.jpg')
              },
              ]
            },
            {
              name: "Item #0311- $25.00 per set",
              description: "5pc Curtain Sets (17426) (Tan color only)",
              products: [{
                name: "0311-1709 Tan",
                price: 21.99,
                image: imagePath('449.jpg')
              },
              ]
            },
            {
              name: "Item #2310 - $36.99 per pair",
              description: "Luxurious Blackout Curtain with attached Taffeta Valance",
              products: [{
                name: "2310-1601",
                price: 21.99,
                image: imagePath('451.jpg')
              },
  
              {
                name: "2310-1604",
                price: 21.99,
                image: imagePath('452.jpg')
              },
              {
                name: "2310-1602",
                price: 21.99,
                image: imagePath('453.jpg')
              },
              {
                name: "2310-1605",
                price: 21.99,
                image: imagePath('454.jpg')
              },
              {
                name: "2310-1610",
                price: 21.99,
                image: imagePath('455.jpg')
              },
              ]
            },
  
            {
              name: "Item #1443 - $45.99 per 2pc set",
              description: "2 pc Quilted Furniture Cover Set (16112)",
              products: [{
                name: "1442-1601 Black",
                price: 21.99,
                image: imagePath('456.jpg')
              },
  
              {
                name: "1443-1602 Turquoise",
                price: 21.99,
                image: imagePath('457.jpg')
              },
              {
                name: "1443-1604 Purple",
                price: 21.99,
                image: imagePath('458.jpg')
              },
              {
                name: "1443-1605 Burgundy",
                price: 21.99,
                image: imagePath('459.jpg')
              },
              ]
            },
            {
              name: "Item #1444 - $49.99 per 3pc Set",
              description: "3 pc Quilted Furniture Cover Set (16112)",
              products: [{
                name: "1444-1602 Turquoise",
                price: 21.99,
                image: imagePath('460.jpg')
              },
  
              {
                name: "1444-1601 Black",
                price: 21.99,
                image: imagePath('461.jpg')
              },
              {
                name: "1443-1604 Purple",
                price: 21.99,
                image: imagePath('462.jpg')
              },
              {
                name: "1444-1605 Burgundy",
                price: 21.99,
                image: imagePath('463.jpg')
              },
              ]
            },
            {
              name: "Item #1444 - $49.99 per 3pc Set",
              description: "3 pc Quilted Furniture Cover Set (16112)",
              products: [{
                name: "1444-1602 Turquoise",
                price: 21.99,
                image: imagePath('460.jpg')
              },
  
              {
                name: "1444-1601 Black",
                price: 21.99,
                image: imagePath('461.jpg')
              },
              {
                name: "1443-1604 Purple",
                price: 21.99,
                image: imagePath('462.jpg')
              },
              {
                name: "1444-1605 Burgundy",
                price: 21.99,
                image: imagePath('463.jpg')
              },
              ]
            },
            {
              name: "Item #1524 - $65.00 each",
              description: "Luxury Soft Area Rug (16112) - Non slip backing",
              products: [{
                name: "1524-1601 Black 5.5x8",
                price: 21.99,
                image: imagePath('464.jpg'),
                image2: imagePath('469.jpg')
              },
  
              {
                name: "1524- 1604 Purple",
                price: 21.99,
                image: imagePath('465.jpg')
              },
              {
                name: "1524-1602 Turquoise",
                price: 21.99,
                image: imagePath('466.jpg')
              },
              {
                name: "1524-1605 Burgundy",
                price: 21.99,
                image: imagePath('467.jpg')
              },
              {
                name: "1524-1609 Camel",
                price: 21.99,
                image: imagePath('468.jpg')
              },
              ]
            },
            {
              name: "Item #1524 - $65.00 each",
              description: "Luxury Soft Area Rug (16112) - Non slip backing",
              products: [{
                name: "1524B-5030 Burgundy",
                price: 21.99,
                image: imagePath('470.jpg')
              },
  
              {
                name: "1524B-5030 Turquoise",
                price: 21.99,
                image: imagePath('471.jpg')
              },
              {
                name: "1524B-MW",
                price: 21.99,
                image: imagePath('472.jpg')
              },
              {
                name: "1524B-THU",
                price: 21.99,
                image: imagePath('473.jpg')
              },
              {
                name: "1524B-TRL",
                price: 21.99,
                image: imagePath('474.jpg')
              },
              ]
            },
            {
              name: "Item #1522 - $12.00 each",
              description: "Door Mats (16112) - Non slip backing",
              products: [{
                name: "1522-1602 Turquoise",
                price: 21.99,
                image: imagePath('475.jpg')
              },
  
              {
                name: "1522-1601 Black",
                price: 21.99,
                image: imagePath('476.jpg')
              },
              {
                name: "1522-1605 Burgundy",
                price: 21.99,
                image: imagePath('477.jpg')
              },
              {
                name: "1522-1609 Camel",
                price: 21.99,
                image: imagePath('478.jpg')
              },
              {
                name: "1522-1604 Purple",
                price: 21.99,
                image: imagePath('479.jpg')
              },
              ]
            },
            {
              name: "Item #1523 - $18.00 each",
              description: "Door Mats (16112) - Non slip backing",
              products: [{
                name: "1523-1604 Purple",
                price: 21.99,
                image: imagePath('480.jpg')
              },
  
              {
                name: "1523-1601 Black",
                price: 21.99,
                image: imagePath('481.jpg')
              },
              {
                name: "1523-1605 Burgundy",
                price: 21.99,
                image: imagePath('482.jpg')
              },
              {
                name: "1523-1609 Camel",
                price: 21.99,
                image: imagePath('483.jpg')
              },
              {
                name: "1523-1602 Turquoise",
                price: 21.99,
                image: imagePath('484.jpg')
              },
              ]
            },
            {
              name: "Item #0348 - $13.99 each",
              description: "Door Mats (16112) - Non slip backing",
              products: [{
                name: "1523-1604 Purple",
                price: 13.99,
                image: imagePath('480.jpg')
              },
  
              {
                name: "1523-1601 Black",
                price: 13.99,
                image: imagePath('481.jpg')
              },
              {
                name: "1523-1605 Burgundy",
                price: 13.99,
                image: imagePath('482.jpg')
              },
              {
                name: "1523-1609 Camel",
                price: 21.99,
                image: imagePath('483.jpg')
              },
              {
                name: "1523-1602 Turquoise",
                price: 21.99,
                image: imagePath('484.jpg')
              },
              ]
            },
            {
              name: "Item #0348 - $13.99 each",
              description: "Silk Touch Cushions (16112)",
              products: [{
                name: "0348-1601 Black",
                price: 13.99,
                image: imagePath('485.jpg')
              },
  
              {
                name: "0348- 1606 Hot Pink",
                price: 13.99,
                image: imagePath('486.jpg')
              },
              {
                name: "0348-1635 Orange",
                price: 13.99,
                image: imagePath('489.jpg')
              },
              {
                name: "0348- 1604 Purple",
                price: 21.99,
                image: imagePath('490.jpg')
              },
              {
                name: "0348- 1602 Turquoise",
                price: 21.99,
                image: imagePath('491.jpg')
              },
              {
                name: "0348- 1605 Burgundy",
                price: 21.99,
                image: imagePath('492.jpg')
              },
              {
                name: "0348- 1632 Navy Blue",
                price: 21.99,
                image: imagePath('493.jpg')
              },
              {
                name: "0348- 1609 Camel",
                price: 21.99,
                image: imagePath('494.jpg')
              },
              {
                name: "0348- 1610 White",
                price: 21.99,
                image: imagePath('495.jpg')
              },
              {
                name: "0348- 1610 White",
                price: 21.99,
                image: imagePath('496.jpg')
              },
              ]
            },
            {
              name: "Item #0347 - $13.99 each",
              description: "Silk Touch Cushions (17426)",
              products: [{
                name: "0347-1708 Grey",
                price: 13.99,
                image: imagePath('487.jpg')
              },
  
              {
                name: "0347-1709 Tan",
                price: 13.99,
                image: imagePath('488.jpg')
              },
              ]
            },
            {
              name: "Item #0347 - $13.99 each",
              description: "Silk Touch Cushions (Native Floral)",
              products: [{
                name: "0346 Black",
                price: 13.99,
                image: imagePath('497.jpg')
              },
  
              {
                name: "0346 Turquoise",
                price: 13.99,
                image: imagePath('498.jpg')
              },
              {
                name: "0345 White",
                price: 13.99,
                image: imagePath('499.jpg')
              },
              {
                name: "0346 Purple",
                price: 13.99,
                image: imagePath('500.jpg')
              },
              {
                name: "0346 Pink",
                price: 13.99,
                image: imagePath('508.jpg')
              },
              ]
            },
            {
              name: "Item #0345 - $13.99 each",
              description: "Silk Touch Cushion (7 Lakes)",
              products: [{
                name: "0345 Grey",
                price: 13.99,
                image: imagePath('501.jpg')
              },
  
              {
                name: "0345 Burgundy",
                price: 13.99,
                image: imagePath('502.jpg')
              },
              {
                name: "0345 Black",
                price: 13.99,
                image: imagePath('503.jpg')
              },
              {
                name: "0345 White",
                price: 13.99,
                image: imagePath('504.jpg')
              },
              {
                name: "0345 Teal",
                price: 13.99,
                image: imagePath('505.jpg')
              },
              {
                name: "0345 Turquoise",
                price: 13.99,
                image: imagePath('506.jpg')
              },
              {
                name: "0345 Purple",
                price: 13.99,
                image: imagePath('507.jpg')
              },
              ]
            },
            {
              name: "Item #0354 - $13.99 each",
              description: "Canvas Cushion (Starburst)",
              products: [{
                name: "0354-2101 Black",
                price: 13.99,
                image: imagePath('509.jpg')
              },
  
              {
                name: "0354-2102 Turquoise",
                price: 13.99,
                image: imagePath('510.jpg')
              },
              {
                name: "0354-2105 Burgundy",
                price: 13.99,
                image: imagePath('513.jpg')
              },
              {
                name: "0354-2104 Purple",
                price: 13.99,
                image: imagePath('514.jpg')
              },
              ]
            },
            {
              name: "Item #0357 - $13.99 each",
              description: "Canvas Cushion (16112 design)",
              products: [{
                name: "0357-1602 Turquoise",
                price: 13.99,
                image: imagePath('511.jpg')
              },
  
              {
                name: "0357-1601 Black",
                price: 13.99,
                image: imagePath('512.jpg')
              },
              {
                name: "0357-1604 Purple",
                price: 13.99,
                image: imagePath('515.jpg')
              },
              {
                name: "0357-1609 Tan",
                price: 13.99,
                image: imagePath('516.jpg')
              },
              ]
            },
            {
              name: "Item #0358 - $13.99 each",
              description: "Canvas Cushion (Starburst)",
              products: [{
                name: "0358-2101 Black",
                price: 13.99,
                image: imagePath('517.jpg')
              },
  
              {
                name: "0358-2104 Purple",
                price: 13.99,
                image: imagePath('518.jpg')
              },
              {
                name: "0358-2105 Burgundy",
                price: 13.99,
                image: imagePath('519.jpg')
              },
              {
                name: "0358-2102 Turquoise",
                price: 13.99,
                image: imagePath('520.jpg')
              },
              ]
            },
            {
              name: "Item #0359 - $13.99 each",
              description: "Canvas Cushion (16112 design)",
              products: [{
                name: "0359-1601 Black",
                price: 13.99,
                image: imagePath('521.jpg')
              },
  
              {
                name: "0359-1605 Burgundy",
                price: 13.99,
                image: imagePath('522.jpg')
              },
              {
                name: "0359-1603 Mint",
                price: 13.99,
                image: imagePath('523.jpg')
              },
              {
                name: "0359-1605 Purple",
                price: 13.99,
                image: imagePath('524.jpg')
              },
              {
                name: "0359-1602 Turquoise",
                price: 13.99,
                image: imagePath('525.jpg')
              },
              {
                name: "0359-1609 Tan",
                price: 13.99,
                image: imagePath('526.jpg')
              },
              ]
            },
            {
              name: "Item #0352 - $13.99 each",
              description: "Micromink Cushions (Star)",
              products: [{
                name: "0352-1510 Black",
                price: 13.99,
                image: imagePath('527.jpg')
              },
  
              {
                name: "0352-1510 White",
                price: 13.99,
                image: imagePath('528.jpg')
              },
              {
                name: "0352-1504 Purplet",
                price: 13.99,
                image: imagePath('529.jpg')
              },
              {
                name: "0352-1518 Grey",
                price: 13.99,
                image: imagePath('530.jpg')
              },
              {
                name: "0352-1505 Burgundy",
                price: 13.99,
                image: imagePath('531.jpg')
              },
              {
                name: "0352-1602 Turquoise",
                price: 13.99,
                image: imagePath('532.jpg')
              },
              ]
            },
            {
              name: "Item #0351 - $13.99 each",
              description: "Micromink Cushions (Medicine Wheel)",
              products: [{
                name: "0351 - Medicine Wheel",
                price: 13.99,
                image: imagePath('533.jpg')
              },
              ]
            },
            {
              name: "Item #0360 - $13.99 each",
              description: "Micromink Cushions (Medicine Wheel Serape)",
              products: [{
                name: "0360 - Medicine Wheel Serape",
                price: 13.99,
                image: imagePath('534.jpg')
              },
              ]
            },
            {
              name: "Item #0353 - $13.99 each",
              description: "Micromink Cushions (Diamond Star)",
              products: [{
                name: "0353-1",
                price: 13.99,
                image: imagePath('535.jpg')
              },
  
              {
                name: "0353-2",
                price: 13.99,
                image: imagePath('536.jpg')
              },
              {
                name: "0353-0",
                price: 13.99,
                image: imagePath('537.jpg')
              },
              {
                name: "0353-3",
                price: 13.99,
                image: imagePath('538.jpg')
              },
  
              ]
            },
            {
              name: "Item #0353 - $13.99 each",
              description: "Chair Cushions (16112)",
              products: [{
                name: "1138-1602 Turquoise",
                price: 13.99,
                image: imagePath('539.jpg')
              },
  
              {
                name: "1138-1605 Burgundy",
                price: 13.99,
                image: imagePath('540.jpg')
              },
              {
                name: "1138-1601 Black",
                price: 13.99,
                image: imagePath('541.jpg')
              },
              {
                name: "1138-1604 Purple",
                price: 13.99,
                image: imagePath('542.jpg')
              },
              ]
            },
  
          ]
        },
        {
          name: "Bathroom",
          items: [
            {
              name: "Item #1212 - $20.99 each",
              description: "Bath Towels (7 Lakes",
              products: [{
                name: "1212 - 2302 Turquoise",
                price: 13.99,
                image: imagePath('565.jpg')
              },
  
              {
                name: "1212 - 2304 Purple",
                price: 13.99,
                image: imagePath('566.jpg')
              },
              {
                name: "1212 - 2305 Burgundy",
                price: 13.99,
                image: imagePath('567.jpg')
              },
              {
                name: "1212 - 2301 Black",
                price: 13.99,
                image: imagePath('568.jpg')
              },
  
              ]
            },
            {
              name: "Item #1211 - $27.99 each",
              description: "Bath Towels (16112)",
              products: [{
                name: "1211 - 1604 Purple",
                price: 13.99,
                image: imagePath('570.jpg')
              },
  
              {
                name: "1211 - 1601 Black",
                price: 13.99,
                image: imagePath('571.jpg')
              },
              {
                name: "1211 - 1609 Tan",
                price: 13.99,
                image: imagePath('572.jpg')
              },
              {
                name: "1211 - 1605 Burgundy",
                price: 13.99,
                image: imagePath('573.jpg')
              },
              {
                name: "1211 - 1602 Turquoise",
                price: 13.99,
                image: imagePath('574.jpg')
              },
              {
                name: "1211 - 1603 Mint",
                price: 13.99,
                image: imagePath('575.jpg')
              },
  
              ]
            },
            {
              name: "Item #1214 - $27.99 per set",
              description: "3pc Towels Sets (16112) - Heavy quality all 2-sided towels",
              products: [{
                name: "1214-1609 Tan",
                price: 13.99,
                image: imagePath('576.jpg')
              },
  
              {
                name: "1214-1605 Burgundy",
                price: 13.99,
                image: imagePath('577.jpg')
              },
              {
                name: "1214-1602 Turquoise",
                price: 13.99,
                image: imagePath('578.jpg')
              },
              {
                name: "1214-1603 Mint",
                price: 13.99,
                image: imagePath('579.jpg')
              },
              {
                name: "1214-1604 Purple",
                price: 13.99,
                image: imagePath('580.jpg')
              },
              {
                name: "1214-1601 Black",
                price: 13.99,
                image: imagePath('581.jpg')
              },
  
              ]
            },
            {
              name: "Item #1216 - $27.99 per set",
              description: "3pc Towels Sets (Starburst) - Heavy quality all 2-sided towels",
              products: [{
                name: "1216-2101 Black",
                price: 13.99,
                image: imagePath('584.jpg'),
                image2: imagePath('585.jpg')
              },
  
              {
                name: "1216-2102 Turquoise",
                price: 13.99,
                image: imagePath('586.jpg'),
                image2: imagePath('589.jpg')
              },
              {
                name: "1216-2104 Purple",
                price: 13.99,
                image: imagePath('587.jpg'),
                image2: imagePath('590.jpg')
              },
              {
                name: "1214-1603 Mint",
                price: 13.99,
                image: imagePath('588.jpg'),
                image2: imagePath('591.jpg')
              },
  
              ]
            },
            {
              name: "Item #1222 - $20.00 each",
              description: "Beach Towels - single sided towel",
              products: [{
                name: "1216-2101 Black",
                price: 13.99,
                image: imagePath('592.jpg')
  
              },
  
              {
                name: "1222-1631 Teal",
                price: 13.99,
                image: imagePath('593.jpg')
  
              },
              {
                name: "1222-1602 Turquoise",
                price: 13.99,
                image: imagePath('594.jpg')
  
              },
              {
                name: "1222-1830 Black",
                price: 13.99,
                image: imagePath('595.jpg')
  
              },
              {
                name: "1222-1603 Mint",
                price: 13.99,
                image: imagePath('596.jpg')
  
              },
              {
                name: "1222-1805 Burgundy",
                price: 13.99,
                image: imagePath('597.jpg')
  
              },
              {
                name: "1222-1604 Purple",
                price: 13.99,
                image: imagePath('598.jpg')
  
              },
              {
                name: "1222-1863 Teal",
                price: 13.99,
                image: imagePath('599.jpg')
  
              },
              {
                name: "1222H-1871 Geo Horses Tan",
                price: 13.99,
                image: imagePath('600.jpg')
  
              },
              ]
            }]
        },
        {
          name: "Apparel",
          items: [
  
            {
  
              name: "Item #1742 - $32.99 each",
              description: "Blanket Hoodies - With Front Closure Button",
              products: [{
                name: "1742-7626 Wolf Shield",
                price: 13.99,
                image: imagePath('614.jpg')
  
              },
  
              {
                name: "1742-7631 Bursting Out",
                price: 13.99,
                image: imagePath('615.jpg')
  
              },
              {
                name: "1742-7632 Skull 2",
                price: 13.99,
                image: imagePath('616.jpg')
  
              },
              {
                name: "1742-7634 Teepee Plains",
                price: 13.99,
                image: imagePath('617.jpg')
  
              },
              {
                name: "1742-7633 Teepee Desert",
                price: 13.99,
                image: imagePath('618.jpg')
  
              },
              {
                name: "1742-7635 Wolf Galaxy",
                price: 13.99,
                image: imagePath('619.jpg')
  
              }
              ]
            },
            {
              name: "Item #1742 - $32.99 each",
              description: "Blanket Hoodies - With Front Closure Button",
              products: [{
                name: "1741-1641 Fire",
                price: 13.99,
                image: imagePath('620.jpg')
  
              },
  
              {
                name: "1741-1642 Green Lizard",
                price: 13.99,
                image: imagePath('621.jpg')
  
              },
              {
                name: "1741-1644 Zarape",
                price: 13.99,
                image: imagePath('622.jpg')
  
              },
              {
                name: "1741-1646 Orange Fog",
                price: 13.99,
                image: imagePath('623.jpg')
  
              },
              {
                name: "1741-1645 Pink Berry",
                price: 13.99,
                image: imagePath('624.jpg')
  
              },
              {
                name: "1741-1647 Purple Mint",
                price: 13.99,
                image: imagePath('625.jpg')
  
              }
              ]
            },
            {
              name: "Item #1742 - $32.99 each",
              description: "Blanket Hoodies - With Front Closure Button",
              products: [{
                name: "1742- 7601 Trail",
                price: 13.99,
                image: imagePath('626.jpg')
  
              },
  
              {
                name: "1742- 7636 Chief Skyline",
                price: 13.99,
                image: imagePath('627.jpg')
  
              },
              {
                name: "1742-7616 Legends",
                price: 13.99,
                image: imagePath('628.jpg')
  
              },
              {
                name: "1742-7624 Eagle Scene",
                price: 13.99,
                image: imagePath('629.jpg')
  
              },
              {
                name: "1742-7621 Bear",
                price: 13.99,
                image: imagePath('630.jpg')
  
              },
              {
                name: "1742-7625 Medicine Wheel",
                price: 13.99,
                image: imagePath('631.jpg')
  
              }
              ]
            },
          ]
        },
        {
          name: "Hats/Headwear",
          items: [
            {
              name: "Item #1206 - $10.99 each",
              description: "Summer Baseball Caps - Netted",
              products: [{
                name: "1206-1",
                price: 13.99,
                image: imagePath('691.jpg')
  
              },
  
              {
                name: "1206-4",
                price: 13.99,
                image: imagePath('692.jpg')
  
              },
              {
                name: "1206-2",
                price: 13.99,
                image: imagePath('693.jpg')
  
              },
              {
                name: "1206-5",
                price: 13.99,
                image: imagePath('694.jpg')
  
              },
              {
                name: "1206-3",
                price: 13.99,
                image: imagePath('695.jpg')
  
              },
              {
                name: "1206-6",
                price: 13.99,
                image: imagePath('696.jpg')
  
              }
              ]
            },
            {
              name: "Item #0180 - $10.99 each",
              description: "Summer Baseball Caps - Netted",
              products: [{
                name: "0180-1601 Black",
                price: 13.99,
                image: imagePath('689.jpg')
  
              },
  
              {
                name: "0180-1634 Blue",
                price: 13.99,
                image: imagePath('697.jpg')
  
              },
              {
                name: "0180-1603 Mint",
                price: 13.99,
                image: imagePath('699.jpg')
  
              },
              {
                name: "0180-1605 Burgundy",
                price: 13.99,
                image: imagePath('701.jpg')
  
              },
              {
                name: "0180-1604 Purple",
                price: 13.99,
                image: imagePath('703.jpg')
  
              }
              ]
            },
            {
              name: "Item #0194 - $10.99 each",
              description: "Summer Baseball Caps - Netted",
              products: [{
                name: "0194-1601 Black",
                price: 13.99,
                image: imagePath('690.jpg')
  
              },
  
              {
                name: "0194-1634 Blue",
                price: 13.99,
                image: imagePath('698.jpg')
  
              },
              {
                name: "0194-1604 Purple",
                price: 13.99,
                image: imagePath('700.jpg')
  
              },
              {
                name: "0194-1607 Burgundy",
                price: 13.99,
                image: imagePath('702.jpg')
  
              },
              {
                name: "0194-1603 Mint",
                price: 13.99,
                image: imagePath('704.jpg')
  
              }
              ]
            },
            {
              name: "Item #1182 - $10.99 each",
              description: "Summer Baseball Caps (Thunder Spirit) - Netted",
              products: [{
                name: "1182 - 1",
                price: 13.99,
                image: imagePath('705.jpg')
  
              },
  
              {
                name: "1182 - 3",
                price: 13.99,
                image: imagePath('706.jpg')
  
              },
              {
                name: "1182 - 5",
                price: 13.99,
                image: imagePath('707.jpg')
  
              },
              {
                name: "1182 - 2",
                price: 13.99,
                image: imagePath('708.jpg')
  
              },
              {
                name: "1182 - 4",
                price: 13.99,
                image: imagePath('709.jpg')
  
              },
              {
                name: "1182 - 6",
                price: 13.99,
                image: imagePath('710.jpg')
  
              },
              ]
            },
            {
              name: "Item #1182 - $10.99 each",
              description: "Summer Baseball Caps (Thunder Spirit) - Netted",
              products: [{
                name: "0190-1601 Black",
                price: 13.99,
                image: imagePath('711.jpg')
  
              },
  
              {
                name: "0190-1634 Blue",
                price: 13.99,
                image: imagePath('723.jpg')
  
              },
              {
                name: "0190-1603 Mint",
                price: 13.99,
                image: imagePath('724.jpg')
  
              },
              {
                name: "0190-1605 Burgundy",
                price: 13.99,
                image: imagePath('725.jpg')
  
              },
              {
                name: "0190-1604 Purple",
                price: 13.99,
                image: imagePath('726.jpg')
  
              },
              ]
            },
            {
              name: "Item #1207 - $11.99 each",
              description: "Bucket Hats",
              products: [{
                name: "1206-1",
                price: 13.99,
                image: imagePath('713.jpg')
  
              },
  
              {
                name: "1206-4",
                price: 13.99,
                image: imagePath('714.jpg')
  
              },
              {
                name: "1206-2",
                price: 13.99,
                image: imagePath('715.jpg')
  
              },
              {
                name: "1206-5",
                price: 13.99,
                image: imagePath('716.jpg')
  
              },
              {
                name: "1206-3",
                price: 13.99,
                image: imagePath('717.jpg')
  
              },
              {
                name: "1206-6",
                price: 13.99,
                image: imagePath('718.jpg')
  
              },
              ]
            },
            {
              name: "Item #0198 - $11.99 each",
              description: "Outdoor Hats",
              products: [{
                name: "0194-1601 Black",
                price: 13.99,
                image: imagePath('712.jpg')
  
              },
  
              {
                name: "0194-1634 Blue",
                price: 13.99,
                image: imagePath('719.jpg')
  
              },
              {
                name: "0194-1603 Mint",
                price: 13.99,
                image: imagePath('720.jpg')
  
              },
              {
                name: "0194-1604 Purple",
                price: 13.99,
                image: imagePath('721.jpg')
  
              },
              {
                name: "0194-1607 Burgundy",
                price: 13.99,
                image: imagePath('722.jpg')
  
              },
              ]
            },
            {
              name: "Item #0169 - $7.99 each",
              description: "Knit Headband (16112) - Heavy quality",
              products: [{
                name: "0169-1601 Black",
                price: 13.99,
                image: imagePath('727.jpg')
  
              },
  
              {
                name: "0169-1604 Purple",
                price: 13.99,
                image: imagePath('728.jpg')
  
              },
              {
                name: "0169-1605 Burgundy",
                price: 13.99,
                image: imagePath('731.jpg')
  
              },
              {
                name: "0169-1602 Turquoise",
                price: 13.99,
                image: imagePath('732.jpg')
  
              },
              {
                name: "0169-1603 Mint",
                price: 13.99,
                image: imagePath('733.jpg')
  
              },
              ]
            },
            {
              name: "Item #0169 - $7.99 each",
              description: "Knit Headband (16112) - Heavy quality",
              products: [{
                name: "0172 Royal",
                price: 13.99,
                image: imagePath('729.jpg')
  
              },
  
              {
                name: "0172 Rust",
                price: 13.99,
                image: imagePath('730.jpg')
  
              },
              {
                name: "0172 - Grey",
                price: 13.99,
                image: imagePath('735.jpg')
  
              },
              {
                name: "0172- Black Grey",
                price: 13.99,
                image: imagePath('736.jpg')
  
              },
              {
                name: "0172 Black",
                price: 13.99,
                image: imagePath('737.jpg')
  
              },
              {
                name: "0172 Navy",
                price: 13.99,
                image: imagePath('738.jpg')
  
              },
              ]
            },
            {
              name: "Item #0169 - $7.99 each",
              description: "Knit Headband (16112) - Heavy quality",
              products: [{
                name: "0172 Royal",
                price: 13.99,
                image: imagePath('729.jpg')
  
              },
  
              {
                name: "0172 Rust",
                price: 13.99,
                image: imagePath('730.jpg')
  
              },
              {
                name: "0172 - Grey",
                price: 13.99,
                image: imagePath('735.jpg')
  
              },
              {
                name: "0172- Black Grey",
                price: 13.99,
                image: imagePath('736.jpg')
  
              },
              {
                name: "0172 Black",
                price: 13.99,
                image: imagePath('737.jpg')
  
              },
              {
                name: "0172 Navy",
                price: 13.99,
                image: imagePath('738.jpg')
  
              },
              ]
            },
            {
              name: "Item #0169 - $7.99 each",
              description: "Knit Headband (16112) - Heavy quality",
              products: [{
                name: "0184-1601 Black",
                price: 13.99,
                image: imagePath('739.jpg')
  
              },
  
              {
                name: "0184-1634 Blue",
                price: 13.99,
                image: imagePath('740.jpg')
  
              },
              {
                name: "0184-1604 Purple",
                price: 13.99,
                image: imagePath('741.jpg')
  
              },
              {
                name: "0184-1603 Mint",
                price: 13.99,
                image: imagePath('749.jpg')
  
              },
              {
                name: "0184-1607 Burgundy",
                price: 13.99,
                image: imagePath('750.jpg')
  
              },
              ]
            },
            {
              name: "Item #0185 - $14.99 each",
              description: "All Over Print Snap Back Flat Brim Hats",
              products: [{
                name: "0185-1709 Tan",
                price: 13.99,
                image: imagePath('743.jpg')
              },
              {
                name: "0185-1708 Grey",
                price: 13.99,
                image: imagePath('746.jpg')
  
              },
              ]
            },
            {
              name: "Item #0186 - $14.99 each",
              description: "Fleece Snap Back Flat Brim Hats",
              products: [{
                name: "0186-1634 Blue",
                price: 13.99,
                image: imagePath('742.jpg')
  
              },
  
              {
                name: "0186-1601 Black",
                price: 13.99,
                image: imagePath('744.jpg')
  
              },
              {
                name: "0186-1604 Purple",
                price: 13.99,
                image: imagePath('745.jpg')
  
              },
              {
                name: "0186-1603 Mint",
                price: 13.99,
                image: imagePath('747.jpg')
  
              },
              {
                name: "0186-1605 Burgundy",
                price: 13.99,
                image: imagePath('748.jpg')
  
              },
              ]
            },
            {
              name: "Item #0187 - $14.99 each",
              description: "Embroidered Patch Snap Back Flat Brim Hat",
              products: [{
                name: "0187-1604 Purple",
                price: 13.99,
                image: imagePath('753.jpg')
  
              },
  
              {
                name: "0187-1608 Grey",
                price: 13.99,
                image: imagePath('754.jpg')
  
              },
              {
                name: "0187-1601 Black",
                price: 13.99,
                image: imagePath('760.jpg')
  
              },
              {
                name: "0187-1603 Mint",
                price: 13.99,
                image: imagePath('761.jpg')
  
              },
              {
                name: "0187-1607 Red",
                price: 13.99,
                image: imagePath('762.jpg')
  
              },
              ]
            },
            {
              name: "Item #0189 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat",
              products: [{
                name: "0189-1801 Black",
                price: 13.99,
                image: imagePath('751.jpg')
  
              },
  
              {
                name: "0189-1805 Burgundy",
                price: 13.99,
                image: imagePath('752.jpg')
  
              },
              {
                name: "0189-1834 Roya Blue",
                price: 13.99,
                image: imagePath('755.jpg')
  
              },
              ]
            },
            {
              name: "Item #0188 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat",
              products: [{
                name: "0188-1601 Black",
                price: 13.99,
                image: imagePath('756.jpg')
  
              },
  
              {
                name: "0188-1634 Blue",
                price: 13.99,
                image: imagePath('757.jpg')
  
              },
              {
                name: "0188-1604 Purple",
                price: 13.99,
                image: imagePath('758.jpg')
  
              },
              {
                name: "0188-1605 Burgundy",
                price: 13.99,
                image: imagePath('759.jpg')
  
              },
              ]
            },
            {
              name: "Item #0197 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat - Make America Native Again",
              products: [{
                name: "0197-1831",
                price: 13.99,
                image: imagePath('763.jpg')
  
              },
  
              {
                name: "0197-1832",
                price: 13.99,
                image: imagePath('764.jpg')
  
              },
              {
                name: "0197-1833",
                price: 13.99,
                image: imagePath('765.jpg')
  
              },
              {
                name: "0197-1834",
                price: 13.99,
                image: imagePath('766.jpg')
  
              },
              ]
            },
            {
              name: "Item #0197 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat - Make America Native Again",
              products: [{
                name: "0197-1831",
                price: 13.99,
                image: imagePath('767.jpg')
  
              },
  
              {
                name: "0197-1832",
                price: 13.99,
                image: imagePath('769.jpg')
  
              },
              ]
            },
            {
              name: "Item #0197 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat - Make America Native Again",
              products: [{
                name: "0197-1831",
                price: 13.99,
                image: imagePath('768.jpg')
  
              },
  
              {
                name: "0197-1832",
                price: 13.99,
                image: imagePath('770.jpg')
  
              },
              ]
            },
            {
              name: "Item #0199 - $14.99 each",
              description: "Embroidered Snap Back Flat Brim Hat -First Nation",
              products: [{
                name: "0199",
                price: 13.99,
                image: imagePath('768.jpg')
  
              },
              ]
            }]
        },
        {
          name: "Gloves",
          items: [
            {
              name: "Item #1126 - $7.99 per pair",
              description: "Knitted Gloves",
              products: [{
                name: "1126-1601 Black",
                price: 13.99,
                image: imagePath('782.png')
  
              },
  
              {
                name: "1126-1602 Turquoise",
                price: 13.99,
                image: imagePath('783.png')
  
              },
              {
                name: "1126-1604 Purple",
                price: 13.99,
                image: imagePath('785.png')
              },
              ]
            },
            {
              name: "Item #1126 - $7.99 per pair",
              description: "Knitted Gloves",
              products: [{
                name: "1127 - Grey Eagle",
                price: 13.99,
                image: imagePath('772.jpg')
  
              },
  
              {
                name: "1127- Mint Wolf",
                price: 13.99,
                image: imagePath('773.jpg')
  
              },
              {
                name: "1127 - Grey Buffalo",
                price: 13.99,
                image: imagePath('774.jpg')
              },
              {
                name: "1127 - Mint Turtle",
                price: 13.99,
                image: imagePath('775.jpg')
              },
              {
                name: "1127 - Black Bear",
                price: 13.99,
                image: imagePath('784.jpg')
              },
              {
                name: "1127 - Grey Turtle",
                price: 13.99,
                image: imagePath('786.jpg')
              },
              {
                name: "1127 - Black Buffalo",
                price: 13.99,
                image: imagePath('787.jpg')
              },
              {
                name: "1127 - Black Eagle",
                price: 13.99,
                image: imagePath('788.jpg')
              },
              {
                name: "1127 - Black Wolf",
                price: 13.99,
                image: imagePath('789.jpg')
              },
  
              {
                name: "1127- Black Turtle",
                price: 13.99,
                image: imagePath('790.jpg')
              },
              {
                name: "1127 - Grey Bear",
                price: 13.99,
                image: imagePath('791.jpg')
              },
              {
                name: "1127 - Grey Wolf",
                price: 13.99,
                image: imagePath('792.jpg')
              },
              ]
            },
            {
              name: "Item #1128 - $7.99 per pair",
              description: "Knitted Gloves",
              products: [{
                name: "1128 - Black_Grey",
                price: 13.99,
                image: imagePath('776.jpg')
  
              },
  
              {
                name: "1128 - Grey",
                price: 13.99,
                image: imagePath('777.jpg')
  
              },
              {
                name: "1128 - Navy",
                price: 13.99,
                image: imagePath('778.jpg')
              },
              {
                name: "1128 - Royal",
                price: 13.99,
                image: imagePath('779.jpg')
              },
              {
                name: "1128 - Rust",
                price: 13.99,
                image: imagePath('780.jpg')
              },
              {
                name: "1128- Black_yellow",
                price: 13.99,
                image: imagePath('781.jpg')
              },
  
              ]
            },
            {
              name: "Item #1128 - $7.99 per pair",
              description: "Knitted Gloves",
              products: [{
                name: "1128 - Black_Grey",
                price: 13.99,
                image: imagePath('776.jpg')
  
              },
  
              {
                name: "1128 - Grey",
                price: 13.99,
                image: imagePath('777.jpg')
  
              },
              {
                name: "1128 - Navy",
                price: 13.99,
                image: imagePath('778.jpg')
              },
              {
                name: "1128 - Royal",
                price: 13.99,
                image: imagePath('779.jpg')
              },
              {
                name: "1128 - Rust",
                price: 13.99,
                image: imagePath('780.jpg')
              },
              {
                name: "1128- Black_yellow",
                price: 13.99,
                image: imagePath('781.jpg')
              },
  
              ]
            },]
        },
        {
          name: "scraves",
          items: [
            {
              name: "Item #2200 - $2.49 each",
              description: "Bandanas (Design #16112)",
              products: [{
                name: "2200 Black Colored",
                price: 13.99,
                image: imagePath('793.jpg')
  
              },
  
              {
                name: "2200 Navy",
                price: 13.99,
                image: imagePath('794.jpg')
  
              },
              {
                name: "2200 Purple",
                price: 13.99,
                image: imagePath('795.jpg')
              },
              {
                name: "2200 - Black",
                price: 13.99,
                image: imagePath('796.jpg')
              },
              {
                name: "2200 Red",
                price: 13.99,
                image: imagePath('797.jpg')
              },
              {
                name: "2200 Turquoise",
                price: 13.99,
                image: imagePath('798.jpg')
              },
  
              ]
            },
            {
              name: "Item #2200 - $2.49 each",
              description: "Bandanas (Design #16112)",
              products: [{
                name: "2200 Black Colored",
                price: 13.99,
                image: imagePath('799.jpg')
  
              },
  
              {
                name: "2200 Navy",
                price: 13.99,
                image: imagePath('800.jpg')
              },
              {
                name: "2200 Navy",
                price: 13.99,
                image: imagePath('801.jpg')
              },
              ]
            },
            {
              name: "Item #2203 - $2.49 each",
              description: "Bandanas (Medicine Wheel with Eagle Feather)",
              products: [{
                name: "2202-1201",
                price: 13.99,
                image: imagePath('802.jpg')
  
              },
  
              {
                name: "2202-1204",
                price: 13.99,
                image: imagePath('803.jpg')
              },
              {
                name: "2202-1205",
                price: 13.99,
                image: imagePath('804.jpg')
              },
              ]
            },
            {
              name: "Item #2203 - $2.49 each",
              description: "Bandanas (Medicine Wheel with Eagle Feather)",
              products: [{
                name: "0154-1",
                price: 13.99,
                image: imagePath('805.jpg')
  
              },
  
              {
                name: "0154-4",
                price: 13.99,
                image: imagePath('806.jpg')
              },
              {
                name: "0154-2",
                price: 13.99,
                image: imagePath('807.jpg')
              },
              {
                name: "0154-3",
                price: 13.99,
                image: imagePath('808.jpg')
              },
              {
                name: "0154-5",
                price: 13.99,
                image: imagePath('809.jpg')
              },
              {
                name: "0154-6",
                price: 13.99,
                image: imagePath('810.jpg')
              },
              ]
            },
            {
              name: "Item #2203 - $2.49 each",
              description: "Bandanas (Medicine Wheel with Eagle Feather)",
              products: [{
                name: "0156-1709 Tan",
                price: 13.99,
                image: imagePath('811.jpg')
  
              },
  
              {
                name: "0156-1702 Turquoise",
                price: 13.99,
                image: imagePath('812.jpg')
              },
              {
                name: "0156-1710 White",
                price: 13.99,
                image: imagePath('814.jpg')
              },
              {
                name: "0156-1704 Purple",
                price: 13.99,
                image: imagePath('815.jpg')
              },
              {
                name: "0156-1708 Grey",
                price: 13.99,
                image: imagePath('816.jpg')
              },
              ]
            },
            {
              name: "Item #2203 - $2.49 each",
              description: "Bandanas (Medicine Wheel with Eagle Feather)",
              products: [{
                name: "0155-1601 Black",
                price: 13.99,
                image: imagePath('817.jpg')
  
              },
  
              {
                name: "0155- 1602 Turquoise",
                price: 13.99,
                image: imagePath('818.jpg')
              },
              {
                name: "0155- 1604 Purple",
                price: 13.99,
                image: imagePath('819.jpg')
              },
              {
                name: "0155- 1607 Red",
                price: 13.99,
                image: imagePath('820.jpg')
              },
              {
                name: "0155- 1610 White",
                price: 13.99,
                image: imagePath('813.jpg')
              },
              ]
            },
            {
              name: "Item #0157 - $12.99 each",
              description: "Knitted Scarves - Legacy Trails - Thick heavy quality 2 sided print",
              products: [{
                name: "0157 - Black Buffalo",
                price: 13.99,
                image: imagePath('822.jpg')
  
              },
  
              {
                name: "0157- Black Wolf",
                price: 13.99,
                image: imagePath('823.jpg')
              },
              {
                name: "0157- Grey Turtle",
                price: 13.99,
                image: imagePath('824.jpg')
              },
              {
                name: "0157- Mint Wolf",
                price: 13.99,
                image: imagePath('825.jpg')
              },
              {
                name: "0157- Grey Buffalo",
                price: 13.99,
                image: imagePath('826.jpg')
              },
              {
                name: "0157- Grey Wolf",
                price: 13.99,
                image: imagePath('827.jpg')
              },
              {
                name: "0157- Black Bear",
                price: 13.99,
                image: imagePath('828.jpg')
              },
              {
                name: "0157- Black Turtle",
                price: 13.99,
                image: imagePath('829.jpg')
              },
              {
                name: "0157- Grey Eagle",
                price: 13.99,
                image: imagePath('830.jpg')
              }, {
                name: "0157 Mint Turtle",
                price: 13.99,
                image: imagePath('831.jpg')
              }, {
                name: "0157- Black Eagle",
                price: 13.99,
                image: imagePath('832.jpg')
              },
              {
                name: "0157- Grey Bear",
                price: 13.99,
                image: imagePath('833.jpg')
              },
              ]
            },
            {
              name: "Item #1157 (60x60”) - $14.99 each",
              description: "Floral Scarves 9 colors",
              products: [{
                name: "1157-Black",
                price: 13.99,
                image: imagePath('834.jpg')
  
              },
  
              {
                name: "1157-Burgundy",
                price: 13.99,
                image: imagePath('835.jpg')
              },
              {
                name: "1157-Green",
                price: 13.99,
                image: imagePath('836.jpg')
              },
              {
                name: "1157-Pink",
                price: 13.99,
                image: imagePath('837.jpg')
              },
              {
                name: "1157-Turquoise",
                price: 13.99,
                image: imagePath('838.jpg')
              },
              {
                name: "1157-Purple",
                price: 13.99,
                image: imagePath('839.jpg')
              },
              {
                name: "1157-White",
                price: 13.99,
                image: imagePath('840.jpg')
              },
              {
                name: "1157-Royal Blue",
                price: 13.99,
                image: imagePath('841.jpg')
              },
              {
                name: "1157-Yellow",
                price: 13.99,
                image: imagePath('842.jpg')
              },
              ]
            },
            {
              name: "Item #1158 (45x45”) - $12.99 each",
              description: "Floral Scarves 9 colors",
              products: [{
                name: "1158-Black",
                price: 13.99,
                image: imagePath('834.jpg')
  
              },
              {
                name: "1158-Burgundy",
                price: 13.99,
                image: imagePath('835.jpg')
              },
              {
                name: "1158-Green",
                price: 13.99,
                image: imagePath('836.jpg')
              },
              {
                name: "1158-Pink",
                price: 13.99,
                image: imagePath('837.jpg')
              },
              {
                name: "1158-Turquoise",
                price: 13.99,
                image: imagePath('838.jpg')
              },
              {
                name: "1158-Purple",
                price: 13.99,
                image: imagePath('839.jpg')
              },
              {
                name: "1158-White",
                price: 13.99,
                image: imagePath('840.jpg')
              },
              {
                name: "1158-Royal Blue",
                price: 13.99,
                image: imagePath('841.jpg')
              },
              {
                name: "1158-Yellow",
                price: 13.99,
                image: imagePath('842.jpg')
              },
              ]
            },
            {
              name: "Item #1159 (30x30”) - $ 8.00 each",
              description: "Floral Scarves 9 colors",
              products: [{
                name: "1159-Black",
                price: 13.99,
                image: imagePath('834.jpg')
  
              },
              {
                name: "1159-Burgundy",
                price: 13.99,
                image: imagePath('835.jpg')
              },
              {
                name: "1159-Green",
                price: 13.99,
                image: imagePath('836.jpg')
              },
              {
                name: "1159-Pink",
                price: 13.99,
                image: imagePath('837.jpg')
              },
              {
                name: "1159-Turquoise",
                price: 13.99,
                image: imagePath('838.jpg')
              },
              {
                name: "1159-Purple",
                price: 13.99,
                image: imagePath('839.jpg')
              },
              {
                name: "1159-White",
                price: 13.99,
                image: imagePath('840.jpg')
              },
              {
                name: "1159-Royal Blue",
                price: 13.99,
                image: imagePath('841.jpg')
              },
              {
                name: "1159-Yellow",
                price: 13.99,
                image: imagePath('842.jpg')
              },
              ]
            },
            {
              name: "Item #1159 (30x30”) - $ 8.00 each",
              description: "Floral Scarves 9 colors",
              products: [{
                name: "0542-1912",
                price: 13.99,
                image: imagePath('843.jpg')
  
              },
              {
                name: "0542-1916",
                price: 13.99,
                image: imagePath('844.jpg')
              },
              {
                name: "0542-1919",
                price: 13.99,
                image: imagePath('845.jpg')
              },
              {
                name: "0542-1922",
                price: 13.99,
                image: imagePath('846.jpg')
              },
              {
                name: "0542-1987",
                price: 13.99,
                image: imagePath('847.jpg')
              },
              {
                name: "0542 - Mint",
                price: 13.99,
                image: imagePath('848.jpg')
              },
              {
                name: "0542-19039",
                price: 13.99,
                image: imagePath('849.jpg')
              },
              {
                name: "0542 - BlackRed",
                price: 13.99,
                image: imagePath('850.jpg')
              },
              {
                name: "0542 - Purple",
                price: 13.99,
                image: imagePath('851.jpg')
              },
              {
                name: "0542 - V1",
                price: 13.99,
                image: imagePath('852.jpg')
              },
              ]
            },]
        },
        {
          name: "Foot",
          items: [
            {
              name: "Item #0116 - $5.99 per pair",
              description: "Athletic Socks (16112 Team Spirit)",
              products: [{
                name: "0116-1611",
                price: 13.99,
                image: imagePath('865.jpg')
  
              },
              {
                name: "0116-1619",
                price: 13.99,
                image: imagePath('866.jpg')
              },
              {
                name: "0116-1618",
                price: 13.99,
                image: imagePath('867.jpg')
              },
              {
                name: "0116-1627",
                price: 13.99,
                image: imagePath('868.jpg')
              },
              {
                name: "0116-1615",
                price: 13.99,
                image: imagePath('873.jpg')
              },
              {
                name: "0116-1623",
                price: 13.99,
                image: imagePath('874.jpg')
              },
              {
                name: "0116-1617",
                price: 13.99,
                image: imagePath('875.jpg')
              },
              {
                name: "0116-1626",
                price: 13.99,
                image: imagePath('876.jpg')
              },
              {
                name: "0116-1612",
                price: 13.99,
                image: imagePath('877.jpg')
              },
  
              {
                name: "0116-1621",
                price: 13.99,
                image: imagePath('878.jpg')
              },
              {
                name: "0116-1621",
                price: 13.99,
                image: imagePath('879.jpg')
              },
              {
                name: "0116-1624",
                price: 13.99,
                image: imagePath('880.jpg')
              },
              ]
            },]
        },
        {
          name: "Sporting Good",
          items: [
            {
              name: "Item #9110 - $28.00 each",
              description: "Basketballs - All over print",
              products: [{
                name: "9110-1602 Turquoise",
                price: 13.99,
                image: imagePath('885.jpg')
  
              },
              {
                name: "9110-1601 Black",
                price: 13.99,
                image: imagePath('887.jpg')
              },
              {
                name: "9110-1604 Purple",
                price: 13.99,
                image: imagePath('888.jpg')
              },
              {
                name: "9110-1609 Brown",
                price: 13.99,
                image: imagePath('890.jpg')
              },
              ]
            },
            {
              name: "Item #9111 - $28.00 each",
              description: "Basketballs - Print/Skip",
              products: [{
                name: "9111-1601 Black",
                price: 13.99,
                image: imagePath('884.jpg')
  
              },
              {
                name: "9111-1602 Turquoise",
                price: 13.99,
                image: imagePath('886.jpg')
              },
              {
                name: "9111-1604 Purple",
                price: 13.99,
                image: imagePath('889.jpg')
              },
              {
                name: "9111-1605 Burgundy",
                price: 13.99,
                image: imagePath('891.jpg')
              },
              ]
            },
            {
              name: "Item #9111 - $28.00 each",
              description: "Basketballs - Print/Skip",
              products: [{
                name: "9111-1601 Black",
                price: 13.99,
                image: imagePath('884.jpg')
  
              },
              {
                name: "9111-1602 Turquoise",
                price: 13.99,
                image: imagePath('886.jpg')
              },
              {
                name: "9111-1604 Purple",
                price: 13.99,
                image: imagePath('889.jpg')
              },
              {
                name: "9111-1605 Burgundy",
                price: 13.99,
                image: imagePath('891.jpg')
              },
              ]
            },
            {
              name: "Item #9118 - $28.00 each",
              description: "Basketballs - Neon Black Collection - Size 7",
              products: [{
                name: "9110-1604 Purple",
                price: 13.99,
                image: imagePath('892.jpg')
  
              },
              {
                name: "9110-1604 Purple",
                price: 13.99,
                image: imagePath('893.jpg')
              },
              {
                name: "9110-1609 Brown",
                price: 13.99,
                image: imagePath('894.jpg')
              },
              {
                name: "9110-1609 Brown",
                price: 13.99,
                image: imagePath('895.jpg')
              },
              {
                name: "9110-1601 Black",
                price: 13.99,
                image: imagePath('896.jpg')
              },
              {
                name: "9110-1601 Black",
                price: 13.99,
                image: imagePath('903.jpg')
              },
              ]
            },
            {
              name: "Item #9118 - $28.00 each",
              description: "Basketballs - Neon Black Collection - Size 7",
              products: [{
                name: "9117-1681 Blue",
                price: 13.99,
                image: imagePath('897.jpg')
              },
              {
                name: "9117-1685 Purple",
                price: 13.99,
                image: imagePath('898.jpg')
              },
              {
                name: "9117-1682 Green",
                price: 13.99,
                image: imagePath('899.jpg')
              },
              {
                name: "9117-1686 Red",
                price: 13.99,
                image: imagePath('900.jpg')
              },
              {
                name: "9117-1685 Pink",
                price: 13.99,
                image: imagePath('901.jpg')
              },
              {
                name: "9117-1687 Turquoise",
                price: 13.99,
                image: imagePath('902.jpg')
              },
              ]
            },
            {
              name: "Item #9115 - $20.00 each",
              description: "Volleyballs",
              products: [{
                name: "9110-1611 White",
                price: 13.99,
                image: imagePath('904.jpg')
              },
              ]
            },
            {
              name: "Item #9115 - $20.00 each",
              description: "Volleyballs",
              products: [{
                name: "9116- 1607 Red",
                price: 13.99,
                image: imagePath('905.jpg')
              },
              {
                name: "9116-1601 Black",
                price: 13.99,
                image: imagePath('906.jpg')
              },
              {
                name: "9116-1610 White",
                price: 13.99,
                image: imagePath('907.jpg')
              },
              ]
            },
            {
              name: "Item #9112 (Adult) - $24.00 each",
              description: "Footballs",
              products: [{
                name: "9112-1601 Brown",
                price: 13.99,
                image: imagePath('908.jpg')
              },
              {
                name: "9112-1602 Turquoise",
                price: 13.99,
                image: imagePath('909.jpg')
              },
              {
                name: "9112-1612 Oakland",
                price: 13.99,
                image: imagePath('910.jpg')
              },
              {
                name: "9112-1601 Black",
                price: 13.99,
                image: imagePath('911.jpg')
              },
              ]
            },
            {
              name: "Item #9113 (Youth) - $20.00 each",
              description: "Footballs",
              products: [{
                name: "9112-1601 Brown",
                price: 13.99,
                image: imagePath('908.jpg')
              },
              {
                name: "9112-1602 Turquoise",
                price: 13.99,
                image: imagePath('909.jpg')
              },
              {
                name: "9112-1612 Oakland",
                price: 13.99,
                image: imagePath('910.jpg')
              },
              {
                name: "9112-1601 Black",
                price: 13.99,
                image: imagePath('911.jpg')
              },
              ]
            },]
        },
        {
          name: "Wallet",
          items: [
            {
              name: "Item # 0511- $12.99 each",
              description: "Men’s Fleece Printed Bi-fold Wallet",
              products: [{
                name: "0511-1601 Black",
                price: 13.99,
                image: imagePath('912.jpg')
              },
              {
                name: "0511-1607 Red",
                price: 13.99,
                image: imagePath('913.jpg')
              },
              {
                name: "0511-1602 Blue",
                price: 13.99,
                image: imagePath('921.jpg')
              },
              {
                name: "0511-1608 Grey",
                price: 13.99,
                image: imagePath('922.jpg')
              },
              {
                name: "0511-1603 Mint",
                price: 13.99,
                image: imagePath('923.jpg'),
                image2: imagePath('925.jpg')
              },
              {
                name: "0511-1609 Tan",
                price: 13.99,
                image: imagePath('924.jpg')
              },
              ]
            },
            {
              name: "Item # 0511- $12.99 each",
              description: "Men’s Fleece Printed Bi-fold Wallet",
              products: [{
                name: "0520-1620",
                price: 13.99,
                image: imagePath('914.jpg')
              },
              {
                name: "0520-1621",
                price: 13.99,
                image: imagePath('915.jpg')
              },
              {
                name: "0520-1624",
                price: 13.99,
                image: imagePath('916.jpg')
              },
              {
                name: "0520-1611",
                price: 13.99,
                image: imagePath('917.jpg')
              },
              {
                name: "0520-1612",
                price: 13.99,
                image: imagePath('918.jpg')
  
              },
              {
                name: "0520-1616",
                price: 13.99,
                image: imagePath('919.jpg')
              },
              {
                name: "0520-1617",
                price: 13.99,
                image: imagePath('920.jpg')
              },
              {
                name: "0520-1619",
                price: 13.99,
                image: imagePath('928.jpg')
              },
              ]
            },
            {
              name: "Item # 0544 - $12.99 each",
              description: "Men’s Fabric Printed Bi-fold Wallet",
              products: [{
                name: "0544- 1619 NE",
                price: 13.99,
                image: imagePath('929.jpg')
              },
              {
                name: "0544-1624 NO",
                price: 13.99,
                image: imagePath('930.jpg')
              },
              {
                name: "0544- 1908 Grey",
                price: 13.99,
                image: imagePath('935.jpg')
              },
              {
                name: "0544-1901 Black",
                price: 13.99,
                image: imagePath('936.jpg')
              },
              {
                name: "0544-1612 Oak",
                price: 13.99,
                image: imagePath('937.jpg')
  
              },
              {
                name: "0544-1902 Turquoise",
                price: 13.99,
                image: imagePath('938.jpg')
              },
              {
                name: "0544-1911 Sea",
                price: 13.99,
                image: imagePath('939.jpg')
              },
              {
                name: "0544-1616 Dal",
                price: 13.99,
                image: imagePath('940.jpg')
              },
              ]
            },
            {
              name: "Item # 0544 - $12.99 each",
              description: "Men’s Fabric Printed Bi-fold Wallet",
              products: [{
                name: "0517-1601",
                price: 13.99,
                image: imagePath('941.jpg')
              },
              {
                name: "0517-1602",
                price: 13.99,
                image: imagePath('942.jpg')
              },
              {
                name: "0517-1603",
                price: 13.99,
                image: imagePath('931.jpg')
              },
              {
                name: "0517-1607",
                price: 13.99,
                image: imagePath('932.jpg')
              },
              {
                name: "0517-1608",
                price: 13.99,
                image: imagePath('933.jpg')
  
              },
              {
                name: "0517-1608",
                price: 13.99,
                image: imagePath('934.jpg')
  
              },
              ]
            },
            {
              name: "Item # 0544 - $12.99 each",
              description: "Men’s Fabric Printed Bi-fold Wallet",
              products: [{
                name: "0513-1601 Black",
                price: 13.99,
                image: imagePath('943.jpg')
              },
              {
                name: "0513-1607 Red",
                price: 13.99,
                image: imagePath('946.jpg')
              },
              {
                name: "0517-1607",
                price: 13.99,
                image: imagePath('951.jpg')
              },
              {
                name: "0513-1609 Tan",
                price: 13.99,
                image: imagePath('952.jpg')
  
              },
              {
                name: "0513-1602 Turquoise",
                price: 13.99,
                image: imagePath('953.jpg')
  
              },
              {
                name: "0513-1608 Grey",
                price: 13.99,
                image: imagePath('955.jpg'),
                image2: imagePath('950.jpg'),
                image3: imagePath('951.jpg')
  
              },
              {
                name: "0513-1606 Pink",
                price: 13.99,
                image: imagePath('957.jpg')
  
              },
              {
                name: "0513-1603 Mint",
                price: 13.99,
                image: imagePath('959.jpg')
  
              },
              ]
            },
            {
              name: "Item #0519 - $14.99 each",
              description: "Designer Ladies Wallets",
              products: [{
                name: "0519-1606",
                price: 13.99,
                image: imagePath('944.jpg')
              },
              {
                name: "0519-1602",
                price: 13.99,
                image: imagePath('945.jpg')
              },
              {
                name: "0519-1605",
                price: 13.99,
                image: imagePath('947.jpg')
              },
              {
                name: "0519-1601",
                price: 13.99,
                image: imagePath('954.jpg')
  
              },
              {
                name: "0519-1607",
                price: 13.99,
                image: imagePath('956.jpg')
  
              },
              {
                name: "0519-1604",
                price: 13.99,
                image: imagePath('958.jpg')
  
              },
              ]
            },
            {
              name: "Item #0518 - $14.99 each",
              description: "Designer Ladies Wallets",
              products: [{
                name: "0519-1606",
                price: 13.99,
                image: imagePath('960.jpg'),
                image2: imagePath('969.jpg')
              },
              {
                name: "0518-1642 Green Lizard",
                price: 13.99,
                image: imagePath('970.jpg')
              },
              {
                name: "0518-1643 Teal Power",
                price: 13.99,
                image: imagePath('971.jpg')
              },
              {
                name: "0518-1644 Zarape",
                price: 13.99,
                image: imagePath('972.jpg')
  
              },
              {
                name: "0518-1645 Pink Berry",
                price: 13.99,
                image: imagePath('973.jpg')
  
              },
              {
                name: "0518-1646 Orange Fog",
                price: 13.99,
                image: imagePath('974.jpg')
  
              },
              {
                name: "0518-1647 Purple Mint",
                price: 13.99,
                image: imagePath('975.jpg')
  
              },
  
              ]
            },
            {
              name: "Item #0518 - $14.99 each",
              description: "Designer Ladies Wallets",
              products: [{
                name: "0512-1602 Turquoise",
                price: 13.99,
                image: imagePath('961.jpg'),
                image2: imagePath('968.jpg'),
                image3: imagePath('969.jpg')
              },
              {
                name: "0512-1604 Purple",
                price: 13.99,
                image: imagePath('962.jpg')
              },
              {
                name: "0512-1606 Pink",
                price: 13.99,
                image: imagePath('963.jpg')
              },
              {
                name: "0512-1607 Red",
                price: 13.99,
                image: imagePath('964.jpg')
  
              },
              {
                name: "0512-1608 Grey",
                price: 13.99,
                image: imagePath('965.jpg')
  
              },
              {
                name: "0512-1609 Tan",
                price: 13.99,
                image: imagePath('966.jpg')
  
              },
              {
                name: "0512-1601 Black",
                price: 13.99,
                image: imagePath('976.jpg')
  
              },
              {
                name: "0512-1603 Mint",
                price: 13.99,
                image: imagePath('977.jpg')
  
              },
  
              ]
            },
            {
              name: "Item #0521 - $24.99 each",
              description: "Designer Fleece Printed Crossbody Purse with zipper",
              products: [{
                name: "0521-1601 Black",
                price: 13.99,
                image: imagePath('978.jpg'),
              },
              {
                name: "0521-1602 Turquoise",
                price: 13.99,
                image: imagePath('979.jpg')
              },
              {
                name: "0521-1603 Mint",
                price: 13.99,
                image: imagePath('980.jpg')
              },
              {
                name: "0521-1604 Purple",
                price: 13.99,
                image: imagePath('981.jpg')
  
              },
              {
                name: "0521-1605 Burgundy",
                price: 13.99,
                image: imagePath('982.jpg')
  
              },
              {
                name: "0521-1606 Pink",
                price: 13.99,
                image: imagePath('983.jpg')
  
              },
              ]
            },
  
            {
              name: "Item #0561- $24.99 each",
              description: "Designer Fleece Printed Crossbody Purse with zipper",
              products: [{
                name: "0561 Diamond Glow",
                price: 13.99,
                image: imagePath('984.jpg'),
              },
              {
                name: "0561 Pink Berry",
                price: 13.99,
                image: imagePath('985.jpg')
              },
              {
                name: "0561 Orange Fog",
                price: 13.99,
                image: imagePath('986.jpg')
              },
              {
                name: "0561 Green Lizard",
                price: 13.99,
                image: imagePath('987.jpg')
  
              },
              {
                name: "0561 Fire",
                price: 13.99,
                image: imagePath('988.jpg')
  
              },
              {
                name: "0561 Diamond Azure",
                price: 13.99,
                image: imagePath('989.jpg')
  
              },
              {
                name: "0561 Zarape",
                price: 13.99,
                image: imagePath('990.jpg')
  
              },
              {
                name: "0561 Teal Power",
                price: 13.99,
                image: imagePath('991.jpg')
  
              },
              ]
            },
            {
              name: "Item #0522 - $28.99 each",
              description: "Designer Fleece Printed Crossbody Purse with Flap",
              products: [{
                name: "0522-1606 Pink",
                price: 13.99,
                image: imagePath('993.jpg'),
              },
              {
                name: "0522-1601 Black",
                price: 13.99,
                image: imagePath('994.jpg')
              },
              {
                name: "0522-1602 Turquoise",
                price: 13.99,
                image: imagePath('995.jpg'),
                image2: imagePath('998.jpg')
              },
              {
                name: "0522-1604 Purple",
                price: 13.99,
                image: imagePath('996.jpg')
  
              },
              {
                name: "0522-1605 Burgundy",
                price: 13.99,
                image: imagePath('997.jpg')
  
              },
              ]
            },
            {
              name: "Item #0562 - $28.99 each",
              description: "Designer Fleece Printed Crossbody Purse with Flap",
              products: [{
                name: "0562 Green Lizard",
                price: 13.99,
                image: imagePath('999.jpg'),
              },
              {
                name: "0562 Pink Berry",
                price: 13.99,
                image: imagePath('1000.jpg')
              },
              {
                name: "0562 Diamond Azure",
                price: 13.99,
                image: imagePath('1001.jpg')
              },
              {
                name: "0562 Zarape",
                price: 13.99,
                image: imagePath('1002.jpg')
  
              },
              {
                name: "0562 Purple Mint",
                price: 13.99,
                image: imagePath('1003.jpg')
  
              },
              {
                name: "0562 Teal Power",
                price: 13.99,
                image: imagePath('1004.jpg')
  
              },
              {
                name: "0562 Orange Fog",
                price: 13.99,
                image: imagePath('1005.jpg')
  
              },
              {
                name: "0562 Diamond Glow",
                price: 13.99,
                image: imagePath('1006.jpg')
  
              },
              {
                name: "0562 Fire",
                price: 13.99,
                image: imagePath('1007.jpg')
  
              },
              ]
            },
            {
              name: "Item #0562 - $28.99 each",
              description: "Designer Fleece Printed Crossbody Purse with Flap",
              products: [{
                name: "0523-1602 Turquoise",
                price: 13.99,
                image: imagePath('1008.jpg'),
              },
              {
                name: "0523-1601 Black",
                price: 13.99,
                image: imagePath('1009.jpg')
              },
              {
                name: "0523-1603 Mint",
                price: 13.99,
                image: imagePath('1010.jpg')
              },
              {
                name: "0523-1604 Purple",
                price: 13.99,
                image: imagePath('1011.jpg')
  
              },
              {
                name: "0523-1605 Burgundy",
                price: 13.99,
                image: imagePath('1012.jpg')
  
              },
              {
                name: "0523-1606 Pink",
                price: 13.99,
                image: imagePath('1013.jpg')
  
              },
              ]
            },
            {
              name: "Item #0563 - $35.99 each",
              description: "Designer Fleece Printed Shoulder Bag with front zippers",
              products: [{
                name: "0562 Green Lizard",
                price: 13.99,
                image: imagePath('1014.jpg'),
              },
              {
                name: "0562 Pink Berry",
                price: 13.99,
                image: imagePath('1015.jpg')
              },
              {
                name: "0562 Diamond Azure",
                price: 13.99,
                image: imagePath('1016.jpg')
              },
              {
                name: "0562 Zarape",
                price: 13.99,
                image: imagePath('1017.jpg')
  
              },
              {
                name: "0562 Purple Mint",
                price: 13.99,
                image: imagePath('1018.jpg')
  
              },
              {
                name: "0562 Teal Power",
                price: 13.99,
                image: imagePath('1019.jpg')
  
              },
              {
                name: "0562 Orange Fog",
                price: 13.99,
                image: imagePath('1020.jpg')
  
              },
              {
                name: "0562 Diamond Glow",
                price: 13.99,
                image: imagePath('1021.jpg')
  
              },
              {
                name: "0562 Fire",
                price: 13.99,
                image: imagePath('1022.jpg')
  
              },
              ]
            },
            {
              name: "Item #0524 - $35.99 each",
              description: "Designer Fleece Printed Shoulder Bag with front pockets",
              products: [{
                name: "0524-1604 Purple",
                price: 13.99,
                image: imagePath('1023.jpg'),
              },
              {
                name: "0524-1601 Black",
                price: 13.99,
                image: imagePath('1024.jpg')
              },
              {
                name: "0524-1608 Grey",
                price: 13.99,
                image: imagePath('1025.jpg')
              },
              {
                name: "0524-1602 Turquoise",
                price: 13.99,
                image: imagePath('1026.jpg')
  
              },
              {
                name: "0524-1605 Burgundy",
                price: 13.99,
                image: imagePath('1027.jpg')
  
              },
              {
                name: "0524-1606 Pink",
                price: 13.99,
                image: imagePath('1028.jpg')
  
              },
              ]
            },
            {
              name: "Item #0564 - $35.99 each",
              description: "Designer Fleece Printed Shoulder Bag with front pockets",
              products: [{
                name: "0562 Green Lizard",
                price: 13.99,
                image: imagePath('1029.jpg'),
              },
              {
                name: "0562 Pink Berry",
                price: 13.99,
                image: imagePath('1030.jpg')
              },
              {
                name: "0562 Diamond Azure",
                price: 13.99,
                image: imagePath('1031.jpg')
              },
              {
                name: "0562 Zarape",
                price: 13.99,
                image: imagePath('1032.jpg')
  
              },
              {
                name: "0562 Purple Mint",
                price: 13.99,
                image: imagePath('1033.jpg')
  
              },
              {
                name: "0562 Teal Power",
                price: 13.99,
                image: imagePath('1034.jpg')
  
              },
              {
                name: "0562 Orange Fog",
                price: 13.99,
                image: imagePath('1035.jpg')
  
              },
              {
                name: "0562 Diamond Glow",
                price: 13.99,
                image: imagePath('1036.jpg')
  
              },
              {
                name: "0562 Fire",
                price: 13.99,
                image: imagePath('1037.jpg')
  
              },
              ]
            },
            {
              name: "Item #0564 - $35.99 each",
              description: "Designer Fleece Printed Shoulder Bag with front pockets",
              products: [{
                name: "0562 Green Lizard",
                price: 13.99,
                image: imagePath('1029.jpg'),
              },
              {
                name: "0562 Pink Berry",
                price: 13.99,
                image: imagePath('1030.jpg')
              },
              {
                name: "0562 Diamond Azure",
                price: 13.99,
                image: imagePath('1031.jpg')
              },
              {
                name: "0562 Zarape",
                price: 13.99,
                image: imagePath('1032.jpg')
  
              },
              {
                name: "0562 Purple Mint",
                price: 13.99,
                image: imagePath('1033.jpg')
  
              },
              {
                name: "0562 Teal Power",
                price: 13.99,
                image: imagePath('1034.jpg')
  
              },
              {
                name: "0562 Orange Fog",
                price: 13.99,
                image: imagePath('1035.jpg')
  
              },
              {
                name: "0562 Diamond Glow",
                price: 13.99,
                image: imagePath('1036.jpg')
  
              },
              {
                name: "0562 Fire",
                price: 13.99,
                image: imagePath('1037.jpg')
  
              },
              ]
            },
            {
              name: "Item #0564 - $35.99 each",
              description: "Designer Fleece Printed Shoulder Bag with front pockets",
              products: [{
                name: "0539-1601 Turquoise",
                price: 13.99,
                image: imagePath('1038.jpg'),
              },
              {
                name: "0539-1605 Burgundy",
                price: 13.99,
                image: imagePath('1039.jpg')
              },
              {
                name: "0539-1608 Grey",
                price: 13.99,
                image: imagePath('1040.jpg')
              },
              {
                name: "0539-1604 Purple",
                price: 13.99,
                image: imagePath('1041.jpg')
  
              },
              {
                name: "0539-1607 Red",
                price: 13.99,
                image: imagePath('1042.jpg')
  
              },
              {
                name: "0539-1603 Mint",
                price: 13.99,
                image: imagePath('1043.jpg')
  
              },
              {
                name: "0539-1606 Hot Pink",
                price: 13.99,
                image: imagePath('1044.jpg')
  
              },
              {
                name: "0539-1609 Tan",
                price: 13.99,
                image: imagePath('1045.jpg')
  
              },
              {
                name: "0539-1601 Black",
                price: 13.99,
                image: imagePath('1046.jpg')
  
              },
  
              ]
            },
            {
              name: "Item #1538 - $16.99 each",
              description: "Designer Heavy Duty Tote Bag",
              products: [{
                name: "1538-3 (9)",
                price: 13.99,
                image: imagePath('1047.jpg'),
              },
              {
                name: "1538-6 (8)",
                price: 13.99,
                image: imagePath('1048.jpg')
              },
              {
                name: "1538-9 (9)",
                price: 13.99,
                image: imagePath('1049.jpg')
              },
              {
                name: "1538-5 (9)",
                price: 13.99,
                image: imagePath('1050.jpg')
  
              },
              {
                name: "1538-8 (10)",
                price: 13.99,
                image: imagePath('1051.jpg')
  
              },
              {
                name: "1538-4 (9)",
                price: 13.99,
                image: imagePath('1052.jpg')
  
              },
              {
                name: "1538-7 (9)",
                price: 13.99,
                image: imagePath('1053.jpg')
  
              },
              {
                name: "1538-2 (8)",
                price: 13.99,
                image: imagePath('1054.jpg')
  
              },
              {
                name: "1538-2 (5)",
                price: 13.99,
                image: imagePath('1055.jpg')
  
              },
              {
                name: "1538-1 (8)",
                price: 13.99,
                image: imagePath('1056.jpg')
  
              },
  
              ]
            },
            {
              name: "Item #1537 - $16.99 each",
              description: "Designer Heavy Duty Tote Bag",
              products: [{
                name: "1537-navy",
                price: 13.99,
                image: imagePath('1057.jpg'),
              },
              {
                name: "1537-yellow",
                price: 13.99,
                image: imagePath('1058.jpg')
              },
              {
                name: "1537-green",
                price: 13.99,
                image: imagePath('1059.jpg')
              },
              {
                name: "1537-turquoise",
                price: 13.99,
                image: imagePath('1060.jpg')
  
              },
              {
                name: "1537-red",
                price: 13.99,
                image: imagePath('1061.jpg')
  
              },
              {
                name: "1537-turquoise",
                price: 13.99,
                image: imagePath('1062.jpg')
  
              },
              ]
            },
            {
              name: "Item #2537 - $16.99 each (Medicine Wheel Serape)",
              description: "Designer Heavy Duty Tote Bag with top zipper,",
              products: [{
                name: "2537",
                price: 13.99,
                image: imagePath('1063.jpg'),
              },
              ]
            },
            {
              name: "Item #1537 - $16.99 each",
              description: "Designer Heavy Duty Tote Bag",
              products: [{
                name: "2536-Purple",
                price: 13.99,
                image: imagePath('1064.jpg'),
              },
              {
                name: "2536-Red",
                price: 13.99,
                image: imagePath('1068.jpg')
              },
              {
                name: "2536-Burgundy",
                price: 13.99,
                image: imagePath('1070.jpg')
              },
              {
                name: "1537-turquoise",
                price: 13.99,
                image: imagePath('1074.jpg')
  
              },
              ]
            },
            {
              name: "Item #2538 - $16.99 each (16112 Team Spirit (c))",
              description: "Designer Heavy Duty Tote Bag with top zipper,",
              products: [{
                name: "2538-4",
                price: 13.99,
                image: imagePath('1065.jpg'),
              },
              {
                name: "2538-6",
                price: 13.99,
                image: imagePath('1066.jpg')
              },
              {
                name: "2538-1",
                price: 13.99,
                image: imagePath('1067.jpg')
              },
              {
                name: "2538-2",
                price: 13.99,
                image: imagePath('1069.jpg')
  
              },
              {
                name: "2538-2",
                price: 13.99,
                image: imagePath('1071.jpg')
  
              },
              {
                name: "2538-5",
                price: 13.99,
                image: imagePath('1072.jpg')
  
              },
              {
                name: "2538-0",
                price: 13.99,
                image: imagePath('1073.jpg')
  
              },
              ]
            },
            {
              name: "Item #1340 - $20.00 each",
              description: "Designer Printed Bingo Bag with small inside purse, great for makeup ag, or utility bag",
              products: [{
                name: "2538-4",
                price: 13.99,
                image: imagePath('1065.jpg'),
              },
              {
                name: "2538-6",
                price: 13.99,
                image: imagePath('1066.jpg')
              },
              {
                name: "2538-1",
                price: 13.99,
                image: imagePath('1067.jpg')
              },
              {
                name: "2538-2",
                price: 13.99,
                image: imagePath('1069.jpg')
  
              },
              {
                name: "2538-2",
                price: 13.99,
                image: imagePath('1071.jpg')
  
              },
              {
                name: "2538-5",
                price: 13.99,
                image: imagePath('1072.jpg')
  
              },
              {
                name: "2538-0",
                price: 13.99,
                image: imagePath('1073.jpg')
  
              },
              ]
            },
            {
              name: "Item #1340 - $20.00 each",
              description: "Designer Printed Bingo Bag with small inside purse, great for makeup ag, or utility bag",
              products: [{
                name: "1340 - 1601 Black",
                price: 13.99,
                image: imagePath('1075.jpg'),
              },
              {
                name: "1340 - 1603 Mint",
                price: 13.99,
                image: imagePath('1076.jpg')
              },
              {
                name: "1340 - 1602 Turquoise",
                price: 13.99,
                image: imagePath('1077.jpg')
              },
              {
                name: "1340 - 1604 Purple",
                price: 13.99,
                image: imagePath('1078.jpg')
  
              },
              ]
            },
            {
              name: "Item #0533 (16112 Classic) - $25.99 each",
              description: "Medium Duffel Bags comes with shoulder strap and hand straps, 2 zippered side compartments, mesh soda holder on side",
              products: [{
                name: "0533-1603 Mint",
                price: 13.99,
                image: imagePath('1079.jpg'),
              },
              {
                name: "0533-1601 Black",
                price: 13.99,
                image: imagePath('1080.jpg')
              },
              {
                name: "0533-1602 Turquoise",
                price: 13.99,
                image: imagePath('1081.jpg')
              },
              {
                name: "0533-1605 Burgundy",
                price: 13.99,
                image: imagePath('1082.jpg')
  
              },
              {
                name: "0533-1604 Purple",
                price: 13.99,
                image: imagePath('1083.jpg')
  
              },
              {
                name: "0533-1608 Grey",
                price: 13.99,
                image: imagePath('1084.jpg')
  
              },
              {
                name: "0533-1609 Tan",
                price: 13.99,
                image: imagePath('1085.jpg')
              },
              ]
            },
            {
              name: "Item #1534 (16112 Gradient Colors) - $25.99 each",
              description: "Medium Duffel Bags comes with shoulder strap and hand straps, 2 zippered side compartments, mesh soda holder on side",
              products: [{
                name: "1534-Diamond Azure",
                price: 13.99,
                image: imagePath('1086.jpg'),
              },
              {
                name: "1534-Green Lizard",
                price: 13.99,
                image: imagePath('1087.jpg')
              },
              {
                name: "1534- Diamond Glow",
                price: 13.99,
                image: imagePath('1088.jpg')
              },
              {
                name: "1534-Teal Power",
                price: 13.99,
                image: imagePath('1089.jpg')
  
              },
              {
                name: "1534-Zarape",
                price: 13.99,
                image: imagePath('1090.jpg')
  
              },
              {
                name: "1534-Purple Minty",
                price: 13.99,
                image: imagePath('1091.jpg')
  
              },
              {
                name: "1534-Fire",
                price: 13.99,
                image: imagePath('1092.jpg')
              },
              {
                name: "1534-Orange Fog",
                price: 13.99,
                image: imagePath('1093.jpg')
              },
              {
                name: "1534-Pink Berry",
                price: 13.99,
                image: imagePath('1094.jpg')
              },
              ]
            },
            {
              name: "Item #1534 (16112 Gradient Colors) - $25.99 each",
              description: "Medium Duffel Bags comes with shoulder strap and hand straps, 2 zippered side compartments, mesh soda holder on side",
              products: [{
                name: "1535-1 Purple",
                price: 13.99,
                image: imagePath('1095.jpg'),
              },
              {
                name: "1535-2 Oak",
                price: 13.99,
                image: imagePath('1096.jpg'),
                image2: imagePath('1100.jpg')
              },
              {
                name: "1535-3 Black",
                price: 13.99,
                image: imagePath('1097.jpg')
              },
              {
                name: "1535-4 Grey",
                price: 13.99,
                image: imagePath('1098.jpg')
  
              },
              {
                name: "1535-5 Turquoise",
                price: 13.99,
                image: imagePath('1099.jpg')
  
              },
              ]
            },
            {
              name: "Item #1534 (16112 Gradient Colors) - $25.99 each",
              description: "Medium Duffel Bags comes with shoulder strap and hand straps, 2 zippered side compartments, mesh soda holder on side",
              products: [{
                name: "0532-1602 Turquoise",
                price: 13.99,
                image: imagePath('1101.jpg')
              },
              {
                name: "0532-1605 Burgundy",
                price: 13.99,
                image: imagePath('1102.jpg')
  
              },
              {
                name: "0532-1604 Purple",
                price: 13.99,
                image: imagePath('1103.jpg')
              },
              {
                name: "0532-1601 Black",
                price: 13.99,
                image: imagePath('1104.jpg')
  
              },
              {
                name: "0532-1603 Mint",
                price: 13.99,
                image: imagePath('1105.jpg')
  
              },
              {
                name: "0532-1608 Grey",
                price: 13.99,
                image: imagePath('1106.jpg')
  
              },
              ]
            },
            {
              name: "Item #1329 - $29.99 each",
              description: "Diaper Bags",
              products: [{
                name: "1329-1602 Turquoise",
                price: 13.99,
                image: imagePath('1107.jpg')
              },
              {
                name: "1329-1604 Purple",
                price: 13.99,
                image: imagePath('1108.jpg')
  
              },
              {
                name: "1329-1607 Red",
                price: 13.99,
                image: imagePath('1109.jpg')
              },
              {
                name: "1329-1601 Black",
                price: 13.99,
                image: imagePath('1110.jpg'),
                image2: imagePath('1111.jpg'),
                image3: imagePath('1111.jpg')
  
              },
              ]
            },
            {
              name: "Item #1329 - $29.99 each",
              description: "Diaper Bags",
              products: [{
                name: "0531- 1603 Mint",
                price: 13.99,
                image: imagePath('1113.jpg')
              },
              {
                name: "0531- 1601 Black",
                price: 13.99,
                image: imagePath('1114.jpg')
  
              },
              {
                name: "0531- 1605 Burgundy",
                price: 13.99,
                image: imagePath('1115.jpg')
              },
              {
                name: "0531- 1604 Purple",
                price: 13.99,
                image: imagePath('1116.jpg')
  
              },
              {
                name: "0531- 1606 Hot Pink",
                price: 13.99,
                image: imagePath('1117.jpg')
  
              },
              {
                name: "0531- 1609 Tan",
                price: 13.99,
                image: imagePath('1118.jpg')
  
              },
              {
                name: "0531- 1608 Grey",
                price: 13.99,
                image: imagePath('1119.jpg')
  
              },
              ]
            }, {
              name: "Item #0530",
              description: "Utility Backpack - 3 separate zippered compartments",
              products: [{
                name: "0530-1709 Brown",
                price: 13.99,
                image: imagePath('1120.jpg')
              },
              {
                name: "0530-1708 Grey",
                price: 13.99,
                image: imagePath('1121.jpg')
  
              },
              {
                name: "0530-1602 Turquioise",
                price: 13.99,
                image: imagePath('1122.jpg')
              },
              {
                name: "0530-1609 Tan",
                price: 13.99,
                image: imagePath('1123.jpg')
              },
              {
                name: "0530-1608 Grey",
                price: 13.99,
                image: imagePath('1124.jpg')
              },
              {
                name: "0530-1605 Burgundy",
                price: 13.99,
                image: imagePath('1125.jpg')
              },
              {
                name: "0530-1606 Hot Pink",
                price: 13.99,
                image: imagePath('1126.jpg')
              },
              {
                name: "0530-1604 Purple",
                price: 13.99,
                image: imagePath('1127.jpg')
              },
              {
                name: "0530-1603 Mint",
                price: 13.99,
                image: imagePath('1128.jpg')
              },
              {
                name: "0530-1602 Turquioise",
                price: 13.99,
                image: imagePath('1129.jpg')
              },
              {
                name: "0530-1601 Black",
                price: 13.99,
                image: imagePath('1130.jpg')
              },
              ]
            },
            { name: "Stationary", items: [] },
            {
              name: "Item #1553 - $16.99 each",
              description: "Printed Zippered Portfolio/Organizer",
              products: [{
                name: "1553-1604 Purple",
                price: 13.99,
                image: imagePath('1133.jpg')
              },
              {
                name: "1553-1601 Black",
                price: 13.99,
                image: imagePath('1134.jpg')
              },
              {
                name: "1553-1603 Mint",
                price: 13.99,
                image: imagePath('1135.jpg'),
                image2: imagePath('1136.jpg')
              },
              ]
            },
            {
              name: "Item #1564 - $2.50 each",
              description: "Diamond Pen (Diamond Star)",
              products: [{
                name: "1564-1",
                price: 13.99,
                image: imagePath('1140.jpg')
              },
              {
                name: "1564-2",
                price: 13.99,
                image: imagePath('1141.jpg')
              },
              {
                name: "1564-3",
                price: 13.99,
                image: imagePath('1149.jpg')
              },
              {
                name: "1564-4",
                price: 13.99,
                image: imagePath('1150.jpg')
              },
              ]
            },
            {
              name: "Item #1531- $15.99 each",
              description: "Printed Neoprene Laptop Bag 15” with zipper closure",
              products: [{
                name: "1531-1601 Black",
                price: 13.99,
                image: imagePath('1143.jpg')
              },
              {
                name: "1531-1602 Turquoise",
                price: 13.99,
                image: imagePath('1144.jpg')
              },
              {
                name: "1531-1608 Grey",
                price: 13.99,
                image: imagePath('1145.jpg')
              },
              {
                name: "1531-1604 Purple",
                price: 13.99,
                image: imagePath('1146.jpg')
              },
              {
                name: "1531-1612 Oak",
                price: 13.99,
                image: imagePath('1147.jpg')
              },
              {
                name: "1531-1616 Dal",
                price: 13.99,
                image: imagePath('1148.jpg')
              },
              ]
            },
            {
              name: "Item #1531- $15.99 each",
              description: "Printed Neoprene Laptop Bag 15” with zipper closure",
              products: [{
                name: "1566-7",
                price: 13.99,
                image: imagePath('1142.jpg')
              },
              {
                name: "1566-1",
                price: 13.99,
                image: imagePath('1151.jpg')
              },
              {
                name: "1566-2",
                price: 13.99,
                image: imagePath('1152.jpg')
              },
              {
                name: "1566-3",
                price: 13.99,
                image: imagePath('1153.jpg')
              },
              {
                name: "1566-4",
                price: 13.99,
                image: imagePath('1154.jpg')
              },
              {
                name: "1566-5",
                price: 13.99,
                image: imagePath('1155.jpg')
              },
              {
                name: "1566-6",
                price: 13.99,
                image: imagePath('1156.jpg')
              },
              ]
            },
          ]
        },
        {
          name: "Lanyards", items: [
            {
              name: "Item #2515 - $5.00 each",
              description: "7 Lakes(C) Lanyard",
              products: [{
                name: "2515-2301",
                price: 13.99,
                image: imagePath('1157.jpg')
              },
              {
                name: "2515-2304",
                price: 13.99,
                image: imagePath('1158.jpg')
              },
              {
                name: "2515-2305",
                price: 13.99,
                image: imagePath('1165.jpg')
              },
              {
                name: "2515-2306",
                price: 13.99,
                image: imagePath('1166.jpg')
              },
              {
                name: "2515-2334",
                price: 13.99,
                image: imagePath('1167.jpg')
              },
              {
                name: "2515-2331",
                price: 13.99,
                image: imagePath('1168.jpg')
              },
              {
                name: "2515-2302",
                price: 13.99,
                image: imagePath('1170.jpg')
              },
              {
                name: "2515-2302",
                price: 13.99,
                image: imagePath('1169.jpg')
              },
              ]
            },
            {
              name: "Item #2516 - $5.00 each",
              description: "7 Lakes(C) Lanyard",
              products: [{
                name: "2516-1104",
                price: 13.99,
                image: imagePath('1159.jpg')
              },
              {
                name: "2516-1105",
                price: 13.99,
                image: imagePath('1160.jpg')
              },
              {
                name: "2516-1106",
                price: 13.99,
                image: imagePath('1161.jpg')
              },
              {
                name: "2516-1108",
                price: 13.99,
                image: imagePath('1162.jpg')
              },
              {
                name: "2516-1134",
                price: 13.99,
                image: imagePath('1163.jpg')
              },
              {
                name: "2516-1163",
                price: 13.99,
                image: imagePath('1164.jpg')
              },
              {
                name: "2516-1101",
                price: 13.99,
                image: imagePath('1171.jpg')
              },
              {
                name: "2516-1102",
                price: 13.99,
                image: imagePath('1172.jpg')
              },
              ]
            },
            {
              name: "Item #0515 - $5.00 each",
              description: "Double Sided Lanyards",
              products: [{
                name: "0515-1602 Turquoise",
                price: 13.99,
                image: imagePath('1173.jpg')
              },
              {
                name: "0515- 1605 Burgundy",
                price: 13.99,
                image: imagePath('1174.jpg')
              },
              {
                name: "0515- 1604 Purple",
                price: 13.99,
                image: imagePath('1175.jpg')
              },
              {
                name: "0515- 1608 Grey",
                price: 13.99,
                image: imagePath('1176.jpg')
              },
              {
                name: "0515 - 1603 Mint",
                price: 13.99,
                image: imagePath('1177.jpg')
              },
              {
                name: "0515- 1610 White",
                price: 13.99,
                image: imagePath('1178.jpg')
              },
              {
                name: "0515- 1631 Teal",
                price: 13.99,
                image: imagePath('1179.jpg')
              },
              {
                name: "0515 - 1606 Hot Pink",
                price: 13.99,
                image: imagePath('1180.jpg')
              },
              {
                name: "0515- 1601 Black",
                price: 13.99,
                image: imagePath('1181.jpg')
              },
              ]
            },
          ]
        },
        {
          name: "Outdoors", items: [
            {
              name: "Item #0613 - $55.99 each",
              description: "Double Sided Lanyards",
              products: [{
                name: "0613-7625",
                price: 13.99,
                image: imagePath('1182.jpg')
              },
              {
                name: "0613-1912",
                price: 13.99,
                image: imagePath('1183.jpg')
              },
              {
                name: "0613-MW2021",
                price: 13.99,
                image: imagePath('1184.jpg')
              },
              {
                name: "0613-MW2021-3",
                price: 13.99,
                image: imagePath('1185.jpg')
              },
              {
                name: "0613-7631",
                price: 13.99,
                image: imagePath('1186.jpg')
              },
              {
                name: "0613-1902",
                price: 13.99,
                image: imagePath('1187.jpg')
              },
              {
                name: "0613-1901",
                price: 13.99,
                image: imagePath('1188.jpg')
              },
              {
                name: "0613-1652",
                price: 13.99,
                image: imagePath('1189.jpg')
              },
              {
                name: "0613-1651",
                price: 13.99,
                image: imagePath('1190.jpg')
              },
              {
                name: "0613-1927a",
                price: 13.99,
                image: imagePath('1191.jpg')
              },
              {
                name: "0613-MW2021-1",
                price: 13.99,
                image: imagePath('1192.jpg')
              },
              {
                name: "0613-MW2021-2",
                price: 13.99,
                image: imagePath('1193.jpg')
              },
              ]
            },
            {
              name: "Item #0612 - $60.99 each",
              description: "Large Lawn Chairs with 2 cupholders, with side pocket and back pocket, comes with storage bag",
              products: [{
                name: "0612-MW21-1105",
                price: 13.99,
                image: imagePath('1194.jpg')
              },
              {
                name: "0612-19SG4 -1",
                price: 13.99,
                image: imagePath('1195.jpg')
              },
              {
                name: "0612-TS21MX-3",
                price: 13.99,
                image: imagePath('1196.jpg')
              },
              {
                name: "0612-TS21MX-4",
                price: 13.99,
                image: imagePath('1197.jpg')
              },
              {
                name: "0612-19SG4 -2",
                price: 13.99,
                image: imagePath('1202.jpg')
              },
              {
                name: "0612-19SG4 -3",
                price: 13.99,
                image: imagePath('1203.jpg')
              },
              {
                name: "0612-MW21-1101",
                price: 13.99,
                image: imagePath('1204.jpg')
              },
              {
                name: "0612-MW21-1102",
                price: 13.99,
                image: imagePath('1205.jpg')
              },
              {
                name: "0612-MW21-1104",
                price: 13.99,
                image: imagePath('1206.jpg')
              },
              {
                name: "0612-19SG4 -4",
                price: 13.99,
                image: imagePath('1207.jpg')
              },
              {
                name: "0612-TS21MX-1",
                price: 13.99,
                image: imagePath('1208.jpg')
              },
              {
                name: "0612-TS21MX-2",
                price: 13.99,
                image: imagePath('1209.jpg')
              },
              ]
            },
            {
              name: "Item #0614 - $55.99 each",
              description: "Director chair with side table and cupholder",
              products: [{
                name: "0614-MW BLK",
                price: 13.99,
                image: imagePath('1198.jpg')
              },
              {
                name: "0614-MW TQ",
                price: 13.99,
                image: imagePath('1199.jpg')
              },
              {
                name: "0614-TS BLK",
                price: 13.99,
                image: imagePath('1200.jpg')
              },
              {
                name: "0614-TS BUR",
                price: 13.99,
                image: imagePath('1201.jpg')
              },
              ]
            },
            {
              name: "Item #0614 - $60.99 each",
              description: "Taller Director Chair with side table and cupholder",
              products: [{
                name: "1614-1652",
                price: 13.99,
                image: imagePath('1210.jpg')
              },
              {
                name: "1614-1654",
                price: 13.99,
                image: imagePath('1211.jpg')
              },
              {
                name: "1614-1653",
                price: 13.99,
                image: imagePath('1212.jpg')
              },
              {
                name: "1614-2102",
                price: 13.99,
                image: imagePath('1213.jpg')
              },
              {
                name: "1614-2105",
                price: 13.99,
                image: imagePath('1214.jpg')
              },
              {
                name: "1614-2104",
                price: 13.99,
                image: imagePath('1215.jpg')
              },
              {
                name: "1614-2101",
                price: 13.99,
                image: imagePath('1216.jpg')
              },
              {
                name: "1614-1651",
                price: 13.99,
                image: imagePath('1217.jpg')
              },
              ]
            },
            {
              name: "Item #0615 - $59.99 each",
              description: "Folding Cot comes with storage bag, one piece except for 1 separate bar on each end very sturdy",
              products: [{
                name: "0615-1601 Black",
                price: 13.99,
                image: imagePath('1218.jpg')
              },
              {
                name: "0615-1606 Pink",
                price: 13.99,
                image: imagePath('1219.jpg')
              },
              {
                name: "0615-1602 Turquoise",
                price: 13.99,
                image: imagePath('1220.jpg')
              },
              {
                name: "0615-1603 Mint",
                price: 13.99,
                image: imagePath('1221.jpg')
              },
              {
                name: "0615-1604 Purple",
                price: 13.99,
                image: imagePath('1222.jpg')
              },
              ]
            },
  
            {
              name: "Item #1122 - $42.99 each",
              description: "Sleeping Bags Native comes with storage bag, full zipper, very comfortable and warm, folds out flat to a blanket",
              products: [{
                name: "1122-1601 Black",
                price: 13.99,
                image: imagePath('1227.jpg')
              },
              {
                name: "1122-1604 Purple",
                price: 13.99,
                image: imagePath('1228.jpg')
              },
              {
                name: "1122-1605 Burgundy",
                price: 13.99,
                image: imagePath('1229.jpg')
              },
              {
                name: "1122-1602 Turquoise",
                price: 13.99,
                image: imagePath('1230.jpg')
              },
              ]
            },
            {
              name: "Item #1111 (16112) - $15.99 each",
              description: "Foldable Wind-Proof Umbrella",
              products: [{
                name: "1111-1601 Black",
                price: 13.99,
                image: imagePath('1231.jpg')
              },
              {
                name: "1111-1608 Grey",
                price: 13.99,
                image: imagePath('1233.jpg')
              },
              {
                name: "1111-1604 Purple",
                price: 13.99,
                image: imagePath('1235.jpg')
              },
              {
                name: "1111-1602 Turquoise",
                price: 13.99,
                image: imagePath('1237.jpg')
              },
              {
                name: "1111-1605 Burgundy",
                price: 13.99,
                image: imagePath('1239.jpg')
              },
              {
                name: "1111-1603 Mint",
                price: 13.99,
                image: imagePath('1241.jpg')
              },
              ]
            },
            {
              name: "Item #1111 (16112) - $15.99 each",
              description: "Foldable Wind-Proof Umbrella",
              products: [{
                name: "1113- Black",
                price: 13.99,
                image: imagePath('1232.jpg')
              },
              {
                name: "1113-Grey",
                price: 13.99,
                image: imagePath('1234.jpg')
              },
              {
                name: "1113-Purple",
                price: 13.99,
                image: imagePath('1236.jpg')
              },
              {
                name: "1113- Turquoise",
                price: 13.99,
                image: imagePath('1238.jpg')
              },
              {
                name: "1113-Burgundy",
                price: 13.99,
                image: imagePath('1240.jpg')
              },
              {
                name: "1113- Mint",
                price: 13.99,
                image: imagePath('1242.jpg')
              },
              ]
            },
          ]
        },
        {
          name: "Kitchen", items: [
            {
              name: "Item #2365 - $12.00 each",
              description: "Apron with adjustable neck strap, one waist tie on each side",
              products: [{
                name: "2365-1603 Mint",
                price: 13.99,
                image: imagePath('1243.jpg')
              },
              {
                name: "2365-1607 Red",
                price: 13.99,
                image: imagePath('1244.jpg')
              },
              {
                name: "2365-1601 Black",
                price: 13.99,
                image: imagePath('1245.jpg')
              },
              ]
            },
            {
              name: "Item #2366 - $7.99 each",
              description: "Oven Mitt and Pot Holder Set",
              products: [{
                name: "2366-1601 Black",
                price: 13.99,
                image: imagePath('1246.jpg')
              },
              {
                name: "2366-1603 Mint",
                price: 13.99,
                image: imagePath('1247.jpg')
              },
              {
                name: "2366-1607 Red",
                price: 13.99,
                image: imagePath('1248.jpg')
              },
              ]
            },
            {
              name: "Item #2375",
              description: "Native Floral Print Apron with adjustable neck strap, one waist tie on each side and 2 pockets",
              products: [{
                name: "2375-2051 Black",
                price: 13.99,
                image: imagePath('1249.jpg')
              },
              {
                name: "2375-2052 Turquoise",
                price: 13.99,
                image: imagePath('1250.jpg')
              },
              {
                name: "2375-2054 Purple",
                price: 13.99,
                image: imagePath('1251.jpg')
              },
              {
                name: "2375-2056 Pink",
                price: 13.99,
                image: imagePath('1252.jpg')
              },
              ]
            },
            {
              name: "Item #2376 - $7.99 each",
              description: "Oven Mitt and Pot Holder Set",
              products: [{
                name: "2376-2051 Black",
                price: 13.99,
                image: imagePath('1253.jpg')
              },
              {
                name: "2375-2052 Turquoise",
                price: 13.99,
                image: imagePath('1254.jpg')
              },
              {
                name: "2375-2054 Purple",
                price: 13.99,
                image: imagePath('1255.jpg')
              },
              {
                name: "2375-2056 Pink",
                price: 13.99,
                image: imagePath('1256.jpg')
              },
              ]
            },
            {
              name: "Item #1312 - $8.99 per set",
              description: "Cutting Board Set",
              products: [{
                name: "1312-1912 Oak",
                price: 13.99,
                image: imagePath('1257.jpg')
              },
              {
                name: "1312-1902 Turquoise",
                price: 13.99,
                image: imagePath('1258.jpg')
              },
              {
                name: "1312-1909 Tan",
                price: 13.99,
                image: imagePath('1259.jpg')
              },
              {
                name: "1312-1910 White",
                price: 13.99,
                image: imagePath('1260.jpg')
              },
              {
                name: "1312-1908 Grey",
                price: 13.99,
                image: imagePath('1261.jpg')
              },
              {
                name: "1312-1936 Sage",
                price: 13.99,
                image: imagePath('1262.jpg')
              },
  
              ]
            },
            {
              name: "Item #1312 - $8.99 per set",
              description: "Cutting Board Set",
              products: [{
                name: "1313-Diamond Black",
                price: 13.99,
                image: imagePath('1264.jpg')
              },
              {
                name: "1313-Diamond Purple",
                price: 13.99,
                image: imagePath('1265.jpg')
              },
              {
                name: "1313-Diamond Glow",
                price: 13.99,
                image: imagePath('1266.jpg')
              },
              {
                name: "1313-Diamond Azure",
                price: 13.99,
                image: imagePath('1267.jpg')
              },
              ]
            },
            {
              name: "Item #1312 - $8.99 per set",
              description: "Cutting Board Set",
              products: [{
                name: "1336-1605",
                price: 13.99,
                image: imagePath('1268.jpg')
              },
              {
                name: "1336-1603",
                price: 13.99,
                image: imagePath('1269.jpg')
              },
              {
                name: "1336-1602",
                price: 13.99,
                image: imagePath('1275.jpg')
              },
              {
                name: "1336-1601",
                price: 13.99,
                image: imagePath('1276.jpg')
              },
              ]
            },
            {
              name: "Item #1312 - $8.99 per set",
              description: "Cutting Board Set",
              products: [{
                name: "1311-1601 Black",
                price: 13.99,
                image: imagePath('1270.jpg')
              },
              {
                name: "1311-1612 Oak",
                price: 13.99,
                image: imagePath('1271.jpg')
              },
              {
                name: "1311-1603 Teal",
                price: 13.99,
                image: imagePath('1272.jpg')
              },
              {
                name: "1311-1605 Burgundy",
                price: 13.99,
                image: imagePath('1273.jpg')
              },
              {
                name: "1311-1604 Purple",
                price: 13.99,
                image: imagePath('1274.jpg')
              },
              ]
            },
            {
              name: "Item #1338 - $10.99 each",
              description: "Coffee Mugs - 16oz (7 Lakes)",
              products: [{
                name: "1338-2304",
                price: 13.99,
                image: imagePath('1277.jpg')
              },
              {
                name: "1338-2302",
                price: 13.99,
                image: imagePath('1278.jpg')
              },
              {
                name: "1338-2301",
                price: 13.99,
                image: imagePath('1279.jpg')
              },
              {
                name: "1338-2305",
                price: 13.99,
                image: imagePath('1280.jpg')
              },
              ]
            },
            {
              name: "Item #1338B - $34.99 per set",
              description: "Coffee Mugs Gift Box - 16oz (7 Lakes)",
              products: [{
                name: "1338B-1602",
                price: 13.99,
                image: imagePath('1284.jpg')
              },
              {
                name: "1338B-1601",
                price: 13.99,
                image: imagePath('1285.jpg')
              },
              {
                name: "1338B-1605",
                price: 13.99,
                image: imagePath('1286.jpg')
              },
              {
                name: "1338B-1604",
                price: 13.99,
                image: imagePath('1287.jpg')
              },
              ]
            },
            {
              name: "Item #1336B - $34.99 per set",
              description: "Coffee Mugs Gift Box - 16oz (16112)",
              products: [{
                name: "1336B-1602",
                price: 13.99,
                image: imagePath('1288.jpg')
              },
              {
                name: "1336B-1605",
                price: 13.99,
                image: imagePath('1289.jpg')
              },
              {
                name: "1336B-1601",
                price: 13.99,
                image: imagePath('1290.jpg')
              },
              {
                name: "1336B-1603",
                price: 13.99,
                image: imagePath('1291.jpg')
              },
              ]
            },
            {
              name: "Item #1345 - $10.99 each",
              description: "Coffee Mugs - 16oz (Medicine Wheel)",
              products: [{
                name: "1345-1",
                price: 13.99,
                image: imagePath('1293.jpg')
              },
              {
                name: "1345-4",
                price: 13.99,
                image: imagePath('1294.jpg')
              },
              {
                name: "1345-2",
                price: 13.99,
                image: imagePath('1302.jpg')
              },
              {
                name: "1345-5",
                price: 13.99,
                image: imagePath('1303.jpg')
              },
              {
                name: "1345-3",
                price: 13.99,
                image: imagePath('1304.jpg')
              },
              {
                name: "1345-6",
                price: 13.99,
                image: imagePath('1305.jpg'),
                image2: imagePath('1307.jpg'),
                image3: imagePath('1308.jpg'),
                image4: imagePath('1306.jpg')
              },
              ]
            },
            {
              name: "Item #1346 - $10.99 each",
              description: "Coffee Mugs - 16oz (Thunder Spirit)",
              products: [{
                name: "1346-4",
                price: 13.99,
                image: imagePath('1295.jpg')
              },
              {
                name: "1346-2",
                price: 13.99,
                image: imagePath('1296.jpg')
              },
              {
                name: "1346-5",
                price: 13.99,
                image: imagePath('1297.jpg')
              },
              {
                name: "1346-3",
                price: 13.99,
                image: imagePath('1298.jpg')
              },
              {
                name: "1346-6",
                price: 13.99,
                image: imagePath('1299.jpg')
              },
              {
                name: "1346-1",
                price: 13.99,
                image: imagePath('1309.jpg')
              },
              ]
            },
            {
              name: "Item #1331- $10.99 each",
              description: "Coffee Mugs - 11oz (Graphic Designer)",
              products: [{
                name: "1331-BE",
                price: 13.99,
                image: imagePath('1310.jpg')
              },
              {
                name: "1331-NP",
                price: 13.99,
                image: imagePath('1312.jpg')
              },
              {
                name: "1331-WO",
                price: 13.99,
                image: imagePath('1313.jpg')
              },
              {
                name: "1331-NWAR",
                price: 13.99,
                image: imagePath('1314.jpg')
              },
              {
                name: "1331-WS",
                price: 13.99,
                image: imagePath('1315.jpg')
              },
              {
                name: "1331-STR",
                price: 13.99,
                image: imagePath('1316.jpg')
              },
              {
                name: "1331-STR",
                price: 13.99,
                image: imagePath('1324.jpg')
              },
              ]
            },
            {
              name: "Item #1346 - $10.99 each",
              description: "Coffee Mugs - 16oz (Geometric Designs)",
              products: [{
                name: "1332-BLK",
                price: 13.99,
                image: imagePath('1311.jpg')
              },
              {
                name: "1332-BUR",
                price: 13.99,
                image: imagePath('1317.jpg')
              },
              {
                name: "1332-BL",
                price: 13.99,
                image: imagePath('1318.jpg')
              },
              {
                name: "1332-MINT",
                price: 13.99,
                image: imagePath('1319.jpg')
              },
              {
                name: "1332-RD",
                price: 13.99,
                image: imagePath('1320.jpg')
              },
              {
                name: "1332-PUR",
                price: 13.99,
                image: imagePath('1321.jpg')
              },
              {
                name: "1332-SAND",
                price: 13.99,
                image: imagePath('1322.jpg')
              },
              {
                name: "1332-USA",
                price: 13.99,
                image: imagePath('1323.jpg')
              },
              ]
            },
            {
              name: "Item #1308 - $23.99 per set",
              description: "3 pc Ceramic Canister Set",
              products: [{
                name: "1308",
                price: 13.99,
                image: imagePath('1325.jpg'),
                image2: imagePath('1326.jpg')
              },]
            },
            {
              name: "Item #1309 - $37.99 per set",
              description: "Ceramic Soup Bowl Set of 4, with handles on either side for easy carrying",
              products: [{
                name: "1309",
                price: 13.99,
                image: imagePath('1336.jpg'),
                image2: imagePath('1337.jpg')
              },]
            },
            {
              name: "Item #1331- $10.99 each",
              description: "Coffee Mugs - 11oz (Graphic Designer)",
              products: [{
                name: "1145-1601 Black",
                price: 13.99,
                image: imagePath('1344.jpg')
              },
              {
                name: "1145-1602 Turquoise",
                price: 13.99,
                image: imagePath('1345.jpg')
              },
              {
                name: "1145-1607 Red",
                price: 13.99,
                image: imagePath('1356.jpg')
              },
              {
                name: "1145-1608 Grey",
                price: 13.99,
                image: imagePath('1357.jpg')
              },
              {
                name: "1145-1604 Purple",
                price: 13.99,
                image: imagePath('1358.jpg')
              },
              {
                name: "1145-1603 Mint",
                price: 13.99,
                image: imagePath('1359.jpg')
              },
              ]
            },
            {
              name: "Item #4420- $16.99 each",
              description: "Travel Mug Bamboo Graphic Printed Design - 16oz",
              products: [{
                name: "4420-7601",
                price: 13.99,
                image: imagePath('1360.jpg')
              },
              {
                name: "4420-7625",
                price: 13.99,
                image: imagePath('1361.jpg')
              },
              {
                name: "4420-7631",
                price: 13.99,
                image: imagePath('1362.jpg')
              },
              {
                name: "4420-7634",
                price: 13.99,
                image: imagePath('1363.jpg')
              },
              {
                name: "4420-7633",
                price: 13.99,
                image: imagePath('1346.jpg')
              },
              {
                name: "4420-7635",
                price: 13.99,
                image: imagePath('1347.jpg')
              },
              ]
            },
            {
              name: "Item #4421- $16.99 each",
              description: "Travel Mug Bamboo Graphic Printed Design - 16oz",
              products: [{
                name: "4421-1",
                price: 13.99,
                image: imagePath('1349.jpg')
              },
              {
                name: "4421-1",
                price: 13.99,
                image: imagePath('1350.jpg')
              },
              {
                name: "4421-3",
                price: 13.99,
                image: imagePath('1351.jpg')
              },
              ]
            },
            {
              name: "Item #4422- $16.99 each",
              description: "Travel Mug Bamboo Graphic Printed Design - 16oz",
              products: [{
                name: "4422-3",
                price: 13.99,
                image: imagePath('1352.jpg')
              },
              {
                name: "4422-1",
                price: 13.99,
                image: imagePath('1353.jpg')
              },
              {
                name: "4422-2",
                price: 13.99,
                image: imagePath('1354.jpg')
              },
              {
                name: "4422-4",
                price: 13.99,
                image: imagePath('1355.jpg')
              },
              ]
            },
            {
              name: "Item #4416- $19.99 each",
              description: "Thermos - 18oz",
              products: [{
                name: "4416-1605 Burgundy",
                price: 13.99,
                image: imagePath('1366.jpg')
              },
              {
                name: "4416-1608 Grey",
                price: 13.99,
                image: imagePath('1367.jpg')
              },
              {
                name: "4416-1601 Black",
                price: 13.99,
                image: imagePath('1390.jpg')
              },
              {
                name: "4416-1602 Turquoise",
                price: 13.99,
                image: imagePath('1391.jpg')
              },
              ]
            },
            {
              name: "/Item #4413 - $19.99 each",
              description: "Thermos - 18oz",
              products: [{
                name: "4413 Black",
                price: 13.99,
                image: imagePath('1368.jpg')
              },
              {
                name: "4413 Burgundy",
                price: 13.99,
                image: imagePath('1369.jpg')
              },
              {
                name: "4413 Purple",
                price: 13.99,
                image: imagePath('1370.jpg')
              },
              {
                name: "4413 Turquoise",
                price: 13.99,
                image: imagePath('1371.jpg')
              },
              ]
            },
            {
              name: "Item #4414 - $21.99",
              description: "Thermos - 18oz",
              products: [{
                name: "4414-2101",
                price: 13.99,
                image: imagePath('1386.jpg')
              },
              {
                name: "4414-2101",
                price: 13.99,
                image: imagePath('1387.jpg')
              },
              {
                name: "4414-2101",
                price: 13.99,
                image: imagePath('1388.jpg')
              },
              {
                name: "4414-2101",
                price: 13.99,
                image: imagePath('1389.jpg')
              },
              ]
            },
            {
              name: "Item #4415 - $21.99 each",
              description: "Travel Mug 20oz Double wall insulated",
              products: [{
                name: "4415-1601 Black",
                price: 13.99,
                image: imagePath('1364.jpg')
              },
              {
                name: "4415-1602 Turquoise",
                price: 13.99,
                image: imagePath('1365.jpg')
              },
              {
                name: "4415-1605 Burgundy",
                price: 13.99,
                image: imagePath('1376.jpg')
              },
              {
                name: "4415-1608 Grey",
                price: 13.99,
                image: imagePath('1385.jpg')
              },
              ]
            },
            {
              name: "Item # 4411- $29.99 each",
              description: "Travel Mug - 30 oz Double Wall Insulated",
              products: [{
                name: "4411-1",
                price: 13.99,
                image: imagePath('1373.jpg')
              },
              {
                name: "4411-2",
                price: 13.99,
                image: imagePath('1374.jpg')
              },
              {
                name: "4411-3",
                price: 13.99,
                image: imagePath('1375.jpg')
              },
              {
                name: "4411-4",
                price: 13.99,
                image: imagePath('1377.jpg')
              },
              {
                name: "4411-5",
                price: 13.99,
                image: imagePath('1378.jpg')
              },
              ]
            },
            {
              name: "Item # 4405",
              description: "Water Bottle - 25 oz Double Wall Insulated",
              products: [{
                name: "4405-1",
                price: 13.99,
                image: imagePath('1379.jpg')
              },
              {
                name: "4405-2",
                price: 13.99,
                image: imagePath('1380.jpg')
              },
              {
                name: "4405-3",
                price: 13.99,
                image: imagePath('1381.jpg')
              },
              {
                name: "4405-4",
                price: 13.99,
                image: imagePath('1382.jpg')
              },
              {
                name: "4405-5",
                price: 13.99,
                image: imagePath('1383.jpg')
              },
              {
                name: "4405-6",
                price: 13.99,
                image: imagePath('1384.jpg')
              },
              ]
            },
            {
              name: "Item # 4429 - $ 32.99 each",
              description: "Work Thermos - 34 oz",
              products: [{
                name: "4429-1",
                price: 13.99,
                image: imagePath('1392.jpg')
              },
              {
                name: "4429-2",
                price: 13.99,
                image: imagePath('1393.jpg')
              },
              {
                name: "4429-3",
                price: 13.99,
                image: imagePath('1399.jpg')
              },
              {
                name: "4429-4",
                price: 13.99,
                image: imagePath('1400.jpg')
              },
              ]
            },
            {
              name: "Item # 4410 - $34.99 each",
              description: "Carafe - 51 oz (1.5 Liter) Double Wall Insulated",
              products: [{
                name: "4410-2",
                price: 13.99,
                image: imagePath('1394.jpg')
              },
              {
                name: "4410-3",
                price: 13.99,
                image: imagePath('1395.jpg')
              },
              {
                name: "4410-4",
                price: 13.99,
                image: imagePath('1396.jpg')
              },
              {
                name: "4410-5",
                price: 13.99,
                image: imagePath('1397.jpg')
              },
              {
                name: "4410-6",
                price: 13.99,
                image: imagePath('1398.jpg')
              },
              {
                name: "4410-1",
                price: 13.99,
                image: imagePath('1406.jpg')
              },
              ]
            },
            {
              name: "Item # 4419",
              description: "Lunch Thermos with Carrying Case - 25oz",
              products: [{
                name: "4419-1",
                price: 13.99,
                image: imagePath('1401.jpg')
              },
              {
                name: "4419-2",
                price: 13.99,
                image: imagePath('1402.jpg')
              },
              {
                name: "4419-3",
                price: 13.99,
                image: imagePath('1403.jpg')
              },
              {
                name: "4429-4",
                price: 13.99,
                image: imagePath('1400.jpg'),
                image2: imagePath('1404.jpg'),
                image3: imagePath('1405.jpg')
  
              },
              ]
            },
          ]
        },
        {
          name: "Fabric", items: [
            {
              name: "Item #2900 - $11.99 per yard",
              description: "100% Cotton Fabric- (Floral Print)",
              products: [{
                name: "2900-Black 1or2 yards",
                price: 13.99,
                image: imagePath('1413.jpg')
              },
              {
                name: "2900-Burgundy 1 or 2 yards",
                price: 13.99,
                image: imagePath('1414.jpg')
              },
              {
                name: "2900-Gold Fusion 1 or 2 yards",
                price: 13.99,
                image: imagePath('1415.jpg')
              },
              {
                name: "2900-Purple 1 or 2 yards",
                price: 13.99,
                image: imagePath('1416.jpg')
              },
              {
                name: "2900-White 1 or 2 yards",
                price: 13.99,
                image: imagePath('1417.jpg')
              },
              {
                name: "2900-Blue 1or2 yards",
                price: 13.99,
                image: imagePath('1418.jpg')
              },
              {
                name: "2900-Green 1or2 yards",
                price: 13.99,
                image: imagePath('1419.jpg')
              },
              {
                name: "2900-Green Flash 1 or 2 yards",
                price: 13.99,
                image: imagePath('1420.jpg')
              },
              {
                name: "2900-Red 1 or 2 yards",
                price: 13.99,
                image: imagePath('1421.jpg')
              },
              {
                name: "2900-Yellow 1 or 2 yardss",
                price: 13.99,
                image: imagePath('1422.jpg')
              },
              ]
            },
            {
              name: "Item #2900 - $10.99 per yard for 3 or more yards of same color",
              description: "100% Cotton Fabric- (Floral Print)",
              products: [{
                name: "2900-Black 3 to 14 yards",
                price: 13.99,
                image: imagePath('1413.jpg')
              },
              {
                name: "2900-Burgundy  3 to 14 yards",
                price: 13.99,
                image: imagePath('1414.jpg')
              },
              {
                name: "2900-Gold Fusion  3 to 14 yards",
                price: 13.99,
                image: imagePath('1415.jpg')
              },
              {
                name: "2900-Purple  3 to 14 yards",
                price: 13.99,
                image: imagePath('1416.jpg')
              },
              {
                name: "2900-White  3 to 14 yards",
                price: 13.99,
                image: imagePath('1417.jpg')
              },
              {
                name: "2900-Blue  3 to 14 yards",
                price: 13.99,
                image: imagePath('1418.jpg')
              },
              {
                name: "2900-Green  3 to 14 yards",
                price: 13.99,
                image: imagePath('1419.jpg')
              },
              {
                name: "2900-Green Flash  3 to 14 yards",
                price: 13.99,
                image: imagePath('1420.jpg')
              },
              {
                name: "2900-Red  3 to 14 yards",
                price: 13.99,
                image: imagePath('1421.jpg')
              },
              {
                name: "2900-Yellow  3 to 14 yards",
                price: 13.99,
                image: imagePath('1422.jpg')
              },
              ]
            },
            {
              name: "Item #2900-$ 9.99 per yard for 1 bolt (15 yards per bolt)",
              description: "100% Cotton Fabric- (Floral Print)",
              products: [{
                name: "2900-Black Bolt",
                price: 13.99,
                image: imagePath('1413.jpg')
              },
              {
                name: "2900-Burgundy Bolt",
                price: 13.99,
                image: imagePath('1414.jpg')
              },
              {
                name: "2900-Gold Fusion Bolt",
                price: 13.99,
                image: imagePath('1415.jpg')
              },
              {
                name: "2900-Purple Bolt",
                price: 13.99,
                image: imagePath('1416.jpg')
              },
              {
                name: "2900-White Bolt",
                price: 13.99,
                image: imagePath('1417.jpg')
              },
              {
                name: "2900-Blue Bolt",
                price: 13.99,
                image: imagePath('1418.jpg')
              },
              {
                name: "2900-Green Bolt",
                price: 13.99,
                image: imagePath('1419.jpg')
              },
              {
                name: "2900-Green Flash Bolt",
                price: 13.99,
                image: imagePath('1420.jpg')
              },
              {
                name: "2900-Red Bolt",
                price: 13.99,
                image: imagePath('1421.jpg')
              },
              {
                name: "2900-Yellow Bolt",
                price: 13.99,
                image: imagePath('1422.jpg')
              },
              ]
            },
            {
              name: "Item #2903 - $11.99 per yard",
              description: "100% Cotton Fabric- Fabric-(Medicine Wheel 2021 w/Eagle Feather)",
              products: [{
                name: "2903-Blue Grey 1 or 2 yards",
                price: 13.99,
                image: imagePath('1423.jpg')
              },
              {
                name: "2903-Burgundy 1 or 2 yards",
                price: 13.99,
                image: imagePath('1424.jpg')
              },
              {
                name: "2903-Mint 1 or 2 yards",
                price: 13.99,
                image: imagePath('1425.jpg')
              },
              {
                name: "2903-Pink 1 or 2 yards",
                price: 13.99,
                image: imagePath('1426.jpg')
              },
              {
                name: "2903-Turquoise 1 or 2 yards",
                price: 13.99,
                image: imagePath('1427.jpg')
              },
              {
                name: "2903-Black 1 or 2 yards",
                price: 13.99,
                image: imagePath('1428.jpg')
              },
              {
                name: "2903-Grey 1 or 2 yards",
                price: 13.99,
                image: imagePath('1429.jpg')
              },
              {
                name: "2903-Navy 1 or 2 yards",
                price: 13.99,
                image: imagePath('1430.jpg')
              },
              {
                name: "2903-Purple 1 or 2 yards",
                price: 13.99,
                image: imagePath('1431.jpg')
              },
              {
                name: "2903-White 1 or 2 yards",
                price: 13.99,
                image: imagePath('1432.jpg')
              },
              ]
            },
            {
              name: "Item #2903 $10.99 per yard for 3 or more yards of the same color",
              description: "100% Cotton Fabric- Fabric-(Medicine Wheel 2021 w/Eagle Feather)",
              products: [{
                name: "2903-Blue Grey 3 to 14 yards",
                price: 13.99,
                image: imagePath('1423.jpg')
              },
              {
                name: "2903-Burgundy 3 to 14 yards",
                price: 13.99,
                image: imagePath('1424.jpg')
              },
              {
                name: "2903-Mint 3 to 14 yards",
                price: 13.99,
                image: imagePath('1425.jpg')
              },
              {
                name: "2903-Pink 3 to 14 yards",
                price: 13.99,
                image: imagePath('1426.jpg')
              },
              {
                name: "2903-Turquoise 3 to 14 yards",
                price: 13.99,
                image: imagePath('1427.jpg')
              },
              {
                name: "2903-Black 3 to 14 yards",
                price: 13.99,
                image: imagePath('1428.jpg')
              },
              {
                name: "2903-Grey 3 to 14 yards",
                price: 13.99,
                image: imagePath('1429.jpg')
              },
              {
                name: "2903-Navy 3 to 14 yards",
                price: 13.99,
                image: imagePath('1430.jpg')
              },
              {
                name: "2903-Purple 3 to 14 yards",
                price: 13.99,
                image: imagePath('1431.jpg')
              },
              {
                name: "2903-White 3 to 14 yards",
                price: 13.99,
                image: imagePath('1432.jpg')
              },
              ]
            },
            {
              name: "Item #2903- $ 9.99 per yard for 1 bolt (15 yards per bolt)",
              description: "100% Cotton Fabric- Fabric-(Medicine Wheel 2021 w/Eagle Feather)",
              products: [{
                name: "2903-Blue Grey Bolt",
                price: 13.99,
                image: imagePath('1423.jpg')
              },
              {
                name: "2903-Burgundy Bolt",
                price: 13.99,
                image: imagePath('1424.jpg')
              },
              {
                name: "2903-Mint Bolt",
                price: 13.99,
                image: imagePath('1425.jpg')
              },
              {
                name: "2903-Pink Bolt",
                price: 13.99,
                image: imagePath('1426.jpg')
              },
              {
                name: "2903-Turquoise Bolt",
                price: 13.99,
                image: imagePath('1427.jpg')
              },
              {
                name: "2903-Black Bolt",
                price: 13.99,
                image: imagePath('1428.jpg')
              },
              {
                name: "2903-Grey Bolt",
                price: 13.99,
                image: imagePath('1429.jpg')
              },
              {
                name: "2903-Navy Bolt",
                price: 13.99,
                image: imagePath('1430.jpg')
              },
              {
                name: "2903-Purple Bolt",
                price: 13.99,
                image: imagePath('1431.jpg')
              },
              {
                name: "2903-White Bolt",
                price: 13.99,
                image: imagePath('1432.jpg')
              },
              ]
            },
            {
              name: "Item #2904 - $11.99 per yard",
              description: "100% Cotton Fabric- (Thunder Spirit)",
              products: [{
                name: "2904-Black 1 or 2 yards",
                price: 13.99,
                image: imagePath('1433.jpg')
              },
              {
                name: "2904-Navy 1 or 2 yards",
                price: 13.99,
                image: imagePath('1435.jpg')
              },
              {
                name: "2904-Burgundy 1 or 2 yards",
                price: 13.99,
                image: imagePath('1437.jpg')
              },
              {
                name: "2904-Purple 1 or 2 yards",
                price: 13.99,
                image: imagePath('1439.jpg')
              },
              ]
            },
            {
              name: "Item #2904 -$10.99 per yard for 3 or more yards of the same color",
              description: "100% Cotton Fabric- (Thunder Spirit)",
              products: [{
                name: "2904-Black 3 to 14 yards",
                price: 13.99,
                image: imagePath('1433.jpg')
              },
              {
                name: "2904-Navy 3 to 14 yards",
                price: 13.99,
                image: imagePath('1435.jpg')
              },
              {
                name: "2904-Burgundy 3 to 14 yards",
                price: 13.99,
                image: imagePath('1437.jpg')
              },
              {
                name: "2904-Purple 3 to 14 yards",
                price: 13.99,
                image: imagePath('1439.jpg')
              },
              ]
            },
            {
              name: "Item #2904 -$ 9.99 per yard for 1 bolt (15 yards per bolt)",
              description: "100% Cotton Fabric- (Thunder Spirit)",
              products: [{
                name: "2904-Black Bolt",
                price: 13.99,
                image: imagePath('1433.jpg')
              },
              {
                name: "2904-Navy Bolt",
                price: 13.99,
                image: imagePath('1435.jpg')
              },
              {
                name: "2904-Burgundy Bolt",
                price: 13.99,
                image: imagePath('1437.jpg')
              },
              {
                name: "2904-Purple Bolt",
                price: 13.99,
                image: imagePath('1439.jpg')
              },
              ]
            },
            {
              name: "Item #2905 - $11.99 per yard ",
              description: "100% Cotton Fabric- (Diamond Star)",
              products: [{
                name: "2905-Azure 1 or 2 yards",
                price: 13.99,
                image: imagePath('1434.jpg')
              },
              {
                name: "2905-Glow 1 or 2 yards",
                price: 13.99,
                image: imagePath('1436.jpg')
              },
              {
                name: "2905-Black 1 or 2 yards",
                price: 13.99,
                image: imagePath('1438.jpg')
              },
              {
                name: "2905-Purple 1 or 2 yards",
                price: 13.99,
                image: imagePath('1440.jpg')
              },
              ]
            },
            {
              name: "Item #2905 - $10.99 per yard for 3 or more yards of the same ",
              description: "100% Cotton Fabric- (Diamond Star)",
              products: [{
                name: "2905-Azure 3 to 14 yards",
                price: 13.99,
                image: imagePath('1434.jpg')
              },
              {
                name: "2905-Glow 3 to 14 yards",
                price: 13.99,
                image: imagePath('1436.jpg')
              },
              {
                name: "2905-Black 3 t0 14 yards",
                price: 13.99,
                image: imagePath('1438.jpg')
              },
              {
                name: "2905-Purple 3 to 14 yards",
                price: 13.99,
                image: imagePath('1440.jpg')
              },
              ]
            },
            {
              name: "Item #2905 - $ 9.99 per yard for 1 bolt (15 yards per bolt)",
              description: "100% Cotton Fabric- (Diamond Star)",
              products: [{
                name: "2905-Azure Bolt",
                price: 13.99,
                image: imagePath('1434.jpg')
              },
              {
                name: "2905-Glow Bolt",
                price: 13.99,
                image: imagePath('1436.jpg')
              },
              {
                name: "2905-Black Bolt",
                price: 13.99,
                image: imagePath('1438.jpg')
              },
              {
                name: "2905-Purple Bolt",
                price: 13.99,
                image: imagePath('1440.jpg')
              },
              ]
            },
            {
              name: "Item #2906 - $11.99 per yard",
              description: "100% Cotton Fabric- (7 lakes)",
              products: [{
                name: "2906-Burgundy 1or 2 yards",
                price: 13.99,
                image: imagePath('1441.jpg')
              },
              {
                name: "2906-Black 1 or 2 yards",
                price: 13.99,
                image: imagePath('1443.jpg')
              },
              {
                name: "2906-Grey 1 or 2 yards",
                price: 13.99,
                image: imagePath('1445.jpg')
              },
              {
                name: "2906-Purple 1 or 2 yards",
                price: 13.99,
                image: imagePath('1447.jpg')
              },
              {
                name: "2906-Red 1 or 2 yards",
                price: 13.99,
                image: imagePath('1442.jpg')
              },
              {
                name: "2906-Mint 1 or 2 yards",
                price: 13.99,
                image: imagePath('1444.jpg')
              },
              {
                name: "2906-Turquoise 1 or 2 yards",
                price: 13.99,
                image: imagePath('1446.jpg')
              },
              {
                name: "2906-White 1 or 2 yards",
                price: 13.99,
                image: imagePath('1448.jpg')
              },
              ]
            },
            {
              name: "Item #2906 -$10.99 per yard for 3 or more yards of the same color",
              description: "100% Cotton Fabric- (7 lakes)",
              products: [{
                name: "2906-Burgundy 3 to 14 yards",
                price: 13.99,
                image: imagePath('1441.jpg')
              },
              {
                name: "2906-Black 3 to 14 yards",
                price: 13.99,
                image: imagePath('1443.jpg')
              },
              {
                name: "2906-Grey 3 to 14 yards",
                price: 13.99,
                image: imagePath('1445.jpg')
              },
              {
                name: "2906-Purple 3 to 14 yards",
                price: 13.99,
                image: imagePath('1447.jpg')
              },
              {
                name: "2906-Red 3 to 14 yards",
                price: 13.99,
                image: imagePath('1442.jpg')
              },
              {
                name: "2906-Mint 3 to 14 yards",
                price: 13.99,
                image: imagePath('1444.jpg')
              },
              {
                name: "2906-Turquoise 3 to 14 yards",
                price: 13.99,
                image: imagePath('1446.jpg')
              },
              {
                name: "2906-White 3 to 14 yards",
                price: 13.99,
                image: imagePath('1448.jpg')
              },
              ]
            },
            {
              name: "Item #2906 - $11.99 per yard",
              description: "100% Cotton Fabric- (7 lakes)",
              products: [{
                name: "2906-Burgundy Bolt",
                price: 13.99,
                image: imagePath('1441.jpg')
              },
              {
                name: "2906-Black Bolt",
                price: 13.99,
                image: imagePath('1443.jpg')
              },
              {
                name: "2906-Grey Bolt",
                price: 13.99,
                image: imagePath('1445.jpg')
              },
              {
                name: "2906-Purple Bolt",
                price: 13.99,
                image: imagePath('1447.jpg')
              },
              {
                name: "2906-Red Bolt",
                price: 13.99,
                image: imagePath('1442.jpg')
              },
              {
                name: "2906-Mint Bolt",
                price: 13.99,
                image: imagePath('1444.jpg')
              },
              {
                name: "2906-Turquoise Bolt",
                price: 13.99,
                image: imagePath('1446.jpg')
              },
              {
                name: "2906-White Bolt",
                price: 13.99,
                image: imagePath('1448.jpg')
              },
              ]
            },
            {
              name: "Gift", items: [
                {
                  name: "Item #2250 (Medium) (12.5 tall x 10.25 wide - $2.25 each",
                  description: "Gift Bags",
                  products: [{
                    name: "2250-1601 Black",
                    price: 13.99,
                    image: imagePath('1449.png')
                  },
                  {
                    name: "2250-1641 Fire",
                    price: 13.99,
                    image: imagePath('1450.jpg')
                  },
                  {
                    name: "2250-1645 Pink Berry",
                    price: 13.99,
                    image: imagePath('1451.png')
                  },
                  {
                    name: "2250-1602 Turquoise",
                    price: 13.99,
                    image: imagePath('1452.png')
                  },
                  ]
                },
                {
                  name: "Item #2251 (Large) (16.5 tall x 12 wide - $2.50 each",
                  description: "Gift Bags",
                  products: [{
                    name: "2251-1601 Black",
                    price: 13.99,
                    image: imagePath('1449.jpg')
                  },
                  {
                    name: "2251-1641 Fire",
                    price: 13.99,
                    image: imagePath('1450.jpg')
                  },
                  {
                    name: "2251-1645 Pink Berry",
                    price: 13.99,
                    image: imagePath('1451.jpg')
                  },
                  {
                    name: "2251-1602 Turquoise",
                    price: 13.99,
                    image: imagePath('1452.jpg')
                  },
                  ]
                },
                {
                  name: "Item #2252 (Extra Large) (21 tall x 13.75 wide - $2.75 each",
                  description: "Gift Bags",
                  products: [{
                    name: "2252-1601 Black",
                    price: 13.99,
                    image: imagePath('1449.jpg')
                  },
                  {
                    name: "2252-1641 Fire",
                    price: 13.99,
                    image: imagePath('1450.jpg')
                  },
                  {
                    name: "2252-1645 Pink Berry",
                    price: 13.99,
                    image: imagePath('1451.jpg')
                  },
                  {
                    name: "2252-1602 Turquoise",
                    price: 13.99,
                    image: imagePath('1452.jpg')
                  },
                  ]
                },
                {
                  name: "Item #2253 - $5.99 per roll",
                  description: "Wrapping Paper (16112)",
                  products: [{
                    name: "2253-Black",
                    price: 13.99,
                    image: imagePath('1456.jpg')
                  },
                  {
                    name: "2253 - Pink",
                    price: 13.99,
                    image: imagePath('1458.jpg')
                  },
                  {
                    name: "2253 - Tan",
                    price: 13.99,
                    image: imagePath('1460.jpg')
                  },
                  {
                    name: "2253 -Turquoise",
                    price: 13.99,
                    image: imagePath('1462.jpg')
                  },
                  ]
                },
                {
                  name: "Item #2254 - $5.99 per roll",
                  description: "Wrapping Paper (Medicine Wheel)",
                  products: [{
                    name: "2254 - Turquoise",
                    price: 13.99,
                    image: imagePath('1457.jpg')
                  },
                  {
                    name: "2254 - Burgundy",
                    price: 13.99,
                    image: imagePath('1459.jpg')
                  },
                  {
                    name: "2254 - Purple",
                    price: 13.99,
                    image: imagePath('1461.jpg')
                  },
                  {
                    name: "2254 - Black",
                    price: 13.99,
                    image: imagePath('1463.jpg')
                  },
                  ]
                },
              ]
            }]
        }
      ]
    }
  }
  
  module.exports = { getJsonCatalog };