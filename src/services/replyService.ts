import { Thread } from "@prisma/client";
import db from "../lib/db";
import { ERROR_MESSAGE } from "../utils/constant/error";
import { threadId } from "worker_threads";
import { url } from "inspector";

export const createReply = async (body: Thread, files: { [filename:string]: Express.Multer.File[]  }) => {
    const reply = await db.thread.create({
        data: body
    });

    if (Array.isArray(files.image)) {
        await db.threadImage.createMany({
            data: files.image.map((img) => ({
                url: img.filename,
                threadId: reply.id,
            })),
        });
    } 
    return reply;
};


export const updateReply = async (id:string, files :{[fildname:string]: Express.Multer.File[]}) => {

    const reply = await db.thread.findFirst({
        where:{
            id,
        },
        include:{
            author:{
                select:{
                    id:true,
                    fullname: true
                },
            },
            image:{
                select:{
                    url:true,
                },
            },
        },
    })
    
}

