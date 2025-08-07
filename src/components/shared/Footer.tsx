import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Perpustakaan Digital
              </span>
            </div>
            <p className="text-muted-foreground">
              MTSN 39 Jakarta - Membangun budaya literasi untuk generasi cerdas dan berkarakter.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Kontak Kami</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>MTSN 39 Jakarta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 21 XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>perpustakaan@mtsn39jakarta.sch.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Jam Operasional</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Senin - Jumat: 07:00 - 16:00</p>
              <p>Sabtu: 07:00 - 12:00</p>
              <p>Minggu: Tutup</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Perpustakaan MTSN 39 Jakarta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}