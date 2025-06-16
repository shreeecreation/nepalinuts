import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Almonds",
    description: "Rich in protein, vitamin E, and healthy fats. Perfect for brain health and heart wellness.",
    longDescription: "Our premium almonds are carefully handpicked and imported directly from California orchards. Packed with essential nutrients like Vitamin E, magnesium, and healthy monounsaturated fats, these almonds promote heart health and sharpen brain function. Their sweet, crisp bite makes them an ideal snack or a delicious addition to recipes.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/almonds.jpg",
    category: "Nuts",
    prices: {
      "250g": 450,
      "500g": 900,
      "1kg": 1800
    },
    benefits: [
      "Rich in Vitamin E and antioxidants",
      "Supports heart health",
      "Boosts brain function",
      "High in protein and healthy fats",
      "Helps maintain healthy cholesterol levels"
    ],
    nutritionalInfo: {
      protein: "21g",
      fat: "50g",
      carbs: "22g",
      fiber: "12g",
      calories: "579"
    },
    origin: "Nepal",
    storage: "Store in a cool, dry place. Refrigerate after opening."
  },
  {
    id: 2,
    name: "Premium Kaju",
    description: "Creamy, buttery cashews packed with minerals and antioxidants. Great for snacking.",
    longDescription: "Sourced from premium growers in India and Vietnam, our kaju (cashews) deliver a rich, creamy flavor that melts in your mouth. High in copper, magnesium, and healthy fats, they’re perfect for boosting immunity and maintaining bone strength. Ideal for daily snacking or gourmet recipes.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/kaju.jpg",
    category: "Nuts",
    prices: {
      "250g": 525,
      "500g": 1100,
      "1kg": 1699
    },
    benefits: [
      "High in copper and magnesium",
      "Supports immune system",
      "Promotes bone health",
      "Natural source of zinc",
      "Heart-healthy monounsaturated fats"
    ],
    nutritionalInfo: {
      protein: "18g",
      fat: "44g",
      carbs: "30g",
      fiber: "3g",
      calories: "553"
    },
    origin: "Nepal",
    storage: "Keep in airtight container. Best consumed within 6 months."
  },
  {
    id: 3,
    name: "Premium Kismis",
    description: "Sweet, chewy raisins rich in fiber, potassium, and natural sugars. Nature's candy.",
    longDescription: "Enjoy nature's candy with our luscious golden kismis. Sun-dried to perfection, they’re full of fiber and potassium, making them a healthy energy booster. Whether you snack on them or add to your desserts, our kismis add a touch of sweetness to life.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/kismis.jpg",
    category: "Dried Fruits",
    prices: {
      "250g": 250,
      "500g": 450,
      "1kg": 849
    },
    benefits: [
      "Natural source of energy",
      "High in fiber and potassium",
      "Rich in antioxidants",
      "Supports digestive health",
      "Natural sweetener alternative"
    ],
    nutritionalInfo: {
      protein: "2g",
      fat: "0.2g",
      carbs: "75g",
      fiber: "7g",
      calories: "277"
    },
    origin: "Nepal",
    storage: "Store at room temperature. Refrigerate for longer freshness."
  },
  {
    id: 4,
    name: "Premium Okhhar",
    description: "Brain-shaped nuts rich in omega-3 fatty acids. Excellent for cognitive health.",
    longDescription: "Our luxury okhhar (walnuts) are harvested from California and offer unmatched taste and nutrition. A rich source of omega-3s and antioxidants, they promote brain health and help reduce inflammation. Their unique flavor and crunch elevate both traditional and modern recipes.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/okhhar.jpg",
    category: "Nuts",
    prices: {
      "250g": 349,
      "500g": 649,
      "1kg": 1199
    },
    benefits: [
      "Highest plant-based omega-3 source",
      "Supports brain health",
      "Improves cognitive function",
      "Rich in antioxidants",
      "Helps reduce inflammation"
    ],
    nutritionalInfo: {
      protein: "15g",
      fat: "65g",
      carbs: "14g",
      fiber: "7g",
      calories: "654"
    },
    origin: "Nepal",
    storage: "Refrigerate to maintain freshness and prevent rancidity."
  },
  {
    id: 5,
    name: "Premium Pistachios",
    description: "Protein-rich pistachios with natural antioxidants. Perfect for healthy snacking.",
    longDescription: "Delight in our handpicked premium pistachios — a true luxury snack. These vibrant green nuts are high in protein, healthy fats, and antioxidants. Sourced from the finest farms, their crunchy shells pop open naturally, making snacking satisfying and fun.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/pista.jpeg",
    category: "Nuts",
    prices: {
      "250g": 549,
      "500g": 1100,
      "1kg": 1999
    },
    benefits: [
      "High in protein and fiber",
      "Rich in antioxidants",
      "Supports eye health",
      "Helps with weight management",
      "Good source of potassium"
    ],
    nutritionalInfo: {
      protein: "20g",
      fat: "45g",
      carbs: "28g",
      fiber: "10g",
      calories: "560"
    },
    origin: "Nepal",
    storage: "Store in cool, dry place. Refrigerate for extended freshness."
  },
  {
    id: 6,
    name: "Premium Peanuts",
    description: "Wholesome peanuts full of protein and natural oils. Perfect energy snack.",
    longDescription: "Our roasted peanuts are a timeless Nepali favorite — fresh, protein-rich, and roasted to crunchy perfection. These are perfect for tea time, school tiffins, or as an energy booster throughout your day.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/peanuts.jpg",
    category: "Nuts",
    prices: {
      "250g": 149,
      "500g": 279,
      "1kg": 499
    },
    benefits: [
      "Natural source of protein",
      "Quick energy boost",
      "Good for muscle repair",
      "Rich in healthy fats",
      "Great for snacks"
    ],
    nutritionalInfo: {
      protein: "26g",
      fat: "49g",
      carbs: "16g",
      fiber: "8g",
      calories: "567"
    },
    origin: "Nepal",
    storage: "Store in airtight container at room temperature."
  },
  {
    id: 7,
    name: "Premium Anjeer",
    description: "Fiber-rich figs with natural sweetness. Excellent for digestive health.",
    longDescription: "Our soft, chewy anjeer (figs) are sun-dried and imported from Turkey. Naturally sweet and rich in dietary fiber, they aid digestion and make a luxurious, health-forward snack or dessert garnish.",
    image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/anjeer.webp",
    category: "Dried Fruits",
    prices: {
      "250g": 249,
      "500g": 449,
      "1kg": 799
    },
    benefits: [
      "High in dietary fiber",
      "Rich in calcium and potassium",
      "Supports digestive health",
      "Natural source of antioxidants",
      "Helps maintain bone health"
    ],
    nutritionalInfo: {
      protein: "3g",
      fat: "1g",
      carbs: "64g",
      fiber: "10g",
      calories: "249"
    },
    origin: "Nepal",
    storage: "Keep in cool, dry place. Refrigerate for longer shelf life."
  }
];