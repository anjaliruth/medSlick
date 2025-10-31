import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Brain } from "lucide-react";
export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      {/* put site icon here */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-blue-600" />
          <span className="text-xl"> Slick</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === "/" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="pricing"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === "pricing"
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
