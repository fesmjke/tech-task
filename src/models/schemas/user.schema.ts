import type {IUser} from '../../types/IUser';
import {Schema} from 'mongoose';

const userSchema = new Schema<IUser>({
	_id: Schema.Types.ObjectId,
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	homePhone: {
		type: String,
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
	const user = this;

	user.name = user.firstName + ' ' + user.lastName;

	console.log(`Full name is -> ${user.name}`);

	next();
});

export default userSchema;
