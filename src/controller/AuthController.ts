import express, { Request, Response } from 'express';
exports.login = (res:Response,req:Request):any=> {
     res.json({
          data : "hi"
     })
}