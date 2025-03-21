"use client"
import { Slider } from "@/components/ui/slider"
import { useEffect, useRef } from "react"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange: (value: number) => void
  onBorderThicknessChange: (value: number) => void
  onBorderSizeChange: (value: number) => void
  showControls: boolean
  label: string
  showFrame: boolean
  autoplayMode: "all" | "hover"
  isHovered: boolean
  linkAddress: string
}

export function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
  showFrame,
  autoplayMode,
  isHovered,
  linkAddress,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (autoplayMode === "all") {
      videoRef.current?.play()
    } else if (autoplayMode === "hover") {
      if (isHovered) {
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()
      }
    }
  }, [isHovered, autoplayMode])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Video with Border */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden relative"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              autoPlay={autoplayMode === "all" || (autoplayMode === "hover" && isHovered)}
              ref={videoRef}
              onMouseEnter={(e) => {
                if (autoplayMode === "hover") {
                  e.currentTarget.play()
                }
              }}
              onMouseLeave={(e) => {
                if (autoplayMode === "hover") {
                  e.currentTarget.pause()
                }
              }}
            />
            {/* Title and Link */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 z-50">
              <div className="link title text-white/80">{label}</div>
              {linkAddress && (
                <a 
                  href={linkAddress} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/80"
                  >
                    <path
                      d="M10 13C10.4295 13.5704 11.0378 13.9217 11.6845 13.9712C12.3313 14.0208 12.9798 13.7756 13.5 13.28L15.72 11.06C16.2108 10.5618 16.4578 9.90183 16.4578 9.21752C16.4578 8.53322 16.2108 7.87319 15.72 7.375C15.2292 6.87681 14.5748 6.625 13.89 6.625C13.2052 6.625 12.5508 6.87681 12.06 7.375L11.66 7.79"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 11C13.5705 10.4296 12.9622 10.0783 12.3155 10.0288C11.6687 9.97924 11.0202 10.2244 10.5 10.72L8.28003 12.94C7.78919 13.4382 7.54224 14.0982 7.54224 14.7825C7.54224 15.4668 7.78919 16.1268 8.28003 16.625C8.77087 17.1232 9.42519 17.375 10.11 17.375C10.7948 17.375 11.4491 17.1232 11.94 16.625L12.34 16.21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Frame Elements (Higher z-index) */}
        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            {/* Corners */}
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            {/* Edges */}
            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 z-10">
          <div className="text-white font-bold mb-2">{label}</div>
          <div className="space-y-2">
            <div>
              <label htmlFor={`media-size-${label}`} className="block text-sm font-medium text-white">
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-thickness-${label}`} className="block text-sm font-medium text-white">
                Border Thickness: {borderThickness}px
              </label>
              <Slider
                id={`border-thickness-${label}`}
                min={0}
                max={20}
                step={1}
                value={[borderThickness]}
                onValueChange={(value) => onBorderThicknessChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-size-${label}`} className="block text-sm font-medium text-white">
                Border Size: {borderSize}%
              </label>
              <Slider
                id={`border-size-${label}`}
                min={50}
                max={100}
                step={1}
                value={[borderSize]}
                onValueChange={(value) => onBorderSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

