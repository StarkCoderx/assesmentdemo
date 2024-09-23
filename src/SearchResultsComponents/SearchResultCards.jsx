import React, { useState } from 'react';
import SearchResultBadges from './SearchResultBadges';

const mockData = [
  {
    id: 1,
    name: 'Satya Sai Engineering',
    services: 'Plumbing, Waterproofing, Construction',
    turnover: '₹50 Lakh',
    laborStrength: '25',
    projectsCompleted: '20',
    businessAge: '20 years',
    email: 'business1@example.com',
    phone: '1234567890',
    team: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '9876543210', initials: 'JD' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543211', initials: 'JS' },
    ],
  },
  {
    id: 2,
    name: 'Elite Construction',
    services: 'Building, Renovation, Interior Design',
    turnover: '₹80 Lakh',
    laborStrength: '50',
    projectsCompleted: '45',
    businessAge: '15 years',
    email: 'business2@example.com',
    phone: '1234567891',
    team: [
      { name: 'Michael Brown', email: 'michaelbrown@example.com', phone: '9876543212', initials: 'MB' },
      { name: 'Emily Davis', email: 'emilydavis@example.com', phone: '9876543213', initials: 'ED' },
    ],
  },
  {
    id: 3,
    name: 'GreenTech Solutions',
    services: 'Landscaping, Irrigation, Green Building',
    turnover: '₹30 Lakh',
    laborStrength: '18',
    projectsCompleted: '10',
    businessAge: '10 years',
    email: 'business3@example.com',
    phone: '1234567892',
    team: [
      { name: 'Robert Johnson', email: 'robertjohnson@example.com', phone: '9876543214', initials: 'RJ' },
      { name: 'Laura Wilson', email: 'laurawilson@example.com', phone: '9876543215', initials: 'LW' },
    ],
  },
  {
    id: 4,
    name: 'Citywide Builders',
    services: 'Construction, Project Management, Consulting',
    turnover: '₹100 Lakh',
    laborStrength: '60',
    projectsCompleted: '70',
    businessAge: '25 years',
    email: 'business4@example.com',
    phone: '1234567893',
    team: [
      { name: 'James Taylor', email: 'jamestaylor@example.com', phone: '9876543216', initials: 'JT' },
      { name: 'Sarah Miller', email: 'sarahmiller@example.com', phone: '9876543217', initials: 'SM' },
    ],
  },
  {
    id: 5,
    name: 'Metro Plumbing',
    services: 'Plumbing, Drainage Systems, Emergency Services',
    turnover: '₹40 Lakh',
    laborStrength: '22',
    projectsCompleted: '30',
    businessAge: '12 years',
    email: 'business5@example.com',
    phone: '1234567894',
    team: [
      { name: 'William Martinez', email: 'williammartinez@example.com', phone: '9876543218', initials: 'WM' },
      { name: 'Olivia Anderson', email: 'oliviaanderson@example.com', phone: '9876543219', initials: 'OA' },
    ],
  },
  {
    id: 6,
    name: 'Top Notch Waterproofing',
    services: 'Waterproofing, Roof Repair, Sealant Application',
    turnover: '₹25 Lakh',
    laborStrength: '15',
    projectsCompleted: '18',
    businessAge: '8 years',
    email: 'business6@example.com',
    phone: '1234567895',
    team: [
      { name: 'Charles Thomas', email: 'charlesthomas@example.com', phone: '9876543220', initials: 'CT' },
      { name: 'Sophia Lee', email: 'sophialee@example.com', phone: '9876543221', initials: 'SL' },
    ],
  },
  {
    id: 7,
    name: 'Precision Renovations',
    services: 'Renovation, Repairs, Custom Builds',
    turnover: '₹60 Lakh',
    laborStrength: '35',
    projectsCompleted: '50',
    businessAge: '18 years',
    email: 'business7@example.com',
    phone: '1234567896',
    team: [
      { name: 'David Harris', email: 'davidharris@example.com', phone: '9876543222', initials: 'DH' },
      { name: 'Isabella Clark', email: 'isabellaclark@example.com', phone: '9876543223', initials: 'IC' },
    ],
  },
  {
    id: 8,
    name: 'Innovative Design Co.',
    services: 'Architectural Design, Interior Decor, Landscaping',
    turnover: '₹45 Lakh',
    laborStrength: '28',
    projectsCompleted: '40',
    businessAge: '10 years',
    email: 'business8@example.com',
    phone: '1234567897',
    team: [
      { name: 'Matthew Martinez', email: 'matthewmartinez@example.com', phone: '9876543224', initials: 'MM' },
      { name: 'Ava King', email: 'avaking@example.com', phone: '9876543225', initials: 'AK' },
    ],
  },
  {
    id: 9,
    name: 'Bricks Engineering',
    services: 'Plumbing, Waterproofing',
    turnover: '₹50 Lakh',
    laborStrength: '25',
    projectsCompleted: '20',
    businessAge: '20 years',
    email: 'business9@example.com',
    phone: '1234567890',
    team: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '9876543210', initials: 'JD' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543211', initials: 'JS' },
    ],
  },
  {
    id: 10,
    name: 'Sai Engineering',
    services: 'Waterproofing, Construction',
    turnover: '₹50 Lakh',
    laborStrength: '25',
    projectsCompleted: '20',
    businessAge: '20 years',
    email: 'business10@example.com',
    phone: '1234567890',
    team: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '9876543210', initials: 'JD' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543211', initials: 'JS' },
    ],
  },
  {
    id: 11,
    name: 'West Engineering',
    services: 'Plumbing, Waterproofing, Construction',
    turnover: '₹50 Lakh',
    laborStrength: '25',
    projectsCompleted: '20',
    businessAge: '20 years',
    email: 'business11@example.com',
    phone: '1234567890',
    team: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '9876543210', initials: 'JD' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543211', initials: 'JS' },
    ],
  },
  {
    id: 12,
    name: 'East Constructions',
    services: 'Plumbing, Waterproofing, Construction',
    turnover: '₹50 Lakh',
    laborStrength: '25',
    projectsCompleted: '20',
    businessAge: '20 years',
    email: 'business12@example.com',
    phone: '1234567890',
    team: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '9876543210', initials: 'JD' },
      { name: 'Jane Smith', email: 'janesmith@example.com', phone: '9876543211', initials: 'JS' },
    ],
  },
];

