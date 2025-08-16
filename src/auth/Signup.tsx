import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Signup() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}