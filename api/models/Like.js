
module.exports = {
  schema: true,

  attributes: {
		restaurant: {
      	model: 'Restaurant',
      	required: true,	
    },
 		 
    /** @type {Object} 유저 */
    user: {
  		model: 'User',
    	required: true,
	},
  }
};