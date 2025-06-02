import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-emerald-400 mb-4">
            Связь с нами
          </h2>
          <p className="text-xl text-slate-300">
            Готовы присоединиться к элите? Свяжитесь с нами уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-emerald-400 text-2xl">
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="Mail" className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300">hydra.replicas@secret.com</p>
                  <p className="text-sm text-slate-400">Основная почта</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="Phone" className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300">+7 (XXX) XXX-XX-XX</p>
                  <p className="text-sm text-slate-400">Секретная линия</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="MapPin" className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-slate-300">
                    Секретная база, где-то в мире
                  </p>
                  <p className="text-sm text-slate-400">
                    Координаты по запросу
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  <Icon name="MessageCircle" className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-black">
              <CardContent className="p-8 text-center">
                <Icon name="Crown" className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">VIP членство</h3>
                <p className="mb-6">
                  Получите эксклюзивный доступ к новым моделям и специальным
                  предложениям
                </p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-emerald-400"
                >
                  Стать VIP
                </Button>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">
                Следите за нами
              </h3>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-emerald-400 hover:bg-emerald-400 hover:text-black"
                >
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-emerald-400 hover:bg-emerald-400 hover:text-black"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-emerald-400 hover:bg-emerald-400 hover:text-black"
                >
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-600 text-center">
          <p className="text-slate-400">
            © 2024 HYDRA Replicas. Все права защищены. | Hail HYDRA! 🐙
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
