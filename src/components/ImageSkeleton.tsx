'use client'

interface ImageSkeletonProps {
    className?: string
}

export function ImageSkeleton({ className = "" }: ImageSkeletonProps) {
    return (
        <div className={`relative overflow-hidden bg-muted rounded-2xl ${className}`}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Content skeleton */}
            <div className="w-full h-full bg-gradient-to-br from-muted-brown/20 to-light-peach/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-warm-orange/30 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-warm-orange/50 animate-pulse" />
                </div>
            </div>

            {/* Bottom title skeleton */}
            <div className="absolute bottom-4 left-4 right-4 space-y-2 opacity-0 animate-pulse">
                <div className="h-4 bg-white/30 rounded-full w-3/4" />
            </div>
        </div>
    )
}
