import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, BookOpen, Download } from "lucide-react";
import { useState } from "react";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  grade?: string;
  cover: string;
  pages: number;
  size: string;
  onFlipRead: () => void;
}

export function BookCard({ 
  title, 
  author, 
  category, 
  grade, 
  cover, 
  pages, 
  size, 
  onFlipRead 
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="flip-card hover:shadow-neon transition-smooth overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="relative">
            <img 
              src={cover} 
              alt={title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            {grade && (
              <div className="absolute top-2 left-2">
                <Badge className="text-xs">
                  {grade}
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-1 line-clamp-2 min-h-[2.5rem]">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">{author}</p>
            <div className="flex justify-between text-xs text-muted-foreground mb-3">
              <span>{pages} halaman</span>
              <span>{size}</span>
            </div>
          </CardContent>
        </div>

        {/* Back of card */}
        <div className="flip-card-back bg-gradient-card p-4 flex flex-col justify-center items-center text-center">
          <BookOpen className="h-12 w-12 text-primary mb-4" />
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Klik untuk membaca dalam mode flipbook
          </p>
          <div className="space-y-2 w-full">
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={onFlipRead}
            >
              <Eye className="h-4 w-4 mr-2" />
              Flip to Read
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}