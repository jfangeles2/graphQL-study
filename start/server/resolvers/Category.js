/** Schema for category
type Catergory{
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal]
}
 */

const Category = {
  animals: (parent, args, {animals}) => {
    return animals.filter (animal => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
