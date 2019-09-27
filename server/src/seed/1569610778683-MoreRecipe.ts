import {MigrationInterface, QueryRunner} from "typeorm";
import {create} from "../services/Recipe.service";

export class MoreRecipe1569610778683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const data = [
            {name: 'One Skillet Mexican Quinoa', description: 'Heat oil in a large skillet over medium-high heat. Saute jalapeno pepper and garlic in hot oil until fragrant, about 1 minute. Watch Now\n' +
                    'Stir black beans, tomatoes, yellow corn, quinoa, and chicken broth into skillet; season with red pepper flakes, chili powder, cumin, salt, and black pepper. Bring to a boil, cover the skillet with a lid, reduce heat to low, and simmer until quinoa is tender and liquid is mostly absorbed, about 20 minutes. Stir avocado, lime juice, and cilantro into quinoa until combined.', image: 'https://images.media-allrecipes.com/userphotos/720x405/4539591.jpg', ingredients: [{name: 'olive oil'}, {name: 'jalapeno pepper'}, {name: 'garlic'}, {name: 'can black beans'}, {name: 'can tomatoes'}, {name: 'yellow corn'}, {name: 'quinoa'}, {name: 'chicken broth'}, {name: 'lime'}, {name: 'salt'}]},
            {name: 'Beautiful Courgette Carbonara', description: 'Put a large pan of salted water on to boil.\n' +
                    'Halve and then quarter any larger courgettes lengthways. Cut out and discard any fluffy middle bits, and slice the courgettes at an angle into pieces roughly the same size and shape as the penne. Smaller courgettes can simply be sliced finely.\n' +
                    'Your water will now be boiling, so add the penne to the pan and cook according to the packet instructions.\n' +
                    'To make your creamy carbonara sauce, separate the eggs and put the yolks into a bowl (saving the whites for another recipe). Add the cream and grate in half the Parmesan, and mix together with a fork. Season lightly with sea salt and black pepper, and put to one side.\n' +
                    'Heat a very large frying pan (a 35cm one is a good start – every house should have one!) and add a good splash of olive oil. Cut the pancetta or bacon into chunky lardons and fry until dark brown and crisp.\n' +
                    'Add the courgette slices and 2 big pinches of black pepper, not just to season but to give it a bit of a kick. Pick, chop and sprinkle in the thyme leaves (reserving any flowers), give everything a stir, so the courgettes become coated with all the lovely bacon-flavoured oil, and fry until they start to turn lightly golden and have softened slightly.\n' +
                    'It’s very important to get this next bit right or your carbonara could end up ruined. You need to work quickly. When the pasta is cooked, drain it, reserving a little of the cooking water. Immediately, toss the pasta in the pan with the courgettes, bacon and lovely flavours, then remove from the heat and add a ladleful of the reserved cooking water and your creamy sauce. Stir together quickly. (No more cooking now, otherwise you’ll scramble the eggs.)\n' +
                    'Get everyone around the table, ready to eat straight away. While you’re tossing the pasta and sauce, grate in the rest of the Parmesan and add a little more of the cooking water if needed, to give you a silky and shiny sauce. Taste quickly for seasoning.\n' +
                    'If you’ve managed to get any courgette flowers, tear them over the top, then serve and eat immediately, as the sauce can become thick and stodgy if left too long.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/94356757.jpg?tr=w-414,', ingredients: [{name: 'courgettes'}, {name: 'eggs'}, {name: 'Parmesan cheese'}, {name: 'olive oil'}, {name: 'bacon'}, {name: 'pasta'}]},
            {name: 'Spaghetti and Easy Meatballs', description: 'Preheat oven to 375°F. In a large pot of boiling salted water, cook spaghetti, stirring often, until al dente, about 10 minutes. Drain well in a colander. In a large, wide saucepan or deep skillet, heat tomato sauce over low heat while you proceed.\n' +
                    'While pasta is cooking, combine beef, soaked bread crumbs, cheese, onion, parsley, egg, garlic and salt in a large bowl. Form mixture into balls slightly larger than golf balls. (They will shrink as they cook.) Lay meatballs out on two nonstick or oiled baking sheets and bake in oven until nicely browned, about 10 minutes.\n' +
                    'Transfer meatballs from oven with tongs and place into simmering sauce to combine. Serve meatballs and sauce on top of spaghetti.', image: 'https://i.pinimg.com/564x/a2/19/c7/a219c7143f4390cdcfb024b6bb8199ba.jpg', ingredients: [{name: 'spaghnetti'}, {name: 'tomato sause'}, {name: 'ground beef'}, {name: ' grated Parmesan'}, {name: 'chopped onion'}, {name: 'garlic'}, {name: 'salt'}]},
            {name: 'Fluffy Pancakes', description: 'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".\n' +
                    'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.\n' +
                    'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.', image: 'https://images.media-allrecipes.com/userphotos/720x405/5079227.jpg', ingredients: [{name: 'milk'}, {name: 'flour'}, {name: 'sugar'}, {name: 'baking powder'}, {name: 'salt'}, {name: 'eggs'}, {name: 'butter'}]},
            {name: 'Roasted Black Bean Burgers', description: 'Preheat the oven to 200ºC/400ºF/gas 6. Peel 1 onion, place in a food processor with the mushrooms, rye bread and 1 teaspoon of ground coriander, and whiz until fine. Drain and pulse in the black beans, season lightly with sea salt and black pepper, then divide into 4 and shape into patties, roughly 2.5cm thick. Rub all over with oil and dust with ground coriander, then place on an oiled baking tray and roast for 25 minutes, or until dark and crispy, topping with the Cheddar and warming the rolls for the last few minutes.\n' +
                    '\n' +
                    'Meanwhile, peel and very finely chop the remaining onion with the tomatoes and place in a bowl. Squeeze over the lime juice, add a few shakes of Tabasco and season to taste. Destone, peel and finely slice the mango and avocado.\n' +
                    '\n' +
                    'Halve the warm rolls and divide the yoghurt between the bases, followed by half the salsa, the mango, avocado and coriander leaves. Top with the burgers, remaining salsa and extra Tabasco, pop the lids on and press down lightly.\n' +
                    '\n' +
                    'Always nice with oven-roasted, skin-on chips.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/92507794.jpg?tr=w-414,', ingredients: [{name: 'onions'}, {name: 'bread'}, {name: 'black beans'}, {name: 'olive oil'}, {name: 'Cheddar cheese'}, {name: 'tomatoes'}, {name: 'lime'}, {name: 'mango'}, {name: 'avocado'}, {name: 'natural yoghurt'}]},
            {name: 'Red Velvet Ice-Cream Cake', description: 'Step 1\n' +
                    'Preheat oven to 350°F. Grease and flour 2 (9-inch) round cake pans. Place paper baking cups in 2 standard-size muffin cups, or grease and flour 2 (4-oz.) ramekins.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Prepare the Red Velvet Cake: Beat butter with an electric mixer on medium speed until light and fluffy, about 3 minutes. Gradually add granulated sugar, beating until blended. Add eggs, 1 at a time, beating until blended after each addition. Beat in food coloring and vanilla.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Whisk together flour, cocoa, baking powder, baking soda, and salt; add to butter mixture alternately with buttermilk, beginning and ending with flour mixture. Beat at low speed just until blended after each addition. Fill muffin cups or ramekins three-fourths full. Divide remaining batter between prepared cake pans.\n' +
                    '\n' +
                    'Step 4\n' +
                    'Bake in preheated oven until a wooden pick inserted in the center comes out with moist crumbs, 15 to 16 minutes for cupcakes and 20 to 25 minutes for cake layers. Cool cake layers and cupcakes in pans on wire racks 15 minutes. Transfer cake layers and cupcakes from pans to wire racks, and cool completely, about\n' +
                    '30 minutes. Wrap cupcakes in plastic wrap, and freeze 2 hours.\n' +
                    '\n' +
                    'Step 5\n' +
                    'Prepare the Ice-Cream Layer: Line a 9-inch round cake pan with plastic wrap, allowing ends to extend over edge of pan to create handles. Remove cupcakes from freezer, and cut into 1⁄4-inch cubes. Place ice cream in a large bowl; beat at medium speed until soft but not melted. Gently fold cupcake cubes into ice cream. Spread ice cream into prepared pan. Cover and place pan in freezer until frozen, at least 3 hours or overnight.\n' +
                    '\n' +
                    'Step 6\n' +
                    'Prepare the Frosting: Place water in a small microwavable bowl, and sprinkle with gelatin; let stand 5 minutes. Microwave on HIGH until gelatin melts and mixture is smooth, about 10 seconds. Let stand\n' +
                    '5 minutes.\n' +
                    '\n', image: 'https://cdn-image.myrecipes.com/sites/default/files/1553618121/red-velvet-ice-cream-cake-recipe-sl.jpg', ingredients: [{name: 'butter'}, {name: 'sugar'}, {name: 'eggs'}, {name: 'vanilla extract'}, {name: 'flour'}, {name: 'red liquid food coloring'}, {name: 'cocoa'}, {name: 'salt'}, {name: 'buttermilk'}, {name: 'ice cream'}, {name: 'heavy cream'}, {name: 'blueberries'}]},
            {name: 'American French Onion Soup', description: 'Preheat oven to 425 degrees F (220 degrees C).\n' +
                    'Melt 1/4 cup butter in a large, oven-safe skillet on medium heat. Stir in onions until they are all coated in butter. Transfer skillet to the preheated oven and cook onions, stirring occasionally, until they are tender and well browned, about 1 hour. \n' +
                    'Transfer skillet to the stovetop; cook and stir onions over medium heat until they start to brown and stick to the bottom of the pan, about 5 minutes. Pour sherry and vinegar into the pan, and bring to a boil while scraping browned bits of onion off the bottom of the pan with a wooden spoon.\n' +
                    'Place caramelized onions in a large soup pot. Pour in chicken broth, beef broth, and thyme. Bring to a boil, skimming off any foam and fat that appear on top. Reduce heat to low and simmer for about an hour. Season with salt and pepper to taste.\n' +
                    'Preheat the oven\'s broiler and set the oven rack about 6 inches from the heat source.\n' +
                    'Generously brush French bread slices with melted butter. Place on a baking sheet and broil in the preheated oven until crisp and golden, about 5 minutes.\n' +
                    'Ladle soup into heat-proof bowls, top each bowl with a piece of toasted bread, sprinkle with 2 to 3 tablespoons of Cheddar cheese and Monterey Jack cheese.\n' +
                    'Broil bowls of soup under the broiler until cheese is golden and bubbly, 5 to 6 minutes. ', image: 'https://images.media-allrecipes.com/userphotos/720x405/4562804.jpg', ingredients: [{name: 'butter'}, {name: 'onions'}, {name: 'chicken broth'}, {name: 'beef broth'}, {name: 'French bread'}, {name: 'black pepper'}, {name: 'Cheddar cheese'}]},
            {name: 'Chicken & Tofu Noodle Soup', description: 'Peel and finely slice the shallots, garlic and ginger. Remove the meat from the chicken thighs, reserving the bones, and slice it into nice thin strips.\n' +
                    'Place a large pan over a medium–low heat with a good lug of groundnut oil, then fry the shallots, ginger and garlic for 5 minutes, or until soft.\n' +
                    'Add the chicken with 1 tablespoon of sesame oil and fry for a few minutes more.\n' +
                    'Throw in the chicken bones and star anise, then cover with 700ml of water. Gently bring to the boil, reduce the heat to low, then cover and simmer for 35 to 40 minutes, or until the chicken is tender.\n' +
                    'Season the broth with the soy sauce and black pepper. Fish out and discard the bones.\n' +
                    'Meanwhile, cook the noodles according to the packet instructions, then divide between two deep bowls.\n' +
                    'Pick the herbs, chop the tofu into 1cm cubes, trim and finely slice the spring onions, then finely slice the chilli.\n' +
                    'Ladle the broth over the noodles, then top with the herbs, spring onions, chilli, spinach and tofu.\n' +
                    'Roughly chop and scatter over the nori, then finish with a squeeze of lime, and tuck in!', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46406470.jpg?tr=w-414,', ingredients: [{name: 'shallots'}, {name: 'garlic'}, {name: 'chicken thighs'}, {name: 'sesame oil'}, {name: 'groundnut oil'}, {name: 'rice noodles'}, {name: 'fresh mint'}, {name: 'tofu'}, {name: 'onions'}, {name: 'red chilli'}, {name: 'spinach'}, {name: 'nori sheets'}]},
            {name: 'Vegan Corndogs', description: 'Step 1\n' +
                    'Prepare the “Hotdogs”: Preheat oven to 400°F. Line a baking sheet with parchment paper. Arrange garlic, carrots, mushrooms, beet, and onion in an even layer on prepared baking sheet. Sprinkle with 1 teaspoon each of the salt and pepper. Bake in preheated oven 20 minutes. Set aside to cool.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Process roasted vegetables in a food processor until finely chopped. Add nutritional yeast, soy sauce, paprika, lemon juice, cumin, remaining teaspoon salt and pepper, and, if desired, miso. Pulse until a well combined paste forms. Add wheat gluten, and process until incorporated and mixture looks like a ball of dough.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Divide mixture into 1/3 cup portions. Take each portion, and roll into a ball and then into an elongated “hotdog” shape. Roll each “hotdog” in piece of parchment paper and then in a piece of aluminum foil. Twist ends to seal. \n' +
                    '\n' +
                    'Step 4\n' +
                    'In a large pot with a steamer basket, add just enough water to reach the bottom of basket (about 1 1/2 to 2 cups) and bring to a boil over medium. Add wrapped “hotdogs” to basket; cover, and steam 30 minutes. Turn off heat, uncover, and allow to cool in the pot. Once cool, unwrap and chill until ready to use.\n' +
                    '\n' +
                    'Step 5\n' +
                    'Prepare the Corndog Batter: Heat 6 inches of oil in a Dutch oven to 360-375°F.\n' +
                    '\n' +
                    'Skewer each “hotdog” about three-fourths of the way through, trimming end of skewers if needed.\n' +
                    '\n' +
                    'Step 6\n' +
                    'Combine flour, cornmeal, sugar, baking powder, and salt in a medium bowl. Gently stir in plant milk until smooth. Pour batter into a tall drinking glass (deep enough to cover the “hotdog”). Dip “hotdogs” in batter, using a spoon to help coat, if needed. Quickly transfer to hot oil. Fry until outside of corndogs are golden brown, 8 to 10 minutes. Drain on paper towels, and let cool about 5 minutes before eating. Serve with ketchup and mustard.', image: 'https://cdn-image.myrecipes.com/sites/default/files/1554329437/MRTrending_0326190439%205.jpg', ingredients: [{name: 'garlic'}, {name: 'carrots'}, {name: 'mushrooms'}, {name: 'red beet'}, {name: 'onions'}, {name: 'salt'}, {name: 'black pepper'}, {name: 'yeast'}, {name: 'soy sauce'}, {name: 'paprika'}, {name: 'lemon juice'}, {name: 'cumin'}]},
            {name: 'Breakfast Pies', description: 'Preheat oven to 400 degrees F (200 degrees C).\n' +
                    'In a large, deep skillet over medium-high heat, combine sausage, onion and green pepper. Cook until sausage is evenly brown. Drain, crumble, and set aside.\n' +
                    'Separate the dough into 10 individual biscuits. Flatten each biscuit out, then line the bottom and sides of 10 muffin cups. Evenly distribute sausage mixture between the cups. Mix together the eggs and milk, and divide between the cups. Sprinkle tops with shredded cheese.\n' +
                    'Bake in preheated oven for 18 to 20 minutes, or until filling is set.', image: 'https://images.media-allrecipes.com/userphotos/560x315/4516111.jpg', ingredients: [{name: 'sausages'}, {name: 'onions'}, {name: 'bell pepper'}, {name: 'biscuit dough'}, {name: 'eggs'}, {name: 'milk'}, {name: 'cheese'}]},
            {name: 'Spanish Tortilla', description: 'Peel the potatoes using a speed-peeler, then carefully cut them into thin slices. Pat the potato slices dry with a clean tea towel.\n' +
                    'Peel and finely slice the onion. Drizzle 2 tablespoons of oil into a small frying pan over a medium heat, then add the onion and potatoes.\n' +
                    'Turn the heat down to low and cook for 25 to 30 minutes, or until the onions are turning golden and the potato slices are cooked through. Try not to stir it too much or the potatoes will break up – just use a fish slice to flip them over halfway through.\n' +
                    'Crack the eggs into a mixing bowl, season with a tiny pinch of sea salt and black pepper, then whisk together with a fork.\n' +
                    'When the onions and potatoes are cooked, remove the pan from the heat and carefully tip them into the eggs. Transfer the mixture back into the frying pan and place it over a low heat. Cook for around 20 minutes, or until there’s almost no runny egg on top.\n' +
                    'Use a fish slice to slightly lift and loosen the sides of the tortilla. Carefully flip the pan over a dinner plate and tip out the tortilla, then slide it back into the pan and cook for another 5 minutes, or until golden and cooked through.\n' +
                    'Turn out the tortilla onto a serving board, then cut into 6 wedges and serve hot or cold with a simple green salad.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46260004.jpg?tr=w-414,', ingredients: [{name: 'potatoes'}, {name: 'onions'}, {name: 'olive oil'}, {name: 'eggs'}]},
            {name: 'Extra-Easy Lasagna', description: 'Step 1\n' +
                    'Cook beef in a large skillet over medium heat, stirring until it crumbles and is no longer pink; drain. Stir in pasta sauce.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Spread one-third of meat sauce in a lightly greased 11- x 7-inch baking dish; layer with 3 noodles and half each of ricotta cheese and mozzarella cheese. (The ricotta cheese layers will be thin.) Repeat procedure; spread remaining one-third of meat sauce over mozzarella cheese. Slowly pour 1/4 cup hot water around inside edge of dish. Tightly cover baking dish with 2 layers of heavy-duty aluminum foil.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Bake at 375° for 45 minutes; uncover and bake 10 more minutes. Let stand 10 minutes before serving.\n' +
                    '\n' +
                    'Step 4\n' +
                    'Note: For testing purposes only, we used Classico Tomato & Basil pasta sauce.', image: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/extra-easy-lasagna-sl.jpg?itok=v9UKmTl7', ingredients: [{name: 'ground beef'}, {name: 'pasta sauce'}, {name: 'lasagna noodles'}, {name: 'ricotta cheese'}, {name: 'mozzarella cheese'}]},
            {name: 'Banana and Walnut Brownies', description: 'Preheat oven to 350 degrees F (175 degrees C).\n' +
                    'Beat eggs, water, and vegetable oil together in a large bowl until smooth; add brownie mix and stir until the mixture is a smooth batter. Beat mashed banana into batter; fold in walnuts. Pour batter into a 13x9-inch baking dish.\n' +
                    'Bake in preheated oven until set in the middle, about 23 minutes.\n' +
                    'Cool brownies at room temperature for 10 to 15 minutes before cutting into bars. Sprinkle confectioners\' sugar over the brownies.', image: 'https://images.media-allrecipes.com/userphotos/560x315/1552141.jpg', ingredients: [{name: 'eggs'}, {name: 'oil'}, {name: 'brownie mix'}, {name:'bananas'}, {name: 'walnuts'}, {name: 'sugar'}]},
            {name: 'Chicken In A Pot', description: 'Halve any large tomatoes, then peel and finely slice the garlic. Peel and chop the onion, stone the olives, and pick and roughly chop the parsley. Drain the chickpeas.\n' +
                    'In a large pan, brown the chicken in a little oil. Drain off any excess fat, then add the tomatoes, stock and garlic.\n' +
                    'Simmer for 45 minutes, then add all the other ingredients. Cook on a low heat for a further 30 minutes.\n' +
                    'Before serving, shred the chicken from the bone and add it back to the pan, discarding the bones and skin, then season to taste.\n' +
                    'Delicious served with garlic mayo and a chunk of crusty bread.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46263860.jpg?tr=w-414,', ingredients: [{name: 'tomatoes'}, {name: 'garlic'}, {name: 'onions'}, {name: 'olives'}, {name: 'parsley'}, {name: 'tin chickpeas'}, {name: 'chicken legs'}, {name: 'olive oil'}, {name: 'chicken stock'}, {name: 'potatoes'}]},
            {name: 'Best Damn Chicken Pot Pie ', description: 'Step 1\n' +
                    'Preheat oven to 400˚F.\n' +
                    '\n' +
                    'Step 2\n' +
                    'To prepare filling, heat oil in a large saucepan over medium-high heat. Add onion, carrot, and celery; sauté 4 minutes. Add chicken, salt and pepper; sauté 3 minutes. Stir in flour; cook 1 minute, stirring constantly. Add thyme sprigs. Slowly pour stock into pan, stirring constantly; bring to a boil. Reduce heat to medium; simmer 8 minutes, stirring occasionally. Remove from heat. Discard thyme sprigs. Stir in peas, green onions, and chopped thyme. Pour filling in a 9-inch baking dish coated with cooking spray.\n' +
                    '\n' +
                    'Step 3\n' +
                    'To prepare crust, weigh or lightly spoon 13/4 cups flour into dry measuring cups; level with a knife. Combine 13/4 cups flour and next 5 ingredients in the mixing bowl of a heavy-duty stand mixer with paddle attachment. With motor running at low speed, add butter 2 – 3 pieces at a time, beating until butter breaks up into pea-sized pieces. Stir in 1 egg yolk. Add enough ice-cold water, 1 Tbsp. at a time, until a moist dough forms, beating just until dough forms a ball. Roll dough out to 12-inch circle. Place dough over top of pie plate, folding edges and fluting, pressing edges into sides of pie plate to prevent them from sinking. Cut 3 to 5 slits in top of pastry to vent.\n' +
                    '\n' +
                    'Step 4\n' +
                    'Whisk cream and remaining 1 egg yolk together; brush mixture over top of pastry. Bake at 400˚ for 25 – 30 minutes or until pastry is golden brown and cooked through.', image: 'https://cdn-image.myrecipes.com/sites/default/files/bestdamnchickenpotpie_0111.jpg', ingredients: [{name: 'oil'}, {name: 'onions'}, {name: 'carrots'}, {name: 'celery'}, {name: 'chicken thighs'}, {name: 'salt'}, {name: 'black pepper'}, {name: 'flour'}, {name: 'chicken stock'}, {name: 'Parmesan cheese'}, {name: 'cornmeal'}, {name: 'butter'}, {name: 'yolks'}, {name: 'heave cream'}]},
            {name: 'Peanut Butter Chip Chocolate Cookies', description: 'Preheat oven to 350 degrees F (175 degrees C). Grease cookie sheets.\n' +
                    'In a medium bowl, cream together the butter and sugar. Stir in the eggs and vanilla. Combine the flour, cocoa, baking soda and salt, stir into the creamed mixture. Finally, fold in the peanut butter chips. Drop cookies by heaping teaspoonfuls onto the prepared cookie sheets.\n' +
                    'Bake for 8 to 10 minutes in the preheated oven, until set. Cool on wire racks.', image: 'https://images.media-allrecipes.com/userphotos/720x405/714319.jpg', ingredients: [{name: 'butter'}, {name: 'sugar'}, {name: 'eggs'}, {name: 'vanilla extract'}, {name: 'flour'}, {name: 'cocoa'}, {name: 'baking soda'}, {name: 'salt'}, {name: 'peanut butter chips'}]},
            {name: 'Simple Cheese Omelette', description: 'Crack the eggs into a mixing bowl, season with a pinch of sea salt and black pepper, then beat well with a fork until fully combined.\n' +
                    'Place a small non-stick frying pan on a low heat to warm up.\n' +
                    'Grate the cheese onto a board and set aside.\n' +
                    'Add ½ tablespoon of oil to the hot pan, then carefully pour in the eggs.\n' +
                    'Tilt the pan to spread them out evenly, using a fork to swirl the eggs around the pan a little.\n' +
                    'When the omelette begins to cook and firm up, but still has a little raw egg on top, sprinkle over the cheese.\n' +
                    'Using a spatula, ease around the edges of the omelette, then fold it over in half.\n' +
                    'When it starts to turn golden brown underneath, remove the pan from the heat and slide the omelette onto a plate. Delicious with a tomato salad and wholemeal bread.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/0siQaM1MqTv8KwCQYOv41F.jpg?tr=w-414,', ingredients: [{name: 'eggs'}, {name: 'olive oil'}, {name: 'Cheddar cheese'}]},
            {name: 'Creamy Roasted Tomato Soup', description: 'Step 1\n' +
                    'Preheat oven to 375°.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Combine tomatoes, shallots, garlic, oregano, 1 1/2 teaspoons oil, 1/2 teaspoon salt, and pepper; toss. Arrange tomato mixture on a baking sheet lined with parchment paper. Bake at 375° for 1 hour or until slightly caramelized.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Heat a Dutch oven over medium heat. Add 1 1/2 teaspoons oil to pan; swirl to coat. Add leek; cover, reduce heat to low, and cook 8 minutes. Add tomato mixture and any accumulated liquid to pan; cook 2 minutes. Add stock, rind, basil leaves and stems, and remaining 1/2 teaspoon salt. Simmer, stirring occasionally, about 15 minutes or until liquid is slightly reduced. Remove and discard rind and stems. Place soup in a blender; blend until smooth. Divide soup evenly among 8 soup bowls; drizzle evenly with remaining 1 tablespoon oil.', image: 'https://cdn-image.myrecipes.com/sites/default/files/1605p113-creamy-roasted-tomato-soup.jpg', ingredients: [{name: 'tomatoes'}, {name: 'shallots'}, {name: 'garlic'}, {name: 'oregano'}, {name: 'olive oil'}, {name: 'salt'}, {name: 'black pepper'}, {name: 'leek'}, {name: 'cheese'}, {name: 'basil'}]},
            {name: 'Strawberry Bruschetta', description: 'Step 1\n' +
                    'Preheat your oven\'s broiler. Spread a thin layer of butter on each slice of bread. Arrange bread slices in a single layer on a large baking sheet.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Place bread under the broiler for 1 to 2 minutes, just until lightly toasted. Spoon some chopped strawberries onto each piece of toast, then sprinkle sugar over the strawberries.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Place under the broiler again until sugar is caramelized, 3 to 5 minutes. Serve immediately.', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5238599.jpg&w=639&h=639&c=sc&poi=face&q=85', ingredients: [{name: 'French baguette'}, {name: 'butter'}, {name: 'strawberries'}, {name: 'sugar'}]},
            {name: 'Quick Fish Cakes', description: 'Roughly chop the fish, then peel and grate the potato.\n' +
                    'Combine with the flour in a bowl, then season with sea salt and black pepper.\n' +
                    'Bring together with your hands and shape into 12 flat patties, then leave to chill in the fridge.\n' +
                    'Heat a glug of oil in a heavy-based pan over a medium-high heat. In batches of 4, cook the fish cakes for 2 to 3 minutes on each side, until golden and crisp, then remove to kitchen paper to drain.\n' +
                    'Pick, chop and stir the herbs through the mayo, then serve with the fish cakes, and some watercress and lemon wedges, if you like.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/Eritvs9z4leAwvU2EPXoJp.jpg?tr=w-414,', ingredients: [{name: 'pollock fillets'}, {name: 'flour'}, {name: 'olive oil'}, {name: 'herbs'}, {name: 'eggs'}]},
            {name: 'Triple-Apple Pie', description: 'Step 1\n' +
                    'Preheat oven to 375°F. Roll 1 dough into a 13-inch circle on a floured surface; fit into a 9-inch pie plate coated with cooking spray. Chill until ready to use.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Heat sugar, butter, 1 tablespoon water, and salt in a skillet over medium-high; cook 1 minute, stirring constantly. Stir in milk and vanilla. Bring to a boil, and cook, stirring constantly, until thickened, about 1 minute. Remove from heat; let stand 10 minutes.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Combine grated apple and 1 tablespoon flour in a bowl. Add apple wedges and remaining 3 tablespoons flour; toss to coat. Pour sugar mixture over apples; toss. Nestle apple mixture into piecrust in pie plate.\n' +
                    '\n' +
                    'Step 4\n' +
                    'Roll remaining pie dough into an 11 1/2-inch circle on floured surface. Place over apples in pie plate. Fold dough edge under, flute edges, and trim off any excess. Brush egg white over crust. Cut 6 to 8 (1-inch-long) slits in crust. Bake on bottom rack at 375°F for 1 hour or until browned and bubbling. Tent with foil after 40 minutes to prevent overbrowning, if needed. Remove from oven; cool on a wire rack. Cut pie into 10 wedges.', image: 'https://cdn-image.myrecipes.com/sites/default/files/triple-apple-pie-1810-p96.jpg', ingredients: [{name: 'pie doughs'}, {name: 'sugar'}, {name: 'butter'}, {name: 'salt'}, {name: 'vanilla extract'}, {name: 'apples'}, {name: 'flour'}, {name: 'eggs'}]},
            {name: 'Guacamole', description: 'In a medium bowl, mash together the avocados, lime juice, and salt. Mix in onion, cilantro, tomatoes, and garlic. Stir in cayenne pepper. Refrigerate 1 hour for best flavor, or serve immediately.', image: 'https://images.media-allrecipes.com/userphotos/720x405/4521556.jpg', ingredients: [{name: 'avocados'}, {name: 'lime'}, {name: 'salt'}, {name: 'onions'}, {name: 'tomatoes'}, {name: 'garlic'}]},
            {name: 'Ham & Peas', description: 'The day before you cook this recipe, soak the ham hocks in a pot of cold water overnight.\n' +
                    'The next day, drain the hocks, refill the pot with fresh cold water and bring to the boil. Discard the salty water, rinse the hocks, and repeat once more.\n' +
                    'Trim and finely slice the leeks, celery and carrots in your food processor or using a mandolin (use the guard!).\n' +
                    'Add the veg to a casserole pan with a lug of oil, a pinch of sea salt and black pepper, and the bay leaves. Sweat over a medium heat for 15 minutes, or until the veg are soft but not coloured, stirring occasionally.\n' +
                    'Add the drained ham hocks, pearl barley and chicken stock. Bring to the boil then cook, with the lid on, over a medium-low heat for 3 hours, or until the meat is very tender. Check on it occasionally, and top up with more hot stock or water if it gets too dry.\n' +
                    'Using tongs, transfer the ham hocks to a clean board and carefully remove all the fat and bones. Shred the meat then return it to the broth. Turn the heat up and add the peas.\n' +
                    'When they’re tender, pick, finely chop and stir in the parsley along with the mint sauce. Serve with bread and English mustard.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46258742.jpg?tr=w-414,', ingredients: [{name: 'ham'}, {name: 'leeks'}, {name: 'celery'}, {name: 'carrots'}, {name: 'olive oil'}, {name: 'chicken stock'}, {name: 'peas'}, {name: 'parsley'}, {name: 'mint sauce'}]},
            {name: 'Slow Cooker Sweet-and-Sour Chicken', description: 'Step 1\n' +
                    'Add chicken, bell pepper, chicken stock, onion, carrots, soy sauce, Worcestershire sauce, sambal oelek, and 1/2 cup ketchup to a 6-quart slow cooker. Cover and cook on low until chicken shreds easily with a fork, about 7 hours. Remove chicken from slow cooker. Shred chicken, and cover to keep warm.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Whisk together pineapple juice and cornstarch in a small bowl. Increase slow cooker heat to high; slowly stir in pineapple juice mixture and remaining 1/4 cup ketchup. Cook, uncovered, until sauce is thick enough to coat the back of a spoon, about 30 minutes. Stir in chicken. Serve over rice, and sprinkle with sesame seeds and scallions.', image: 'https://cdn-image.myrecipes.com/sites/default/files/slow-cooker-sweet-and-sour-chicken-1808-p38.jpg', ingredients: [{name: 'chicken thighs'}, {name: 'black pepper'}, {name: 'chicken stock'}, {name: 'onions'}, {name: 'carrots'}, {name: 'soy sauce'}, {name: 'ketchup'}, {name: 'pineapple juice'}, {name: 'rice'}, {name: 'sesame seeds'}]},
            {name: 'Double Tomato Bruschetta', description: 'Preheat the oven on broiler setting. \n' +
                    'In a large bowl, combine the roma tomatoes, sun-dried tomatoes, garlic, olive oil, vinegar, basil, salt, and pepper. Allow the mixture to sit for 10 minutes. \n' +
                    'Cut the baguette into 3/4-inch slices. On a baking sheet, arrange the baguette slices in a single layer. Broil for 1 to 2 minutes, until slightly brown. \n' +
                    'Divide the tomato mixture evenly over the baguette slices. Top the slices with mozzarella cheese. \n' +
                    'Broil for 5 minutes, or until the cheese is melted. ', image: 'https://images.media-allrecipes.com/userphotos/720x405/4542188.jpg', ingredients: [{name: 'tomatoes'}, {name: 'garlic'}, {name: 'olive oil'}, {name: 'balsamic vinegar'}, {name: 'basil'}, {name: 'salt'}, {name: 'black pepper'}, {name: 'French baguette'}, {name: 'mozzarella cheese'}]},
            {name: 'Chicken Noodle Soup', description: 'Roughly chop the celery heart, peel and trim the carrots and trim the leeks. Peel the garlic, onions and ginger, keeping them whole.\n' +
                    'Place into a very large saucepan with the chicken, bay leaves and parsley stalks. Season well with sea salt and black pepper and add enough water to just cover the chicken (about 3 litres).\n' +
                    'Bring to the boil, then turn the heat down and simmer for 1 hour.\n' +
                    'Remove everything from the pan, leaving only the stock. Throw away the herbs and ginger and once it’s cool enough to touch, shred the chicken.\n' +
                    'Bring the stock back to the boil and add a good splash of sherry, the saffron and a splash of ginger vinegar (if using).\n' +
                    'Add the pasta and continue to boil until the pasta is al dente.\n' +
                    'Return the chicken and vegetables to the pan and simmer over low heat until they are warmed through.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46257894.jpg?tr=w-414,', ingredients: [{name: 'celery'}, {name: 'carrots'}, {name: 'leeks'}, {name: 'garlic'}, {name: 'onions'}, {name: 'ginger'}, {name: 'chicken'}, {name: 'parsley'}, {name: 'saffron'}, {name: 'pasta'}]},
            {name: 'Easy Huevos Rancheros Bake', description: 'Step 1\n' +
                    'Preheat oven to 375°F. Arrange 6 of the tostadas evenly in a large cast-iron skillet, breaking into pieces as needed to cover bottom of skillet. Top evenly with 2⁄3 cup of the enchilada sauce, 1⁄2 cup of the beans, 2⁄3 cup of the Colby Jack cheese, and 1⁄3 cup of the queso blanco. Repeat layers 2 times. Bake until mixture bubbles, 20 to 25 minutes.\n' +
                    '\n' +
                    'Step 2\n' +
                    'During final 5 minutes of baking, heat a large nonstick skillet over medium. Add oil; crack eggs into skillet. Cook until whites are set, 4 minutes.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Arrange cooked eggs on baked tostada mixture. Sprinkle with salt and pepper. Top with avocado, sour cream, cilantro, and jalapeño.', image: 'https://cdn-image.myrecipes.com/sites/default/files/2598001_hospihuevos_rancheros_153.jpg', ingredients: [{name: 'tostados'}, {name: 'red sauce'}, {name: 'beans'}, {name: 'cheese'}, {name: 'olive oil'}, {name: 'queso blanco'}, {name: 'eggs'}, {name: 'black pepper'}, {name: 'avocado'}, {name: 'sour cream'}]},
            {name: 'Oatmeal Peanut Butter Cookies', description: 'Preheat oven to 350 degrees F (175 degrees C).\n' +
                    'In a large bowl, cream together shortening, margarine, brown sugar, white sugar, and peanut butter until smooth. Beat in the eggs one at a time until well blended. Combine the flour, baking soda, and salt; stir into the creamed mixture. Mix in the oats until just combined. Drop by teaspoonfuls onto ungreased cookie sheets.\n' +
                    'Bake for 10 to 15 minutes in the preheated oven, or until just light brown. Don\'t over-bake. Cool and store in an airtight container. ', image: 'https://images.media-allrecipes.com/userphotos/720x405/4526329.jpg', ingredients: [{name: 'shortening'}, {name: 'margarine'}, {name: 'sugar'}, {name: 'peanut butter'}, {name: 'eggs'}, {name: 'flour'}, {name: 'baking soda'}, {name: 'salt'}, {name: 'oats'}]},
            {name: 'Easy Spelt Pizza', description: 'Preheat the oven to 200ºC/gas 6.\n' +
                    'Combine the flour, baking powder, sea salt and sugar in a bowl. Beat the buttermilk, oil, egg and 100ml water together, then mix the wet ingredients into the dry.\n' +
                    'On a dusted surface, roll the dough out to 1cm thick.\n' +
                    'Peel and finely dice the shallot.\n' +
                    'Bake on a dusted baking tray for 15 minutes, then remove and top with the chopped shallot and the remaining ingredients. Serve with a good pinch of pepper, and the lemon wedge on the side for squeezing over.', image: 'https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/1LPBkF5qKZk8Zjek06UNJQ.jpg?tr=w-414,', ingredients: [{name: 'flour'}, {name: 'baking powder'}, {name: 'salt'}, {name: 'sugar'}, {name: 'buttermilk'}, {name: 'oil'}, {name: 'eggs'}, {name: 'shallots'}, {name: 'salmon'}, {name: 'ricotta cheese'}, {name: 'capers'}, {name: 'lemon'}]},
            {name: 'Sheet Pan Shrimp Fajitas', description: 'Step 1\n' +
                    'Place oven racks in center and upper third positions of oven. Preheat oven to 400°F. Toss together shrimp, bell peppers, poblano, onion, oil, chili powder, cumin, 5/8 teaspoon salt, and coriander on a baking sheet lined with aluminum foil. Place on middle rack of oven; roast until shrimp are cooked through, 9 to 10 minutes. Transfer shrimp to a plate, reserving remaining vegetable mixture on baking sheet. Cover shrimp with foil to keep warm.\n' +
                    '\n' +
                    'Step 2\n' +
                    'Turn broiler to high. Broil vegetables on upper oven rack until slightly charred, 3 to 4 minutes, and set aside. Stir together sour cream, chopped cilantro, jalapeño, lime zest and juice, garlic, and remaining 1/8 teaspoon salt in a bowl.\n' +
                    '\n' +
                    'Step 3\n' +
                    'Spoon shrimp and vegetables evenly onto warm tortillas; top with sour cream mixture. Sprinkle with cilantro leaves; serve with lime wedges.', image: 'https://cdn-image.myrecipes.com/sites/default/files/sheet-pan-shrimp-fajitas-1811-p18.jpg', ingredients: [{name: 'shrimp'}, {name: 'bell pepper'}, {name: 'onions'}, {name: 'olive oil'}, {name: 'chili powder'}, {name: 'cumin'}, {name: 'salt'}, {name: 'sour cream'}, {name: 'garlic'}, {name: 'lime'}]},
        ];

        await Promise.all(data.map(async elem => {
            await create({name: elem.name, description: elem.description, imageUrl: elem.image, ingredients: elem.ingredients})
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
