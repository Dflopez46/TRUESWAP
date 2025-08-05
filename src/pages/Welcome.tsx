import { Link } from 'react-router-dom';
import trueswapLogo from '@/assets/trueswap-logo.png';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-hover to-primary flex flex-col items-center justify-center p-6 max-w-sm mx-auto">
      {/* Logo and Branding */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-white p-6 shadow-lg">
          <img 
            src={trueswapLogo} 
            alt="TrueSwap" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          TrueSwap
        </h1>
        
        <p className="text-xl text-white/90 font-medium leading-relaxed">
          Secure resale.<br />
          Zero fraud.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-12 w-full">
        <div className="flex items-center text-white/90">
          <div className="w-2 h-2 bg-white rounded-full mr-3" />
          <span className="text-lg">Verificación oficial con la ticketera</span>
        </div>
        <div className="flex items-center text-white/90">
          <div className="w-2 h-2 bg-white rounded-full mr-3" />
          <span className="text-lg">Reemisión de código QR único</span>
        </div>
        <div className="flex items-center text-white/90">
          <div className="w-2 h-2 bg-white rounded-full mr-3" />
          <span className="text-lg">Pagos en custodia seguros</span>
        </div>
      </div>

      {/* Comenzar Button */}
      <div className="w-full space-y-4">
        <Link
          to="/auth"
          className="block w-full bg-white text-primary font-semibold py-4 px-6 rounded-2xl text-center text-lg hover:bg-white/95 transition-all duration-200 active:scale-95 shadow-lg"
        >
          Comenzar
        </Link>
        
        <p className="text-center text-white/70 text-sm">
          Únete a miles de usuarios intercambiando entradas de forma segura
        </p>
      </div>
    </div>
  );
};

export default Welcome;