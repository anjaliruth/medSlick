import { Link } from "react-router";
import { useState } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Home,
  Settings,
  MessageSquare,
  BarChart3,
  History,
  User,
  Clock,
  LogOut,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// import { InterviewTab } from './InterviewTab';
// import { HistoryTab } from './HistoryTab';
import { AnalyticsTab } from "./AnalyticsTab";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "./ui/dialog";
import Navigation from "./Navigation";
// import { SettingsTab } from './SettingsTab';

export function Dashboard({isAuthenticated, setIsAuthenticated}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}/>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <Tabs defaultValue="interview" className="h-full">
          <TabsList className=" bg-gray-200 grid w-full grid-cols-4 mb-6">
            <TabsTrigger
              value="interview"
              className="gap-2  data-[state=active]:bg-white"
            >
              <MessageSquare className="h-4 w-4" />
              Practice Interview
            </TabsTrigger>
            {/* <TabsTrigger value="history" className="gap-2 data-[state=active]:bg-white">
              <History className="h-4 w-4" />
              History
            </TabsTrigger> */}
            <TabsTrigger
              value="analytics"
              className="gap-2 data-[state=active]:bg-white"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="gap-2 data-[state=active]:bg-white"
            >
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          {/* 
          <TabsContent value="interview" className="mt-0">
            <InterviewTab />
          </TabsContent> */}
          {/* 
          <TabsContent value="history" className="mt-0">
            <HistoryTab />
          </TabsContent> */}

          <TabsContent value="analytics" className="mt-0">
            <AnalyticsTab />
          </TabsContent>

          {/* <TabsContent value="settings" className="mt-0">
            <SettingsTab />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
}
