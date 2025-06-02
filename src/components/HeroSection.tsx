import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat text-emerald-400 mb-4 tracking-wider">
            HYDRA
          </h1>
          <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Технологии будущего. Реплики настоящего.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Эксклюзивные реплики передовых технологий HYDRA. Почувствуйте силу
            корпорации будущего уже сегодня.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 text-lg"
            >
              <Icon name="ShoppingCart" className="mr-2" />
              Купить реплику
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 text-lg"
            >
              <Icon name="Eye" className="mr-2" />
              Посмотреть каталог
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-emerald-400">50+</h3>
            <p className="text-slate-400">Моделей реплик</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-400">99.9%</h3>
            <p className="text-slate-400">Точность копий</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-emerald-400">24/7</h3>
            <p className="text-slate-400">Техподдержка</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
