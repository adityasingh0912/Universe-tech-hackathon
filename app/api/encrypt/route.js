var CryptoJS = require("crypto-js");

export async function POST(req) { 
    try {
        const data = await req.json();
        
        // var bytes  = CryptoJS.AES.encrypt(data.email, process.env.TOKEN_SECRET);
        var token = CryptoJS.AES.encrypt(JSON.stringify(data.email), process.env.TOKEN_SECRET).toString();

        
        return new Response(JSON.stringify({ token }), {status:200 });

    } catch {
        return new Response(JSON.stringify({ "error": "error" }),{status:500});
        
    }

}
