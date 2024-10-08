import React from 'react';
import NavBar from './NavBar'; // Import NavBar component

const data = [
  {
    id: 1,
    header: 'LEARN',
    content: [
      { title: 'Blog', description: 'Social media best practices for brands and agencies.' },
      { title: 'Case Studies', description: 'Tangible results customers received from Pawastats.' },
      { title: 'Webinars and Tutorials', description: 'Recorded webinars/video tutorials explaining how to get the most out of Pawastats.' },
      { title: 'Product Demos', description: 'Embedded short product demo videos showing how users can interact with key features of Pawastats.' }
    ]
  },
  {
    id: 2,
    header: 'PRODUCT RESOURCES',
    content: [
      { title: '2024 Trend Report', description: 'The hottest trends in social media management.' },
      { title: 'Product updates', description: 'Keep up with new feature releases and platform enhancements.' },
      { title: 'Usage Analytics and Performance Metrics', description: 'Provides users with insights on how they are using the platform, helping them see the value they\'re getting from the platform.' } // Corrected missing period and closing quote
    ]
  },
  { 
    id: 3,
    header: 'CONNECT',
    content: [
      { title: 'Community', description: 'Connect and interact with various professionals in the Pawastats online forum.' },
      { title: 'Refer a friend', description: 'Invite a friend and unlock rewards.' },
      { title: 'Contact us', description: 'Get in touch with the Pawastats team to get answers to your questions.' }
    ]
  }
];

const Resources = () => {
  return (
    <div className="bg-[#03091E] min-h-screen">
      <NavBar /> 

      <div className=" bg-gradient-to-b from-[#053d4e] to-[#0a7293] grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="hidden md:flex flex-col text-gray-200 h-[400px] shadow-gray-700 shadow-lg bg-[#0041C3A] rounded-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4">{item.header}</h2> {/* Card header */}
            <div className="flex-grow">
              {item.content.map((contentItem, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{contentItem.title}</h3>
                  <p className="text-sm mt-1">{contentItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;