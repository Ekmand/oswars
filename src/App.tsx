import React from 'react';
import { Power, MessageSquare, Users2, ArrowRight } from 'lucide-react';

const teams = [
  {
    name: "Red",
    banner: "https://cdn.serverse.org/oswars/redbanner.png",
    description: "Power and performance unite in Red OS. Our aggressive optimization and cutting-edge architecture make us the force to be reckoned with. Victory runs in our code!",
    discordLink: "https://discord.gg/bcRHxJZSQv",
    gradient: "from-red-500 to-rose-500",
    hoverGradient: "from-red-600 to-rose-600",
    bgGradient: "from-red-900/20 to-rose-900/20"
  },
  {
    name: "Blue",
    banner: "https://cdn.serverse.org/oswars/bluebanner.png",
    description: "Stability meets innovation in Blue OS. Our streamlined workflow and robust security make us the clear choice for champions. The future is cerulean!",
    discordLink: "https://discord.gg/zge52hxqgR",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-900/20 to-cyan-900/20"
  },
  {
    name: "Green",
    banner: "https://cdn.serverse.org/oswars/greenbanner.png",
    description: "Efficiency flows through Green OS. Our eco-friendly design and sustainable performance prove that green is the new black. Nature's choice will prevail!",
    discordLink: "https://discord.gg/3MgtQ4DjaZ",
    gradient: "from-green-500 to-emerald-500",
    hoverGradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-900/20 to-emerald-900/20"
  },
  {
    name: "Amber",
    banner: "https://cdn.serverse.org/oswars/amberbanner.png",
    description: "Classic meets modern in Amber OS. Our timeless design philosophy and golden standard of reliability make us unstoppable. The legacy lives on!",
    discordLink: "https://discord.gg/rJYuGxGhpJ",
    gradient: "from-amber-500 to-yellow-500",
    hoverGradient: "from-amber-600 to-yellow-600",
    bgGradient: "from-amber-900/20 to-yellow-900/20"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-amber-500/30">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-[100px] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-red-900/40 via-green-900/40 via-blue-900/40 to-amber-900/40 animate-slow-spin blur-3xl opacity-50" />
        <div className="absolute -left-40 top-20 w-[300px] h-[300px] rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute -right-40 top-40 w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-3xl" />
        <header className="container mx-auto px-4 py-20 relative">
          <div className="relative text-center">
            <div className="mb-6 animate-fade-in">
              <Power className="w-20 h-20 relative text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-4 text-white">
              OS WARS
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              The ultimate showdown of operating systems. Four teams, one victor. 
              <span className="block mt-2 text-white font-semibold">
                Which OS will reign supreme?
              </span>
            </p>
          </div>
        </header>
      </div>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-[80px] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-red-900/20 via-green-900/20 via-blue-900/20 to-amber-900/20 blur-3xl opacity-30" />
        <div className="absolute -left-20 bottom-0 w-[250px] h-[250px] rounded-full bg-green-900/20 blur-3xl" />
        <div className="absolute right-0 top-0 w-[250px] h-[250px] rounded-full bg-amber-900/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold mb-12 text-center text-white">
            About The Competition
          </h2>
          <div className="max-w-3xl mx-auto text-white/90 space-y-6 backdrop-blur-3xl bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-lg leading-relaxed">
              OS Wars is the ultimate battle of operating systems, where passionate developers, 
              users, and enthusiasts come together to prove their OS superiority.
            </p>
            <p className="text-lg leading-relaxed">
              Through technical challenges, community engagement, and fierce debates, 
              teams will compete to crown their operating system as the ultimate champion.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-24 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-[120px] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-red-900/20 via-green-900/20 via-blue-900/20 to-amber-900/20 blur-3xl opacity-30" />
        <div className="absolute -left-40 top-20 w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute -right-40 bottom-20 w-[300px] h-[300px] rounded-full bg-red-900/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">
            The Competitors
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teams.map((team) => (
              <div key={team.name} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${team.bgGradient} rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out`} />
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={team.banner} 
                      alt={team.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${team.gradient} bg-clip-text text-transparent`}>
                      {team.name}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {team.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={team.name.toLowerCase()}"oswars.org"}
                        className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${team.gradient} hover:${team.hoverGradient} text-white font-semibold transition-all duration-300 group/button`}
                      >
                        Team Profile
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href={team.discordLink} 
                        className="inline-flex items-center px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-300 group/button"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Join Team Discord
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Discord CTA */}
      <section className="py-24 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-[80px] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-red-900/30 via-green-900/30 via-blue-900/30 to-amber-900/30 blur-3xl opacity-30" />
        <div className="absolute -left-20 top-0 w-[250px] h-[250px] rounded-full bg-amber-900/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 w-[250px] h-[250px] rounded-full bg-green-900/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
            <Users2 className="w-20 h-20 mx-auto mb-8 text-white" />
            <h2 className="text-5xl font-bold mb-6 text-white">
              Join The Battle
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of the most epic OS showdown in history. Join our main Discord server 
              to participate, spectate, and celebrate!
            </p>
            <a 
              href="https://discord.gg/3vshGHDPNB" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageSquare className="w-6 h-6 mr-2" />
              Join Main Discord Server
              <ArrowRight className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] to-black" />
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-white/60">
            © 2024 OS Wars. May the best OS win.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;