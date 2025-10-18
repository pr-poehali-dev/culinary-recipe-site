import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const recipes = [
  // Завтраки
  {
    id: 1,
    title: 'Пышные панкейки с ягодами',
    category: 'Завтраки',
    time: '20 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/4ab42fe6-cbc2-4c53-9489-7c54eb2af640.jpg',
    description: 'Воздушные американские панкейки с кленовым сиропом и свежими ягодами'
  },
  {
    id: 2,
    title: 'Яичница-болтунья с тостами',
    category: 'Завтраки',
    time: '10 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/7356109f-7ae8-4ebc-a2e5-591ad98f9742.jpg',
    description: 'Нежная яичница с зеленью на хрустящих тостах'
  },
  {
    id: 3,
    title: 'Овсяная каша с фруктами',
    category: 'Завтраки',
    time: '15 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/4ab42fe6-cbc2-4c53-9489-7c54eb2af640.jpg',
    description: 'Полезная овсянка с мёдом, орехами и свежими фруктами'
  },
  {
    id: 4,
    title: 'Французские тосты',
    category: 'Завтраки',
    time: '15 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/7356109f-7ae8-4ebc-a2e5-591ad98f9742.jpg',
    description: 'Ароматные тосты в яичной смеси с корицей и сахарной пудрой'
  },

  // Основные блюда
  {
    id: 5,
    title: 'Паста Карбонара',
    category: 'Основные блюда',
    time: '30 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/3e7e287f-2042-428f-874f-e48e74afb01f.jpg',
    description: 'Классическая итальянская паста с беконом и сливочным соусом'
  },
  {
    id: 6,
    title: 'Лосось на гриле с овощами',
    category: 'Основные блюда',
    time: '25 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/08d546fe-1645-428f-b479-d840bfb54e73.jpg',
    description: 'Сочный лосось на гриле с лимоном и спаржей'
  },
  {
    id: 7,
    title: 'Бефстроганов',
    category: 'Основные блюда',
    time: '45 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/a09bc46e-2c84-4663-9a4b-bd05bf289fc1.jpg',
    description: 'Нежная говядина с грибами в сливочном соусе'
  },
  {
    id: 8,
    title: 'Курица терияки с рисом',
    category: 'Основные блюда',
    time: '35 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/a09bc46e-2c84-4663-9a4b-bd05bf289fc1.jpg',
    description: 'Куриное филе в сладко-остром соусе терияки с кунжутом'
  },
  {
    id: 9,
    title: 'Ризотто с грибами',
    category: 'Основные блюда',
    time: '40 мин',
    difficulty: 'Сложная',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/3e7e287f-2042-428f-874f-e48e74afb01f.jpg',
    description: 'Кремовое итальянское ризотто с белыми грибами и пармезаном'
  },

  // Супы
  {
    id: 10,
    title: 'Куриный суп с лапшой',
    category: 'Супы',
    time: '50 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/07bc8ee7-664f-41ff-8d43-0ea35d639999.jpg',
    description: 'Домашний куриный бульон с овощами и яичной лапшой'
  },
  {
    id: 11,
    title: 'Крем-суп из грибов',
    category: 'Супы',
    time: '35 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/5f4acdd7-5408-468a-a60b-eb6a2e5d1a3c.jpg',
    description: 'Нежный крем-суп из шампиньонов со сливками'
  },
  {
    id: 12,
    title: 'Борщ',
    category: 'Супы',
    time: '90 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/07bc8ee7-664f-41ff-8d43-0ea35d639999.jpg',
    description: 'Классический украинский борщ на говяжьем бульоне'
  },
  {
    id: 13,
    title: 'Том Ям',
    category: 'Супы',
    time: '40 мин',
    difficulty: 'Сложная',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/5f4acdd7-5408-468a-a60b-eb6a2e5d1a3c.jpg',
    description: 'Острый тайский суп с морепродуктами и кокосовым молоком'
  },

  // Салаты
  {
    id: 14,
    title: 'Греческий салат',
    category: 'Салаты',
    time: '15 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/513f16f9-3b9c-4259-9dab-87797f4f7667.jpg',
    description: 'Свежий салат с фетой, оливками и помидорами'
  },
  {
    id: 15,
    title: 'Цезарь с курицей',
    category: 'Салаты',
    time: '20 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/7e9762b8-1f3d-4b4b-94ad-fcd9dc792385.jpg',
    description: 'Классический Цезарь с курицей гриль и пармезаном'
  },
  {
    id: 16,
    title: 'Овощной салат',
    category: 'Салаты',
    time: '15 мин',
    difficulty: 'Лёгкая',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/1838fc2d-8c10-4f3e-8fd4-916dcbb1d7d2.jpg',
    description: 'Свежий салат из сезонных овощей с ароматными травами'
  },
  {
    id: 17,
    title: 'Салат Нисуаз',
    category: 'Салаты',
    time: '25 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/513f16f9-3b9c-4259-9dab-87797f4f7667.jpg',
    description: 'Французский салат с тунцом, яйцом и анчоусами'
  },

  // Десерты
  {
    id: 18,
    title: 'Шоколадный торт',
    category: 'Десерты',
    time: '90 мин',
    difficulty: 'Сложная',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/2fa96861-2aa8-445a-893f-dcc4446cae4d.jpg',
    description: 'Нежный шоколадный торт с ягодами для особого случая'
  },
  {
    id: 19,
    title: 'Брауни с мороженым',
    category: 'Десерты',
    time: '45 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/91d466e1-807b-48b5-a0ae-4efe6831a858.jpg',
    description: 'Сочный шоколадный брауни с ванильным мороженым'
  },
  {
    id: 20,
    title: 'Яблочный пирог',
    category: 'Десерты',
    time: '75 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/4828e8eb-83fa-45fb-8b77-d05f95523cfe.jpg',
    description: 'Домашний пирог с яблоками и корицей'
  },
  {
    id: 21,
    title: 'Тирамису',
    category: 'Десерты',
    time: '30 мин + охлаждение',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/2fa96861-2aa8-445a-893f-dcc4446cae4d.jpg',
    description: 'Классический итальянский десерт с маскарпоне и кофе'
  },
  {
    id: 22,
    title: 'Чизкейк Нью-Йорк',
    category: 'Десерты',
    time: '120 мин',
    difficulty: 'Сложная',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/91d466e1-807b-48b5-a0ae-4efe6831a858.jpg',
    description: 'Нежнейший творожный чизкейк на песочной основе'
  },

  // Выпечка
  {
    id: 23,
    title: 'Круассаны',
    category: 'Выпечка',
    time: '180 мин',
    difficulty: 'Сложная',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/4f3e9073-616b-4007-9d67-0e8d3034c9f3.jpg',
    description: 'Французские слоёные круассаны с хрустящей корочкой'
  },
  {
    id: 24,
    title: 'Домашний хлеб',
    category: 'Выпечка',
    time: '240 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/0ee78851-55db-4eb0-8706-127e8a485c4d.jpg',
    description: 'Ароматный хлеб на закваске с хрустящей корочкой'
  },
  {
    id: 25,
    title: 'Булочки с корицей',
    category: 'Выпечка',
    time: '90 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/4f3e9073-616b-4007-9d67-0e8d3034c9f3.jpg',
    description: 'Мягкие сдобные булочки с корицей и сахарной глазурью'
  },
  {
    id: 26,
    title: 'Фокачча с розмарином',
    category: 'Выпечка',
    time: '120 мин',
    difficulty: 'Средняя',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/0ee78851-55db-4eb0-8706-127e8a485c4d.jpg',
    description: 'Итальянский хлеб с оливковым маслом и розмарином'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Секреты идеального теста для пиццы',
    date: '18 октября 2024',
    author: 'Анна Кулинарова',
    excerpt: 'Сегодня поделюсь профессиональными хитростями, которые превратят ваше домашнее тесто в настоящий шедевр итальянской кухни...',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/3e7e287f-2042-428f-874f-e48e74afb01f.jpg',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Как выбрать свежие овощи: гид покупателя',
    date: '17 октября 2024',
    author: 'Анна Кулинарова',
    excerpt: 'Качественные ингредиенты — основа вкусного блюда. Расскажу, на что обращать внимание при покупке овощей на рынке...',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/1838fc2d-8c10-4f3e-8fd4-916dcbb1d7d2.jpg',
    readTime: '4 мин'
  },
  {
    id: 3,
    title: 'Десерты без сахара: вкусно и полезно',
    date: '16 октября 2024',
    author: 'Анна Кулинарова',
    excerpt: 'Отказ от сахара не означает отказ от сладкого! Открываю секреты приготовления полезных десертов без вреда для фигуры...',
    image: 'https://cdn.poehali.dev/projects/5588ba62-ceb3-49e1-a94e-65aa3ee7362f/files/2fa96861-2aa8-445a-893f-dcc4446cae4d.jpg',
    readTime: '6 мин'
  }
];

