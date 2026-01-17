import { Event } from '../App';
import { Calendar, Users, Plus } from 'lucide-react';

interface EventListProps {
  events: Event[];
  selectedEvent: Event | null;
  onSelectEvent: (event: Event) => void;
  onCreateNew: () => void;
}

export function EventList({ events, selectedEvent, onSelectEvent, onCreateNew }: EventListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">Events</h2>
        <button
          onClick={onCreateNew}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="space-y-3">
        {events.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No events yet</p>
            <p className="text-gray-400">Create your first event to get started</p>
          </div>
        ) : (
          events.map(event => (
            <button
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selectedEvent?.id === event.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <h3 className="text-gray-900 mb-1">{event.title}</h3>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{event.guests.length}</span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
