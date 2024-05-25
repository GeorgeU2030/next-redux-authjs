import Image from "next/image";
import { signIn } from "@/auth";

export default function Home() {
  return (
    <div className="bg-red-500">
      <h1>Home</h1>
      <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/home" })
      }}
      >
        <button type="submit" className="bg-blue-500">Signin with Google</button>
      </form>

    </div>
  );
}
