import { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { HomePage } from './components/HomePage';
import { EventPlanner } from './components/EventPlanner';

export type EventType = 
  // Personal/Social Events
  | 'wedding' 
  | 'birthday' 
  | 'graduation' 
  | 'anniversary' 
  | 'babyshower' 
  | 'engagement'
  | 'bridalshower'
  | 'familyreunion'
  | 'farewell'
  // Corporate Events
  | 'corporate' 
  | 'conference'
  | 'productlaunch'
  | 'teambuilding'
  | 'gala';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  hasStyleOptions?: boolean;
  styleOption?: 'traditional' | 'modern' | 'mixed';
}

export interface EventPlan {
  eventType: EventType;
  date: string;
  services: Service[];
  guestCount: number;
  budget: number;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'welcome' | 'home' | 'planner'>('welcome');
  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(null);

  const handleGetStarted = () => {
    setCurrentView('home');
  };

  const handleSelectEventType = (eventType: EventType) => {
    setSelectedEventType(eventType);
    setCurrentView('planner');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedEventType(null);
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
    setSelectedEventType(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {currentView === 'welcome' ? (
        <WelcomePage onGetStarted={handleGetStarted} />
      ) : currentView === 'home' ? (
        <HomePage 
          onSelectEventType={handleSelectEventType}
          onBackToWelcome={handleBackToWelcome}
        />
      ) : selectedEventType ? (
        <EventPlanner 
          eventType={selectedEventType} 
          onBack={handleBackToHome}
        />
      ) : null}
    </div>
  );
}
