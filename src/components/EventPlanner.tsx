import { useState } from 'react';
import { EventType, Service } from '../App';
import { ServiceSelector } from './ServiceSelector';
import { DateSelector } from './DateSelector';
import { SummaryView } from './SummaryView';
import { ArrowLeft, Calendar, Check } from 'lucide-react';

interface EventPlannerProps {
  eventType: EventType;
  onBack: () => void;
}

export function EventPlanner({ eventType, onBack }: EventPlannerProps) {
  const [step, setStep] = useState<'services' | 'date' | 'summary'>('services');
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(50);

  const eventTitles = {
    wedding: 'Wedding Planning',
    graduation: 'Graduation Party Planning',
    anniversary: 'Anniversary Celebration Planning',
    birthday: 'Birthday Party Planning',
    corporate: 'Corporate Event Planning',
    babyshower: 'Baby Shower Planning',
    engagement: 'Engagement Party Planning',
    bridalshower: 'Bridal Shower Planning',
    familyreunion: 'Family Reunion Planning',
    farewell: 'Farewell Party Planning',
    conference: 'Conference Planning',
    productlaunch: 'Product Launch Planning',
    teambuilding: 'Team Building Event Planning',
    gala: 'Gala & Fundraiser Planning',
  };

  const handleServiceToggle = (service: Service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleDateConfirm = (date: string, guests: number) => {
    setSelectedDate(date);
    setGuestCount(guests);
    setStep('summary');
  };

  const calculateTotalCost = () => {
    return selectedServices.reduce((sum, service) => {
      if (service.id === 'catering') {
        return sum + (service.price * guestCount);
      }
      return sum + service.price;
    }, 0);
  };

  const totalCost = calculateTotalCost();

  return (
    <div className="min-h-screen pb-20 bg-[#F9F9F9]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#34495E] hover:text-[#33A1FF] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Event Selection
            </button>

            <div className="flex items-center gap-8">
              <div className={`flex items-center gap-2 ${step === 'services' ? 'text-[#33A1FF]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'services' ? 'bg-[#33A1FF] text-white' : step === 'date' || step === 'summary' ? 'bg-[#6CCFF6] text-white' : 'bg-gray-200'}`}>
                  {step === 'date' || step === 'summary' ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span>Services</span>
              </div>

              <div className={`flex items-center gap-2 ${step === 'date' ? 'text-[#33A1FF]' : step === 'summary' ? 'text-[#6CCFF6]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'date' ? 'bg-[#33A1FF] text-white' : step === 'summary' ? 'bg-[#6CCFF6] text-white' : 'bg-gray-200'}`}>
                  {step === 'summary' ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span>Date</span>
              </div>

              <div className={`flex items-center gap-2 ${step === 'summary' ? 'text-[#33A1FF]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'summary' ? 'bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Summary</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-[#333333] mb-2 text-4xl">{eventTitles[eventType]}</h1>
        <p className="text-[#333333]/70 text-lg">Let's plan your perfect {eventType}</p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        {step === 'services' && (
          <ServiceSelector
            eventType={eventType}
            selectedServices={selectedServices}
            onServiceToggle={handleServiceToggle}
            onNext={() => setStep('date')}
          />
        )}

        {step === 'date' && (
          <DateSelector
            selectedDate={selectedDate}
            guestCount={guestCount}
            onDateChange={setSelectedDate}
            onGuestCountChange={setGuestCount}
            onBack={() => setStep('services')}
            onConfirm={handleDateConfirm}
          />
        )}

        {step === 'summary' && (
          <SummaryView
            eventType={eventType}
            selectedServices={selectedServices}
            selectedDate={selectedDate}
            guestCount={guestCount}
            totalCost={totalCost}
            onBack={() => setStep('date')}
            onEdit={() => setStep('services')}
          />
        )}
      </div>

      {/* Bottom Bar */}
      {step === 'services' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-[#333333]/70">
                {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected
              </p>
              <p className="text-[#33A1FF] text-xl">{totalCost.toLocaleString()} ETB</p>
            </div>
            <button
              onClick={() => setStep('date')}
              disabled={selectedServices.length === 0}
              className="bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Continue to Date Selection
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}