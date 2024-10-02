import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Home, Users, Briefcase, Users as Clients, DollarSign, Video, BarChart2, CreditCard } from 'lucide-react';
import Card from "../components/ui/card";
import CardContent from "../components/ui/card-content"; // Updated import

const navItems = ['Dashboard', 'Clients', 'Billing', 'Time Tracking', 'Payroll', 'Analytics', 'Chat', 'Scheduling'];

const Layout = ({ children, user, showBackButton = false }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            )}
            <Avatar name="SiteAware" email="info@siteaware.com" size={40} />
            <h1 className="text-2xl font-bold">SiteAware</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(!isChatOpen)}>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar name={user?.name || "User"} email={user?.email || "user@example.com"} size={40} />
          </div>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {isChatOpen && (
        <Card className="fixed bottom-4 right-4 w-80 h-96 bg-gray-800 border-gray-700">
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Worker Chat</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-grow overflow-y-auto mb-4">
              {/* Chat messages would go here */}
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Layout;
