import {createStore} from 'vuex';

export default createStore({
    state: {
        recipes: [
            {
                slug: 'katsu-curry',
                title: 'katsu-curry',
                description: 'A delicious curry made with chicken....',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 onion, chopped',
                    '2 cloves garlic, chopped',
                    '1 tablespoon curry powder'
                ],
                method: [
                    'Heat oil in large skillet over medium heat.',
                    'add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
                    'Add curry powder and cook, stirring, until fragrant, about 1 minute'
                ]
            },
            {
                slug: 'ramen-noodle-soup',
                title: 'ramen-noodle-soup',
                description: 'A delicious ramen-noodle-soup made with chicken....',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 onion, chopped',
                    '2 cloves garlic, chopped',
                    '1 tablespoon curry powder'
                ],
                method: [
                    'Heat oil in large skillet over medium heat.',
                    'add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
                    'Add curry powder and cook, stirring, until fragrant, about 1 minute'
                ]
            }
        ]
    },
    mutations: {
        ADD_RECIPE (state, recipe){
            state.recipes.push(recipe)
        }
    },
})