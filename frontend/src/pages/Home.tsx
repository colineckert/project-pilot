import { TopNav } from '@/components/topnav';

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="mt-2">Welcome to ProjectPilot!</p>
      </div>
    </div>
  );
}
