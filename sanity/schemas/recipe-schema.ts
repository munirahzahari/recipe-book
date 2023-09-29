const recipe = {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'The image that will be diplayed on top of the page',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'meat',
          'chicken',
          'fish',
          'vegetarian',
          'rice',
          'noodles',
          'snack',
          'dessert',
        ],
      },
      layout: 'dropdown',
    },
    {
      name: 'serving',
      title: 'Serving',
      type: 'number',
    },
    {
      name: 'prepTime',
      title: 'Prep time',
      type: 'number',
      description: 'prep time in minutes',
    },
    {
      name: 'cookingTime',
      title: 'Cooking time',
      type: 'number',
      description: 'cooking time in minutes',
    },
    {
      name: 'isHighlight',
      title: 'Is highlight',
      type: 'boolean',
      description: 'Is this recipe the recipe of the week',
    },
    {
      name:'highlightImage',
      title: 'Highlight image',
      type: 'image',
      description: 'The image that will be displayed if its the recipe of the week',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'ingredient',
              title: 'Ingredient',
              type: 'string',
            },
            {
              name: 'amount',
              title: 'Amount',
              type: 'number',
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: ['mg', 'gr', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup'],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default recipe;
