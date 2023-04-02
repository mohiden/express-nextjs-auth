import { object, string, TypeOf } from "zod";

export class UserSchema {
    //create user
    static createUserSchema = object({
        body: object({
            username: string({
                required_error: "username must not be empty",
            })
                .min(5, "username too short!")
                .max(100, { message: "too large" }),

            password: string({
                required_error: "password must not be empty",
            }).min(5, "password too short!"),

            phoneNumber: string({
                required_error: "password is required",
            }).min(6, "password too short!"),

            passwordConfirmation: string({
                required_error: "passwordConfirmation must not be empty",
            }),

        }).refine(
            (data) => {
                return data.password === data.passwordConfirmation;
            },
            {
                message: "Password doesn't match",
                path: ["password Confirmation"],
            }
        ),
    });
    static verifyPhoneSchema = object({
        body: object({
            phoneNumber: string({
                required_error: "phone number must not be empty",
            }),
            code: string({
                required_error: "code must not be empty"
            })
        }),
    });

    //new password
    public static newPasswordSchema = object({
        body: object({
            phoneNumber: string({
                required_error: "Phone number cannot be empty",
            }),
            password: string({
                required_error: "password cannot be empty",
            }),

            passwordConfirmation: string({
                required_error: "passwordConfirmation must not be empty",
            }),

        }).refine(
            (data) => {
                return data.password === data.passwordConfirmation;
            },
            {
                message: "Password doesn't match",
                path: ["password Confirmation"],
            }
        ),
    });

    static loginUserSchema = object({
        body: object({
            username: string({
                required_error: "email must not be empty",
            }).min(4, { message: "should be more than 4 chars" }),
            password: string({
                required_error: "password must not be empty",
            }).min(5, "password too short!"),
        }),
    });

    static resetPasswordSchema = object({
        body: object({
            phoneNumber: string({
                required_error: "phone number must not be empty",
            })
        })
    })


}




//typings
export type CreateUserInput = Omit<TypeOf<typeof UserSchema.createUserSchema>, "body.passwordConfirmation">;
export type LoginUserInput = TypeOf<typeof UserSchema.loginUserSchema>;
export type ResetPasswordInput = TypeOf<typeof UserSchema.resetPasswordSchema>;
export type VerifyPhoneInput = TypeOf<typeof UserSchema.verifyPhoneSchema>;
export type NewPasswordInput = Omit<TypeOf<typeof UserSchema.newPasswordSchema>, "body.passwordConfirmation">;