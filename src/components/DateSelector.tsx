import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Calendar as CalendarIcon } from 'lucide-react';

interface DateSelectorProps {
  selectedDate: string;
  guestCount: number;
  onDateChange: (date: string) => void;
  onGuestCountChange: (count: number) => void;
  onBack: () => void;
  onConfirm: (date: string, guestCount: number) => void;
}

export function DateSelector({
  selectedDate,
  guestCount,
  onDateChange,
  onGuestCountChange,
  onBack,
  onConfirm,
}: DateSelectorProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const selectDate = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    onDateChange(dateString);
  };

  const isDateSelected = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    return dateString === selectedDate;
  };

  const isPastDate = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-12"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h2 className="text-[#333333] mb-6 flex items-center gap-2 text-xl">
          <CalendarIcon className="w-6 h-6 text-[#33A1FF]" />
          Select Event Date
        </h2>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#34495E]" />
            </button>
            <h3 className="text-[#333333] text-lg">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#34495E]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-[#333333]/70 py-2 text-sm">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              if (typeof day === 'number') {
                const selected = isDateSelected(day);
                const past = isPastDate(day);

                return (
                  <button
                    key={index}
                    onClick={() => !past && selectDate(day)}
                    disabled={past}
                    className={`h-12 rounded-lg transition-all ${
                      selected
                        ? 'bg-gradient-to-br from-[#6CCFF6] to-[#33A1FF] text-white shadow-md'
                        : past
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'hover:bg-blue-50 text-[#333333]'
                    }`}
                  >
                    {day}
                  </button>
                );
              }
              return day;
            })}
          </div>
        </div>

        {selectedDate && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-[#6CCFF6] rounded-lg p-4">
            <p className="text-[#333333]/70 mb-1">Selected Date</p>
            <p className="text-[#33A1FF]">
              {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        )}
      </div>

      {/* Guest Count */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-[#333333] mb-6 flex items-center gap-2 text-xl">
            <Users className="w-6 h-6 text-[#33A1FF]" />
            Number of Guests
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#333333]/70">Expected guests:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onGuestCountChange(Math.max(1, guestCount - 10))}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors text-[#333333]"
                >
                  -
                </button>
                <span className="text-[#333333] w-16 text-center text-lg">{guestCount}</span>
                <button
                  onClick={() => onGuestCountChange(guestCount + 10)}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors text-[#333333]"
                >
                  +
                </button>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="500"
              value={guestCount}
              onChange={(e) => onGuestCountChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#33A1FF]"
            />

            <div className="grid grid-cols-4 gap-2">
              {[25, 50, 100, 200].map((count) => (
                <button
                  key={count}
                  onClick={() => onGuestCountChange(count)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    guestCount === count
                      ? 'border-[#33A1FF] bg-blue-50 text-[#33A1FF]'
                      : 'border-gray-200 hover:border-[#6CCFF6] text-[#333333]'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 px-6 py-4 border-2 border-[#6CCFF6] text-[#333333] rounded-lg hover:bg-blue-50 transition-colors"
          >
            Back to Services
          </button>
          <button
            onClick={() => onConfirm(selectedDate, guestCount)}
            disabled={!selectedDate}
            className="flex-1 bg-gradient-to-r from-[#6CCFF6] to-[#33A1FF] text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed"
          >
            Continue to Summary
          </button>
        </div>
      </div>
    </div>
  );
}