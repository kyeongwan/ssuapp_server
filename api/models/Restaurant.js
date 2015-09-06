module.exports = {
  schema: true,

  attributes: {
  	title: {
      	type: 'string',
	    minLength: 4, maxLength: 255,
    },

     /** @type {Object} 레시피가 가지는 식감 */
    menu: {
      collection: 'Menu',
      via: 'restaurant',
    },

    /** @type {Object} 레시피 썸네일 */
    thumbnail: {
     	model: 'Resource',
      	required: true,
    },

 	/** @type {Object} 레시피가 받은 좋아요 */
	likes: {
 	    collection: 'Like',
		via: 'restaurant',
	},

	/** @type {Object} 조회 기록 */
	views: {
	    collection: 'View',
      	via: 'restaurant',
    }

  }
};