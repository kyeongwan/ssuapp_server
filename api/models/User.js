/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var validator = require('validator'),
    async = require('async');

var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
  	/**
     * 학번
     * @type {Object}
     */
  	idnumber: {
      	type: 'integer',
      	min: 20000000, max: 30000000,
	    defaultsTo: 20000000,
    },
    /**
    * 비밀번호
    * @type {Object}
    */
    passports : {
      	collection: 'Passport',
       	via: 'user'
    }
  }
};

module.exports = User;