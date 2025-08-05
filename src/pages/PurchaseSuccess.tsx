import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, QrCode, Download, Mail, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';

const PurchaseSuccess = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  // Mock QR code data
  const qrCodeData = "TRUESWAP-VRF-2024-SummerFest-VIP-A15-16-AUTH-7X9K2M";

  return (
    <MobileLayout showBottomNav={false}>
        <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} recycle={false} />
      <div className="p-4 space-y-6 text-center">
        {/* Success Header */}
        <div className="pt-8 space-y-4">
          <div className="w-20 h-20 mx-auto bg-success rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-success mb-2">
              ¡Compra exitosa!
            </h1>
            <p className="text-muted-foreground">
              Tu entrada ha sido reemitida with a unique QR code
            </p>
          </div>
        </div>

        {/* Ticket Details */}
        <div className="card-elevated p-6 text-left space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Summer Music Festival 2024</h2>
            <p className="text-muted-foreground">August 15, 2024 • 7:00 PM</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Section</p>
              <p className="font-medium">VIP Section A</p>
            </div>
            <div>
              <p className="text-muted-foreground">Seats</p>
              <p className="font-medium">15-16</p>
            </div>
            <div>
              <p className="text-muted-foreground">Venue</p>
              <p className="font-medium">Central Park, NYC</p>
            </div>
            <div>
              <p className="text-muted-foreground">Order ID</p>
              <p className="font-medium">#TS2024001</p>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="card-elevated p-6 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <QrCode className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold">Your Unique QR Code</h3>
          </div>

          {showQRCode ? (
            <div className="space-y-4">
              {/* Mock QR Code */}
              <div className="w-48 h-48 mx-auto bg-white border-2 border-gray-200 rounded-xl p-4">
                <div className="w-full h-full bg-black" style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='20' height='20'%3e%3crect width='20' height='20' fill='white'/%3e%3crect width='10' height='10' fill='black'/%3e%3crect x='10' y='10' width='10' height='10' fill='black'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e")`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Este código QR es válido solo para ti
                </p>
                <p className="text-xs font-mono bg-secondary p-2 rounded text-muted-foreground break-all">
                  {qrCodeData}
                </p>
              </div>
            </div>
          ) : (
            <Button
              onClick={() => setShowQRCode(true)}
              className="btn-primary w-full"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Mostrar QR Code
            </Button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="btn-secondary w-full">
            <Plus className="w-5 h-5 mr-2" />
            Add to Apple Wallet
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button className="btn-ghost">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button className="btn-ghost">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
        </div>

        {/* Important Info */}
        <div className="card-elevated p-4 bg-primary-light/20 text-left">
          <h4 className="font-semibold mb-2">Important:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Your original ticket has been invalidated</li>
            <li>• This new QR code is the only valid entry</li>
            <li>• Arrive 30 minutes before the event</li>
            <li>• Present this QR code at the venue entrance</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="pt-4 space-y-3">
          <Link to="/tickets" className="btn-primary w-full block text-center">
            View My Tickets
          </Link>
          
          <Link to="/home" className="btn-ghost w-full block text-center">
            Back to Home
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default PurchaseSuccess;