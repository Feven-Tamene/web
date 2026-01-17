import { useState } from 'react';
import { Guest } from '../App';
import { UserPlus, Mail, Check, X, Clock, Trash2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface GuestListProps {
  eventId: string;
  guests: Guest[];
  onAddGuest: (eventId: string, guest: Omit<Guest, 'id' | 'status' | 'confirmationSent'>) => void;
  onSendConfirmation: (eventId: string, guestId: string) => void;
  onUpdateGuestStatus: (eventId: string, guestId: string, status: Guest['status']) => void;
  onDeleteGuest: (eventId: string, guestId: string) => void;
}

export function GuestList({
  eventId,
  guests,
  onAddGuest,
  onSendConfirmation,
  onUpdateGuestStatus,
  onDeleteGuest,
}: GuestListProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [guestForm, setGuestForm] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddGuest(eventId, guestForm);
    setGuestForm({ name: '', email: '' });
    setIsAdding(false);
    toast.success(`Confirmation email sent to ${guestForm.email}`);
  };

  const handleResendConfirmation = (guest: Guest) => {
    onSendConfirmation(eventId, guest.id);
    toast.success(`Confirmation email resent to ${guest.email}`);
  };

  const getStatusIcon = (status: Guest['status']) => {
    switch (status) {
      case 'confirmed':
        return <Check className="w-4 h-4 text-green-600" />;
      case 'declined':
        return <X className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: Guest['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'declined':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900">Guest List</h3>
          <p className="text-gray-600">{guests.length} {guests.length === 1 ? 'guest' : 'guests'} invited</p>
        </div>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add Guest
          </button>
        )}
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="guestName" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="guestName"
                required
                value={guestForm.name}
                onChange={e => setGuestForm({ ...guestForm, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="guestEmail" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="guestEmail"
                required
                value={guestForm.email}
                onChange={e => setGuestForm({ ...guestForm, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Add & Send Invitation
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setGuestForm({ name: '', email: '' });
              }}
              className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {guests.length === 0 ? (
          <div className="text-center py-8">
            <UserPlus className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No guests yet</p>
            <p className="text-gray-400">Add guests to send invitations</p>
          </div>
        ) : (
          guests.map(guest => (
            <div
              key={guest.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <p className="text-gray-900">{guest.name}</p>
                <p className="text-gray-500">{guest.email}</p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={guest.status}
                  onChange={e => onUpdateGuestStatus(eventId, guest.id, e.target.value as Guest['status'])}
                  className={`px-3 py-1.5 rounded-lg border text-sm ${getStatusColor(guest.status)} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="declined">Declined</option>
                </select>

                <button
                  onClick={() => handleResendConfirmation(guest)}
                  className="text-indigo-600 hover:text-indigo-700 transition-colors p-2 hover:bg-indigo-50 rounded-lg"
                  title="Resend confirmation"
                >
                  <Mail className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onDeleteGuest(eventId, guest.id)}
                  className="text-red-600 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                  title="Remove guest"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
