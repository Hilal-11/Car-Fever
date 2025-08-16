import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Signup() {
  return (
    <header className='flex items-center justify-center'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}