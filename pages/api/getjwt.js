import jwt from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret, raw: true });
  console.log(token);

  res.send(JSON.stringify(token, null, 2));
};
