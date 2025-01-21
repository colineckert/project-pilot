import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b px-4 pb-2 text-xl font-semibold">
      <div>ProjectPilot</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
