import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">Project Management Dashboard</h1>
            <div className="flex justify-around mt-5">
                <div className="w-1/3 p-3 border border-gray-300 rounded">
                    <h2 className="text-xl font-semibold">Projects</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </div>
                <div className="w-1/3 p-3 border border-gray-300 rounded">
                    <h2 className="text-xl font-semibold">Tasks</h2>
                    <ul>
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                    </ul>
                </div>
                <div className="w-1/3 p-3 border border-gray-300 rounded">
                    <h2 className="text-xl font-semibold">Team Members</h2>
                    <ul>
                        <li>Member 1</li>
                        <li>Member 2</li>
                        <li>Member 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    
};

export default Dashboard;