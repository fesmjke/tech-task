export type Interests = {
	isArchived?: boolean;
	isBuyer?: boolean;
	isSeller?: boolean;
	isSpam?: boolean;
};

export const generateNewUserInterests = async (interests: string[], userIterests: Interests) => {
	const prefix = 'is';

	const temp = interests.map(interest => prefix + interest);

	const newUserIterest = {};

	for (const key in userIterests) {
		if (Object.prototype.hasOwnProperty.call(userIterests, key)) {
			Object.assign(newUserIterest, {[`${key}`]: temp.includes(key)});
		}
	}

	return newUserIterest;
};
