import { Component, input } from '@angular/core';
import { ProductGridSectionConfig } from '../sections.config';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [],
  template: `
    <section class="product-section">
      <div class="section-header">
        <h2>{{ config().title }}</h2>
        @if (config().subtitle) {
          <p>{{ config().subtitle }}</p>
        }
      </div>

      <div class="products-grid" [class]="'cols-' + (config().columns || 3)">
        @for (product of config().products; track product.id) {
          <article class="product-card">
            @if (product.badge) {
              <span class="product-badge">{{ product.badge }}</span>
            }
            <div class="image-wrapper">
              @if (product.imageUrl) {
                <img [src]="product.imageUrl" [alt]="product.name" />
              } @else {
                <div class="placeholder-img">📷</div>
              }
            </div>
            <div class="product-details">
              @if (product.category) {
                <span class="product-category">{{ product.category }}</span>
              }
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">
                {{ product.price }} {{ product.currency || 'FCFA' }}
              </p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .product-section {
      width: min(100% - 48px, 1200px);
      margin: 48px auto;
    }

    .section-header {
      margin-bottom: 32px;
      text-align: center;

      h2 {
        margin: 0 0 8px;
        font-size: 26px;
        font-weight: 700;
      }

      p {
        margin: 0;
        color: #64748b;
        font-size: 14px;
      }
    }

    .products-grid {
      display: grid;
      gap: 24px;

      &.cols-2 { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
      &.cols-3 { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
      &.cols-4 { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
    }

    .product-card {
      position: relative;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #ffffff;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
      }
    }

    .product-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 2;
      padding: 4px 10px;
      border-radius: 6px;
      background: #111827;
      color: #ffffff;
      font-size: 11px;
      font-weight: 600;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 200px;
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
        font-size: 36px;
        color: #cbd5e1;
      }
    }

    .product-details {
      padding: 16px;
    }

    .product-category {
      display: block;
      margin-bottom: 4px;
      color: #64748b;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .product-name {
      margin: 0 0 8px;
      font-size: 15px;
      font-weight: 600;
      color: #0f172a;
    }

    .product-price {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: #2563eb;
    }
  `],
})
export class ProductGrid {
  readonly config = input.required<ProductGridSectionConfig>();
}