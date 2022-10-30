import type {IUser} from '../../types/IUser';
import {Schema} from 'mongoose';
import {generateNewUserInterests as interest} from '../../helpers/user-interests';

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
}, {versionKey: false, timestamps: false}).pre('save', async function (this: IUser, next) {
	this.name = this.firstName + ' ' + this.lastName;

	const {isArchived, isBuyer, isSeller, isSpam} = this;

	const currentInterests = {isArchived, isBuyer, isSeller, isSpam};

	const newInterests = await interest(this.interests, currentInterests);

	const mergedInterests = {...currentInterests, ...newInterests};

	this.isArchived = mergedInterests.isArchived;
	this.isBuyer = mergedInterests.isBuyer;
	this.isSeller = mergedInterests.isSeller;
	this.isSpam = mergedInterests.isSpam;

	next();
});

export default userSchema;
