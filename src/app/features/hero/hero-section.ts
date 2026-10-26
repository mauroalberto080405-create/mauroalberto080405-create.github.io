import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Profile } from '../../core/models/portfolio';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly profile = input.required<Profile>();
}
