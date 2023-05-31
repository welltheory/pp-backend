import Joi from 'joi';
import jpn from 'joi-phone-number';

const joi = Joi.extend(jpn);

export default joi;
