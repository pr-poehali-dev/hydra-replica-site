import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "HYDRA Tech Suit",
      description: "Полнофункциональная реплика боевого костюма агента HYDRA",
      price: "₽299,000",
      image:
        "https://images.unsplash.com/photo-1589733122243-4dd72dd11574?w=400",
      features: [
        "Кевларовая защита",
        "HUD интерфейс",
        "Система жизнеобеспечения",
      ],
    },
    {
      id: 2,
      name: "Tesseract Replica",
      description: "Точная копия куба Тессеракт с LED подсветкой",
      price: "₽89,000",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      features: [
        "Голографические эффекты",
        "Wireless charging",
        "Музейное качество",
      ],
    },
    {
      id: 3,
      name: "HYDRA Communicator",
      description: "Секретное устройство связи агентов HYDRA",
      price: "₽45,000",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400",
      features: ["Шифрованная связь", "Дальность 50км", "Водонепроницаемый"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-emerald-400 mb-4">
            Каталог реплик
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Эксклюзивные копии технологий HYDRA, доступные для частных
            коллекционеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-slate-700 border-slate-600 hover:border-emerald-400 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Премиум
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-emerald-400 text-xl">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <Icon
                        name="Check"
                        className="h-4 w-4 text-emerald-400 mr-2"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-emerald-400">
                    {product.price}
                  </span>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
