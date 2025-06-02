import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-emerald-400 mb-4">
            О компании HYDRA
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Мы — официальные поставщики реплик технологий легендарной
            организации HYDRA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-400">
                Наша миссия
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Предоставить коллекционерам и энтузиастам возможность
                прикоснуться к технологиям будущего через высококачественные
                реплики оборудования HYDRA.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-400">Качество</h3>
              <p className="text-slate-300 leading-relaxed">
                Каждая реплика создается с использованием современных технологий
                3D-печати, высокоточного литья и ручной доработки мастеров.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">15</div>
                <div className="text-slate-400">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">5000+</div>
                <div className="text-slate-400">Довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="Shield" className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    Гарантия качества
                  </h4>
                  <p className="text-slate-300">
                    Пожизненная гарантия на все реплики
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="Truck" className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    Доставка
                  </h4>
                  <p className="text-slate-300">
                    Секретная доставка по всему миру
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Icon name="Users" className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    Поддержка
                  </h4>
                  <p className="text-slate-300">
                    Персональный менеджер для каждого клиента
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
