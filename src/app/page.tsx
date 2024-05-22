import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/plimbing" className="text-blue-700 hover:text-blue-950">
        Plimbing Page
      </Link>
      <Link href="/bicyclerepair" className="text-blue-700 hover:text-blue-950">
        Bicyclerepair Page
      </Link>
    </div>
  );
}
