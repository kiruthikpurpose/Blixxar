'use client'

import { useState } from 'react';
import { Book, FileText, Clock, CreditCard, IdCard } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div className="w-72 bg-gray-800 h-screen border-r border-gray-700">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl">TS</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Tony Stark</h1>
        </div>
        <nav className="mt-6">
          {[
            { id: 'profile', name: 'Profile', icon: Book },
            { id: 'learning', name: 'My Learning', icon: Book },
            { id: 'assignments', name: 'Assignments', icon: FileText },
            { id: 'attendance', name: 'Attendance', icon: Clock },
            { id: 'billing', name: 'Billing', icon: CreditCard },
            { id: 'idcard', name: 'ID Card', icon: IdCard },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-4 hover:bg-gray-700/50 transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-500/10 text-blue-400 border-r-4 border-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <item.icon className={`h-5 w-5 mr-3 ${
                activeTab === item.id ? 'text-blue-400' : 'text-gray-400'
              }`} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* Profile Section in Sidebar */}
        <div className="absolute bottom-0 w-72 p-6 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">TS</span>
            </div>
            <div>
              <h3 className="text-white font-medium">Tony Stark</h3>
              <p className="text-sm text-gray-400">Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto bg-gray-900">
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'assignments' && <AssignmentsTab />}
        {activeTab === 'attendance' && <AttendanceTab />}
        {activeTab === 'billing' && <BillingTab setShowPaymentOptions={setShowPaymentOptions} showPaymentOptions={showPaymentOptions} />}
        {activeTab === 'idcard' && <IDCardTab />}
        {activeTab === 'learning' && <MyLearningTab />}
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">Profile Information</h2>
        <div className="space-y-4">
          <p className="text-gray-400"><strong>Name:</strong> Tony Stark</p>
          <p className="text-gray-400"><strong>Date of Birth:</strong> May 29, 1970</p>
          <p className="text-gray-400"><strong>Occupation:</strong> CEO of Stark Industries</p>
          <p className="text-gray-400"><strong>Major:</strong> Engineering</p>
          <p className="text-gray-400"><strong>Hobbies:</strong> Inventing, Flying, Philanthropy</p>
        </div>
      </div>
    </div>
  );
}

function AssignmentsTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Assignments</h2>
        <div className="space-y-4">
          {[
            { subject: 'Math Assignment', dueDate: '30th October 2024' },
            { subject: 'Physics Lab Report', dueDate: '15th November 2024' },
            { subject: 'Chemistry Project', dueDate: '1st December 2024' },
            { subject: 'Computer Science Assignment', dueDate: '20th November 2024' },
            { subject: 'Engineering Design Project', dueDate: '5th December 2024' },
          ].map((assignment, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">{assignment.subject}</h3>
                <p className="text-gray-400">Due Date: {assignment.dueDate}</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AttendanceTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Attendance</h2>
        <div className="bg-gray-700 p-6 rounded-lg">
          <ul className="space-y-3">
            {[
              { subject: 'Math', percentage: 95 },
              { subject: 'Physics', percentage: 90 },
              { subject: 'Chemistry', percentage: 93 },
              { subject: 'Computer Science', percentage: 89 },
              { subject: 'Engineering', percentage: 92 },
            ].map((entry, index) => (
              <li key={index} className="flex justify-between text-white">
                <span>{entry.subject}</span>
                <span>{entry.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-400 mt-4">Overall attendance: 92%</p>
      </div>
    </div>
  );
}

interface BillingTabProps {
  setShowPaymentOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showPaymentOptions: boolean;
}

function BillingTab({ setShowPaymentOptions, showPaymentOptions }: BillingTabProps) {
  const handlePayNow = () => {
    setShowPaymentOptions(!showPaymentOptions);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Billing</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg flex justify-between">
            <p className="text-white">Tuition Fees</p>
            <p className="text-white">$5000</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex justify-between">
            <p className="text-white">Library Fees</p>
            <p className="text-white">$150</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex justify-between">
            <p className="text-white">Lab Fees</p>
            <p className="text-white">$200</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex justify-between">
            <p className="text-white font-bold">Total Amount Due</p>
            <p className="text-white font-bold">$5350</p>
          </div>
        </div>
        <button onClick={handlePayNow} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Pay Now</button>
        {showPaymentOptions && (
          <div className="mt-4 bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-white">Payment Options:</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Net Banking</li>
              <li>Credit/Debit Card</li>
              <li>UPI</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function IDCardTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Student ID Card</h2>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl">TS</span>
          </div>
          <div>
            <h3 className="text-white font-bold">Tony Stark</h3>
            <p className="text-gray-400">Engineering</p>
            <p className="text-gray-400">ID: 16180339887</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyLearningTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">My Learning Progress</h2>
        <div className="space-y-4">
          {[
            { course: 'Web Development', progress: 75 },
            { course: 'Data Science', progress: 60 },
            { course: 'Machine Learning', progress: 50 },
            { course: 'Artificial Intelligence', progress: 30 },
            { course: 'Blockchain Technology', progress: 80 },
          ].map((item, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.course}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
              <span className="text-white">{item.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
