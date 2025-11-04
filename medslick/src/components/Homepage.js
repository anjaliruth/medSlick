import Navigation from "./Navigation";
import { Link } from "react-router";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
export default function Homepage({
  isAuthenticated,
  handleAuthentication,
  setIsAuthenticated,
}) {
  return (
    <div>
      <Navigation
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        handleAuthentication={handleAuthentication}
      />

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span>AI-powered Medical Interview Practice</span>
            </div>
            <h1 className="mb-6">Master Your Medical Interviews with AI</h1>
            <p className="text-xl text-gray-600 mb-8 text-left">
              Practice realistic medical school and residency interviews with
              our advanced AI interviewer. Get instant feedback, improve your
              responses, and boost your confidence.
            </p>
            <div className="flex gap-5">
              <Button className="bg-black text-white gap-2">
                Start Practicing Free <CheckCircle2 className="h-5 w-5" />
              </Button>
              <Link to="/pricing">
                <Button variant="outline">View Pricing</Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 my-5">
              <div className="flex text-sm text-gray-600 gap-1">
                <CheckCircle2 className="h-5 w-5 text-green-600"/> No credit card required
              </div>
              <div  className="flex text-sm text-gray-600 gap-1">
                <CheckCircle2 className="h-5 w-5 text-green-600"/> 1 free interview
              </div>
            </div>
          </div>
          <div>hwllo!</div>
        </div>
      </section>
    </div>
  );
}
