import { useState } from 'react';
import { QrCode, Download, MoreVertical, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';
import eventConcert from '@/assets/event-concert.jpg';

const MyTickets = () => {
  const [activeTab, setActivosTab] = useState('active');

  const tickets = {
    active: [
      {
        id: 1,
        event: 'Summer Music Festival 2024',
        date: 'Aug 15, 2024',
        time: '7:00 PM',
        venue: 'Central Park, NYC',
        section: 'VIP Section A',
        seats: '15-16',
        image: eventConcert,
        qrCode: 'TRUESWAP-VRF-2024-SummerFest-VIP-A15-16-AUTH-7X9K2M',
        status: 'Activos'
      }
    ],
    past: [
      {
        id: 2,
        event: 'Rock Concert 2024',
        date: 'Jul 20, 2024',
        time: '8:00 PM',
        venue: 'Madison Square Garden',
        section: 'Floor A',
        seats: '23-24',
        image: eventConcert,
        status: 'Used'
      }
    ],
    pending: []
  };

  const getTabCount = (tab: string) => {
    return tickets[tab as keyof typeof tickets].length;
  };

  const showQRCode = (ticket: any) => {
    // Mock QR display
    alert(`QR Code for ${ticket.event}\nCode: ${ticket.qrCode}`);
  };

  return (
    <MobileLayout title="My Tickets" showBottomNav={true}>
      <div className="p-4 space-y-6">
        {/* Tabs */}
        <div className="flex bg-secondary rounded-xl p-1">
          {[
            { key: 'active', label: 'Activos' },
            { key: 'past', label: 'Pasados' },
            { key: 'pending', label: 'Pendientes' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActivosTab(tab.key)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label} ({getTabCount(tab.key)})
            </button>
          ))}
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets[activeTab as keyof typeof tickets].length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                <QrCode className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No tickets here</h3>
              <p className="text-muted-foreground mb-6">
                {activeTab === 'active' && "Aún no tienes entradas activas."}
                {activeTab === 'past' && "No past events to show."}
                {activeTab === 'pending' && "No pending transfers."}
              </p>
              {activeTab === 'active' && (
                <Button className="btn-primary">
                  Browse Events
                </Button>
              )}
            </div>
          ) : (
            tickets[activeTab as keyof typeof tickets].map((ticket) => (
              <div key={ticket.id} className="card-elevated p-0 overflow-hidden">
                <div className="flex">
                  {/* Event Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={ticket.image}
                      alt={ticket.event}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Ticket Details */}
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-sm line-clamp-1">
                          {ticket.event}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{ticket.date} • {ticket.time}</span>
                        </div>
                      </div>
                      <button className="p-1 -mr-1 rounded hover:bg-secondary">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{ticket.venue}</span>
                    </div>

                    <div className="text-xs text-muted-foreground mb-3">
                      {ticket.section} • {ticket.seats}
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        ticket.status === 'Activos' 
                          ? 'bg-success/10 text-success'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {ticket.status}
                      </span>

                      {ticket.status === 'Activos' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => showQRCode(ticket)}
                            className="text-xs text-primary font-medium hover:underline flex items-center gap-1"
                          >
                            <QrCode className="w-3 h-3" />
                            Mostrar QR
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Activos Ticket Actions */}
                {ticket.status === 'Activos' && (
                  <div className="border-t border-border p-4 bg-secondary/30">
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => showQRCode(ticket)}
                        className="flex items-center justify-center gap-2 py-2 px-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <QrCode className="w-4 h-4" />
                        QR Code
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2 px-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                      <button className="flex items-center justify-center gap-2 py-2 px-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                        <Download className="w-4 h-4" />
                        Compartir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Helper Text */}
        {activeTab === 'active' && tickets.active.length > 0 && (
          <div className="card-elevated p-4 bg-primary-light/20">
            <h4 className="font-semibold mb-2">Consejos rápidos:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Save QR codes to your device for offline access</li>
              <li>• Arrive 30 minutes before event start time</li>
              <li>• Contact support if you have any issues</li>
            </ul>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default MyTickets;