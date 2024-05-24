import db from "../lib/db";
import { Follow, User } from "@prisma/client";

export const follow = async (followedById :string, followingId:string ) => {
    const existingFollow = await db.follow.findFirst({
        where:{
            followedById,
            followingId,
        }
    })
    
if (existingFollow){
    await db.follow.deleteMany({
        where:{
            followedById,
            followingId
        }
    })
    return "unfollowing succes"
}

await db.follow.create({
    data:{
        followedById,
        followingId,
    }
})

return "following succes"
}