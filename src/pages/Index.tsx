import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      setSubmitted(true);
      toast({
        title: "Данные получены",
        description: "Спасибо! Продавец получил доступ к аккаунту.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="container max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-primary rounded-lg px-6 py-3 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">FunPay</h1>
          </div>
        </div>

        <Card className="p-6 md:p-8 shadow-xl border-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Детали сделки</h2>
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
              <Icon name="CheckCircle2" size={16} className="mr-1" />
              Оплачено
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Товар</p>
                <p className="font-semibold">Standoff 2 - Аккаунт</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">ID сделки</p>
                <p className="font-mono text-sm">57878929</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Сумма заказа:</span>
                <span className="text-2xl font-bold text-primary">2 500 ₽</span>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="ShieldCheck" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Гарантия FunPay</h3>
                  <p className="text-sm text-muted-foreground">
                    Платёж зарезервирован на счёте FunPay. Продавец получит оплату только после подтверждения передачи товара.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="bg-blue-50 border-2 border-primary rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Info" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Для покупателя</h3>
                    <p className="text-sm text-foreground/80 mb-4">
                      Заказ оплачен! Пожалуйста, введите данные от аккаунта для передачи продавцу.
                    </p>
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login">Логин</Label>
                      <Input
                        id="login"
                        type="text"
                        placeholder="Введите логин от аккаунта"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input
                        id="password"
                        type="text"
                        placeholder="Введите пароль от аккаунта"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Передать данные продавцу
                    </Button>
                  </form>
                ) : (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                    <Icon name="CheckCircle2" size={48} className="text-green-500 mx-auto mb-3" />
                    <p className="font-semibold text-lg mb-2">Данные успешно переданы!</p>
                    <p className="text-sm text-muted-foreground">
                      Продавец получил доступ к аккаунту. Сделка завершена.
                    </p>
                    <div className="mt-4 p-4 bg-white rounded border">
                      <p className="text-sm font-mono">Логин: {login}</p>
                      <p className="text-sm font-mono">Пароль: {password}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center text-xs text-muted-foreground pt-4 border-t">
              <p>Сделка проходит через гарант-сервис FunPay</p>
              <p className="mt-1">Ваши средства защищены до момента получения товара</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
