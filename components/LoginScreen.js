import Head from "next/head";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { signIn } from "next-auth/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <Container style={{ height: "100vh" }}>
      <Head>
        <title>Facebook - Log In or Sign Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/loading.png" />
      </Head>
      <Row
        style={{ height: "100%" }}
        className="justify-content-md-center align-items-md-center"
      >
        <Col
          md={6}
          xs={12}
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              //   width: "100%",
              marginBottom: "50px",
              // backgroundColor: "red",
            }}
          >
            <Image
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="facebook"
              height="106px"
              width="300px"
              // layout="fill"
            />
            <h3 style={{ marginLeft: "30px" }}>
              Connect with friends and the world around you on Facebook.
            </h3>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              signIn("credentials", {
                email: email,
                password: password,
              });
            }}
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              width: "75%",
              backgroundColor: "white",
              textAlign: "center",
              padding: "20px",
              alignItems: "center",
              borderRadius: "8px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <input
              value={email}
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email or Phone Number"
              style={{
                //    marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                outlineColor: "blue",
                border: "1px solid grey",
                paddingLeft: "20px",
              }}
            />

            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
              style={{
                //  marginTop: "10px",
                marginBottom: "10px",
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                outlineColor: "blue",
                border: "1px solid grey",
                paddingLeft: "20px",
              }}
            />
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                padding: "3px",
                //  backgroundColor: "#1877f2",
                borderRadius: "8px",
                borderColor: "transparent",
                paddingTop: "8px",
                color: "white",
              }}
            >
              <h5 style={{ fontWeight: "bold" }}>Log In</h5>
            </Button>
            {/*  client route to forgot password page */}
            <Link href="/">
              <a
                style={{
                  marginTop: "15px",
                  marginBottom: "20px",
                  color: "#1877f2",
                }}
              >
                Forgot Password?
              </a>
            </Link>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#dadde1",
              }}
            ></div>
            {/*  client route to create new account page */}
            <Link href="/">
              <button
                style={{
                  width: "56%",
                  marginTop: "20px",
                  paddingTop: "9px",
                  padding: "3px",
                  backgroundColor: "#42b72a",
                  borderRadius: "8px",
                  borderColor: "transparent",
                  color: "white",
                }}
              >
                <h5 style={{ fontWeight: "bold" }}> Create New Account</h5>
              </button>
            </Link>
          </Form>
          <p style={{ marginTop: "25px" }}>
            {/*  client route to create a page Page */}
            <Link href="/">
              <a style={{ fontWeight: "bold" }}> Create a Page</a>
            </Link>
            for a celebrity, band or business.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
