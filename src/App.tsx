import React, { useState } from 'react';
import { Heart, Users, DollarSign, MessageSquare, User, Youtube, Twitch } from 'lucide-react';

function App() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const recentSupporters = [
    { name: 'Sarah Johnson', amount: '$50', message: 'Keep up the great work! Love your content and dedication to the community.' },
    { name: 'Michael Chen', amount: '$25', message: 'Happy to support! Your tutorials helped me so much.' },
    { name: 'Sarah Johnson', amount: '$50', message: 'Keep up the great work! Love your content and dedication to the community.' },
    { name: 'Michael Chen', amount: '$25', message: 'Happy to support! Your tutorials helped me so much.' },
  ];

  const predefinedAmounts = [25, 50, 100];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ amount, name, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&auto=format&fit=crop&q=80"
              alt="Streamer"
              className="w-16 h-16 rounded-full object-cover border-4 border-primary"
            />
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-gray-800">Khanishere7</h2>
            </div>
            <div className="flex items-right gap-4">
              <button>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 pt-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-[90%] flex flex-col sticky top-20">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">About</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                Hey everyone! I'm Khanishere7, and I create gaming content to entertain and educate. 
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Youtube className="w-6 h-6 text-[#FF0000]" />
                  <span className="text-gray-700 font-medium">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Twitch className="w-6 h-6 text-[#6441A5]" />
                  <span className="text-gray-700 font-medium">Twitch</span>
                </a>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Recent Supporters</h2>
            </div>

            <div className="space-y-6 overflow-y-auto flex-grow pr-2 max-h-[300px]">
              {recentSupporters.map((supporter, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center text-white font-semibold text-lg">
                    {supporter.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-medium text-gray-800">{supporter.name}</span>
                      <span className="text-sm font-semibold text-primary">{supporter.amount}</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-none p-3 text-gray-700">
                      {supporter.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-[90%] sticky top-20 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  Donation Amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-grow pl-8 pr-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter amount"
                    required
                  />
                  <div className="absolute right-2 flex gap-1">
                    {predefinedAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset.toString())}
                        className="px-2 py-1 text-sm rounded bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Name or Username
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Leave a message..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center pb-3"
              >
                Support
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;