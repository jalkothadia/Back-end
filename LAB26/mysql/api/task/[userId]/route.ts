import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {params}: {params: Promise<{userId:String}>}
){
    const {userId} = await params;

    const [rows] = await db.query(
        `SELECT 
            Task.TaskId,
            Task.TaskTitle,
            Task.TaskDescription,
            Task.IsCompleted,
            Users.UserName
        FROM Task
        JOIN Users ON Task.UserId = Users.UserId
        WHERE Users.UserId = ?    
        `,[userId]
    )

    return NextResponse.json(rows)
}