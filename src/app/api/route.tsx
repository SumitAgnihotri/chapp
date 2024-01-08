import Ably from "ably/promises";
import crypto from 'crypto'

let options: Ably.Types.ClientOptions = { key: process.env.ABLY_API_KEY };
export async function GET(_request: any) {
    const client = new Ably.Realtime(options);
        // Generate a random nonce
        const buffer = crypto.randomBytes(Math.ceil(20 / 2));

        // Set up token parameters including the nonce
        const tokenParams: Ably.Types.TokenParams = {
            clientId: '7W4bHg',
            nonce: buffer.toString('hex').slice(0, 20),
        };
    let tokenRequestData = await client.auth.createTokenRequest(tokenParams);
    return Response.json(tokenRequestData);
};