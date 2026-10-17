import { Component, input } from '@angular/core';
import { HeroSectionConfig } from '../sections.config';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  template: `
    <section
      class="hero-banner"
      [style.--hero-bg]="config().theme?.backgroundColor || '#111827'"
      [style.--hero-text]="config().theme?.textColor || '#ffffff'"
      [style.--hero-btn-bg]="config().theme?.buttonColor || '#2563eb'"
      [style.--hero-btn-text]="config().theme?.buttonTextColor || '#ffffff'"
      [style.background-image]="config().backgroundImageUrl ? 'url(' + config().backgroundImageUrl + ')' : 'none'"
    >
      <div class="hero-content">
        <h1 class="hero-title">{{ config().title }}</h1>
        @if (config().subtitle) {
          <p class="hero-subtitle">{{ config().subtitle }}</p>
        }
        @if (config().ctaText) {
          <a class="hero-btn" [href]="config().ctaLink || '/produits'">
            {{ config().ctaText }}
          </a>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .hero-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 380px;
      padding: 60px 24px;
      background-color: var(--hero-bg);
      background-size: cover;
      background-position: center;
      color: var(--hero-text);
      text-align: center;
      box-sizing: border-box;
    }

    .hero-content {
      max-width: 720px;
    }

    .hero-title {
      margin: 0 0 16px;
      font-size: clamp(28px, 5vw, 44px);
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -0.8px;
    }

    .hero-subtitle {
      margin: 0 0 28px;
      font-size: clamp(15px, 2vw, 18px);
      opacity: 0.9;
      line-height: 1.6;
    }

    .hero-btn {
      display: inline-flex;
      align-items: center;
      padding: 14px 28px;
      border-radius: 8px;
      background: var(--hero-btn-bg);
      color: var(--hero-btn-text);
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      transition: transform 0.2s, opacity 0.2s;

      &:hover {
        opacity: 0.92;
        transform: translateY(-2px);
      }
    }
  `],
})
export class HeroBanner {
  readonly config = input.required<HeroSectionConfig>();
}