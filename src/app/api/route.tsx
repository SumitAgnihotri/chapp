import Ably from "ably/promises";

let options: Ably.Types.ClientOptions = { key: process.env.ABLY_API_KEY };
export async function GET(_request: any) {
    const client = new Ably.Realtime(options);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: '7W4bHg' });

    const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
    console.log("server time");
console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    
    console.log("time==="+client.time());
    return Response.json(tokenRequestData);
};