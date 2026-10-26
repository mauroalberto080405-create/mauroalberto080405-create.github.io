import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { PortfolioContentSource } from './core/content/portfolio-content-source';
import { StaticPortfolioContentSource } from './core/content/static-portfolio-content-source';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Los enlaces directos como /#proyectos se desplazan tras renderizar la sección.
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
    // DIP: aquí, y solo aquí, se decide qué implementación del contrato se usa.
    { provide: PortfolioContentSource, useClass: StaticPortfolioContentSource },
  ],
};
