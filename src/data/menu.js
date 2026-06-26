export const menuData = {
  starters: {
    title: "Starters",
    description: "Begin your journey with our handcrafted appetizers",
    items: [
      {
        id: "s1",
        name: "Deviled Eggs",
        description: "Farm eggs, smoked paprika, chives, crispy bacon bits",
        price: 12,
        tags: ["popular"]
      },
      {
        id: "s2",
        name: "Signature Meatballs",
        description: "House-blend beef & pork, San Marzano tomato sauce, ricotta, fresh basil",
        price: 16,
        tags: ["signature", "popular"]
      },
      {
        id: "s3",
        name: "Grilled Octopus",
        description: "Charred tentacles, fingerling potatoes, olive tapenade, lemon vinaigrette",
        price: 19,
        tags: []
      },
      {
        id: "s4",
        name: "Burrata & Prosciutto",
        description: "Creamy burrata, aged prosciutto, arugula, balsamic reduction, grilled bread",
        price: 18,
        tags: ["popular"]
      },
      {
        id: "s5",
        name: "Soup of the Day",
        description: "Chef's seasonal selection, served with artisan bread",
        price: 10,
        tags: []
      }
    ]
  },
  salads: {
    title: "Salads",
    description: "Fresh, vibrant, locally sourced greens",
    items: [
      {
        id: "sa1",
        name: "Citrus Beet Salad",
        description: "Roasted beets, citrus segments, goat cheese, candied walnuts, arugula, citrus vinaigrette",
        price: 16,
        tags: ["popular", "vegetarian"]
      },
      {
        id: "sa2",
        name: "Market Cobb",
        description: "Chicken, crispy bacon, chopped egg, blue cheese, avocado, green goddess dressing",
        price: 18,
        tags: []
      },
      {
        id: "sa3",
        name: "Caesar Salad",
        description: "Romaine hearts, house-made Caesar dressing, shaved parmesan, garlic croutons",
        price: 14,
        tags: ["vegetarian"]
      },
      {
        id: "sa4",
        name: "Butter Lettuce Salad",
        description: "Butter lettuce, beets, hard cooked egg, black olives, pickled onions, puffed farro, horseradish-buttermilk dressing",
        price: 15,
        tags: ["vegetarian"]
      }
    ]
  },
  woodFiredPizzas: {
    title: "Wood-Fired Pizzas",
    description: "Neapolitan-style from our wood-burning oven",
    items: [
      {
        id: "p1",
        name: "Margherita",
        description: "San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil",
        price: 18,
        tags: ["vegetarian"]
      },
      {
        id: "p2",
        name: "The Meat Lover",
        description: "Hobbs salami, bacon, sausage, cream, tomato, red onion, pickled peppers",
        price: 24,
        tags: ["popular"]
      },
      {
        id: "p3",
        name: "Wild Mushroom",
        description: "Roasted wild mushrooms, fontina, truffle oil, fresh thyme, arugula",
        price: 22,
        tags: ["vegetarian"]
      },
      {
        id: "p4",
        name: "Prosciutto & Fig",
        description: "Prosciutto di Parma, fig jam, gorgonzola, arugula, balsamic glaze",
        price: 23,
        tags: []
      },
      {
        id: "p5",
        name: "Pepperoni Classic",
        description: "Cup & char pepperoni, mozzarella, San Marzano tomato sauce, oregano",
        price: 20,
        tags: ["popular"]
      }
    ]
  },
  burgersSandwiches: {
    title: "Burgers & Sandwiches",
    description: "Handcrafted with premium ingredients",
    items: [
      {
        id: "b1",
        name: "Market Tavern Angus Burger",
        description: "1/2 lb Angus beef, butter lettuce, tomato, onion, pickles, malt vinegar mayo, hot sauce on the side. Served with fries",
        price: 19,
        tags: ["popular", "signature"]
      },
      {
        id: "b2",
        name: "Brisket Sandwich",
        description: "12-hour smoked brisket, caramelized onions, horseradish cream, pickles, brioche bun. Served with fries",
        price: 22,
        tags: ["popular"]
      },
      {
        id: "b3",
        name: "Grilled Chicken Sandwich",
        description: "Herb-marinated chicken breast, bacon, avocado, pepper jack, chipotle aioli, ciabatta. Served with fries",
        price: 18,
        tags: []
      },
      {
        id: "b4",
        name: "Crispy Fish Sandwich",
        description: "Beer-battered cod, tartar sauce, pickled slaw, brioche bun. Served with fries",
        price: 19,
        tags: []
      }
    ]
  },
  entrees: {
    title: "Entrees",
    description: "Wood-grilled & rotisserie specialties",
    items: [
      {
        id: "e1",
        name: "Rib Eye Steak",
        description: "14oz bone-in rib eye, roasted garlic butter, seasonal vegetables, truffle mashed potatoes",
        price: 59,
        tags: ["signature"]
      },
      {
        id: "e2",
        name: "Skirt Steak",
        description: "Grilled skirt steak, chimichurri, roasted broccoli, crispy potatoes",
        price: 38,
        tags: ["popular"]
      },
      {
        id: "e3",
        name: "Beef Stroganoff",
        description: "Braised beef tenderloin, wild mushrooms, egg noodles, sour cream, fresh herbs",
        price: 35,
        tags: ["popular"]
      },
      {
        id: "e4",
        name: "Mary's Half Chicken",
        description: "Free-range rotisserie chicken, lemon herb jus, roasted root vegetables, garlic mashed potatoes",
        price: 29,
        tags: []
      },
      {
        id: "e5",
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon, lemon beurre blanc, asparagus, wild rice pilaf",
        price: 34,
        tags: ["popular"]
      },
      {
        id: "e6",
        name: "Mama Jo's Spaghetti & Meatballs",
        description: "House-made meatballs, San Marzano tomato sauce, fresh pasta, parmesan, basil",
        price: 28,
        tags: ["signature", "popular"]
      },
      {
        id: "e7",
        name: "All-Natural Pork Chop",
        description: "Double-cut pork chop, apple mostarda, braised greens, sweet potato puree",
        price: 32,
        tags: []
      },
      {
        id: "e8",
        name: "Short Ribs",
        description: "Braised beef short ribs, red wine reduction, creamy polenta, gremolata",
        price: 38,
        tags: ["popular"]
      },
      {
        id: "e9",
        name: "Pan-Seared Cod",
        description: "Fresh cod, roasted tomato broth, white beans, kale, crusty bread",
        price: 30,
        tags: []
      },
      {
        id: "e10",
        name: "Chicken Pot Pie",
        description: "Roasted chicken, seasonal vegetables, creamy herb sauce, flaky puff pastry",
        price: 26,
        tags: ["popular"]
      }
    ]
  },
  sides: {
    title: "Sides",
    description: "Perfect accompaniments",
    items: [
      {
        id: "si1",
        name: "Truffle Fries",
        description: "Hand-cut fries, truffle oil, parmesan, fresh herbs",
        price: 10,
        tags: ["popular", "vegetarian"]
      },
      {
        id: "si2",
        name: "Roasted Seasonal Vegetables",
        description: "Chef's selection of market vegetables, herb oil",
        price: 9,
        tags: ["vegetarian"]
      },
      {
        id: "si3",
        name: "Garlic Mashed Potatoes",
        description: "Creamy Yukon gold potatoes, roasted garlic, butter, chives",
        price: 9,
        tags: ["vegetarian"]
      },
      {
        id: "si4",
        name: "Mac & Cheese",
        description: "Three-cheese blend, crispy breadcrumb topping, truffle oil",
        price: 12,
        tags: ["vegetarian"]
      }
    ]
  },
  desserts: {
    title: "Desserts",
    description: "Sweet endings crafted in-house",
    items: [
      {
        id: "d1",
        name: "Salted Caramel Gelato",
        description: "House-made gelato, sea salt caramel, candied pecans",
        price: 10,
        tags: ["popular"]
      },
      {
        id: "d2",
        name: "Vanilla Bean Gelato",
        description: "Madagascar vanilla bean, fresh whipped cream",
        price: 10,
        tags: []
      },
      {
        id: "d3",
        name: "Raspberry Sorbet",
        description: "Fresh raspberry sorbet, mint, dark chocolate shavings",
        price: 10,
        tags: ["vegetarian"]
      },
      {
        id: "d4",
        name: "Chocolate Lava Cake",
        description: "Warm dark chocolate cake, molten center, vanilla gelato, berry compote",
        price: 14,
        tags: ["popular"]
      },
      {
        id: "d5",
        name: "Tiramisu",
        description: "Classic Italian preparation, espresso-soaked ladyfingers, mascarpone cream",
        price: 13,
        tags: []
      }
    ]
  },
  brunch: {
    title: "Weekend Brunch",
    description: "Saturdays & Sundays 10AM - 2PM",
    items: [
      {
        id: "br1",
        name: "Eggs Benedict",
        description: "Poached eggs, Canadian bacon, hollandaise, English muffin, breakfast potatoes",
        price: 18,
        tags: ["popular"]
      },
      {
        id: "br2",
        name: "Avocado Toast",
        description: "Smashed avocado, poached eggs, everything seasoning, microgreens, sourdough",
        price: 16,
        tags: ["vegetarian"]
      },
      {
        id: "br3",
        name: "Buttermilk Pancakes",
        description: "Fluffy stack, maple butter, fresh berries, whipped cream",
        price: 15,
        tags: []
      },
      {
        id: "br4",
        name: "Steak & Eggs",
        description: "6oz flat iron steak, two eggs any style, breakfast potatoes, toast",
        price: 24,
        tags: []
      }
    ]
  }
}

export const restaurantInfo = {
  name: "Market Tavern",
  tagline: "New American Cuisine - Wood-Fired - Farm Fresh",
  established: 2013,
  address: "236 Lincoln Center",
  city: "Stockton",
  state: "CA",
  zip: "95207",
  phone: "(209) 932-8001",
  email: "markettavernstk@gmail.com",
  hours: {
    monday: { open: "11:00 AM", close: "9:00 PM" },
    tuesday: { open: "11:00 AM", close: "9:00 PM" },
    wednesday: { open: "11:00 AM", close: "9:00 PM" },
    thursday: { open: "11:00 AM", close: "9:00 PM" },
    friday: { open: "11:00 AM", close: "9:00 PM" },
    saturday: { open: "10:00 AM", close: "9:00 PM" },
    sunday: { open: "10:00 AM", close: "9:00 PM" }
  },
  features: [
    "Wood-Fired Oven",
    "Farm-to-Table",
    "Craft Cocktails",
    "Weekend Brunch",
    "Catering Available",
    "Private Dining"
  ]
}
