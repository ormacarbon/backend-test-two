import { RequestHandler } from "express";
import { SchemaOf } from "yup";

type IField = "body" | "headers" | "params" | "query";

export type IValidation = (field: IField, scheme: SchemaOf<any>) => RequestHandler;