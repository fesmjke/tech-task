import type {IUser} from '../../types/IUser';
import {Schema} from 'mongoose';

const userSchema = new Schema<IUser>({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	homePhone: {
		type: String,
		unique: true,
	},
	name: {
		type: String,
	},
	interests: {
		type: [String],
		default: [],
	},
	isArchived: {
		type: Boolean,
		default: false,
	},
	isBuyer: {
		type: Boolean,
		default: false,
	},
	isSeller: {
		type: Boolean,
		default: false,
	},
	isSpam: {
		type: Boolean,
		default: false,
	},
}, {versionKey: false, timestamps: false}).pre('save', function (this: IUser, next) {
	this.name = this.firstName + ' ' + this.lastName;

	next();
});

export default userSchema;
