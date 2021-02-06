import { signOut } from "next-auth/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import icons
import {
  faHome,
  faTv,
  faStore,
  faUserFriends,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

export default function Private({ data }) {
  return (
    <Container fluid style={{}}>
      <div>
        <Head>
          <title>Facebook - Log In or Sign Up</title>
          <link rel="shortcut icon" href="/loading.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Row
          style={{
            backgroundColor: "white",
            height: "9vh",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Col md={3} style={{ height: "100%" }}>
            <div
              style={{ height: "100%", display: "flex", flexDirection: "row" }}
            >
              <img
                src="https://mesrenaelyoum.com.au/wp-content/uploads/2020/11/1024px-Facebook_Logo_2019.png"
                alt="none"
                style={{
                  height: "100%",
                  cursor: "pointer",
                  padding: "5px",
                }}
              />
              <input
                type="text"
                placeholder="Search on facebook"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderRadius: "20px",
                  marginLeft: "10px",
                  //   border: "none",
                  backgroundColor: "#f0f2f5",
                  color: "grey",
                  padding: "5px",
                  paddingLeft: "20px",
                  border: "solid 1px transparent",
                  outline: "none",
                }}
              />
            </div>
          </Col>
          <Col md={6} style={{ height: "100%" }}>
            <div style={{ height: "100%" }}>
              <button
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ height: "40%", width: "40%", color: "#1877f2" }}
                />
              </button>
              <button
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faTv}
                  style={{ height: "40%", width: "40%", color: "#1877f2" }}
                />
              </button>
              <button
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faStore}
                  style={{ height: "40%", width: "40%", color: "#1877f2" }}
                />
              </button>
              <button
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faUserFriends}
                  style={{ height: "40%", width: "40%", color: "#1877f2" }}
                />
              </button>
            </div>
          </Col>
          <Col md={3}>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50px",
                  //  border: "1px solid grey",
                  objectFit: "cover",
                }}
                src={data.image}
                alt="none"
              />
              <button
                onClick={signOut}
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ height: "50%", width: "50%", color: "#1877f2" }}
                ></FontAwesomeIcon>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="align-items-md-center" style={{ height: "91vh" }}>
          <Col md={3}></Col>
          <Col md={6} style={{ padding: "50px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                //width: "75%",
                backgroundColor: "white",
                textAlign: "center",
                padding: "20px",
                alignItems: "center",
                borderRadius: "8px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <h4 style={{ fontFamily: "system-ui", padding: "20px" }}>
                To get session info click{" "}
                <Link href="/session">
                  <a style={{ color: "red" }}>HERE</a>
                </Link>
              </h4>

              <img
                src="https://www.facebook.com/images/comet/dbl_qp/comet_aswitch.png"
                alt="none"
              />
              {/* <button onClick={() => signOut()}>GO OUT</button>*/}
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </Container>
  );
}
