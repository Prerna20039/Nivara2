import React from 'react';

const SidebarNav = () => {
  const categories = [
    {
      name: 'Popular',
      highlight: true,
      subcategories: []
    },
    {
      name: 'Handmade/ Craft Businesses',
      subcategories: ['Paintings', 'Resin Arts', 'Art Prints']
    },
    {
      name: 'For Fashion & Accessories',
      subcategories: ['Clothing', 'Jewelry & Accessories', 'Bags & Wallets']
    },
    {
      name: 'Occasions or Themes',
      subcategories: ['Seasonal Collection', 'Festive Specials', 'Birthday Gifts']
    },
    {
      name: 'Small Business Specials',
      subcategories: ['Eco-Friendly products', 'Limited Editions', 'Support Local Artisans']
    },
    {
      name: 'Customizable',
      subcategories: ['--', '--', '--']
    }
  ];

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">Category</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className={`cursor-pointer ${category.highlight ? 'font-semibold' : ''}`}>
                {category.name}
              </span>
              {category.highlight && (
                <span className="bg-green-200 text-xs px-1">★</span>
              )}
            </div>
            {category.subcategories.length > 0 && (
              <ul className="ml-4 mt-1">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="text-gray-600 text-sm my-1 cursor-pointer hover:text-blue-600">
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;