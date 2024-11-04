import { useState } from 'react';
import SidebarComponent from "./global-components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Bestpractice() {
  const [newInsight, setNewInsight] = useState('');

  const handleInsightSubmit = (e) => {
    e.preventDefault();
    console.log('New insight submitted:', newInsight);
    setNewInsight('');
  };

  return (
<>
<SidebarComponent style={{marginRight: 500}}/>

    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Best Practices Repository</h1>

      {/* Case Studies Library */}
      <div className="border rounded-lg shadow p-4">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">Case Studies Library</h2>
          <p className="text-sm text-gray-500">Learn from successful solutions across departments</p>
        </header>
        <div>
          <details>
            <summary className="cursor-pointer">Streamlining Permit Process</summary>
            <p className="pl-4 mt-2">
              The Urban Planning department reduced permit processing time by 50% through digitization and process optimization.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer mt-4">Citizen Engagement Initiative</summary>
            <p className="pl-4 mt-2">
              The Public Relations team increased community participation in local events by 30% using targeted social media campaigns.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer mt-4">Emergency Response Coordination</summary>
            <p className="pl-4 mt-2">
              The Emergency Services department improved response times by 25% through implementation of a new dispatch system.
            </p>
          </details>
        </div>
      </div>

      {/* Knowledge Sharing Network */}
      <div className="border rounded-lg shadow p-4">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">Knowledge Sharing Network</h2>
          <p className="text-sm text-gray-500">Share and learn from your colleagues' experiences</p>
        </header>
        <form onSubmit={handleInsightSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Share your insight or tip here..."
            value={newInsight}
            onChange={(e) => setNewInsight(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit Insight
          </button>
        </form>
        <div className="mt-4 space-y-2">
          <p className="font-semibold">Recent Insights:</p>
          <ul className="list-disc list-inside">
            <li>Always follow up with citizens after resolving their issues</li>
            <li>Use plain language in all communications to improve clarity</li>
            <li>Regularly seek feedback to identify areas for improvement</li>
          </ul>
        </div>
      </div>

      {/* Workshops & Training Resources */}
      <div className="border rounded-lg shadow p-4">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">Workshops & Training Resources</h2>
          <p className="text-sm text-gray-500">Enhance your skills and knowledge</p>
        </header>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Upcoming Workshops:</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Effective Communication in Public Service</span>
                <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">Soft Skills</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Digital Transformation in Government</span>
                <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">Technology</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Ethics and Integrity in Public Administration</span>
                <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">Compliance</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Training Resources:</h3>
            <ul className="list-disc list-inside">
              <li>Public Speaking for Government Officials (E-learning course)</li>
              <li>Guide to Citizen-Centric Service Design (PDF)</li>
              <li>Crisis Management Essentials (Video Series)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
