import { Link } from 'react-router';
import type { Product } from '../../types/Product';
import StarRating from '../shared/components/StarRating';
import ProductImage from '../shared/components/ProductImage';

interface ProductCardProps {
    product: Product;
}

const BADGE_CLASSES: Record<string, string> = {
    New: 'badge-new',
    Bestseller: 'badge-bestseller',
    'Low Stock': 'badge-limited',
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            to={`/products/${product.id}`}
            className="card group flex flex-col overflow-hidden focus:outline-none focus:ring-2 focus:ring-ps-pink focus:ring-offset-2 rounded-lg"
            aria-label={product.name}
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <ProductImage
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                    <span className={`absolute top-3 left-3 ${BADGE_CLASSES[product.badge]}`}>
                        {product.badge}
                    </span>
                )}

                {/* Out of Stock overlay */}
                {product.inStock === false && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold bg-black/60 px-3 py-1 rounded-full">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-2">
                <p className="text-xs font-medium text-ps-purple-gray uppercase tracking-wide">
                    {product.category}
                </p>

                <h3 className="font-semibold text-ps-inky-blue line-clamp-2 group-hover:text-ps-pink transition-colors">
                    {product.name}
                </h3>

                <StarRating rating={product.rating} showValue />

                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-ps-inky-blue">
                        ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs text-gray-400">{product.reviewCount} reviews</span>
                </div>
            </div>
        </Link>
    );
}