const ContactInfoPopup = ({ business, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-[505px] h-[459px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Contact Info</h2>
          <button onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>
        <div className="bg-gray-100 p-4 mb-4 rounded">
          <h3 className="font-bold text-gray-600">Business Contact Details</h3>
          <h3 className="font-bold">{business.name}</h3>
          <p>{business.email}</p>
          <p>{business.phone}</p>
        </div>
        <div className='bg-gray-100 p-4'>
          <h3 className="font-bold text-gray-600">Team Contact Details</h3>
          {business.team.map((member, index) => (
            <div key={index} className="flex items-center my-2">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {member.initials}
              </div>
              <div>
                <p className="font-bold">{member.name}</p>
                <p>{member.email}</p>
                <p>{member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BusinessCard = ({ business, onViewContact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const description = `From concept to completion, we offer comprehensive services, including plumbing, waterproofing, and construction, tailored to your specific needs. Our expert team is dedicated to delivering high-quality results with a focus on customer satisfaction...`;
  const truncatedDescription = description.slice(0, 150);

  return (
    <div style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)', overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="overflow-y-auto lg:w-[867px] md:w-[664px] md:h-[284px] lg:h-[299px] bg-white md:p-[28px] lg:px-[35px] lg:pt-[35px] lg:pb-[15px] rounded-sm my-6">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/no_business_img.svg" alt="Vendor" className="lg:h-[140px] lg:w-[140px] md:w-[107px] md:h-[107px] object-cover" />
          <div>
            <h3 className="text-xl font-bold text-[#212112]">{business.name}</h3>
            <div className="flex items-center pb-2 md:pt-[6px] md:pb-[12px]">
                    <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/blue_tick.svg" alt="blue tick" />
                    <span className="text-sm font-medium text-gray-600 pl-[3px]">Verified vendor</span>
                  </div>
            <p className="text-sm font-bold text-gray-500 pb-2">{business.services}</p>
            <div className="bg-[#F5F4F5] md:w-[360px] lg:w-[479px] grid grid-cols-2 gap-4 md:p-[10px] lg:p-[19px]">
              <div className="flex items-center space-x-2">
              <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/rupees.svg" alt="Rs." />
                <span className="text-gray-700 md:text-xs lg:text-sm">Turnover :</span>
                <span className="font-bold md:text-xs lg:text-sm">{business.turnover}</span>
              </div>
              <div className="flex items-center justify-end space-x-2">
              <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/labour_strength.svg" alt="labour" />
                <span className="text-gray-700 md:text-xs lg:text-sm">Labour Strength :</span>
                <span className="font-bold md:text-xs lg:text-sm">{business.laborStrength}</span>
              </div>
              <div className="flex items-center  space-x-2">
              <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/business_age.svg" alt="age" />
                <span className="text-gray-700 md:text-xs lg:text-sm">Business Age :</span>
                <span className="font-bold md:text-xs lg:text-sm">{business.businessAge}</span>
              </div>
              <div className="flex items-center justify-end space-x-2">
              <img src="https://storagereponeevaydevcdn.blob.core.windows.net/business/projects_completed.svg" alt="proj." />
                <span className="text-gray-700 md:text-xs lg:text-sm">Projects Completed :</span>
                <span className="font-bold md:text-xs lg:text-sm">{business.projectsCompleted}</span>
              </div>
              
            </div>
          </div>
        </div>
        <div>
          <button className="mx-4 text-base font-bold text-[#4E4E4E] underline">View Profile</button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="text-sm w-[620px] text-gray-500 mt-[15px]">
          {isExpanded ? description : truncatedDescription}
          <button onClick={handleToggle} className="text-blue-500 underline ml-1">
            See More
          </button>
        </div>
        <button
          onClick={() => onViewContact(business)}
          className="lg:w-[125px] lg:h-[44px] md:w-[129px] md:h-[44px] flex justify-center items-center text-white text-sm bg-[#2D2D24] rounded-sm"
        >
          View Contact
        </button>
      </div>
    </div>
  );
};

const SearchResultCards = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleViewContact = (business) => {
    setSelectedBusiness(business);
  };

  const handleClosePopup = () => {
    setSelectedBusiness(null);
  };

  return (
    <>
      {/* Placeholder for SearchResultBadges */}
      <SearchResultBadges/>
      <div className="min-h-screen flex flex-col items-center pr-8">
        <div className="w-full max-w-6xl">
          {mockData.map((business) => (
            <BusinessCard key={business.id} business={business} onViewContact={handleViewContact} />
          ))}
        </div>
      </div>
      {selectedBusiness && (
        <ContactInfoPopup business={selectedBusiness} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default SearchResultCards;
