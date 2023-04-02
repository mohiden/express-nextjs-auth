import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateResource =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        next();
        return;
      } catch (e) {
        console.log(e);
        return res.status(400).send(e);
      }
    };