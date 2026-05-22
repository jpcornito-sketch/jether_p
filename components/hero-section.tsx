import Image from "next/image"
import { BasketballIcon } from "./basketball-icon"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Basketball court lines decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 border-4 border-primary rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-primary" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-primary" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
              <Image
                src="/profile.jpg"
                alt="Jether Cornito"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative basketball */}
            <div className="absolute -bottom-4 -right-4 text-primary animate-bounce">
              <BasketballIcon className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:order-1">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <BasketballIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            <span className="text-foreground">Jether</span>{" "}
            <span className="text-primary">Cornito</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            3rd Year Computer Science Student
          </p>
          
          <p className="text-muted-foreground mb-2">
            University of Bohol
          </p>
          
          <p className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            Just like my love for basketball, I bring threes to the court of coding. Constantly training to shoot every code and shot.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
