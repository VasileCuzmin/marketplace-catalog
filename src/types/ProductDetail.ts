import { validateProduct, type Product } from './Product.ts';
import { validateCareInstructions } from './validateCareInstructions.ts';
import { validateSpecificationEntry } from './validateSpecificationEntry.ts';
import type { Diagnostic, ValidationResult } from './validation.ts';
import type { CareInstructions } from './CareInstructions.ts';
import type { SpecificationEntry } from './SpecificationEntry.ts';

export interface ProductDetail extends Product {
  description: string;
  petSafe: boolean;
  features: string[];
  careInstructions: CareInstructions;
  specifications: SpecificationEntry[];
}

export function validateProductDetail(
  data: unknown,
): ValidationResult {
  if (typeof data !== 'object' || data === null) {
    return {
      valid: false,
      diagnostics: [
        {
          field: '',
          expected: 'object',
          received: data === null ? 'null' : typeof data,
        },
      ],
    };
  }

  const diagnostics: Diagnostic[] = [];

  const baseResult = validateProduct(data);
  if (!baseResult.valid) {
    diagnostics.push(...baseResult.diagnostics);
  }

  const detail = data as ProductDetail;

  if (typeof detail.description !== 'string') {
    diagnostics.push({
      field: 'description',
      expected: 'string',
      received: typeof detail.description,
    });
  }
  if (typeof detail.petSafe !== 'boolean') {
    diagnostics.push({
      field: 'petSafe',
      expected: 'boolean',
      received: typeof detail.petSafe,
    });
  }

  if (!Array.isArray(detail.features)) {
    diagnostics.push({
      field: 'features',
      expected: 'string[]',
      received: typeof detail.features,
    });
  } else {
    detail.features.forEach((item, i) => {
      if (typeof item !== 'string') {
        diagnostics.push({
          field: `features[${i}]`,
          expected: 'string',
          received: typeof item,
        });
      }
    });
  }

  if (
    !detail.careInstructions ||
    typeof detail.careInstructions !== 'object'
  ) {
    diagnostics.push({
      field: 'careInstructions',
      expected: 'object',
      received: typeof detail.careInstructions,
    });
  } else {
    const careResult = validateCareInstructions(
      detail.careInstructions,
    );
    if (!careResult.valid) {
      careResult.diagnostics.forEach((d) =>
        diagnostics.push({
          ...d,
          field: `careInstructions.${d.field}`,
        }),
      );
    }
  }

  if (!Array.isArray(detail.specifications)) {
    diagnostics.push({
      field: 'specifications',
      expected: 'SpecificationEntry[]',
      received: typeof detail.specifications,
    });
  } else {
    detail.specifications.forEach((item, i) => {
      const specResult = validateSpecificationEntry(item);
      if (!specResult.valid) {
        specResult.diagnostics.forEach((d) =>
          diagnostics.push({
            ...d,
            field: `specifications[${i}].${d.field}`,
          }),
        );
      }
    });
  }

  return diagnostics.length === 0
    ? { valid: true }
    : { valid: false, diagnostics };
}

export function isProductDetail(
  data: unknown,
): data is ProductDetail {
  return validateProductDetail(data).valid;
}

