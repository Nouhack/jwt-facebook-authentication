import LoginScreen from "../components/LoginScreen";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Loading from "../components/Loading";
export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!session && <LoginScreen />}
      {session && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f2f5",
          }}
        >
          <Head>
            <title>Facebook - Session</title>
            <link rel="shortcut icon" href="/loading.png" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <h4>Session : </h4>
          <iframe
            src="/api/getsession"
            style={{
              backgroundColor: "grey",
              width: "70%",
              height: "180px",
              borderRadius: "10px",
              outline: "none",
              border: "none",
              color: "white",
            }}
          />

          <h4 style={{ marginTop: "30px" }}>JWT Payload : </h4>
          <iframe
            src="/api/getjwt"
            style={{
              backgroundColor: "grey",
              width: "70%",
              //     height: "180px",
              borderRadius: "10px",
              outline: "none",
              border: "none",
              color: "white",
            }}
          />
        </div>
      )}
    </>
  );
}
