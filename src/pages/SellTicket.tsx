import { useState } from 'react';
import { Camera, Upload, Plus, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MobileLayout from '@/components/MobileLayout';

const SellTicket = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({
    event: '',
    date: '',
    venue: '',
    section: '',
    seats: '',
    originalPrice: '',
    sellingPrice: '',
    platform: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  const handleUpload = () => {
    setStep(2);
    // Mock uploaded data
    setTicketData({
      event: 'Summer Music Festival 2024',
      date: '2024-08-15',
      venue: 'Central Park, NYC',
      section: 'VIP Section A',
      seats: '15-16',
      originalPrice: '380',
      sellingPrice: '450',
      platform: 'Ticketmaster'
    });
  };

  const startVerification = () => {
    setIsVerifying(true);
    setStep(3);
    
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
      setStep(4);
    }, 3000);
  };

  const publishListing = () => {
    setStep(5);
  };

  return (
    <MobileLayout title="Sell Tickets" showBackButton={true}>
      <div className="p-4 space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4, 5].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  step >= stepNum
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {step > stepNum ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  stepNum
                )}
              </div>
              {stepNum < 5 && (
                <div
                  className={`w-8 h-0.5 ml-1 ${
                    step > stepNum ? 'bg-primary' : 'bg-secondary'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Upload Ticket */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Sube tu entrada</h2>
              <p className="text-muted-foreground">
                Import your ticket from email or take a photo
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleUpload}
                className="card-elevated p-6 w-full text-center hover:scale-[1.01] transition-all duration-200"
              >
                <Camera className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Take Photo</h3>
                <p className="text-sm text-muted-foreground">
                  Snap a picture of your ticket or QR code
                </p>
              </button>

              <button
                onClick={handleUpload}
                className="card-elevated p-6 w-full text-center hover:scale-[1.01] transition-all duration-200"
              >
                <Upload className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Import from Email</h3>
                <p className="text-sm text-muted-foreground">
                  Upload ticket from your email or files
                </p>
              </button>

              <button
                onClick={handleUpload}
                className="card-elevated p-6 w-full text-center hover:scale-[1.01] transition-all duration-200"
              >
                <Plus className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Ingresar manualmente</h3>
                <p className="text-sm text-muted-foreground">
                  Type in your ticket details manually
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Review Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Review Ticket Details</h2>
              <p className="text-muted-foreground">
                Confirm your ticket information is correct
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Event Name
                </label>
                <Input
                  value={ticketData.event}
                  onChange={(e) => setTicketData({...ticketData, event: e.target.value})}
                  className="input-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Date
                  </label>
                  <Input
                    type="date"
                    value={ticketData.date}
                    onChange={(e) => setTicketData({...ticketData, date: e.target.value})}
                    className="input-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Platform
                  </label>
                  <Input
                    value={ticketData.platform}
                    onChange={(e) => setTicketData({...ticketData, platform: e.target.value})}
                    className="input-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Venue
                </label>
                <Input
                  value={ticketData.venue}
                  onChange={(e) => setTicketData({...ticketData, venue: e.target.value})}
                  className="input-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Section
                  </label>
                  <Input
                    value={ticketData.section}
                    onChange={(e) => setTicketData({...ticketData, section: e.target.value})}
                    className="input-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Seats
                  </label>
                  <Input
                    value={ticketData.seats}
                    onChange={(e) => setTicketData({...ticketData, seats: e.target.value})}
                    className="input-primary"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={startVerification}
              className="btn-primary w-full"
            >
              Verificar entrada
            </Button>
          </div>
        )}

        {/* Step 3: Verification */}
        {step === 3 && (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">Verifying Ticket</h2>
              <p className="text-muted-foreground">
                Checking with {ticketData.platform} to verify authenticity...
              </p>
            </div>

            <div className="py-12">
              {isVerifying ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Connecting to {ticketData.platform}...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <CheckCircle className="w-16 h-16 mx-auto text-success" />
                  <div>
                    <p className="text-lg font-semibold text-success">✅ Ticket Verified</p>
                    <p className="text-muted-foreground">Your ticket is authentic and ready to sell</p>
                  </div>
                </div>
              )}
            </div>

            {verificationComplete && (
              <Button
                onClick={() => setStep(4)}
                className="btn-primary w-full"
              >
                Set Price
              </Button>
            )}
          </div>
        )}

        {/* Step 4: Set Price */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Define tu precio</h2>
              <p className="text-muted-foreground">
                Choose a competitive price for your ticket
              </p>
            </div>

            <div className="card-elevated p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Original Price:</span>
                <span className="font-semibold">${ticketData.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Market Average:</span>
                <span className="font-semibold text-primary">$420</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Your Selling Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="number"
                  value={ticketData.sellingPrice}
                  onChange={(e) => setTicketData({...ticketData, sellingPrice: e.target.value})}
                  className="input-primary pl-10"
                  placeholder="450"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Recommended: $400 - $480 based on similar listings
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Additional Notes (Optional)
              </label>
              <Textarea
                placeholder="Any special notes about your ticket..."
                className="input-primary resize-none"
                rows={3}
              />
            </div>

            <Button
              onClick={publishListing}
              className="btn-primary w-full"
            >
              Publicar entrada
            </Button>
          </div>
        )}

        {/* Step 5: Success */}
        {step === 5 && (
          <div className="space-y-6 text-center">
            <div className="pt-8">
              <CheckCircle className="w-20 h-20 mx-auto text-success mb-4" />
              <h2 className="text-xl font-semibold mb-2">Listing Published!</h2>
              <p className="text-muted-foreground">
                Your ticket is now live and available for purchase
              </p>
            </div>

            <div className="card-elevated p-4 text-left">
              <h3 className="font-semibold mb-3">Listing Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Event:</span>
                  <span className="font-medium">{ticketData.event}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Section:</span>
                  <span className="font-medium">{ticketData.section}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-medium text-primary">${ticketData.sellingPrice}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="btn-primary w-full">
                View My Listings
              </Button>
              <Button className="btn-ghost w-full">
                Sell Another Ticket
              </Button>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default SellTicket;