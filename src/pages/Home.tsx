import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';
import eventConcert from '@/assets/event-concert.jpg';
import eventSports from '@/assets/event-sports.jpg';
import eventTheater from '@/assets/event-theater.jpg';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: 'Summer Music Festival 2024',
      artist: 'Various Artists',
      date: 'Aug 15, 2024',
      time: '7:00 PM',
      venue: 'Central Park, NYC',
      image: eventConcert,
      ticketsAvailable: 24,
      priceFrom: 150,
      category: 'Music'
    },
    {
      id: 2,
      title: 'Lakers vs Warriors',
      artist: 'NBA Finals',
      date: 'Aug 20, 2024',
      time: '8:00 PM',
      venue: 'Crypto.com Arena, LA',
      image: eventSports,
      ticketsAvailable: 12,
      priceFrom: 280,
      category: 'Sports'
    },
    {
      id: 3,
      title: 'Hamilton Broadway Show',
      artist: 'Broadway Musical',
      date: 'Aug 25, 2024',
      time: '8:00 PM',
      venue: 'Richard Rodgers Theatre, NYC',
      image: eventTheater,
      ticketsAvailable: 8,
      priceFrom: 220,
      category: 'Theater'
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MobileLayout showBottomNav={true}>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Find Your Next Event</h1>
          <p className="text-muted-foreground">Secure tickets from verified sellers</p>
        </div>

        {/* Search */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by artist, city, or event..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-primary pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            <Button className="btn-secondary whitespace-nowrap">
              <Filter className="w-4 h-4 mr-2" />
              All Events
            </Button>
            <Button className="btn-ghost whitespace-nowrap">Music</Button>
            <Button className="btn-ghost whitespace-nowrap">Sports</Button>
            <Button className="btn-ghost whitespace-nowrap">Theater</Button>
            <Button className="btn-ghost whitespace-nowrap">Comedy</Button>
          </div>
        </div>

        {/* Featured Events */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Available Now</h2>
            <span className="text-sm text-muted-foreground">
              {filteredEvents.length} events
            </span>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="card-elevated p-0 overflow-hidden block hover:scale-[1.02] transition-all duration-200"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-sm font-medium text-gray-900">
                      {event.ticketsAvailable} tickets
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.artist}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">4.8</span>
                      <span className="text-sm text-muted-foreground">Vendedor verificados</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="text-lg font-bold text-primary">${event.priceFrom}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 pt-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/sell"
              className="card-elevated p-4 text-center hover:scale-[1.02] transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Sell Tickets</h3>
              <p className="text-sm text-muted-foreground">List your tickets securely</p>
            </Link>

            <Link
              to="/tickets"
              className="card-elevated p-4 text-center hover:scale-[1.02] transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">My Tickets</h3>
              <p className="text-sm text-muted-foreground">View your purchases</p>
            </Link>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;