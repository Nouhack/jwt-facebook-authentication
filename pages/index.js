import LoginScreen from "../components/LoginScreen";
import { signIn, signOut, useSession } from "next-auth/client";
import Private from "../components/Private";
import Loading from "../components/Loading";
export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {!session && <LoginScreen />}
      {session && <Private data={session.user} />}
    </>
  );
}
