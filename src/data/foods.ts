export interface Food {
    id: string;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
    recipe: string[];
}

export const foods: Food[] = [
    {
        id: 'idly',
        title: 'Soft & Fluffy Idly',
        description: 'Traditional South Indian steamed rice cakes, exceptionally soft and perfect for breakfast.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9de?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '2 cups Idli Rice (parboiled rice)',
            '1/2 cup Urad Dal (split black gram)',
            '1/4 tsp Fenugreek seeds',
            'Water for grinding',
            'Salt to taste'
        ],
        recipe: [
            'Wash and soak the idli rice in water for at least 4 hours.',
            'Wash and soak the urad dal along with fenugreek seeds in water for 4 hours separately.',
            'Grind the urad dal until fluffy and smooth, adding ice-cold water gradually.',
            'Grind the rice into a slightly coarse paste.',
            'Mix both batters together with salt, cover, and let it ferment overnight (8-10 hours).',
            'Pour the fermented batter into greased idli molds and steam for 10-12 minutes until cooked.'
        ]
    },
    {
        id: 'dosai',
        title: 'Crispy Dosai',
        description: 'A thin, crispy, and golden South Indian crepe made from a fermented rice and lentil batter.',
        image: 'https://images.unsplash.com/photo-1610196598971-ceca8452445b?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '3 cups Raw Rice or Idli Rice',
            '1 cup Urad Dal',
            '1/2 tsp Fenugreek seeds',
            '1 tbsp Chana Dal',
            'Salt to taste',
            'Oil or Ghee for cooking'
        ],
        recipe: [
            'Soak rice, urad dal, chana dal, and fenugreek seeds together in water for 4-5 hours.',
            'Grind the soaked mixture into a smooth, pourable batter. Add salt and mix well.',
            'Cover and let the batter ferment in a warm place for 8-12 hours.',
            'Heat a flat iron skillet (tawa) and pour a ladle of batter in the center. Spread it outward in a circular motion to make a thin circle.',
            'Drizzle a little oil or ghee around the edges and cook until golden brown and crispy.',
            'Fold and serve hot with chutney and sambar.'
        ]
    },
    {
        id: 'pongal',
        title: 'Ven Pongal',
        description: 'A comforting and savory porridge made of rice and lentils, tempered with black pepper and ghee.',
        image: 'https://images.unsplash.com/photo-1614531341641-fc30f5dce9b2?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '1/2 cup Raw Rice',
            '1/2 cup Moong Dal (split yellow lentils)',
            '4 cups Water',
            '1 tsp Black peppercorns',
            '1 tsp Cumin seeds',
            '1 inch Ginger, finely chopped',
            '1/4 cup Ghee',
            'Cashews and curry leaves for tempering',
            'Salt to taste'
        ],
        recipe: [
            'Dry roast the moong dal slightly until aromatic. Wash the dal and rice together.',
            'Cook the rice and dal with water and salt in a pressure cooker until soft and mushy (about 4-5 whistles).',
            'Coarsely crush the black pepper and cumin seeds.',
            'Heat ghee in a small pan. Add the crushed pepper-cumin mixture, ginger, cashews, and curry leaves.',
            'Fry until cashews turn golden brown.',
            'Pour the tempered mixture over the cooked rice and dal, mix thoroughly, and serve hot.'
        ]
    },
    {
        id: 'sambar',
        title: 'South Indian Sambar',
        description: 'A hearty lentil and mixed vegetable stew cooked with tamarind and freshly aromatic spices.',
        image: 'https://images.unsplash.com/photo-1626779848520-213c32a0d17d?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '1/2 cup Toor Dal (split pigeon peas)',
            '2 cups Mixed vegetables (drumsticks, carrots, pumpkin, onions)',
            'Lemon-sized Tamarind (soaked in warm water to extract juice)',
            '2 tbsp Sambar powder',
            '1/2 tsp Turmeric powder',
            'Mustard seeds, fenugreek, and cumin for tempering',
            'Curry leaves and fresh coriander',
            'Salt to taste',
            'Oil for cooking'
        ],
        recipe: [
            'Pressure cook the toor dal with a pinch of turmeric and water until completely mushy. Mash it well.',
            'In a large pot, cook the mixed vegetables with a little water and salt until tender.',
            'Add the tamarind extract and boil for 5-7 minutes to remove the raw smell.',
            'Add the sambar powder and the cooked dal to the vegetables. Mix well and let it simmer for 10 minutes.',
            'In a separate small pan, heat oil, add mustard seeds, fenugreek, cumin, and curry leaves. Once they splutter, pour this tempering over the sambar.',
            'Garnish with fresh coriander leaves and serve with rice, idli, or dosa.'
        ]
    },
    {
        id: 'payasam',
        title: 'Semiya Payasam',
        description: 'A rich and creamy traditional dessert made with roasted vermicelli, milk, cardamom, and nuts.',
        image: 'https://images.unsplash.com/photo-1596489392263-d1dfd9a60cb3?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '1/2 cup Vermicelli (Semiya)',
            '4 cups Whole Milk',
            '1/2 cup Sugar (adjust to taste)',
            '2 tbsp Ghee',
            '10-15 Cashews and Raisins',
            '1/2 tsp Cardamom powder'
        ],
        recipe: [
            'Heat ghee in a pan and roast cashews until golden, then add raisins until they plump up. Set aside.',
            'In the same pan, roast the vermicelli on low heat until it turns golden brown (if not pre-roasted).',
            'In a heavy-bottomed pot, bring the milk to a boil. Reduce the heat and simmer for 5 minutes.',
            'Add the roasted vermicelli to the boiling milk. Cook on low to medium heat until the vermicelli is soft.',
            'Add sugar and stir continuously until completely dissolved.',
            'Stir in the cardamom powder and the roasted nuts and raisins. Cook for another 2 minutes.',
            'Serve warm or chilled.'
        ]
    },
    {
        id: 'chettinad-chicken',
        title: 'Chettinad Chicken Curry',
        description: 'A fiery, wildly flavorful curry from Tamil Nadu, known for its complex blend of freshly roasted spices.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
        ingredients: [
            '500g Chicken, cut into pieces',
            '2 large Onions, finely chopped',
            '2 Tomatoes, pureed or chopped',
            'Curry leaves',
            'Whole spices (Fennel, cumin, cloves, cardamom, cinnamon, star anise)',
            'Dry red chilies and black peppercorns',
            '2 tbsp Fresh coconut, grated',
            'Ginger-garlic paste',
            'Oil and Salt'
        ],
        recipe: [
            'Dry roast the whole spices, dry red chilies, peppercorns, and grated coconut until fragrant and golden. Blend into a smooth paste with a little water.',
            'Heat oil in a pan, add fennel seeds and curry leaves. Sauté the onions until deep golden brown.',
            'Add ginger-garlic paste and sauté until the raw smell disappears.',
            'Add the tomatoes and cook until the oil starts separating from the mixture.',
            'Add the chicken pieces and sauté for 5 minutes to seal the juices.',
            'Stir in the freshly ground spice paste and mix well so the chicken is fully coated.',
            'Add water as needed, cover, and cook on medium heat for 20-25 minutes until the chicken is tender.',
            'Garnish with coriander leaves and serve hot with paratha or rice.'
        ]
    }
];