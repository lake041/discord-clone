import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        <UserButton afterSignOutUrl="/" />
      </p>
    </div>
  );
}
