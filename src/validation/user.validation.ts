import Joi from 'joi';
import type {IRequestUser} from '../types/IUser';

export const userRequestSchema = Joi.object<IRequestUser>({
	firstName: Joi.string().alphanum().min(3).max(30).required(),
	lastName: Joi.string().alphanum().min(3).max(30).required(),
	email: Joi.string().email().optional(),
	homePhone: Joi.string().optional(),
	interests: Joi.array().required(),
}).or('email', 'homePhone').required().messages({'object.missing': '"object" must contain at least one of [email, homePhone]'});
