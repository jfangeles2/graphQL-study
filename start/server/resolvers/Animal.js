/**
 * The corresponding schema in schema.js
 type Animal{
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: Float!
    description: [String!]!
    stock: Int
    slug: String
    category: category!
}
 */

const Animal = {
  // We do not define id, image, title, rating, etc because they are all scalar types
  // resolver arrow function should have the following parameters
  // parent, args, context
  // context is destuctured to fetch only necessary data
  category: (parent, args, {categories}) => {
    // find iterates over categories and requires a function, category below is the category object that represents the objects in the categories. The function should return a Boolean value to determine if category matches what is asked for. Here, we want to get what is the category of the Animal given so we match the category field of the parent which is Animal to the category ids in the categories.
    return categories.find (category => {
      return category.id === parent.category;
    });
  },
};

module.exports = Animal;
