import Navigation from "./Navigation";
import { Link } from "react-router";
import {
  CheckCircle2,
  Sparkles,
  Brain,
  Video,
  BarChart3,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { whyChooseSlick } from "../data";
export default function Homepage({
  isAuthenticated,
  handleAuthentication,
  setIsAuthenticated,
}) {
  let features = [
    {
      image: Brain,
      colour: "blue",
      title: "AI-Powered Interviews",
      point:
        "Practice with our advanced AI that adapts to your responses and asks relevant follow-up questions.",
    },
    {
      image: Video,
      colour: "purple",
      title: "Realistic Simulations",
      point:
        "Experience true-to-life interview scenarios with video and audio support.",
    },
    {
      image: BarChart3,
      colour: "green",
      title: "Detailed Analytics",
      point:
        "Get comprehensive feedback on your communication skills, content quality, and areas for improvement.",
    },
    {
      image: Clock,
      colour: "orange",
      title: "Practice Anytime",
      point:
        "Available 24/7, practice at your own pace whenever it suits your schedule.",
    },
    {
      image: Award,
      colour: "pink",
      title: "Expert-Designed Questions",
      point:
        "Our question bank is curated by medical school admissions experts and program directors.",
    },
    {
      image: Users,
      colour: "indigo",
      title: "Trusted by Thousands",
      point:
        "Join thousands of medical students who have improved their interview skills with our platform.",
    },
  ];

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
                <CheckCircle2 className="h-5 w-5 text-green-600" /> No credit
                card required
              </div>
              <div className="flex text-sm text-gray-600 gap-1">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> 1 free
                interview
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjE0MTI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical students"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-15">
        <div className="text-center my-16">
          <h1 className="font-semibold text-xl">Why Choose Slick?</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-5">
            Our platform combines cutting-edge AI technology with medical
            education expertise to give you the best interview preparation
            experience.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {features.map((data, index) => {
            const Icon = data.image;
            return (
              <Card className="p-6" key={index}>
              <div className={` h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4`}>
                <Icon className={`text-green-600`} />
                </div>
                <h1 className="font-semibold text-lg mb-2 text-left">{data.title}</h1>
                <p className="text-gray-600 text-left">{data.point}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
