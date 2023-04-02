"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
class UserSchema {
}
exports.UserSchema = UserSchema;
UserSchema.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "username must not be empty",
        })
            .min(5, "username too short!")
            .max(100, { message: "too large" }),
        password: (0, zod_1.string)({
            required_error: "password must not be empty",
        }).min(5, "password too short!"),
        phoneNumber: (0, zod_1.string)({
            required_error: "password is required",
        }).min(6, "password too short!"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "passwordConfirmation must not be empty",
        }),
    }).refine((data) => {
        return data.password === data.passwordConfirmation;
    }, {
        message: "Password doesn't match",
        path: ["password Confirmation"],
    }),
});
UserSchema.verifyPhoneSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        phoneNumber: (0, zod_1.string)({
            required_error: "phone number must not be empty",
        }),
        code: (0, zod_1.string)({
            required_error: "code must not be empty"
        })
    }),
});
UserSchema.newPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        phoneNumber: (0, zod_1.string)({
            required_error: "Phone number cannot be empty",
        }),
        password: (0, zod_1.string)({
            required_error: "password cannot be empty",
        }),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "passwordConfirmation must not be empty",
        }),
    }).refine((data) => {
        return data.password === data.passwordConfirmation;
    }, {
        message: "Password doesn't match",
        path: ["password Confirmation"],
    }),
});
UserSchema.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: "email must not be empty",
        }).min(4, { message: "should be more than 4 chars" }),
        password: (0, zod_1.string)({
            required_error: "password must not be empty",
        }).min(5, "password too short!"),
    }),
});
UserSchema.resetPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        phoneNumber: (0, zod_1.string)({
            required_error: "phone number must not be empty",
        })
    })
});
//# sourceMappingURL=user.schema.js.map