import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <div
        className="bg-image p-y-20 flex max-h-96 min-h-[70vh] w-full flex-col gap-8 bg-cover"
        style={{
          position: "relative",
          backgroundImage: "url('/banners/round-rock-plimbing-banner.png')",
          backgroundPosition: "left center",
        }}
      >
        <Button style={{ zIndex: 2 }}>teste</Button>
      </div>
      TESTE
    </div>
  );
}
