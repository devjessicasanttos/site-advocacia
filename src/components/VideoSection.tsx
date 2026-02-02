import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
  category: string;
}

// Placeholder videos - você pode substituir pelos seus vídeos reais
const videos: Video[] = [
  {
    id: "1",
    title: "Seus Direitos como Consumidor",
    description: "Entenda como se proteger contra cobranças indevidas e abusos no mercado de consumo.",
    thumbnailUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=225&fit=crop",
    videoUrl: "",
    date: "Janeiro 2026",
    category: "Direito do Consumidor",
  },
  {
    id: "2",
    title: "Divórcio Extrajudicial: Como Funciona",
    description: "Saiba quando e como realizar um divórcio de forma rápida e segura em cartório.",
    thumbnailUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=225&fit=crop",
    videoUrl: "",
    date: "Janeiro 2026",
    category: "Direito de Família",
  },
  {
    id: "3",
    title: "Direitos na Audiência de Custódia",
    description: "Conheça seus direitos fundamentais durante procedimentos criminais.",
    thumbnailUrl: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=225&fit=crop",
    videoUrl: "",
    date: "Dezembro 2025",
    category: "Direito Penal",
  },
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            Conteúdo Quinzenal
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Vídeos <span className="text-gradient-gold">Educativos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conteúdo jurídico gratuito para você entender seus direitos. Novos vídeos a cada quinzena.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-card transition-all duration-500 border border-border/50 hover:border-accent/30">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-gold">
                      <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-accent font-medium mb-2">{video.date}</p>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state / Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Acompanhe nosso conteúdo e fique por dentro dos seus direitos.
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              {selectedVideo.videoUrl ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-8">
                  <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Vídeo em breve disponível
                  </p>
                </div>
              )}
            </div>
            <div className="p-6">
              <span className="text-xs text-accent font-medium">{selectedVideo.category}</span>
              <h3 className="font-serif text-xl font-bold text-primary mt-1">
                {selectedVideo.title}
              </h3>
              <p className="text-muted-foreground mt-2">{selectedVideo.description}</p>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-4 text-sm text-accent hover:underline"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
