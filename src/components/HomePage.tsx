import { EventType } from '../App';
import { Heart, Cake, GraduationCap, Gift, Users, Briefcase, Baby, Sparkles, PartyPopper, UserPlus, Rocket, Home, ArrowLeft } from 'lucide-react';

interface HomePageProps {
  onSelectEventType: (eventType: EventType) => void;
  onBackToWelcome: () => void;
}

export function HomePage({ onSelectEventType, onBackToWelcome }: HomePageProps) {
  const personalEvents = [
    {
      type: 'wedding' as EventType,
      title: 'Wedding',
      description: 'Beautiful ceremonies and receptions',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      type: 'birthday' as EventType,
      title: 'Birthday Party',
      description: 'Memorable birthday celebrations',
      icon: Cake,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      type: 'graduation' as EventType,
      title: 'Graduation Party',
      description: 'Celebrate academic achievements',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'anniversary' as EventType,
      title: 'Anniversary',
      description: 'Milestone celebrations',
      icon: Gift,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      type: 'babyshower' as EventType,
      title: 'Baby Shower',
      description: 'Welcome the new arrival',
      icon: Baby,
      gradient: 'from-sky-400 to-blue-400',
    },
    {
      type: 'engagement' as EventType,
      title: 'Engagement Party',
      description: 'Celebrate your commitment',
      icon: Heart,
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      type: 'bridalshower' as EventType,
      title: 'Bridal Shower',
      description: 'Pre-wedding celebrations',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      type: 'familyreunion' as EventType,
      title: 'Family Reunion',
      description: 'Bring the family together',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      type: 'farewell' as EventType,
      title: 'Farewell Party',
      description: 'Send-off celebrations',
      icon: PartyPopper,
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const corporateEvents = [
    {
      type: 'corporate' as EventType,
      title: 'Corporate Event',
      description: 'Professional corporate gatherings',
      icon: Briefcase,
      gradient: 'from-slate-600 to-gray-700',
    },
    {
      type: 'conference' as EventType,
      title: 'Conference',
      description: 'Large-scale professional conferences',
      icon: Users,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      type: 'productlaunch' as EventType,
      title: 'Product Launch',
      description: 'Unveil your new products',
      icon: Rocket,
      gradient: 'from-orange-600 to-red-600',
    },
    {
      type: 'teambuilding' as EventType,
      title: 'Team Building',
      description: 'Strengthen your team bonds',
      icon: UserPlus,
      gradient: 'from-teal-600 to-cyan-600',
    },
    {
      type: 'gala' as EventType,
      title: 'Gala & Fundraiser',
      description: 'Elegant fundraising events',
      icon: Sparkles,
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={onBackToWelcome}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-4"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="text-center">
            <h2 className="text-white text-4xl mb-2">Select Your Event Type</h2>
            <div className="w-24 h-1 bg-white/80 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Personal/Social Events */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl text-[#333333] mb-2">Personal & Social Events</h3>
            <p className="text-[#333333]/70 text-lg">Celebrate life's special moments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalEvents.map((event) => {
              const Icon = event.icon;
              return (
                <button
                  key={event.type}
                  onClick={() => onSelectEventType(event.type)}
                  className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#6CCFF6] hover:-translate-y-1 text-left"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-[#333333] mb-2">{event.title}</h4>
                  <p className="text-[#333333]/70">{event.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#33A1FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Plan this event</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Corporate Events */}
        <div>
          <div className="mb-8">
            <h3 className="text-3xl text-[#333333] mb-2">Corporate Events</h3>
            <p className="text-[#333333]/70 text-lg">Professional events for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateEvents.map((event) => {
              const Icon = event.icon;
              return (
                <button
                  key={event.type}
                  onClick={() => onSelectEventType(event.type)}
                  className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#6CCFF6] hover:-translate-y-1 text-left"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl text-[#333333] mb-2">{event.title}</h4>
                  <p className="text-[#333333]/70">{event.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#33A1FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Plan this event</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
