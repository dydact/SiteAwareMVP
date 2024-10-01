"use client"

import React, { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ArrowLeft, Edit2, Filter, PauseCircle, PlayCircle, Plus, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Layout from '@/components/Layout';

export default function Profile({ type = 'client' }) {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [profileName, setProfileName] = useState(type === 'client' ? "Alexandro Bernard" : "Amanda Georgi")
  const [profileEmail, setProfileEmail] = useState(type === 'client' ? "Alexandro@mail.com" : "amandammayen@gmail.com")
  const [profileCompany, setProfileCompany] = useState(type === 'client' ? "Enter Company Name" : "Technician")
  const [tasks, setTasks] = useState([
    // ... (keep your existing tasks array)
  ])

  // ... (keep your existing useEffect, formatTime, toggleTimer, and addNewTask functions)

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-2xl font-bold">SiteAware</h1>
            </div>
            {type === 'client' && (
              <div className="flex items-center space-x-2">
                <span className="text-sm">ET</span>
                <Button variant="outline" className="text-white">
                  Ever teams (6)
                </Button>
              </div>
            )}
            {type === 'employee' && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="text-white">
                  Francis (AMCARE-MD)
                </Button>
                <Button variant="outline" className="text-white">
                  Logout
                </Button>
              </div>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt={profileName} />
                <AvatarFallback>{profileName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold flex items-center">
                  {profileName}
                  <Edit2 className="h-4 w-4 ml-2 text-gray-400 cursor-pointer" />
                </h2>
                <p className="text-gray-400 flex items-center">
                  {profileEmail}
                  <Edit2 className="h-4 w-4 ml-2 cursor-pointer" />
                </p>
                <Input
                  type="text"
                  value={profileCompany}
                  onChange={(e) => setProfileCompany(e.target.value)}
                  className="mt-2 bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
            {type === 'client' && (
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 rounded-lg p-2 flex items-center space-x-2">
                  <div className="text-3xl font-mono">{formatTime(elapsedTime)}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-purple-500"
                    onClick={toggleTimer}
                  >
                    {isTimerRunning ? <PauseCircle className="h-8 w-8" /> : <PlayCircle className="h-8 w-8" />}
                  </Button>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="text-white">
                      More Info <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 bg-gray-800 border-gray-700 text-white">
                    <div className="space-y-4">
                      <h3 className="font-medium">Client Information</h3>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>client@example.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>123 Business St, City, Country</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>

          {type === 'client' && (
            <>
              <Tabs defaultValue="worked" className="mb-8">
                <TabsList className="bg-gray-800">
                  <TabsTrigger value="worked" className="data-[state=active]:bg-gray-700">
                    Worked <span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-xs">4</span>
                  </TabsTrigger>
                  <TabsTrigger value="assigned" className="data-[state=active]:bg-gray-700">
                    Assigned <span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-xs">6</span>
                  </TabsTrigger>
                  <TabsTrigger value="unassigned" className="data-[state=active]:bg-gray-700">
                    Unassigned <span className="ml-2 bg-gray-700 px-2 py-1 rounded-full text-xs">2</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex justify-between items-center mb-4">
                <Input type="text" placeholder="Search tasks..." className="w-64 bg-gray-800 border-gray-700" />
                <div className="flex space-x-2">
                  <Button variant="outline" className="text-white">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={addNewTask}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Now</h3>
                {tasks.map((task, index) => (
                  <Card key={task.id} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      {/* ... (keep your existing task card content) */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {type === 'employee' && (
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400">User Name</label>
                      <Input value={profileName} className="mt-1 bg-gray-700 border-gray-600" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">User Initials</label>
                      <Input value="AG" className="mt-1 bg-gray-700 border-gray-600" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Title</label>
                      <Input value={profileCompany} className="mt-1 bg-gray-700 border-gray-600" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Gender</label>
                      <div className="mt-1 space-x-4">
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="gender" value="male" />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="gender" value="female" checked />
                          <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="gender" value="other" />
                          <span className="ml-2">Other</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Address</label>
                      <Input value="3060 Fairland Rd" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">City</label>
                      <Input value="Silver Sring" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">State</label>
                      <Input value="MD" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Zip Code</label>
                      <Input value="20904" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Country</label>
                      <Input value="USA" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Phone Number</label>
                      <Input value="3015430663" className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">E-Mail Address</label>
                      <Input value={profileEmail} className="mt-1 bg-gray-700 border-gray-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-4">Preferences</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Time Zone</label>
                      <select className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>US/Eastern</option>
                        {/* Add more time zone options */}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">Enable Notification</label>
                      <div className="mt-1">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2">Yes</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </Layout>
  )
}