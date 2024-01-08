import Ably from "ably/promises";

let options: Ably.Types.ClientOptions = { key: process.env.ABLY_API_KEY };
export async function GET(_request: any) {
    const client = new Ably.Realtime(options);
        // Generate a random nonce
        const nonce = Math.random().toString(36).substring(10)+"es51";

        // Set up token parameters including the nonce
        const tokenParams: Ably.Types.TokenParams = {
            clientId: '7W4bHg',
            nonce: nonce,
        };
    let tokenRequestData = await client.auth.createTokenRequest(tokenParams);
    return Response.json(tokenRequestData);
};