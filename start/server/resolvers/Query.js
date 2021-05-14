/**
 type Query{
        mainCards: [MainCard]
        animals: [Animal]
        categories: [Category]
    }
 */

const Query = {
  mainCards: (parent, args, {mainCards}) => mainCards,
  animals: (parent, args, {animals}) => animals,
  categories: (parent, args, {categories}) => categories,
};
