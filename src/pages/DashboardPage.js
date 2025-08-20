import React, { useState } from 'react';
import ListCategory from '../components/Dashboard/Category/ListCategory.js';
import Statistic from '../components/Dashboard/Statistic/Statistic.js';
import tabs from '../utils/constants/tabs';
import UserList from '../components/Dashboard/UserList/UserList.js';
import GetAllRequest from '../components/Dashboard/Request/GetAllRequest.js';

function DashboardPage() {
    const [activeTab, setActiveTab] = useState('request');

    return (
        <div className="bg-gray-100 min-h-screen font-montserrat">
            <div className="container mx-auto px-4 py-8">
                {/* Onglets desktop */}
                <div className="hidden sm:flex space-x-4 mb-4">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-md text-sm ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* Onglets mobile */}
                <div className="sm:hidden mb-4">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md" value={activeTab} onChange={(e) => setActiveTab(e.target.value)}>
                        {tabs.map(tab => (
                            <option key={tab.id} value={tab.id}>{tab.label}</option>
                        ))}
                    </select>
                </div>
                {/* Contenu principal responsive */}
                <div className="w-full">
                    {activeTab === 'request' && <GetAllRequest />}
                    {activeTab === 'users' && <UserList />}
                    {activeTab === 'category' && <ListCategory />}
                    {activeTab === 'stat' && <Statistic />}
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
