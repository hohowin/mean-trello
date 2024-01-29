import  { Document } from 'mongoose';

export interface User {
    email: string;
    username: string;
    password: string;
    createdAt: Date;
}

// Extends User interface with Mongo Document. Thus, an identifier will be generated.
export interface UserDocument extends User, Document {
    validatePassword(param1: string): string;
}