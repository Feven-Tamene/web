import { useState } from 'react';
import { EventType, Service } from '../App';
import { Check, Camera, Music, Utensils, Cake, Flower2, Car, Video, Shirt, MapPin, Monitor, Award, Users, Lightbulb, X, Sparkles } from 'lucide-react';

interface ServiceSelectorProps {
  eventType: EventType;
  selectedServices: Service[];
  onServiceToggle: (service: Service) => void;
  onNext: () => void;
}

export function ServiceSelector({ eventType, selectedServices, onServiceToggle }: ServiceSelectorProps) {
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  const getServicesForEventType = (type: EventType): Service[] => {
    const commonServices = [
      { id: 'venue', name: 'Venue', description: 'Beautiful location for your event', price: 300000, icon: 'MapPin', hasStyleOptions: true },
      { id: 'catering', name: 'Catering', description: 'Delicious food and beverages (per person)', price: 7500, icon: 'Utensils' },
      { id: 'photography', name: 'Photography', description: 'Professional photo coverage', price: 180000, icon: 'Camera' },
      { id: 'videography', name: 'Videography', description: 'Cinematic video production', price: 250000, icon: 'Video' },
      { id: 'music', name: 'Music & DJ', description: 'Entertainment and sound system', price: 150000, icon: 'Music', hasStyleOptions: true },
    ];

    if (type === 'wedding') {
      return [
        ...commonServices,
        { id: 'flowers', name: 'Floral Arrangements', description: 'Beautiful wedding flower arrangements', price: 220000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Wedding Cake', description: 'Custom designed wedding cake', price: 100000, icon: 'Cake', hasStyleOptions: true },
        { id: 'transportation', name: 'Transportation', description: 'Luxury cars for bride & groom', price: 75000, icon: 'Car' },
        { id: 'attire', name: 'Attire Coordination', description: 'Styling and fitting services', price: 65000, icon: 'Shirt' },
      ];
    } else if (type === 'graduation') {
      return [
        ...commonServices,
        { id: 'decorations', name: 'Decorations', description: 'Celebratory graduation decorations', price: 95000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Celebration Cake', description: 'Custom graduation cake', price: 50000, icon: 'Cake', hasStyleOptions: true },
      ];
    } else if (type === 'anniversary') {
      return [
        ...commonServices,
        { id: 'flowers', name: 'Floral Arrangements', description: 'Beautiful flower decorations', price: 150000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Anniversary Cake', description: 'Elegant celebration cake', price: 75000, icon: 'Cake', hasStyleOptions: true },
        { id: 'transportation', name: 'Transportation', description: 'Luxury transportation service', price: 65000, icon: 'Car' },
      ];
    } else if (type === 'birthday') {
      return [
        ...commonServices,
        { id: 'decorations', name: 'Decorations', description: 'Birthday themed decorations', price: 75000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Birthday Cake', description: 'Custom birthday cake', price: 45000, icon: 'Cake', hasStyleOptions: true },
        { id: 'entertainment', name: 'Entertainment', description: 'Games, activities, or performers', price: 100000, icon: 'Music', hasStyleOptions: true },
      ];
    } else if (type === 'corporate') {
      return [
        ...commonServices,
        { id: 'av', name: 'A/V Equipment', description: 'Professional audio-visual setup', price: 180000, icon: 'Video' },
        { id: 'branding', name: 'Event Branding', description: 'Custom signage and materials', price: 110000, icon: 'Shirt' },
        { id: 'coordination', name: 'Event Coordination', description: 'Professional event management', price: 250000, icon: 'MapPin' },
      ];
    } else if (type === 'babyshower') {
      return [
        { id: 'venue', name: 'Venue', description: 'Beautiful location for your celebration', price: 150000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Catering', description: 'Delicious food and beverages (per person)', price: 5500, icon: 'Utensils' },
        { id: 'photography', name: 'Photography', description: 'Professional photo coverage', price: 100000, icon: 'Camera' },
        { id: 'decorations', name: 'Decorations', description: 'Baby shower themed decor', price: 85000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Celebration Cake', description: 'Beautiful baby shower cake', price: 40000, icon: 'Cake', hasStyleOptions: true },
        { id: 'games', name: 'Games & Activities', description: 'Baby shower games and prizes', price: 32000, icon: 'Music' },
      ];
    } else if (type === 'engagement') {
      return [
        ...commonServices,
        { id: 'flowers', name: 'Floral Arrangements', description: 'Romantic flower decorations', price: 190000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Engagement Cake', description: 'Elegant celebration cake', price: 65000, icon: 'Cake', hasStyleOptions: true },
        { id: 'transportation', name: 'Transportation', description: 'Luxury transportation', price: 52000, icon: 'Car' },
      ];
    } else if (type === 'bridalshower') {
      return [
        { id: 'venue', name: 'Venue', description: 'Elegant venue for bridal shower', price: 190000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Catering', description: 'Delicious food and beverages (per person)', price: 6500, icon: 'Utensils' },
        { id: 'photography', name: 'Photography', description: 'Professional photo coverage', price: 110000, icon: 'Camera' },
        { id: 'decorations', name: 'Decorations', description: 'Elegant bridal shower decor', price: 105000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Celebration Cake', description: 'Beautiful bridal shower cake', price: 52000, icon: 'Cake', hasStyleOptions: true },
        { id: 'games', name: 'Games & Activities', description: 'Bridal shower games and entertainment', price: 38000, icon: 'Music' },
      ];
    } else if (type === 'familyreunion') {
      return [
        ...commonServices,
        { id: 'decorations', name: 'Decorations', description: 'Family reunion themed decorations', price: 85000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'activities', name: 'Activities', description: 'Games and family activities', price: 75000, icon: 'Music' },
        { id: 'tshirts', name: 'Custom T-Shirts', description: 'Family reunion t-shirts', price: 62000, icon: 'Shirt' },
      ];
    } else if (type === 'farewell') {
      return [
        ...commonServices,
        { id: 'decorations', name: 'Decorations', description: 'Farewell party decorations', price: 80000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'cake', name: 'Celebration Cake', description: 'Custom farewell cake', price: 55000, icon: 'Cake', hasStyleOptions: true },
        { id: 'memories', name: 'Memory Book', description: 'Custom memory book creation', price: 45000, icon: 'Award' },
      ];
    } else if (type === 'conference') {
      return [
        { id: 'venue', name: 'Conference Venue', description: 'Large conference venue with facilities', price: 620000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Catering', description: 'Professional catering service (per person)', price: 9500, icon: 'Utensils' },
        { id: 'av', name: 'A/V Equipment', description: 'Complete audio-visual setup', price: 380000, icon: 'Monitor' },
        { id: 'registration', name: 'Registration System', description: 'Digital check-in and badges', price: 150000, icon: 'Users' },
        { id: 'materials', name: 'Conference Materials', description: 'Programs, folders, and handouts', price: 100000, icon: 'Award' },
        { id: 'coordination', name: 'Event Coordination', description: 'Full event management team', price: 310000, icon: 'MapPin' },
      ];
    } else if (type === 'productlaunch') {
      return [
        { id: 'venue', name: 'Launch Venue', description: 'Premium venue for product launch', price: 500000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Catering', description: 'Premium catering service (per person)', price: 10000, icon: 'Utensils' },
        { id: 'av', name: 'A/V & Stage Setup', description: 'Professional staging and presentation', price: 440000, icon: 'Monitor' },
        { id: 'branding', name: 'Event Branding', description: 'Custom branding and displays', price: 250000, icon: 'Lightbulb' },
        { id: 'photography', name: 'Photography & Video', description: 'Professional media coverage', price: 310000, icon: 'Camera' },
        { id: 'pr', name: 'PR & Media', description: 'Press releases and media coordination', price: 190000, icon: 'Award' },
      ];
    } else if (type === 'teambuilding') {
      return [
        { id: 'venue', name: 'Activity Venue', description: 'Venue with team building facilities', price: 250000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Catering', description: 'Meals and refreshments (per person)', price: 7000, icon: 'Utensils' },
        { id: 'activities', name: 'Team Activities', description: 'Professional team building activities', price: 220000, icon: 'Users' },
        { id: 'facilitator', name: 'Facilitator', description: 'Expert team building facilitator', price: 190000, icon: 'Award' },
        { id: 'materials', name: 'Activity Materials', description: 'All necessary materials and equipment', price: 88000, icon: 'Lightbulb' },
      ];
    } else if (type === 'gala') {
      return [
        { id: 'venue', name: 'Gala Venue', description: 'Luxurious gala venue', price: 750000, icon: 'MapPin', hasStyleOptions: true },
        { id: 'catering', name: 'Premium Catering', description: 'Fine dining experience (per person)', price: 12500, icon: 'Utensils' },
        { id: 'entertainment', name: 'Entertainment', description: 'Live band or performers', price: 380000, icon: 'Music', hasStyleOptions: true },
        { id: 'decorations', name: 'Luxury Decor', description: 'Elegant gala decorations', price: 310000, icon: 'Flower2', hasStyleOptions: true },
        { id: 'auction', name: 'Auction Management', description: 'Silent or live auction coordination', price: 190000, icon: 'Award' },
        { id: 'photography', name: 'Photography & Video', description: 'Professional event coverage', price: 250000, icon: 'Camera' },
      ];
    }
    
    return commonServices;
  };

  const services = getServicesForEventType(eventType);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      MapPin, Camera, Music, Utensils, Cake, Flower2, Car, Video, Shirt, Monitor, Award, Users, Lightbulb
    };
    return icons[iconName] || MapPin;
  };

  const isSelected = (service: Service) => {
    return selectedServices.some(s => s.id === service.id);
  };

  const handleServiceClick = (service: any) => {
    if (service.hasStyleOptions && !isSelected(service)) {
      setCurrentService(service);
      setShowStyleModal(true);
    } else {
      onServiceToggle(service);
    }
  };

  const handleStyleSelection = (style: 'traditional' | 'modern' | 'mixed') => {
    if (!currentService) return;

    const priceMultipliers = {
      traditional: 0.8,
      modern: 1.2,
      mixed: 1.0,
    };

    const serviceWithStyle: Service = {
      ...currentService,
      styleOption: style,
      price: Math.round(currentService.price * priceMultipliers[style]),
      name: `${currentService.name} (${style.charAt(0).toUpperCase() + style.slice(1)})`,
    };

    onServiceToggle(serviceWithStyle);
    setShowStyleModal(false);
    setCurrentService(null);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Select Your Services</h2>
        <p className="text-gray-600">Choose the services you need for your event</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = getIcon(service.icon);
          const selected = isSelected(service);

          return (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className={`relative bg-white rounded-xl border-2 p-6 text-left transition-all hover:shadow-lg ${
                selected
                  ? 'border-[#33A1FF] bg-gradient-to-br from-blue-50/50 to-cyan-50/50'
                  : 'border-gray-200 hover:border-[#6CCFF6]'
              }`}
            >
              {selected && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              {service.hasStyleOptions && !selected && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-blue-100 text-[#33A1FF] text-xs rounded-full border border-[#6CCFF6]">
                  Style Options
                </div>
              )}

              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                selected ? 'bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF]' : 'bg-gray-100'
              }`}>
                <Icon className={`w-6 h-6 ${selected ? 'text-white' : 'text-[#34495E]'}`} />
              </div>

              <h3 className="text-[#333333] mb-2 text-lg">{service.name}</h3>
              <p className="text-[#333333]/70 mb-4 text-sm">{service.description}</p>
              <p className="text-[#33A1FF] text-lg">
                {service.price.toLocaleString()} ETB
              </p>
            </button>
          );
        })}
      </div>

      {/* Style Selection Modal */}
      {showStyleModal && currentService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setShowStyleModal(false);
                setCurrentService(null);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h3 className="text-gray-900 mb-2 text-2xl">Select Style for {currentService.name}</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mb-6"></div>
            <p className="text-gray-600 mb-8">Choose the style that best fits your event theme</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleStyleSelection('traditional')}
                className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 hover:border-amber-400 p-6 text-left transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">Traditional</h4>
                <p className="text-gray-600 text-sm mb-4">Classic and timeless styling with cultural elements</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">20% Discount</span>
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {Math.round(currentService.price * 0.8).toLocaleString()} ETB
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleStyleSelection('mixed')}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 p-6 text-left transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">Mixed</h4>
                <p className="text-gray-600 text-sm mb-4">Perfect blend of traditional and contemporary styles</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-700">Standard Price</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {currentService.price.toLocaleString()} ETB
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleStyleSelection('modern')}
                className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 p-6 text-left transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">Modern</h4>
                <p className="text-gray-600 text-sm mb-4">Contemporary design with cutting-edge aesthetics</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-700">20% Premium</span>
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {Math.round(currentService.price * 1.2).toLocaleString()} ETB
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}