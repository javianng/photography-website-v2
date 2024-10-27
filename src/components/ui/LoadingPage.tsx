import { LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <LoaderCircle className="animate-spin" width={32} height={32} />
    </main>
  );
}
