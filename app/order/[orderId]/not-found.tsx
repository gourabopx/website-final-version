import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
      <p className="text-gray-600 mb-4">Could not find the requested order.</p>
      <Link href="/orders">
        <Button>View All Orders</Button>
      </Link>
    </div>
  );
}
