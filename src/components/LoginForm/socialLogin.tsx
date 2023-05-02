import { signIn } from "next-auth/react";

export function SocialLogin() {
  function gitHubLogin() {
    signIn("github");
  }
  return (
    <div>
      <button onClick={gitHubLogin}>GitHub</button>
    </div>
  );
}
