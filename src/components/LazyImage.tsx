import { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    className?: string;
    alt?: string;
    priority?: boolean;
}

function LazyImage({ src, className = '', alt = '', priority = false, ...props }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(priority ? src : '');

    useEffect(() => {
        if (priority) return;

        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        };
    }, [src, priority]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder / Skeleton could go here if needed, or just bg color on parent */}
            <img
                src={priority ? src : imageSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                onLoad={() => setIsLoaded(true)}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                {...props}
            />
        </div>
    );
}

export default LazyImage;
