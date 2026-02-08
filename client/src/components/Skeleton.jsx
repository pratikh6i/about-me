import { useState } from 'react';

/**
 * Skeleton - Reusable loading skeleton component
 * Supports various shapes and sizes for placeholder content
 */

export function Skeleton({
    className = '',
    variant = 'text',
    width,
    height,
    count = 1,
    circle = false,
}) {
    const baseClass = 'skeleton';

    const getVariantClass = () => {
        switch (variant) {
            case 'text':
                return 'skeleton-text';
            case 'title':
                return 'skeleton-text h-8';
            case 'avatar':
                return 'skeleton-circle w-12 h-12';
            case 'thumbnail':
                return 'skeleton-card w-full h-48';
            case 'card':
                return 'skeleton-card';
            case 'button':
                return 'h-10 w-24 rounded-full';
            default:
                return '';
        }
    };

    const style = {
        ...(width && { width }),
        ...(height && { height }),
        ...(circle && { borderRadius: '50%' }),
    };

    if (count > 1) {
        return (
            <div className="space-y-3">
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className={`${baseClass} ${getVariantClass()} ${className}`}
                        style={style}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`${baseClass} ${getVariantClass()} ${className}`}
            style={style}
        />
    );
}

/**
 * SkeletonCard - Pre-configured skeleton for product/service cards
 */
export function SkeletonCard({ className = '' }) {
    return (
        <div className={`bento-tile p-0 ${className}`}>
            <Skeleton variant="thumbnail" className="rounded-none rounded-t-2xl" />
            <div className="p-6 space-y-4">
                <Skeleton variant="title" width="70%" />
                <Skeleton variant="text" count={2} />
                <div className="flex items-center gap-3">
                    <Skeleton variant="button" />
                    <Skeleton variant="text" width="30%" />
                </div>
            </div>
        </div>
    );
}

/**
 * SkeletonTestimonial - Pre-configured skeleton for testimonials
 */
export function SkeletonTestimonial({ className = '' }) {
    return (
        <div className={`bento-tile ${className}`}>
            <div className="flex items-center gap-4 mb-4">
                <Skeleton variant="avatar" />
                <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" height="0.75rem" />
                </div>
            </div>
            <Skeleton variant="text" count={3} />
            <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} width="1rem" height="1rem" />
                ))}
            </div>
        </div>
    );
}

/**
 * SkeletonImage - Skeleton with fade-in image loading
 */
export function SkeletonImage({
    src,
    alt,
    className = '',
    containerClassName = '',
}) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {!loaded && !error && (
                <Skeleton
                    className={`absolute inset-0 ${className}`}
                    height="100%"
                />
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={`transition-opacity duration-500 ${className} ${loaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
