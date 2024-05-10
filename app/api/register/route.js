
import clientPromise from "../../../lib/mongodb";
var CryptoJS = require("crypto-js");

export async function POST (req) {
    try {
      const client = await clientPromise;
      const dab = client.db("universe-tech");
      const data = await req.json();
      const email = data.email;
      const name = data.name;
      const row_password = data.password;
      const method = "manual";
      const rq = await dab.collection("users").findOne({ email });
      if (!rq) {
        var password = CryptoJS.AES.encrypt(row_password, process.env.PASSWORD_SECRET).toString();
        const post = await dab.collection("users").insertOne({
          method,
          email,
          name,
          password
        });
        if (post) {
          var token = CryptoJS.AES.encrypt(JSON.stringify(email), process.env.TOKEN_SECRET).toString();
          return new Response(JSON.stringify({token }),{status:201});
        }
      }
      else {
        return new Response(JSON.stringify({ error: "Email Already Logined" }), { status: 400 });
      }
    } catch (error) {
      return new Error(JSON.stringify(error ));
    }
  
 
};