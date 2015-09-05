
module.exports = {
  schema: true,

  attributes: {
    /** @type {Object} 조회자 */
    user: {
      model: 'User',
    },

    /** @type {Object} 레시피 */
    restaurant: {
      model: 'Restaurant',
    }
  }
};