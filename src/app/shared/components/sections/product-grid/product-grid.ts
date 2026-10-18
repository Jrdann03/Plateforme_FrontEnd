import { Component, input } from '@angular/core';
import { ProductGridSectionConfig } from '../sections.config';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [],
  template: `
    <section class="catalog-section">
      <!-- Titre général (si présent) -->
      @if (config().title) {
        <div class="catalog-header">
          <h2>{{ config().title }}</h2>
        </div>
      }

      <!-- Boucle sur chaque groupe / catégorie -->
      @for (group of config().groups; track group.id) {
        <div class="product-group-row">
          
          <!-- En-tête du groupe avec titre et flèches de navigation -->
          <div class="group-header">
            <div class="group-titles">
              <h3 class="group-title">{{ group.title }}</h3>
              @if (group.subtitle) {
                <span class="group-subtitle">{{ group.subtitle }}</span>
              }
            </div>

            <!-- Boutons de navigation Flèche Gauche / Droite -->
            <div class="carousel-controls">
              <button
                type="button"
                class="nav-btn"
                aria-label="Voir produits précédents"
                (click)="scrollRow(slider, -320)"
              >
                ‹
              </button>
              <button
                type="button"
                class="nav-btn"
                aria-label="Voir produits suivants"
                (click)="scrollRow(slider, 320)"
              >
                ›
              </button>
            </div>
          </div>

          <!-- Rail défilant (Slider horizontal) -->
          <div class="products-slider-wrapper">
            <div #slider class="products-slider">
              @for (product of group.products; track product.id) {
                <article class="product-card">
                  @if (product.badge) {
                    <span class="product-badge">{{ product.badge }}</span>
                  }

                  <div class="image-wrapper">
                    @if (product.imageUrl) {
                      <img [src]="product.imageUrl" [alt]="product.name" />
                    } @else {
                      <div class="placeholder-img" aria-label="Pas d'image">📷</div>
                    }
                  </div>

                  <div class="product-details">
                    <h4 class="product-name">{{ product.name }}</h4>
                    <p class="product-price">
                      {{ product.price }} {{ product.currency || 'FCFA' }}
                    </p>
                  </div>
                </article>
              }
            </div>
          </div>

        </div>
      }
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .catalog-section {
      width: min(100% - 64px, 1320px);
      margin: 48px auto;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .catalog-header h2 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }

    .product-group-row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 12px;

      .group-titles {
        display: flex;
        align-items: baseline;
        gap: 12px;
      }

      .group-title {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        color: #1e293b;
      }

      .group-subtitle {
        color: #64748b;
        font-size: 13px;
      }
    }

    /* Flèches de navigation */
    .carousel-controls {
      display: flex;
      gap: 8px;
    }

    .nav-btn {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid #cbd5e1;
      border-radius: 50%;
      background: #ffffff;
      color: #1e293b;
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      transition: all 0.2s ease;     &:hover {
        background: #2563eb;
        color: #ffffff;
        border-color: #2563eb;
      }

      &:focus-visible {
        outline: 2px solid #93c5fd;
        outline-offset: 2px;
      }
    }

    /* Conteneur du défilement horizontal */
    .products-slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .products-slider {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: calc((100% - 48px) / 4); /* 4 produits visibles simultanément */
      gap: 16px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 6px 2px 12px;
      
      /* Masquer la barre de défilement */
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .product-card {
      position: relative;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #ffffff;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
      }
    }

    .product-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
      padding: 4px 8px;
      border-radius: 6px;
      background: #111827;
      color: #ffffff;
      font-size: 10px;
      font-weight: 600;
    }

    .image-wrapper {
      width: 100%;
      height: 170px;
      background: #f8fafc;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .placeholder-img {
        display: grid;
        height: 100%;
        place-items: center;
        font-size: 32px;
        background: #f1f5f9;
      }
    }

    .product-details {
      padding: 14px;
    }

    .product-name {
      margin: 0 0 6px;
      font-size: 14px;
      font-weight: 600;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .product-price {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
      color: #2563eb;
    }

    /* Adaptations Responsive (Tablette & Mobile) */
    @media (max-width: 1024px) {
      .products-slider {
        grid-auto-columns: calc((100% - 32px) / 3); /* 3 sur tablette */
      }
    }

    @media (max-width: 768px) {
      .catalog-section {
        width: min(100% - 32px, 100%);
      }

      .products-slider {
        grid-auto-columns: calc((100% - 16px) / 2); /* 2 sur petit écran */
      }

      .group-header .group-titles {
        flex-direction: column;
        gap: 2px;
      }
    }

    @media (max-width: 480px) {
      .products-slider {
        grid-auto-columns: 85%; /* 1 produit large + aperçu sur mobile */
      }
    }
  `],
})
export class ProductGrid {
  readonly config = input.required<ProductGridSectionConfig>();

  protected scrollRow(element: HTMLElement, offset: number): void {
    element.scrollBy({ left: offset, behavior: 'smooth' });
  }
}