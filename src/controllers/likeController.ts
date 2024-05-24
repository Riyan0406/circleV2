import { Request,Response } from "express";
import *as likeService from "../services/likeService"

export const createLike = async (req:Request,res:Response) => {
    try {
        const userId = res.locals.userId
        const {idThread} = req.params
        const dataLike = await likeService.createLike(idThread,userId)
        console.log(`idThread: ${idThread}`)
        console.log(`dataLike: ${dataLike}`)

        res.status(200).json({message: dataLike})
        
    } catch (error) {
        const er = error as unknown as Error
        console.log(er)
        res.status(500).json({
            status:false,
            message:er.message
        })
        
    }
    
}