var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

	var UserSchema = new Schema({          
	    phone : { type: String },                 
	    password: {type: String},
	    userType: {type: String},
	    id: {type: String},
	});
	var mergeSchema = new Schema({
		content: { type: String},
		name: {type: String},
		id: {type: String},
	});
	var personalSchema = new Schema({
		name: { type: String},
		password: { type: String},
		userType: {type: String},
		gender: {type: String},
		id: {type: String},
		phone: {type: Number},
		role: {type: String},
		birthday: {type: String},
		photo: {type: String},
		time: {type: String},
	});

	var noticeListSchema = new Schema({
		name: { type: String},
		userType: {type: String},
		phone: {type: Number},
		role: {type: String},
		id: {type: String},
		time: {type: String},
		etag: {type: String},
		positions: {type: String},
		trainNumber: {type: String},
		reason: {type: String},
		solvingList: {type: Array},
	});

	var solvingListSchema = new Schema({
		name: { type: String},
		userType: {type: String},
		phone: {type: String},
		id: {type: String},
		time: {type: String},
		etag: {type: String},
		positions: {type: String},
		reason: {type: String},
		trainNumber: {type: String},
		solvingList:{type: Array},
	})

	var recordsListSchema = new Schema({  //记录实时消息
		trainNumber: {type: String},
		recordsList:{type: Array}

	})

module.exports = {
		user: mongoose.model('User',UserSchema),
		merge: mongoose.model('Merge',mergeSchema),
		personal: mongoose.model('personal',personalSchema),
		noticeList: mongoose.model('noticeList',noticeListSchema),
		solvingList: mongoose.model('solvingList',solvingListSchema),
		recordsList: mongoose.model("recordsList",recordsListSchema),
}