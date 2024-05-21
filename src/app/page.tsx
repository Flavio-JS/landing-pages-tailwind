import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/roundrock" className="text-blue-700 hover:text-blue-950">
        RoundRockPage
      </Link>
		</div>
	);
}
