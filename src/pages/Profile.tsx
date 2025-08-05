import { useState } from 'react';
import { User, Settings, Star, Shield, HelpCircle, LogOut, ChevronRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';

const Profile = () => {
  const [user] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: null,
    rating: 4.9,
    totalSales: 12,
    totalPurchases: 8,
    joinDate: 'March 2024'
  });

  const menuItems = [
    {
      icon: Star,
      label: 'My Reviews',
      value: `${user.rating} rating`,
      action: () => console.log('Reviews')
    },
    {
      icon: Shield,
      label: 'Confianza y seguridad',
      value: 'Vendedor verificado',
      action: () => console.log('Confianza y seguridad')
    },
    {
      icon: Bell,
      label: 'Notificaciones',
      value: 'Manage alerts',
      action: () => console.log('Notificaciones')
    },
    {
      icon: Settings,
      label: 'Configuración de cuenta',
      value: 'Privacy & security',
      action: () => console.log('Settings')
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      value: 'Get assistance',
      action: () => console.log('Help')
    }
  ];

  return (
    <MobileLayout title="Profile" showBottomNav={true}>
      <div className="p-4 space-y-6">
        {/* User Header */}
        <div className="card-elevated p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
          <p className="text-muted-foreground mb-4">{user.email}</p>
          
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold text-lg">{user.totalSales}</div>
              <div className="text-muted-foreground">Sales</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-semibold text-lg">{user.totalPurchases}</div>
              <div className="text-muted-foreground">Purchases</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-semibold text-lg flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {user.rating}
              </div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="btn-secondary h-auto p-4 flex-col">
            <Star className="w-6 h-6 mb-2" />
            <span className="text-sm">My Listings</span>
          </Button>
          <Button className="btn-secondary h-auto p-4 flex-col">
            <Shield className="w-6 h-6 mb-2" />
            <span className="text-sm">Transaction History</span>
          </Button>
        </div>

        {/* Account Status */}
        <div className="card-elevated p-4 bg-success/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Verified Account</h3>
              <p className="text-sm text-muted-foreground">
                Identity verified • Member since {user.joinDate}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full card-elevated p-4 flex items-center justify-between hover:scale-[1.01] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="card-elevated p-4 bg-primary-light/20">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Mantente seguro en TrueSwap
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Compra solo a vendedores verificados</li>
            <li>• Never share personal payment details</li>
            <li>• Report suspicious activity immediately</li>
            <li>• Use in-app messaging for communication</li>
          </ul>
        </div>

        {/* Sign Out */}
        <Button
          onClick={() => window.location.href = '/'}
          className="w-full flex items-center justify-center gap-2 text-destructive bg-destructive/10 hover:bg-destructive/20 border border-destructive/20"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </Button>

        {/* App Version */}
        <div className="text-center text-sm text-muted-foreground pt-4">
          TrueSwap v1.0.0 • Made with ❤️ for secure ticket trading
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;