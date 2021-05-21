
import request from "./request";

export async function getCategory(){
    return await request.get("/api/getCategory");
}