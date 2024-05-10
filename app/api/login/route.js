
import clientPromise from "../../../lib/mongodb";

var CryptoJS = require("crypto-js"); 

export async function POST (req) {
  try {

      const data = await req.json();
      const email = data.email;
      const password = data.password;
      const client = await clientPromise;
      const dab = client.db("universe-tech");

    // Find user by email and password
    const user = await dab.collection("users").findOne({ email });

    if (user) {

      var bytes  = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
      var databse_password = bytes.toString(CryptoJS.enc.Utf8);

      if (password === databse_password) {
        var token = CryptoJS.AES.encrypt(JSON.stringify(email), process.env.TOKEN_SECRET).toString();
        
        // Successfull login Response
        return new Response(JSON.stringify({  token, form : user.form }), { status : 200});
      }
      else {
        // Invaild Password Error
        return new Response( JSON.stringify({error: 'Invalid Password'}), {status:400});
      }
    }
    else {
      // Invalid Email Error
        return new Response(JSON.stringify({ error: ' Email Not Found' }), {status :400});
        
    }
  } catch (error) {
      return new Error(JSON.stringify({ status:500, error: "An error occurred while processing your request." }));
  }
};


