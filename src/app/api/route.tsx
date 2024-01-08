import Ably from "ably/promises";

let options: Ably.Types.ClientOptions = { key: process.env.ABLY_API_KEY };
export async function GET(_request: any) {
    const client = new Ably.Realtime(options);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: '7W4bHg' });
    return Response.json(tokenRequestData);
};