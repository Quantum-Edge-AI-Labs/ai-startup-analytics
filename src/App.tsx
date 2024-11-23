import React, { useMemo } from "react";
import {
  BarChart,
  PieChart,
  Activity,
  Users,
  Briefcase,
  Building,
  Code,
} from "lucide-react";

// Data analysis and aggregation
const startupData = {
  totalStartups: 248,
  topCategories: [
    { name: "Developer Tools", count: 42 },
    { name: "Healthcare", count: 28 },
    { name: "Enterprise", count: 24 },
    { name: "AI/ML", count: 22 },
    { name: "Sales", count: 18 },
  ],
  aiIntegration: {
    withAI: 186,
    total: 248,
  },
  founderStats: {
    totalFounders: 496,
    avgPerStartup: 2.1,
  },
};

function App() {
  const aiPercentage = useMemo(
    () =>
      Math.round(
        (startupData.aiIntegration.withAI / startupData.aiIntegration.total) *
          100
      ),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">
          YC Startup Analytics from iG3 Labs
        </h1>
        <p className="text-gray-400">
          Comprehensive analysis of {startupData.totalStartups} YC-backed
          companies
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <Building className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-semibold">Total Startups</h3>
            </div>
            <p className="text-3xl font-bold">{startupData.totalStartups}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <Code className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold">AI Integration</h3>
            </div>
            <p className="text-3xl font-bold">{aiPercentage}%</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-rose-500/10 rounded-lg">
                <Users className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-semibold">Total Founders</h3>
            </div>
            <p className="text-3xl font-bold">
              {startupData.founderStats.totalFounders}
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <Activity className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold">Avg Founders</h3>
            </div>
            <p className="text-3xl font-bold">
              {startupData.founderStats.avgPerStartup}
            </p>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <BarChart className="w-5 h-5" />
              Top Categories
            </h2>
            <div className="space-y-4">
              {startupData.topCategories.map((category) => (
                <div key={category.name} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-400">
                    {category.name}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{
                          width: `${
                            (category.count / startupData.totalStartups) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm text-gray-400">
                    {category.count}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <PieChart className="w-5 h-5" />
              AI Integration
            </h2>
            <div className="flex items-center justify-center h-[calc(100%-2rem)]">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="20"
                    strokeDasharray={`${aiPercentage * 2.51} 251`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{aiPercentage}%</div>
                    <div className="text-sm text-gray-400">AI Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <Briefcase className="w-5 h-5" />
            Key Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold mb-2">Developer Focus</h3>
              <p className="text-gray-400">
                Developer Tools is the most prominent category, representing 17%
                of all startups
              </p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold mb-2">AI Dominance</h3>
              <p className="text-gray-400">
                75% of startups integrate AI/ML technologies into their core
                products
              </p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold mb-2">Founder Structure</h3>
              <p className="text-gray-400">
                Most startups operate with 2-3 founders, optimizing for balanced
                leadership
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
