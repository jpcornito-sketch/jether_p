import { BasketballIcon } from "./basketball-icon"

const skills = [
  "JavaScript",
  "Basketball",
  "Html/Css",
  "C",
  "Python",
  "Java",
  "Github",
  "SQL",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BasketballIcon className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Shooting my 3s,{" "}
              <span className="text-primary">Coding my 0 and 1</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm"} Jether Cornito, a dedicated 3rd year Computer Science student at the University of Bohol. My journey in tech began with curiosity and has evolved into a deep passion for creating meaningful digital experiences.
              </p>
              <p>
                When {"I'm"} not coding, you might find me on the basketball court, where I learned that teamwork, persistence, and strategy are just as important in sports as they are in software development.
              </p>
              <p>
                I believe in writing clean, efficient code and continuously learning new technologies to stay ahead in this ever-evolving field.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">Skills</span>
              <div className="flex-1 h-px bg-border" />
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">3rd</div>
                <div className="text-sm text-muted-foreground">Year CS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
