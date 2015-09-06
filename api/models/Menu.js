module.exports = {

  attributes: {
    /** @type {Object} 식감 이름 */
    name: {
      type: 'string',
      required: true,
      minLength: 3,
    },

    /** @type {Object} 등록된 레시피 */
    restaurant: {
      collection: 'Restaurant',
      via: 'menu',
    },
  }
};