"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResource = void 0;
const validateResource = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
        return;
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
};
exports.validateResource = validateResource;
//# sourceMappingURL=validateResource.js.map