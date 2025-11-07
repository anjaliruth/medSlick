import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Brain, Clock, User, LogOut } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "./ui/dialog";
export default function Navigation({
  isAuthenticated,
  handleAuthentication,
  setIsAuthenticated,
}) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [initiateLogout, setInitiateLogout] = useState(false);
  const location = useLocation();
  console.log(isAuthenticated, "isAuthenticated");
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Brain className="h-5 w-5" />
            <span>Slick</span>
          </Link>
        </div>
       { !isAuthenticated ? <div className="hidden md:flex items-center gap-6">
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
        </div>: null}

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Badge>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-200 rounded-3xl"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => setInitiateLogout(true)}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              {/* <Link to="login"> */}
              <Button onClick={() => setIsAuthenticated(true)}>Log In</Button>
              {/* </Link> */}
            </div>
          )}
          <Dialog open={initiateLogout} onOpenChange={setInitiateLogout}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Log Out</DialogTitle>
                <DialogDescription>
                  Are you sure you want to log out of your account?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2 sm:gap-5">
                <Button
                  variant="outline"
                  onClick={() => setShowLogoutDialog(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-black text-white"
                  onClick={()=>setIsAuthenticated(false)}
                >
                  Log Out
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
