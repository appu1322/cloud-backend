import joi from 'joi';
import { makeResponse } from '../../../lib';

export const addObjectValidation = (req: any, res: any, next: any) => {
    const activity = joi.object({
        originalName: joi.string()
            .required(),
        sizeInByte: joi.number()
            .required(),
        originalType: joi.string()
            .required(),
        extension: joi.string()
            .required(),
        parentId: joi.string()
            .required(),
        originalPath: joi.string()
            .required(),
        thumbnailPath: joi.string()
            .optional()
    });

    const { error } = activity.validate(req.body);
    if (error) {
        return makeResponse(res, 400, false, error.message);
    }
    next();
};

export const updateObjectValidation = (req: any, res: any, next: any) => {
    const activity = joi.object({
        _id: joi.string()
            .required(),
        originalName: joi.string()
            .optional()
            .allow(""),
        parentId: joi.string()
            .optional()
            .allow("")
    });

    const { error } = activity.validate(req.body);
    if (error) {
        return makeResponse(res, 400, false, error.message);
    }
    next();
};
