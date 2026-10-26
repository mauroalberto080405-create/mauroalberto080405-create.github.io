import { PortfolioContent } from '../models/portfolio';

/**
 * Contrato (DIP) del que dependen las páginas: "algo que entrega el contenido del portafolio".
 *
 * Es una clase abstracta y no una `interface` porque las interfaces de TypeScript
 * desaparecen al compilar. La clase sí existe en tiempo de ejecución, así que Angular
 * puede usarla como token de inyección:
 *
 *   { provide: PortfolioContentSource, useClass: StaticPortfolioContentSource }
 *
 * Las pruebas registran una implementación falsa con el mismo token.
 */
export abstract class PortfolioContentSource {
  abstract getContent(): PortfolioContent;
}
