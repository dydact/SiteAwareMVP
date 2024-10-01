import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar.jsx";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { employeeApi, schedulingApi } from '../services/api';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Scheduling() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [employees, setEmployees] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmployees();
    fetchSchedules();
  }, [currentWeek]);

  const fetchEmployees = async () => {
    try {
      const response = await employeeApi.getEmployees();
      setEmployees(response.data);
    } catch (err) {
      setError('Failed to fetch employees');
    }
  };

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const startDate = getWeekDates(currentWeek)[0];
      const endDate = getWeekDates(currentWeek)[6];
      const response = await schedulingApi.getSchedules(startDate, endDate);
      setSchedules(response.data);
    } catch (err) {
      setError('Failed to fetch schedules');
    } finally {
      setLoading(false);
    }
  };

  const getWeekDates = (date) => {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(date);
      day.setDate(date.getDate() - date.getDay() + i);
      week.push(day);
    }
    return week;
  };

  const weekDates = getWeekDates(currentWeek);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="flex-grow p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Scheduling</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex space-x-6">
              {/* Employee List */}
              <Card className="w-1/4">
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Employees</h2>
                    <Input type="text" placeholder="Search employees" className="w-48" />
                  </div>
                  <div className="space-y-4">
                    {employees.map((employee) => (
                      <div key={employee.id} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Avatar>
                          <AvatarImage src={employee.image} alt={employee.name} />
                          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{employee.name}</h3>
                          <p className="text-sm text-gray-500">{employee.email}</p>
                          <p className="text-sm text-gray-500">{employee.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Calendar */}
              <Card className="flex-grow">
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="icon" onClick={() => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)))}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <h2 className="text-xl font-semibold">
                        {weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </h2>
                      <Button variant="outline" size="icon" onClick={() => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)))}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <Tabs defaultValue="week">
                      <TabsList>
                        <TabsTrigger value="day">Day</TabsTrigger>
                        <TabsTrigger value="week">Week</TabsTrigger>
                        <TabsTrigger value="month">Month</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((day, index) => (
                      <div key={day} className="text-center">
                        <div className="font-semibold">{day}</div>
                        <div className="text-sm text-gray-500">
                          {weekDates[index].getDate()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-7 gap-2 h-[600px]">
                    {weekDays.map((day, index) => (
                      <div key={day} className="border rounded-lg p-2">
                        {loading ? (
                          <p>Loading...</p>
                        ) : (
                          schedules
                            .filter(schedule => new Date(schedule.date).getDay() === index)
                            .map(schedule => (
                              <div
                                key={schedule.id}
                                className={`bg-${schedule.color}-200 text-${schedule.color}-800 p-1 text-sm rounded mb-1`}
                              >
                                {schedule.clientName}
                              </div>
                            ))
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}