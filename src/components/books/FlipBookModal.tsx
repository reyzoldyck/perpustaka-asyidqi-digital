import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface FlipBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
  totalPages: number;
}

export function FlipBookModal({ isOpen, onClose, bookTitle, totalPages }: FlipBookModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const zoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const zoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">{bookTitle}</DialogTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentPage} / {totalPages}
              </span>
              <Button variant="ghost" size="sm" onClick={zoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm">{zoom}%</span>
              <Button variant="ghost" size="sm" onClick={zoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Book Content */}
        <div className="flex-1 flex items-center justify-center bg-muted/20 p-4 overflow-auto">
          <div 
            className="bg-white rounded-lg shadow-card transition-transform duration-300"
            style={{ transform: `scale(${zoom / 100})` }}
          >
            <div className="w-[600px] h-[800px] bg-white rounded-lg p-8 flex flex-col justify-center items-center text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Halaman {currentPage}</h2>
              <p className="text-center text-gray-600 mb-4">
                Ini adalah konten halaman {currentPage} dari buku "{bookTitle}".
              </p>
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Konten Buku Halaman {currentPage}</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Dalam implementasi sesungguhnya, ini akan menampilkan PDF atau gambar halaman buku.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between p-4 border-t border-border bg-background">
          <Button 
            variant="outline" 
            onClick={prevPage} 
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Halaman Sebelumnya
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Halaman:</span>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
              className="w-16 px-2 py-1 text-sm border border-border rounded text-center bg-background"
            />
            <span className="text-sm text-muted-foreground">dari {totalPages}</span>
          </div>

          <Button 
            variant="outline" 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
          >
            Halaman Selanjutnya
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}