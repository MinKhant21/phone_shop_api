import express, { Request, Response } from 'express';
export const login = (response:Response,req:Request):any=> {
     return response.send(req.body)
}