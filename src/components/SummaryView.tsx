import { useState } from 'react';
import { EventType, Service } from '../App';
import { Calendar, Users, DollarSign, Check, Edit, Heart, GraduationCap, Gift, User, Mail, Phone, CheckCircle, Cake, Baby, Briefcase, Sparkles, UserPlus, PartyPopper, Rocket } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface SummaryViewProps {
  eventType: EventType;
  selectedServices: Service[];
  selectedDate: string;
  guestCount: number;
  totalCost: number;
  onBack: () => void;
  onEdit: () => void;
}

export function SummaryView({
  eventType,
  selectedServices,
  selectedDate,
  guestCount,
  totalCost,
  onBack,
  onEdit,
}: SummaryViewProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const eventTitles = {
    wedding: 'Wedding',
    graduation: 'Graduation Party',
    anniversary: 'Anniversary Celebration',
    birthday: 'Birthday Party',
    corporate: 'Corporate Event',
    babyshower: 'Baby Shower',
    engagement: 'Engagement Party',
    bridalshower: 'Bridal Shower',
    familyreunion: 'Family Reunion',
    farewell: 'Farewell Party',
    conference: 'Conference',
    productlaunch: 'Product Launch',
    teambuilding: 'Team Building',
    gala: 'Gala & Fundraiser',
  };

  const eventIcons = {
    wedding: Heart,
    graduation: GraduationCap,
    anniversary: Gift,
    birthday: Cake,
    corporate: Briefcase,
    babyshower: Baby,
    engagement: Heart,
    bridalshower: Sparkles,
    familyreunion: Users,
    farewell: PartyPopper,
    conference: Users,
    productlaunch: Rocket,
    teambuilding: UserPlus,
    gala: Sparkles,
  };

  const EventIcon = eventIcons[eventType];

  const handleConfirmBooking = () => {
    setShowContactForm(true);
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    toast.success('Your event request has been submitted!');
  };

  const getServiceCost = (service: Service) => {
    if (service.id === 'catering') {
      return service.price * guestCount;
    }
    return service.price;
  };

  if (showConfirmation) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-teal-300 p-12 text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-teal-600" />
          </div>
          
          <h2 className="text-gray-900 mb-4">Request Confirmed!</h2>
          
          <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Thank you for choosing our event planning services, <span className="text-sky-700">{contactInfo.name}</span>!
            </p>
            <p className="text-gray-700">
              Our event organizer will contact you within <span className="text-teal-700">2–3 business days</span> to discuss your {eventTitles[eventType]} details and finalize arrangements.
            </p>
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-sky-600" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-teal-600" />
              <span>{contactInfo.phone}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 h-1 w-32 mx-auto mb-6 rounded"></div>

          <p className="text-gray-600 mb-8">
            We look forward to making your event truly special with exceptional planning and flawless execution.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-sky-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-sky-700 hover:to-teal-700 transition-all shadow-lg"
          >
            Plan Another Event
          </button>
        </div>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="mb-8">
            <h2 className="text-gray-900 mb-2">Contact Information</h2>
            <p className="text-gray-600">Please provide your details so we can reach you</p>
          </div>

          <form onSubmit={handleSubmitContact} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  required
                  value={contactInfo.name}
                  onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  required
                  value={contactInfo.email}
                  onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  required
                  value={contactInfo.phone}
                  onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700">
                By submitting this form, you agree that our event organizer will contact you within 2–3 business days to finalize your event details.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowContactForm(false)}
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Summary
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:from-sky-700 hover:via-teal-700 hover:to-emerald-700 transition-all shadow-lg"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF] rounded-full flex items-center justify-center shadow-lg">
            <EventIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-[#333333] text-2xl">Event Summary</h2>
            <p className="text-[#333333]/70">{eventTitles[eventType]}</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border-2 border-[#6CCFF6]/30 rounded-lg p-6">
            <Calendar className="w-6 h-6 text-[#33A1FF] mb-3" />
            <p className="text-[#333333]/70 mb-1">Event Date</p>
            <p className="text-[#333333]">
              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border-2 border-[#6CCFF6]/30 rounded-lg p-6">
            <Users className="w-6 h-6 text-[#33A1FF] mb-3" />
            <p className="text-[#333333]/70 mb-1">Guest Count</p>
            <p className="text-[#333333]">{guestCount} guests</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-cyan-50/50 to-blue-50 border-2 border-[#33A1FF]/50 rounded-lg p-6">
            <DollarSign className="w-6 h-6 text-[#33A1FF] mb-3" />
            <p className="text-[#333333]/70 mb-1">Total Cost</p>
            <p className="text-[#33A1FF] text-xl">{totalCost.toLocaleString()} ETB</p>
          </div>
        </div>

        {/* Selected Services */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333] text-xl">Selected Services ({selectedServices.length})</h3>
            <button
              onClick={onEdit}
              className="text-[#33A1FF] hover:text-[#6CCFF6] transition-colors flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Services
            </button>
          </div>

          <div className="space-y-3">
            {selectedServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/30 via-cyan-50/30 to-blue-50/30 rounded-lg border border-[#6CCFF6]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[#333333]">{service.name}</p>
                    <p className="text-[#333333]/70 text-sm">{service.description}</p>
                  </div>
                </div>
                <p className="text-[#33A1FF]">{getServiceCost(service).toLocaleString()} ETB</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="border-t border-gray-200 pt-6">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-[#333333]/70">
              <span>Subtotal</span>
              <span>{totalCost.toLocaleString()} ETB</span>
            </div>
            <div className="flex justify-between text-[#333333]/70">
              <span>Service Fee (10%)</span>
              <span>{(totalCost * 0.1).toLocaleString()} ETB</span>
            </div>
            <div className="flex justify-between text-[#333333]/70">
              <span>Tax (8%)</span>
              <span>{(totalCost * 0.08).toLocaleString()} ETB</span>
            </div>
          </div>
          <div className="flex justify-between pt-4 border-t border-gray-200">
            <span className="text-[#333333] text-xl">Total Amount</span>
            <span className="text-[#33A1FF] text-xl">{(totalCost * 1.18).toLocaleString()} ETB</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-8 py-4 border-2 border-[#6CCFF6] text-[#333333] rounded-lg hover:bg-blue-50 transition-colors"
        >
          Back to Date Selection
        </button>
        <button
          onClick={handleConfirmBooking}
          className="flex-1 bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all"
        >
          Continue to Contact Info
        </button>
      </div>

      <div className="mt-6 text-center text-[#333333]/70">
        <p>Review your selections before proceeding</p>
      </div>
    </div>
  );
}