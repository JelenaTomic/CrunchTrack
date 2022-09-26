const { Category } = require('../models');

// seeded categories to be displayed on the 
// category page upon user login/signup

const categoryData = [
  {
    category_name: 'Full',
  },
  {
    category_name: 'Upper',
  },
  {
    category_name: 'Lower',
  }
];

// bulkcreate will allow the above categories
// to be inserted onto the page all at once

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;