const categories = [
  { name: 'Завтраки', icon: 'Sunrise', count: 24 },
  { name: 'Основные блюда', icon: 'UtensilsCrossed', count: 45 },
  { name: 'Супы', icon: 'Soup', count: 18 },
  { name: 'Салаты', icon: 'Salad', count: 32 },
  { name: 'Десерты', icon: 'Cake', count: 38 },
  { name: 'Выпечка', icon: 'Cookie', count: 29 }
];

const tips = [
  'Всегда читайте рецепт до конца перед началом готовки',
  'Подготовьте все ингредиенты заранее',
  'Используйте свежие продукты для лучшего вкуса'
];

const AdBanner = ({ size, position }: { size: 'horizontal' | 'vertical' | 'square', position: string }) => {
  return (
    <div 
      className={`
        bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-dashed border-border rounded-lg 
        flex items-center justify-center text-muted-foreground
        ${size === 'horizontal' ? 'h-32 w-full' : ''}
        ${size === 'vertical' ? 'h-96 w-full max-w-xs' : ''}
        ${size === 'square' ? 'h-64 w-full' : ''}
      `}
    >
      <div className="text-center p-4">
        <Icon name="Image" size={32} className="mx-auto mb-2 opacity-50" />
        <p className="text-sm font-medium">Рекламный блок {position}</p>
        <p className="text-xs mt-1 opacity-70">
          {size === 'horizontal' && '728×90'}
          {size === 'vertical' && '300×600'}
          {size === 'square' && '300×250'}
        </p>
      </div>
    </div>
  );
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Вкусные Рецепты</h1>
            <nav className="hidden md:flex gap-6">
              {['Главная', 'Рецепты', 'Категории', 'Блог', 'Советы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100"
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <AdBanner size="horizontal" position="верхний баннер" />
      </div>

      <main>
        <section className="relative bg-gradient-to-b from-accent/20 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
                Готовим с любовью
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Проверенные домашние рецепты для вашей кухни
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                  <Icon name="ChefHat" size={20} className="mr-2" />
                  Смотреть рецепты
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Избранное
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
              Категории блюд
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category) => (
                <Card 
                  key={category.name} 
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-border"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name={category.icon as any} size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 font-sans">{category.name}</h4>
                    <Badge variant="secondary">{category.count} рецептов</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <AdBanner size="square" position="после категорий" />
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">
                Популярные рецепты
              </h3>
              <Button variant="link" className="text-lg">
                Все рецепты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <Card 
                  key={recipe.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-border"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-card text-card-foreground">
                      {recipe.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-bold mb-3 text-primary">{recipe.title}</h4>
                    <p className="text-muted-foreground mb-4">{recipe.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {recipe.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="ChefHat" size={16} />
                        {recipe.difficulty}
                      </div>
                    </div>
                    <Button className="w-full mt-4 hover:scale-105 transition-transform">
                      Смотреть рецепт
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  Кулинарный блог
                </h3>
                <p className="text-lg text-muted-foreground">
                  Ежедневные записи от нашего шеф-повара
                </p>
              </div>
              <Button variant="link" className="text-lg">
                Все записи
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {blogPosts.map((post) => (
                  <Card 
                    key={post.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-border"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="md:w-3/5 p-6">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="User" size={14} />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {post.readTime}
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold mb-3 text-primary hover:underline cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <Button variant="outline">
                          Читать полностью
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <AdBanner size="vertical" position="сайдбар блога" />
                
                <Card className="p-6 border-2 border-border">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Rss" size={20} className="text-primary" />
                    Подписка на блог
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Получайте новые рецепты и советы каждый день
                  </p>
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="w-full px-4 py-2 border border-border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full">
                    Подписаться
                  </Button>
                </Card>

                <Card className="p-6 border-2 border-border">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Популярные темы
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Завтраки', 'ПП-рецепты', 'Быстрые блюда', 'Итальянская кухня', 'Десерты', 'Выпечка'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <AdBanner size="horizontal" position="перед советами" />
        </div>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
              Кулинарные советы
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {tips.map((tip, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:translate-x-2 border-l-4 border-l-primary"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg pt-2">{tip}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <AdBanner size="square" position="перед футером" />
        </div>

        <section className="py-20 bg-gradient-to-t from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                О проекте
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Добро пожаловать на наш кулинарный сайт! Мы собираем самые вкусные 
                и проверенные домашние рецепты. Каждое блюдо готовится с любовью 
                и проходит тестирование на нашей кухне. Присоединяйтесь к нашему 
                сообществу любителей вкусной еды!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать нам
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-4">Вкусные Рецепты</h4>
              <p className="text-muted-foreground">
                Ваш источник вдохновения для домашней кухни
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Навигация</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Рецепты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Категории</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Советы</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Контакты</h5>
              <div className="space-y-2">
                <p className="text-muted-foreground flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@recipes.ru
                </p>
                <div className="flex gap-3 mt-4">
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>&copy; 2024 Вкусные Рецепты. Готовим с любовью.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}