"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Globe,
  Truck,
  Users,
  ShoppingCart,
  CheckCircle,
  Phone,
  Mail,
  Star,
  ChevronDown,
  MessageCircle,
  TrendingUp,
  Award,
  Shield,
  DollarSign,
  Zap,
  PlayCircle,
  Download,
  FileText,
  Eye,
  Share2,
} from "lucide-react"
import { useState } from "react"

export default function EckoResellerLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("camisetas")

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Ecko Streetwear Collection"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl mb-6 animate-pulse-custom shadow-2xl shadow-red-600/30">
              <div className="text-3xl font-bold">E</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fadeInUp">
              eckō unltd.
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-bold">MARCA OFICIAL</Badge>
              <Badge className="bg-white text-black px-3 py-1 text-sm font-bold">30+ ANOS</Badge>
              <Badge className="bg-red-600 text-white px-3 py-1 text-sm font-bold">MUNDIAL</Badge>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 px-10 py-6 rounded-2xl mb-8 transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-fadeInUp shadow-2xl shadow-red-600/20">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">Programa de Revenda Oficial</h2>
            <p className="text-lg opacity-90">Multiplique suas vendas com a marca mais desejada do streetwear</p>
          </div>

          <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fadeInUp font-light">
            Junte-se a <span className="text-red-500 font-bold">5.000+ lojistas</span> que já faturam milhões com a Ecko
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-red-500 mb-2">65%</div>
              <div className="text-sm text-gray-300">Margem Média de Lucro</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-sm text-gray-300">Produtos Disponíveis</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-red-500 mb-2">24h</div>
              <div className="text-sm text-gray-300">Suporte Dedicado</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30"
            >
              <DollarSign className="mr-2 h-6 w-6" />
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-xl font-semibold rounded-full bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              <PlayCircle className="mr-2 h-6 w-6" />
              Ver Apresentação
            </Button>
          </div>
        </div>
      </section>

      {/* About Ecko Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <Badge className="bg-red-600 text-white mb-6 px-4 py-2 text-sm font-semibold">SOBRE A ECKO</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                A marca que <span className="text-red-500">revolucionou</span> o streetwear mundial
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Fundada em 1993 por Marc Milecofsky, a Ecko Unltd. nasceu nas ruas de Nova York e rapidamente se
                  tornou um ícone global do streetwear, sendo usada por celebridades como Jay-Z, Eminem e 50 Cent.
                </p>
                <p>
                  Com mais de 30 anos de história, a marca combina autenticidade urbana com qualidade premium, criando
                  peças que definem tendências e expressam personalidade.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-red-500 mb-2">1993</div>
                  <div className="text-sm text-gray-400">Fundação</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Países</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-red-500 mb-2">1B+</div>
                  <div className="text-sm text-gray-400">Peças Vendidas</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-red-500 mb-2">#1</div>
                  <div className="text-sm text-gray-400">Streetwear BR</div>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="relative">
                <Image
                  src="/brand-history.png"
                  alt="História da Ecko"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-600 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">COLEÇÃO ATUAL</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore nossa linha completa</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubra as últimas tendências do streetwear com peças exclusivas e designs únicos
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-black border border-gray-800 mb-8">
              <TabsTrigger value="camisetas" className="data-[state=active]:bg-red-600">
                Camisetas
              </TabsTrigger>
              <TabsTrigger value="moletons" className="data-[state=active]:bg-red-600">
                Moletons
              </TabsTrigger>
              <TabsTrigger value="calcas" className="data-[state=active]:bg-red-600">
                Calças
              </TabsTrigger>
              <TabsTrigger value="acessorios" className="data-[state=active]:bg-red-600">
                Acessórios
              </TabsTrigger>
              <TabsTrigger value="calcados" className="data-[state=active]:bg-red-600">
                Calçados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="camisetas" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Camiseta Básica Logo", image: "/tshirt-basic.png" },
                  { name: "Camiseta Oversized", image: "/tshirt-oversized.png" },
                  { name: "Camiseta Estampada", image: "/tshirt-print.png" },
                  { name: "Camiseta Longline", image: "/tshirt-longline.png" },
                  { name: "Camiseta Vintage", image: "/tshirt-vintage.png" },
                  { name: "Camiseta Tie Dye", image: "/tshirt-tiedye.png" },
                  { name: "Camiseta Cropped", image: "/tshirt-cropped.png" },
                  { name: "Camiseta Raglan", image: "/tshirt-raglan.png" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="moletons" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Moletom Canguru", image: "/hoodie-kangaroo.png" },
                  { name: "Moletom Fechado", image: "/hoodie-closed.png" },
                  { name: "Moletom Oversized", image: "/hoodie-oversized.png" },
                  { name: "Moletom Cropped", image: "/hoodie-cropped.png" },
                  { name: "Moletom Zip", image: "/hoodie-zip.png" },
                  { name: "Moletom Vintage", image: "/hoodie-vintage.png" },
                  { name: "Moletom Tie Dye", image: "/hoodie-tiedye.jpg" },
                  { name: "Moletom Raglan", image: "/hoodie-raglan.jpg" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calcas" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Calça Jeans Skinny", image: "/pants-skinny.jpg" },
                  { name: "Calça Cargo", image: "/pants-cargo.jpg" },
                  { name: "Calça Jogger", image: "/pants-jogger.jpg" },
                  { name: "Calça Wide Leg", image: "/pants-wide.jpg" },
                  { name: "Bermuda Jeans", image: "/shorts-jeans.jpg" },
                  { name: "Bermuda Moletom", image: "/shorts-fleece.jpg" },
                  { name: "Calça Leather", image: "/pants-leather.jpg" },
                  { name: "Calça Vintage", image: "/pants-vintage.jpg" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="acessorios" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Boné Snapback", image: "/cap-snapback.jpg" },
                  { name: "Boné Dad Hat", image: "/cap-dad.jpg" },
                  { name: "Mochila Street", image: "/backpack-street.jpg" },
                  { name: "Carteira Couro", image: "/wallet-leather.jpg" },
                  { name: "Cinto Logo", image: "/belt-logo.jpg" },
                  { name: "Óculos Vintage", image: "/sunglasses-vintage.jpg" },
                  { name: "Relógio Digital", image: "/watch-digital.jpg" },
                  { name: "Corrente Prata", image: "/chain-silver.jpg" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calcados" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Tênis High Top", image: "/sneaker-high.jpg" },
                  { name: "Tênis Low Top", image: "/sneaker-low.jpg" },
                  { name: "Tênis Chunky", image: "/sneaker-chunky.jpg" },
                  { name: "Tênis Skate", image: "/sneaker-skate.jpg" },
                  { name: "Bota Combat", image: "/boot-combat.jpg" },
                  { name: "Chinelo Slide", image: "/slide-logo.jpg" },
                  { name: "Tênis Retro", image: "/sneaker-retro.jpg" },
                  { name: "Tênis Basketball", image: "/sneaker-basketball.jpg" },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-center group-hover:text-red-500 transition-colors">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full">
              <Download className="mr-2 h-5 w-5" />
              Baixar Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">PROCESSO SIMPLES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Como se tornar um revendedor Ecko</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Em apenas 4 passos simples você estará vendendo os produtos mais desejados do streetwear
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Cadastro",
                  description: "Preencha nosso formulário com seus dados e informações da sua loja",
                  icon: FileText,
                  color: "bg-red-600",
                },
                {
                  step: "02",
                  title: "Análise",
                  description: "Nossa equipe analisa seu perfil e aprova seu cadastro em até 48h",
                  icon: Eye,
                  color: "bg-white text-black",
                },
                {
                  step: "03",
                  title: "Aprovação",
                  description: "Receba acesso à plataforma e comece a fazer seus pedidos",
                  icon: CheckCircle,
                  color: "bg-red-600",
                },
                {
                  step: "04",
                  title: "Vendas",
                  description: "Comece a vender e acompanhe seus resultados em tempo real",
                  icon: TrendingUp,
                  color: "bg-white text-black",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div
                      className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <item.icon className="h-10 w-10" />
                    </div>
                    <div className="text-4xl font-bold text-gray-600 mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-gray-600 mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-semibold rounded-full">
              Começar Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">VANTAGENS EXCLUSIVAS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher a Ecko?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mais de 5.000 lojistas já escolheram a Ecko para multiplicar seus lucros
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Marca Internacional",
                description: "Reconhecida mundialmente com 30+ anos de história no streetwear",
                features: ["Presença em 50+ países", "Usada por celebridades", "Tendência global"],
                color: "from-red-600 to-red-700",
              },
              {
                icon: Truck,
                title: "Logística Expressa",
                description: "Entrega rápida e segura para todo o Brasil",
                features: ["Entrega em 24-48h", "Frete grátis acima de R$ 500", "Rastreamento completo"],
                color: "from-white to-gray-200",
                textColor: "text-black",
              },
              {
                icon: Users,
                title: "Suporte Dedicado",
                description: "Equipe especializada para maximizar suas vendas",
                features: ["Suporte 24/7", "Gerente de conta", "Consultoria em vendas"],
                color: "from-red-600 to-red-700",
              },
              {
                icon: ShoppingCart,
                title: "Plataforma Exclusiva",
                description: "Sistema completo para gerenciar seus pedidos",
                features: ["App mobile", "Relatórios detalhados", "Integração com marketplaces"],
                color: "from-white to-gray-200",
                textColor: "text-black",
              },
              {
                icon: DollarSign,
                title: "Margens Altas",
                description: "Até 70% de margem de lucro nos produtos",
                features: ["Preços competitivos", "Promoções exclusivas", "Cashback em volume"],
                color: "from-red-600 to-red-700",
              },
              {
                icon: Shield,
                title: "Garantia Total",
                description: "Proteção completa em todas as suas compras",
                features: ["Garantia de qualidade", "Troca sem burocracia", "Seguro de transporte"],
                color: "from-white to-gray-200",
                textColor: "text-black",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <feature.icon
                      className={`h-8 w-8 ${feature.textColor || "text-white"} transition-all duration-300 group-hover:scale-110`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-300 text-center group-hover:text-white transition-colors duration-300 mb-4">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">CASOS DE SUCESSO</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Histórias reais de transformação</h2>
            <p className="text-xl text-gray-400">Conheça lojistas que multiplicaram seus faturamentos com a Ecko</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                location: "São Paulo, SP",
                business: "Loja Física + Online",
                before: "R$ 15.000/mês",
                after: "R$ 45.000/mês",
                growth: "200%",
                text: "A Ecko transformou minha loja. Em 6 meses triplicamos o faturamento e hoje somos referência em streetwear na região.",
                image: "/testimonial-maria.jpg",
                rating: 5,
                time: "6 meses",
              },
              {
                name: "João Santos",
                location: "Rio de Janeiro, RJ",
                business: "E-commerce",
                before: "R$ 8.000/mês",
                after: "R$ 32.000/mês",
                growth: "300%",
                text: "O suporte da Ecko é excepcional. Me ajudaram desde o início e hoje tenho um negócio sólido e lucrativo.",
                image: "/testimonial-joao.jpg",
                rating: 5,
                time: "4 meses",
              },
              {
                name: "Ana Costa",
                location: "Belo Horizonte, MG",
                business: "Marketplace",
                before: "R$ 5.000/mês",
                after: "R$ 25.000/mês",
                growth: "400%",
                text: "Começei vendendo no Mercado Livre e hoje tenho minha própria loja. A Ecko me deu todas as ferramentas necessárias.",
                image: "/testimonial-ana.jpg",
                rating: 5,
                time: "8 meses",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:border-red-600 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-sm text-gray-400">{story.location}</p>
                      <p className="text-xs text-red-400">{story.business}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-red-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <blockquote className="text-gray-300 mb-6 italic">"{story.text}"</blockquote>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Antes</div>
                      <div className="font-bold text-red-400">{story.before}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-900 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Depois</div>
                      <div className="font-bold text-white">{story.after}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge className="bg-red-600 text-white">+{story.growth} crescimento</Badge>
                    <span className="text-sm text-gray-400">em {story.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Números que impressionam</h2>
            <p className="text-xl opacity-90">Resultados reais da nossa rede de revendedores</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">100K+</div>
              <div className="text-lg opacity-90 mb-2">Produtos Disponíveis</div>
              <div className="text-sm opacity-75">Sempre em estoque</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">5K+</div>
              <div className="text-lg opacity-90 mb-2">Lojistas Ativos</div>
              <div className="text-sm opacity-75">Em todo o Brasil</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">R$ 50M</div>
              <div className="text-lg opacity-90 mb-2">Faturamento Mensal</div>
              <div className="text-sm opacity-75">Da nossa rede</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90 mb-2">Satisfação</div>
              <div className="text-sm opacity-75">Dos nossos parceiros</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">CADASTRE-SE AGORA</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforme sua paixão pela moda em um <span className="text-red-500">negócio milionário!</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                A Ecko é referência global no mercado de moda urbana, combinando autenticidade, atitude e qualidade.
                Junte-se aos milhares de empreendedores que já descobriram o segredo do sucesso no streetwear.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Cadastro 100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Aprovação em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Suporte Especializado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Sem Taxa de Adesão</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-black/20 p-6 rounded-xl border border-red-600/30 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-red-500" />
                  <span className="font-semibold">Oferta Limitada</span>
                </div>
                <p className="text-sm text-gray-300">
                  Primeiros 100 cadastros ganham kit de materiais de marketing gratuito (valor R$ 500)
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Solicitar Orçamento</h3>
                <p className="text-gray-400">Preencha os dados e receba uma proposta personalizada</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Seu nome"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Sobrenome *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Seu sobrenome"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      Cidade *
                    </label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Sua cidade"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Tipo de negócio *
                  </label>
                  <select className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-red-500">
                    <option value="">Selecione...</option>
                    <option value="loja-fisica">Loja Física</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="marketplace">Marketplace</option>
                    <option value="redes-sociais">Redes Sociais</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/30">
                  <Zap className="mr-2 h-5 w-5" />
                  Quero Ser Revendedor Ecko
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(11) 4002-8922</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>revenda@ecko.com.br</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">Seus dados estão protegidos. Não enviamos spam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4 px-4 py-2 text-sm font-semibold">FAQ COMPLETO</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Todas as respostas que você precisa para começar sua jornada como revendedor Ecko
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                category: "Cadastro",
                question: "Como funciona o programa de revenda Ecko?",
                answer:
                  "Nosso programa permite que você se torne um revendedor autorizado da marca Ecko. Após aprovação do cadastro, você terá acesso à nossa plataforma exclusiva com preços de atacado, mais de 100.000 produtos disponíveis e suporte dedicado para impulsionar suas vendas. O processo é 100% digital e você pode começar a vender imediatamente após a aprovação.",
              },
              {
                category: "Investimento",
                question: "Qual o investimento mínimo para começar?",
                answer:
                  "Não há taxa de adesão para se tornar um revendedor Ecko. O investimento inicial depende do seu primeiro pedido, com pedido mínimo de R$ 1.000. Oferecemos condições especiais de pagamento: à vista com 5% de desconto, ou parcelado em até 6x sem juros. Nossa equipe comercial fornecerá todas as informações sobre valores e condições após a aprovação do seu cadastro.",
              },
              {
                category: "Aprovação",
                question: "Quais são os requisitos para ser aprovado?",
                answer:
                  "Para ser aprovado como revendedor, você precisa: 1) CNPJ ativo e regularizado, 2) Experiência no varejo de moda ou streetwear (comprovada por fotos da loja ou histórico de vendas), 3) Ponto de venda estabelecido (físico ou online), 4) Público-alvo alinhado com o perfil Ecko (jovens de 16-35 anos). Também avaliamos a localização e potencial de mercado da sua região.",
              },
              {
                category: "Logística",
                question: "Como funciona a logística e entrega?",
                answer:
                  "Trabalhamos com os principais transportadores do país (Correios, Jadlog, Total Express) para garantir entregas rápidas e seguras. Prazo de entrega: 2-5 dias úteis para capitais e 3-7 dias para interior. Frete GRÁTIS para pedidos acima de R$ 500. Você acompanha todo o processo através da nossa plataforma com código de rastreamento em tempo real.",
              },
              {
                category: "Marketing",
                question: "Vocês oferecem material de marketing?",
                answer:
                  "Sim! Fornecemos kit completo de marketing: catálogos digitais atualizados mensalmente, banco de imagens em alta resolução, vídeos promocionais, templates para redes sociais, materiais para campanhas sazonais, lookbooks das coleções, e suporte para criação de campanhas personalizadas. Tudo isso sem custo adicional.",
              },
              {
                category: "Canais de Venda",
                question: "Posso vender online e em loja física?",
                answer:
                  "Absolutamente! Você pode vender em todos os canais: loja física, e-commerce próprio, marketplaces (Mercado Livre, Shopee, Amazon), redes sociais (Instagram, Facebook, TikTok), WhatsApp Business. Oferecemos suporte técnico para integração com principais plataformas e orientação para vendas omnichannel.",
              },
              {
                category: "Políticas",
                question: "Como funciona a política de trocas e devoluções?",
                answer:
                  "Política flexível: 1) Produtos com defeito de fabricação: troca integral em até 30 dias, 2) Produtos sem defeito: análise caso a caso, geralmente aceito em até 7 dias se não vendido, 3) Produtos danificados no transporte: reposição imediata sem custo, 4) Suporte dedicado para resolver qualquer questão rapidamente.",
              },
              {
                category: "Processo",
                question: "Qual o prazo para aprovação do cadastro?",
                answer:
                  "Processo otimizado: 1) Envio da documentação: imediato via formulário online, 2) Análise inicial: 24-48 horas, 3) Solicitação de documentos adicionais (se necessário): 24 horas, 4) Aprovação final: 24-48 horas, 5) Liberação da plataforma: imediata após aprovação. Total: 2-5 dias úteis em média.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-red-600 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-600 text-white text-xs px-2 py-1">{faq.category}</Badge>
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-red-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-300 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-5 w-5" />
                WhatsApp: (11) 99999-9999
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Phone className="h-5 w-5" />
                Ligar: (11) 4002-8922
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-red-600 hover:bg-red-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-red-600/30 transform hover:scale-110 transition-all duration-300 animate-pulse-custom">
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-xl mb-4">
                <div className="text-xl font-bold">E</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">eckō unltd.</h3>
              <p className="text-gray-400 mb-6">
                Transformando paixão em negócio desde 1993. A marca de streetwear mais desejada do mundo.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Programa de Revenda</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Requisitos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Vantagens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Casos de sucesso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Telefone
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 4002-8922</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>revenda@ecko.com.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>© 2024 Ecko Unltd. Todos os direitos reservados.</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LGPD
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
