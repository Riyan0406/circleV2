import { Thread } from "@prisma/client";
import db from "../lib/db";
import { ERROR_MESSAGE } from "../utils/constant/error";
import { error } from "console";
import { threadId } from "worker_threads";

export const createLike = async (idThread:string, userId:string) => {
    const thisThread = await db.thread.findFirst({
        where:{
            id:idThread
        }
    })

    if(!thisThread){
        throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND)
    }

    const exisLike = await db.like.findFirst({
        where:{
            userId:userId,
            threadId: idThread
        }
    })

    if(exisLike){
        await db.like.deleteMany({
            where:{
                userId:userId,
                threadId:idThread
            }
        })
        return `succes unlike idThread whith id ${idThread}`
    }

    await db.like.create({
        data:{
            userId:userId,
            threadId:idThread
        }
    })

    return `succes like idThread with id ${idThread}`

    
}

