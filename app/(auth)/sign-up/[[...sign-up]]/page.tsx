import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      {/* Clerk SignUp Component */}
      <SignUp />
    </div>
  );
}
