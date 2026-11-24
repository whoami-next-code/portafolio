import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const services = [
  ["01", "Desarrollo web", "Interfaces, catálogos y aplicaciones web con Next.js y React."],
  ["02", "Backend y APIs", "Servicios, integraciones y bases de datos para aplicaciones."],
  ["03", "Aplicaciones móviles", "Experiencias móviles con Flutter y Dart."],
  ["04", "Sistemas y despliegue", "Paneles administrativos y publicación de aplicaciones."],
] as const;

export function Services() {
  return (
    <section id="servicios" aria-labelledby="services-heading" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="whoami-eyebrow">04 / SERVICIOS</p>
          <h2 id="services-heading" className="text-4xl font-bold tracking-tight text-theme sm:text-5xl">Construyamos algo útil.</h2>
        </ScrollReveal>
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map(([number, title, description]) => (
            <StaggerItem key={number}>
              <article className="whoami-service h-full">
                <span className="whoami-eyebrow">{number}</span>
                <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-theme-muted">{description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
