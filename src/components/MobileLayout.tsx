import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, Home, User, Plus, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  showBottomNav?: boolean;
}

const MobileLayout = ({ 
  children, 
  title, 
  showBackButton = false, 
  showBottomNav = true 
}: MobileLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Plus, label: 'Sell', path: '/sell' },
    { icon: Ticket, label: 'My Tickets', path: '/tickets' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-sm mx-auto">
      {/* Header */}
      {(title || showBackButton) && (
        <header className="flex items-center justify-between p-4 bg-background border-b border-border">
          {showBackButton ? (
            <button 
              onClick={() => window.history.back()}
              className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <div />
          )}
          
          {title && (
            <h1 className="text-lg font-semibold text-center flex-1">{title}</h1>
          )}
          
          <div />
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <nav className="bg-background border-t border-border p-2 safe-area-inset-bottom">
          <div className="flex justify-around">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary-light' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <item.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;