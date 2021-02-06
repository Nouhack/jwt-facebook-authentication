import Link from "next/link";
import Head from "next/head";

export default function Error() {
  return (
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
        <title>Facebook - Error</title>
        <link rel="shortcut icon" href="/loading.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h3>Sign in failed. Check the details you provided are correct.</h3>
      <Link href="/">
        <img
          style={{ height: "100px", cursor: "pointer" }}
          src="/reconnect.png"
          alt="reConnect"
        />
      </Link>
    </div>
  );
}
