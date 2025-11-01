import { Link } from 'react-router';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Home,
  Settings,
  MessageSquare,
  BarChart3,
  History,
  User,
  Clock,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
// import { InterviewTab } from './InterviewTab';
// import { HistoryTab } from './HistoryTab';
import { AnalyticsTab } from './AnalyticsTab';
// import { SettingsTab } from './SettingsTab';

export function Dashboard() {
    console.log({ Link, Tabs, TabsList, TabsTrigger, TabsContent, Card, Badge, AnalyticsTab });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Home className="h-5 w-5" />
              <span>Slick</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Badge>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <Tabs defaultValue="interview" className="h-full">
          <TabsList className=" bg-gray-200 grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="interview" className="gap-2  data-[state=active]:bg-white">
              <MessageSquare className="h-4 w-4" />
              Practice Interview
            </TabsTrigger>
            {/* <TabsTrigger value="history" className="gap-2 data-[state=active]:bg-white">
              <History className="h-4 w-4" />
              History
            </TabsTrigger> */}
            <TabsTrigger value="analytics" className="gap-2 data-[state=active]:bg-white">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2 data-[state=active]:bg-white">
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
