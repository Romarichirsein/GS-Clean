import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, Play, Filter, Maximize2, Zap, Sun, Construction, Sofa, 
  Pause, Volume2, VolumeX, RotateCcw, X, CheckCircle 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Breadcrumbs from "../components/UI/Breadcrumbs";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mediaItems = [
  { 
    id: 1, 
    type: "image", 
    category: "windows", 
    src: "/images/Capture d'écran 2026-05-07 055001.png", 
    title: "Entretien Vitrage Siège Social" 
  },
  { 
    id: 2, 
    type: "video", 
    category: "fabrics", 
    src: "/images/Capture d'écran 2026-05-07 055043.png", 
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-professional-cleaning-service-woman-sprays-disinfectant-on-the-counter-44161-large.mp4",
    title: "Démonstration Nettoyage Tissus" 
  },
  { 
    id: 3, 
    type: "image", 
    category: "construction", 
    src: "/images/Capture d'écran 2026-05-07 054822.png", 
    title: "Fin de chantier Résidentiel" 
  },
  { 
    id: 4, 
    type: "image", 
    category: "windows", 
    src: "/images/656010950_122114372103241325_9105145638804172464_n.jpg", 
    title: "Commerce Centre-Ville" 
  },
  { 
    id: 5, 
    type: "video", 
    category: "construction", 
    src: "/images/Capture d'écran 2026-05-07 054943.png", 
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-house-cleaning-service-vacuuming-the-floor-44155-large.mp4",
    title: "Vidéo Avant/Après Chantier" 
  },
  { 
    id: 6, 
    type: "image", 
    category: "fabrics", 
    src: "/images/Capture d'écran 2026-05-07 054924.png", 
    title: "Chaises Bureau Prestige" 
  },
  { 
    id: 7, 
    type: "image", 
    category: "windows", 
    src: "/images/657444440_122114372091241325_8338781476569145620_n.jpg", 
    title: "Nettoyage Châssis" 
  },
  { 
    id: 8, 
    type: "video", 
    category: "windows", 
    src: "/images/Capture d'écran 2026-05-07 054903.png", 
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cleaning-a-window-with-a-squeegee-under-the-sun-44158-large.mp4",
    title: "Technique eau pure en action" 
  },
  { 
    id: 9, 
    type: "image", 
    category: "windows", 
    src: "/images/659811305_122114372127241325_4961321725729247414_n.jpg", 
    title: "Nettoyage Véranda" 
  },
];

const VideoPlayer = ({ src, poster, title }: { src: string; poster: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(Number(e.target.value));
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  return (
    <div 
      className="relative w-full h-full group bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full"
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">En Lecture : {title}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Progress Bar */}
              <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden group/progress">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <motion.div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors">
                    {isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
                  </button>
                  <div className="flex items-center space-x-3 group/volume">
                    <button onClick={toggleMute} className="text-white">
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        setVolume(v);
                        if (videoRef.current) videoRef.current.volume = v;
                        setIsMuted(v === 0);
                      }}
                      className="w-20 accent-blue-600 h-1 rounded-full cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => {
                      if (videoRef.current) videoRef.current.currentTime = 0;
                    }}
                    className="text-white hover:rotate-[-45deg] transition-transform"
                  >
                    <RotateCcw size={20} />
                  </button>
                  <button 
                    onClick={() => {
                      if (videoRef.current) {
                        if (document.fullscreenElement) {
                          document.exitFullscreen();
                        } else {
                          videoRef.current.parentElement?.requestFullscreen();
                        }
                      }
                    }}
                    className="text-white"
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isPlaying && (
        <button 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-2xl"
          >
            <Play size={48} fill="currentColor" className="ml-2" />
          </motion.div>
        </button>
      )}
    </div>
  );
};

export default function Realizations() {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const filteredMedia = filter === "all" ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-40 bg-white dark:bg-zinc-950 transition-colors duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-10 mb-8 lowercase">
           <Breadcrumbs />
        </div>
        <header className="mb-20 space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest"
          >
            <Camera size={14} />
            <span>Notre Portefolio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight dark:text-white"
          >
            Nos <span className="text-blue-600">Réalisations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl"
          >
            Découvrez en images et en vidéos la qualité de nos interventions à travers la Wallonie.
          </motion.p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {[
            { id: "all", label: "Toutes", icon: <Filter size={16} /> },
            { id: "windows", label: "Vitres / Solaire", icon: <Sun size={16} /> },
            { id: "fabrics", label: "Tissus & Textiles", icon: <Sofa size={16} /> },
            { id: "construction", label: "Fins de Chantier", icon: <Construction size={16} /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={cn(
                "px-8 py-4 rounded-[20px] text-sm font-bold transition-all flex items-center space-x-3 border-2",
                filter === item.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-500/20"
                  : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-blue-300"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative aspect-[4/5] sm:aspect-[4/3] rounded-[48px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer shadow-sm hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-500 border border-zinc-100 dark:border-zinc-800"
                onClick={() => setSelectedMedia(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-2">
                       <p className="text-zinc-300 text-[10px] uppercase tracking-[0.2em] font-black">{item.category}</p>
                       {item.type === "video" && <span className="flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-display font-bold text-xl">{item.title}</h3>
                      {item.type === "video" ? (
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                          <Play fill="currentColor" size={24} className="ml-1" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 size={24} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-8 left-8 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  {item.type}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zinc-950/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-12"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="max-w-6xl w-full h-full max-h-[85vh] rounded-[48px] overflow-hidden bg-zinc-900 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 bg-black">
                {selectedMedia.type === "video" ? (
                  <VideoPlayer 
                    src={selectedMedia.videoUrl} 
                    poster={selectedMedia.src}
                    title={selectedMedia.title}
                  />
                ) : (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              
              <div className="p-8 sm:p-12 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 font-black uppercase text-[10px] tracking-[0.2em]">{selectedMedia.category}</span>
                    <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em]">{selectedMedia.type}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">{selectedMedia.title}</h2>
                </div>
                
                <div className="hidden sm:flex items-center space-x-4">
                   <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                      <CheckCircle size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">Réalisé</span>
                   </div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-8 right-8 w-14 h-14 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-all hover:rotate-90 shadow-xl border border-white/5 z-[70]"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
