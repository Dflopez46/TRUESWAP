
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Star, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';
import eventConcert from '@/assets/event-concert.jpg';
import eventSports from '@/assets/event-sports.jpg';
import eventTheater from '@/assets/event-theater.jpg';

const EventDetail = () => {
  const { id } = useParams();
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  // Mock event data
  const events: Record<string, any> = {
    '1': {
      title: 'Summer Music Festival 2024',
      artist: 'Various Artists',
      date: 'August 15, 2024',
      time: '7:00 PM',
      venue: 'Central Park, NYC',
      address: '1 Central Park West, New York, NY 10023',
      image: eventConcert,
      description: 'Join us for the biggest music festival of the summer featuring top artists from around the world.',
    },
    '2': {
      title: 'Championship Game',
      artist: 'NY Tigers vs LA Hawks',
      date: 'September 10, 2024',
      time: '6:00 PM',
      venue: 'MetLife Stadium',
      address: '1 MetLife Stadium Dr, East Rutherford, NJ 07073',
      image: eventSports,
      description: 'Experience the thrill of the championship showdown in a packed stadium!',
    },
    '3': {
      title: 'Broadway Night',
      artist: 'Classic Performers',
      date: 'October 5, 2024',
      time: '8:00 PM',
      venue: 'Broadway Theater',
      address: '1681 Broadway, New York, NY 10019',
      image: eventTheater,
      description: 'A magical evening of Broadway performances you won’t forget.',
    },
  };

  const event = id ? events[id] : null;

  if (!event) {
    return (
      <MobileLayout>
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-red-500">Evento no encontrado</h2>
          <p className="mt-2">El evento que intentas ver no está disponible o el enlace es incorrecto.</p>
          <Link to="/">
            <Button className="mt-4">Volver al inicio</Button>
          </Link>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <div className="p-4">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg" />
        <h1 className="text-2xl font-bold mt-4">{event.title}</h1>
        <p className="text-sm text-muted-foreground">{event.artist}</p>
        <div className="mt-4 space-y-2">
          <p><Calendar className="inline mr-2" />{event.date}</p>
          <p><Clock className="inline mr-2" />{event.time}</p>
          <p><MapPin className="inline mr-2" />{event.venue}</p>
          <p className="text-sm text-muted-foreground">{event.address}</p>
        </div>
        <p className="mt-4">{event.description}</p>
        <div className="mt-6">
          <Button>Comprar entrada</Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default EventDetail;
