import Ably from "ably/promises";

export async function GET(_request: any) {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: '7W4bHg' });
    return Response.json(tokenRequestData);
};