import { Event, Guest } from '../App';
import { GuestList } from './GuestList';
import { Calendar, Clock, MapPin, Trash2 } from 'lucide-react';

interface EventDetailsProps {
  event: Event;
  onUpdateEvent: (event: Event) => void;
  onDeleteEvent: (eventId: string) => void;
  onAddGuest: (eventId: string, guest: Omit<Guest, 'id' | 'status' | 'confirmationSent'>) => void;
  onSendConfirmation: (eventId: string, guestId: string) => void;
  onUpdateGuestStatus: (eventId: string, guestId: string, status: Guest['status']) => void;
  onDeleteGuest: (eventId: string, guestId: string) => void;
}

export function EventDetails({
  event,
  onDeleteEvent,
  onAddGuest,
  onSendConfirmation,
  onUpdateGuestStatus,
  onDeleteGuest,
}: EventDetailsProps) {
  const confirmedGuests = event.guests.filter(g => g.status === 'confirmed').length;
  const pendingGuests = event.guests.filter(g => g.status === 'pending').length;
  const declinedGuests = event.guests.filter(g => g.status === 'declined').length;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-gray-900 mb-2">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this event?')) {
                onDeleteEvent(event.id);
              }
            }}
            className="text-red-600 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="text-gray-500">Date</p>
              <p className="text-gray-900">{new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="text-gray-500">Time</p>
              <p className="text-gray-900">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="text-gray-500">Location</p>
              <p className="text-gray-900">{event.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-green-900 mb-1">{confirmedGuests}</p>
            <p className="text-green-600">Confirmed</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <p className="text-yellow-900 mb-1">{pendingGuests}</p>
            <p className="text-yellow-600">Pending</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-red-900 mb-1">{declinedGuests}</p>
            <p className="text-red-600">Declined</p>
          </div>
        </div>
      </div>

      <GuestList
        eventId={event.id}
        guests={event.guests}
        onAddGuest={onAddGuest}
        onSendConfirmation={onSendConfirmation}
        onUpdateGuestStatus={onUpdateGuestStatus}
        onDeleteGuest={onDeleteGuest}
      />
    </div>
  );
}
