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
  const products: any[] = [];

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

        {products.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="Package"
              className="text-slate-500 mx-auto mb-4"
              size={64}
            />
            <h3 className="text-2xl font-semibold text-slate-400 mb-2">
              Каталог временно пуст
            </h3>
            <p className="text-slate-500">
              Новые товары появятся в ближайшее время
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className={
                  product.id === 4
                    ? "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 overflow-hidden rounded-3xl shadow-lg"
                    : "bg-slate-700 border-slate-600 hover:border-emerald-400 transition-all duration-300 hover:scale-105"
                }
              >
                {product.id === 4 ? (
                  <>
                    <div className="relative p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
                      <img
                        src="https://cdn.poehali.dev/files/da2f7c02-cccd-45a8-a950-5b0142b51dae.jpeg"
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 w-3 h-3 rounded-full shadow-lg animate-pulse"></div>
                    </div>

                    <CardHeader className="bg-white">
                      <CardTitle className="text-gray-900 text-xl font-medium">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="bg-white pt-0">
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-semibold text-gray-900">
                          {product.price}
                        </span>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm font-medium">
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <>
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

                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon
                              name="Check"
                              className="text-emerald-400"
                              size={16}
                            />
                            <span className="text-slate-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-emerald-400">
                          {product.price}
                        </span>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                          <Icon
                            name="ShoppingCart"
                            className="mr-2"
                            size={16}
                          />
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
