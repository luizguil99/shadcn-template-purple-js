import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-gradient">Transforme suas ideias</span> em realidade digital
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Soluções inovadoras para o seu negócio. Crie experiências digitais incríveis com nossa plataforma.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-primary hover:bg-primary/90">
              Comece agora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Saiba mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
