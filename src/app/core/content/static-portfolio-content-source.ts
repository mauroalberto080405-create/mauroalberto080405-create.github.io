import { Injectable } from '@angular/core';
import { PortfolioContent } from '../models/portfolio';
import { PortfolioContentSource } from './portfolio-content-source';
import { PORTFOLIO_CONTENT } from './portfolio.data';

/** Implementación actual: el contenido vive en un archivo TypeScript tipado dentro del repo. */
@Injectable()
export class StaticPortfolioContentSource extends PortfolioContentSource {
  getContent(): PortfolioContent {
    return PORTFOLIO_CONTENT;
  }
}
