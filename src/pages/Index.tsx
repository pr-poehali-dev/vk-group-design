import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Обложки для группы ВКонтакте</h1>
          <p className="text-muted-foreground">Минималистичный дизайн для компании по установке вентиляции</p>
        </div>

        <div className="space-y-12">
          <VKDesktopCover />
          <VKMobileCover />
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg">
          <h2 className="text-xl font-bold mb-3">Инструкция по установке:</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Сделайте скриншот нужной обложки (ПК или мобильная)</li>
            <li>Зайдите в настройки группы ВКонтакте</li>
            <li>Выберите "Обложка сообщества"</li>
            <li>Загрузите скриншот обложки</li>
            <li>Отрегулируйте положение и сохраните</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

const VKDesktopCover = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon name="Monitor" className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Обложка для ПК</h2>
        <span className="text-sm text-muted-foreground">(1590 × 400 px)</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: '1590/400' }}>
        <div className="relative w-full h-full bg-gradient-to-br from-white via-secondary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-between px-16">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/7d2790bb-e9ba-4c1a-837c-498ed0e2bdec/files/56a9cb24-e9b9-4acc-96ef-486885c9801f.jpg" 
                  alt="Вентиляция" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  ВЕНТИЛЯЦИЯ В ВАШ ДОМ
                </h1>
                <p className="text-sm text-muted-foreground">
                  Профессиональная установка систем вентиляции
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-6 text-xs font-semibold text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-primary" />
                  <span>Опыт 10+ лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-primary" />
                  <span>Гарантия 5 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span>Монтаж за 1 день</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                <Icon name="Phone" size={18} className="mr-2" />
                ПОЗВОНИТЬ СЕЙЧАС
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VKMobileCover = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon name="Smartphone" className="text-primary" size={24} />
        <h2 className="text-2xl font-bold">Обложка для мобильной версии</h2>
        <span className="text-sm text-muted-foreground">(1196 × 400 px)</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: '1196/400' }}>
        <div className="relative w-full h-full bg-gradient-to-br from-white via-secondary/20 to-primary/5">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/7d2790bb-e9ba-4c1a-837c-498ed0e2bdec/files/56a9cb24-e9b9-4acc-96ef-486885c9801f.jpg" 
                alt="Вентиляция" 
                className="w-14 h-14 object-contain"
              />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">
                ВЕНТИЛЯЦИЯ В ВАШ ДОМ
              </h1>
              <p className="text-xs text-muted-foreground mb-3">
                Профессиональная установка систем вентиляции
              </p>
              
              <div className="flex justify-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                <div className="flex flex-col items-center gap-1">
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                  <span>Опыт 10+ лет</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Гарантия 5 лет</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>Монтаж за 1 день</span>
                </div>
              </div>
            </div>
            
            <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Icon name="Phone" size={16} className="mr-2" />
              ПОЗВОНИТЬ СЕЙЧАС
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
