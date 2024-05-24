import { Request, Response } from "express";
import * as replyService from "../services/replyService";
import { errorHandler } from "../utils/errorHandler";

export async function createReplies(req: Request, res: Response) {
  try {
    const { threadId } = req.params;
    const body = req.body;
    const userId = res.locals.userId;

    body.threadId = threadId;
    body.userId = userId
    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };
    res.status(200).json(await replyService.createReply(body, files ));
  } catch (error) {
    console.log(error);
    return errorHandler(error, res);
  }
}