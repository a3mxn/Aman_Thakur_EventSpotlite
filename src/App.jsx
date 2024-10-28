import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar'
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';

function App() {
  const events = [
    { id: 1, name: 'Music Concert', date: '2023-12-01', location: 'Downtown Arena', description: 'An evening of great music.' },
    { id: 2, name: 'Art Exhibition', date: '2023-12-05', location: 'City Art Gallery', description: 'Showcase of local artists.' },
    { id: 3, name: 'Tech Conference', date: '2023-12-10', location: 'Convention Center', description: 'Latest in technology.' },
    { id: 4, name: 'Food Festival', date: '2023-12-15', location: 'Central Park', description: 'Taste cuisines from around the world.' },
  { id: 5, name: 'Charity Run', date: '2023-12-20', location: 'Riverside Trail', description: '5K run to support local charities.' },
  { id: 6, name: 'Book Fair', date: '2023-12-22', location: 'City Library', description: 'Discover new and classic books for all ages.' },
  { id: 7, name: 'Film Screening', date: '2023-12-28', location: 'Open Air Theater', description: 'Outdoor screening of a classic film.' },
  { id: 8, name: 'Yoga Workshop', date: '2023-12-30', location: 'Community Center', description: 'Mindfulness and wellness through yoga.' }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="event-list">
          {events.map(event => (
            <EventCard key={event.id} event={event} onClick={openModal} />
          ))}
        </div>
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
}

export default App;
