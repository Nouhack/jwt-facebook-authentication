import jwt from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req, res) => {
  console.log("==============");
  console.log(secret);
  console.log("==============");

  const token = await jwt.getToken({ req, secret });
  console.log("=======================");
  console.log(token);
  console.log("=======================");

  res.send(JSON.stringify(token, null, 2));
};
