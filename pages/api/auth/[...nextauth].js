import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const verify = (credentials) => {
  return (
    credentials.email === "example@example.com" &&
    credentials.password === "123"
  );
};

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        if (verify(credentials)) {
          console.log("ouikhou");
          // Any user object returned here will be saved in the JSON Web Token
          //user data should be taken from a db and you must not add sensetive data to user object because it's vesible
          const user = {
            name: "james",
            email: credentials.email,
            image:
              "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/366-mj-7703-fon-jj.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=41f875a9595720f2637f9c3d11f7307d",
          };
          return user;
        } else {
          console.log(credentials.email);
          console.log(credentials.password);
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  theme: "light",
  pages: {
    error: "/error",
  },
  secret: process.env.SECRET,
  // A database is optional, but required to persist accounts in a database
};

export default (req, res) => NextAuth(req, res, options);
