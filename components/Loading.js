export default function Loading() {
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
      <img style={{ height: "100px" }} src="/loading.png" alt="facebook" />
    </div>
  );
}
