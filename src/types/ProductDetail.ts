import type { Product } from './Product.ts';
import type { CareInstructions } from './CareInstructions.ts';
import type { SpecificationEntry } from './SpecificationEntry.ts';

export interface ProductDetail extends Product {
  description: string;
  petSafe: boolean;
  features: string[];
  careInstructions: CareInstructions;
  specifications: SpecificationEntry[];
}
