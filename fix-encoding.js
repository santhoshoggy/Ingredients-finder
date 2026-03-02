const fs = require('fs');
const content = `export interface Food {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  recipe: string[];
}

export const foods: Food[] = [
  {
    id: 'creamy-pasta',
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish elevated with fresh garlic, parmesan, and a touch of parsley.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 lb Fettuccine or linguine',
      '2 tbsp Butter',
      '4 cloves Garlic, minced',
      '1 cup Heavy cream',
      '1 cup Parmesan cheese, grated',
      'Salt and black pepper to taste',
      'Fresh parsley for garnish'
    ],
    recipe: [
      'Boil water and cook the pasta according to package instructions until al dente.',
      'In a large skillet, melt the butter over medium heat. Add the minced garlic and sauté until fragrant (about 1 minute).',
      'Pour in the heavy cream and let it simmer for 3-4 minutes until it slightly thickens.',
      'Lower the heat and gradually whisk in the grated Parmesan cheese until the sauce is smooth.',
      'Add the cooked pasta to the skillet, tossing well to coat it evenly in the cheese sauce.',
      'Season with salt and pepper, garnish with fresh parsley, and serve immediately.'
    ]
  },
  {
    id: 'spicy-ramen',
    title: 'Spicy Miso Ramen',
    description: 'A comforting bowl of rich pork broth, chili oil, and perfectly cooked noodles.',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 packs Ramen noodles',
      '4 cups Chicken or pork broth',
      '3 tbsp Miso paste',
      '1 tbsp Chili oil (adjust for spice level)',
      '1 cup Sliced mushrooms',
      '2 Soft-boiled eggs',
      'Green onions and sesame seeds for garnish'
    ],
    recipe: [
      'Heat the broth in a pot over medium heat. Once simmering, whisk in the miso paste and chili oil until fully dissolved.',
      'Cook the ramen noodles separately according to package instructions. Drain and set aside.',
      'In the broth, lightly cook the mushrooms until tender.',
      'Divide the noodles into two large bowls and pour the hot miso broth over them.',
      'Top each bowl with a soft-boiled egg (halved), green onions, and sesame seeds.',
      'Serve hot with extra chili oil on the side if desired.'
    ]
  },
  {
    id: 'margherita-pizza',
    title: 'Classic Margherita Pizza',
    description: 'A rustic Italian pizza with fresh mozzarella, basil, and a perfectly blistered crust.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 Pizza dough (store-bought or homemade)',
      '1/2 cup Crushed San Marzano tomatoes',
      '8 oz Fresh mozzarella cheese, sliced',
      'A handful of Fresh basil leaves',
      '2 tbsp Extra-virgin olive oil',
      'Flaky sea salt'
    ],
    recipe: [
      'Preheat your oven to its highest setting (usually 500°F or 260°C). If you have a pizza stone, place it in the oven to heat.',
      'Roll or stretch the pizza dough out to a 10-12 inch circle on a floured surface.',
      'Spread the crushed tomatoes evenly over the dough, leaving a small border for the crust.',
      'Arrange the mozzarella slices on top of the tomatoes.',
      'Bake for 8-12 minutes until the crust is golden and the cheese is bubbly and slightly browned.',
      'Remove from oven, add fresh basil leaves, drizzle with olive oil, and sprinkle with sea salt before slicing.'
    ]
  },
  {
    id: 'avocado-toast',
    title: 'Gourmet Avocado Toast',
    description: 'Crispy sourdough topped with mashed avocado, cherry tomatoes, and microgreens.',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 slices Sourdough bread, thick-cut',
      '1 large Ripe avocado',
      '1/2 cup Cherry tomatoes, halved',
      'Small pinch of Red pepper flakes',
      '1 tbsp Lemon juice',
      'Microgreens or arugula for topping'
    ],
    recipe: [
      'Toast the sourdough slices until fully golden and crisp.',
      'In a small bowl, roughly mash the avocado with the lemon juice, salt, and pepper.',
      'Spread the avocado mixture generously onto the toasted bread.',
      'Top with halved cherry tomatoes, a sprinkle of red pepper flakes, and microgreens.',
      'Drizzle a tiny amount of olive oil over the top for an extra glossy finish and serve.'
    ]
  },
  {
    id: 'berry-pancakes',
    title: 'Fluffy Berry Pancakes',
    description: 'Thick, fluffy buttermilk pancakes stacked high and drowned in maple syrup and mixed berries.',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 1/2 cups All-purpose flour',
      '2 tbsp Sugar',
      '1 tbsp Baking powder',
      '1 1/4 cups Buttermilk',
      '1 Egg',
      '1 cup Mixed berries (blueberries, raspberries)',
      'Maple syrup and butter for serving'
    ],
    recipe: [
      'In a large mixing bowl, whisk together the flour, sugar, and baking powder.',
      'In another bowl, whisk the buttermilk, egg, and a splash of vanilla extract if desired.',
      'Pour the wet ingredients into the dry ingredients and gently fold together until just combined (lumps are fine).',
      'Heat a lightly buttered griddle or pan over medium heat. Pour roughly 1/4 cup of batter per pancake.',
      'Add a few berries onto the wet batter. Flip when bubbles form on the surface (about 2-3 minutes).',
      'Cook for another 1-2 minutes until golden brown. Serve stacked with more berries, butter, and maple syrup.'
    ]
  },
  {
    id: 'grilled-salmon',
    title: 'Lemon Herb Grilled Salmon',
    description: 'A healthy and flavorful dish featuring perfectly charred salmon with a zesty lemon-herb marinade.',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 Salmon fillets',
      '2 tbsp Olive oil',
      '1 tbsp Fresh lemon juice',
      '1 tsp Fresh dill, chopped',
      '1 tsp Fresh thyme, chopped',
      '2 cloves Garlic, minced',
      'Salt and pepper'
    ],
    recipe: [
      'In a small bowl, mix olive oil, lemon juice, dill, thyme, garlic, salt, and pepper.',
      'Brush the marinade evenly over the salmon fillets and let it sit for about 10-15 minutes.',
      'Preheat the grill to medium-high heat and lightly oil the grates.',
      'Place the salmon skin-side down on the grill and cook for 5-7 minutes.',
      'Carefully flip the salmon and cook for an additional 2-3 minutes, depending on thickness, until opaque and easily flaked.',
      'Serve with a side of asparagus or a light garden salad.'
    ]
  }
];`;

fs.writeFileSync('src/data/foods.ts', content, 'utf8');
console.log('Successfully wrote foods.ts with utf8 encoding');
