import { TopNav } from '@/components/topnav';
import { useSession } from '@clerk/clerk-react';

export default function Home() {
  const { session, isSignedIn } = useSession();

  return (
    <div>
      <TopNav />
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Home</h1>
        {isSignedIn ? (
          <p className="mt-2">
            Welcome to ProjectPilot, {session?.user.firstName}!
          </p>
        ) : (
          <p className="mt-2">
            Welcome to ProjectPilot! Please sign in to continue.
          </p>
        )}
      </div>
    </div>
  );
}
