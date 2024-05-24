import { Request,Response } from "express";
import *as followService from "../services/followService"

export const follow = async (req:Request,res:Response) => {
    try {
        const followedById = req.params.followingId
        const followingId = res.locals.userId

        const follow = await followService.follow(followedById,followingId)

        res.json({
            succes:true,
            message: follow
        })
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            succes:false,
            message: error
        })

        
    }
    
}