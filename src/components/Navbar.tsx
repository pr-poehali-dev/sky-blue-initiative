import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Rocket" size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg">Orbit</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#product" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Продукт
            </a>
            <a href="#workflows" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Интеграции
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Тарифы
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Войти
            </a>
            <a
              href="#"
              className="text-sm text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Начать бесплатно
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}