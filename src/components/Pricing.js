import NavBar from './NavBar';
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="min-h-screen mx-auto flex flex-col items-center bg-gradient-to-b from-sky-900 via-cyan-600 to-cyan-200">
      <NavBar/>
      
      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-cyan-800 to-slate-800 text-gray-100 w-full min-h-screen flex flex-col items-center">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-gray-500 to-cyan-800 bg-clip-text text-transparent mt-20 pt-8">Pick your perfect plan.</h1>
        <p className="text-3xl font-bold text-[#10BEC0] mt-10">Select Billing Cycle</p>

        {/* Billing Cycle Toggle */}
        <div className="flex mt-4">
          <button
            onClick={() => handleBillingCycle('Monthly')}
            className={`px-4 py-2 ${billingCycle === 'Monthly' ? 'bg-gray-500' : 'bg-gray-700'} rounded-l-lg text-xl`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleBillingCycle('Yearly')}
            className={`px-4 py-2 ${billingCycle === 'Yearly' ? 'bg-[#10BEC0]' : 'bg-[#10BEC0]'} rounded-r-lg text-xl`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full px-5 md:px-0 mt-10">
          {/* Free Plan */}
          <div className="bg-[#A3C0D3] p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-black">Free</h2>
            <p className="mb-2 text-black">For creators and freelancers.</p>
            <button className="bg-black text-white px-3 py-1 rounded-full mb-4">Get started</button>
            <h3 className="text-2xl font-bold mb-2 text-black">$0</h3>
            <ul className="list-disc ml-5 text-black text-sm">
              <li>Planning and publishing tools</li>
              <li>Landing page builder</li>
              <li>AI assistant</li>
            </ul>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#A3C0D3] p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-black">Standard</h2>
            <p className="mb-2 text-black">For professionals using analytics and engagement tools.</p>
            <button className="bg-black text-white px-3 py-1 rounded-full mb-4">Try free for 14 days</button>
            <h3 className="text-2xl font-bold mb-2 text-black">$5</h3>
            <ul className="list-disc ml-5 text-black text-sm">
              <li>All free features plus:</li>
              <li>Engagement tools</li>
              <li>Analytics report</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#A3C0D3] p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-black">Professional</h2>
            <p className="mb-2 text-black">For teams wanting unlimited users, collaboration, and reporting.</p>
            <button className="bg-black text-white px-3 py-1 rounded-full mb-4">Try free for 14 days</button>
            <h3 className="text-2xl font-bold mb-2 text-black">$10</h3>
            <ul className="list-disc ml-5 text-black text-sm">
              <li>All standard features plus:</li>
              <li>Unlimited team members</li>
              <li>Draft collaboration tools</li>
            </ul>
          </div>

          {/* Advanced Plan */}
          <div className="bg-[#A3C0D3] p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 text-black">Advanced</h2>
            <p className="mb-2 text-black">For agencies with large-scale social media operations.</p>
            <button className="bg-black text-white px-3 py-1 rounded-full mb-4">Try free for 14 days</button>
            <h3 className="text-2xl font-bold mb-2 text-black">$25</h3>
            <ul className="list-disc ml-5 text-black text-sm">
              <li>All professional features plus:</li>
              <li>Optional SSO</li>
              <li>Scalable users and profiles</li>
              <li>24/7 prioritized customer support</li>
              <li>Tailored onboarding for teams</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
