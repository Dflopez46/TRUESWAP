import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';

const PurchaseFlow = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  // Mock ticket data
  const ticket = {
    event: 'Summer Music Festival 2024',
    section: 'VIP Section A',
    seats: '15-16',
    price: 450,
    seller: 'Sarah M.'
  };

  const startVerification = () => {
    setIsVerifying(true);
    setStep(2);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationComplete(true);
      setStep(3);
    }, 3000);
  };

  const completePurchase = () => {
    setStep(4);
    
    // Redirect to success after a brief moment
    setTimeout(() => {
      navigate('/purchase-success');
    }, 2000);
  };

  return (
    <MobileLayout title="Purchase Ticket" showBackButton={true}>
      <div className="p-4 space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {step > stepNum ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  stepNum
                )}
              </div>
              {stepNum < 4 && (
                <div
                  className={`w-12 h-0.5 ml-2 ${
                    step > stepNum ? 'bg-primary' : 'bg-secondary'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Review */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Revisa tu compra</h2>
              
              <div className="card-elevated p-4 space-y-4">
                <div>
                  <h3 className="font-semibold">{ticket.event}</h3>
                  <p className="text-muted-foreground">August 15, 2024 • 7:00 PM</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Section:</span>
                    <span className="font-medium">{ticket.section}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Seats:</span>
                    <span className="font-medium">{ticket.seats}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Seller:</span>
                    <span className="font-medium">{ticket.seller}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary">${ticket.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-4 bg-primary-light/20">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Secure Purchase Process
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>1. Ticket verification with official platform</li>
                <li>2. Payment held in secure escrow</li>
                <li>3. New QR code issued to you</li>
                <li>4. Original ticket invalidated</li>
              </ul>
            </div>

            <Button
              onClick={startVerification}
              className="btn-primary w-full"
            >
              Start Verification Process
            </Button>
          </div>
        )}

        {/* Step 2: Verification */}
        {step === 2 && (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">Verifying Ticket</h2>
              <p className="text-muted-foreground">
                We're verifying this ticket with the official ticketing system...
              </p>
            </div>

            <div className="py-12">
              {isVerifying ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
                  </div>
                  <p className="text-muted-foreground">Connecting to official platform...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <CheckCircle className="w-16 h-16 mx-auto text-success" />
                  <div>
                    <p className="text-lg font-semibold text-success">✅ Ticket Verified</p>
                    <p className="text-muted-foreground">Este ticket es auténtico y está disponible para transferir</p>
                  </div>
                </div>
              )}
            </div>

            {verificationComplete && (
              <Button
                onClick={() => setStep(3)}
                className="btn-primary w-full"
              >
                Continuar al pago
              </Button>
            )}
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Pago seguro</h2>
              
              <div className="card-elevated p-4 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Payment Method</span>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-xl bg-primary-light/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded"></div>
                      <span className="font-medium">•••• 4242</span>
                      <span className="text-sm text-muted-foreground ml-auto">Visa</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-4 bg-warning/10">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-warning" />
                  <span className="font-semibold">Escrow Protection</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your payment will be held securely until the ticket transfer is complete and verified.
                </p>
              </div>
            </div>

            <Button
              onClick={completePurchase}
              className="btn-primary w-full"
            >
              Complete Purchase - ${ticket.price}
            </Button>
          </div>
        )}

        {/* Step 4: Processing */}
        {step === 4 && (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">Processing Purchase</h2>
              <p className="text-muted-foreground">
                Finalizing your ticket transfer...
              </p>
            </div>

            <div className="py-12">
              <div className="w-16 h-16 mx-auto">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
              </div>
              <p className="text-muted-foreground mt-4">Issuing new QR code...</p>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default PurchaseFlow;