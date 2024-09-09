import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      {/* Clerk SignIn Component */}
      <SignIn />
    </div>
  );
}
