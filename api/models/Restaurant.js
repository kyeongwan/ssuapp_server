module.exports = {
  schema: true,

  attributes: {
  	title: {
      	type: 'string',
	    minLength: 4, maxLength: 255,
    },

    menu: {
      	type: 'text',
      	minLength: 10,
    },

    /** @type {Object} 레시피 썸네일 */
    thumbnail: {
     	model: 'Resource',
      	required: true,
    },

 	/** @type {Object} 레시피가 받은 좋아요 */
	likes: {
 	    collection: 'Like',
		via: 'recipes',
	},

	/** @type {Object} 조회 기록 */
	views: {
	    collection: 'View',
      	via: 'recipes',
    }

  }
};