import { Hero } from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Globe,
  BookOpen,
  ExternalLink,
  Clock,
  MapPin,
} from "lucide-react";

const topVisitors = [
  {
    rank: 1,
    name: "Dr. Maya Sari",
    type: "Peneliti",
    visits: 15,
    purpose: "Penelitian Pendidikan",
  },
  {
    rank: 2,
    name: "Budi Santoso",
    type: "Mahasiswa",
    visits: 12,
    purpose: "Skripsi",
  },
  {
    rank: 3,
    name: "Rina Wati",
    type: "Orang Tua",
    visits: 10,
    purpose: "Konsultasi Belajar",
  },
  {
    rank: 4,
    name: "Ahmad Fauzi",
    type: "Alumni",
    visits: 8,
    purpose: "Nostalgia",
  },
  {
    rank: 5,
    name: "Sari Indah",
    type: "Mahasiswa",
    visits: 7,
    purpose: "Penelitian",
  },
];

export default function KunjunganUmum() {
  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Kunjungan Umum"
        subtitle="Terbuka untuk masyarakat umum yang ingin mengakses perpustakaan digital"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Registrasi Kunjungan Umum.
                </CardTitle>
                <CardDescription>
                  Daftar sebagai pengunjung umum dan nikmati fasilitas
                  perpustakaan digital
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://forms.google.com/your-public-form-link",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="h-5 w-5" />
                  Form Kunjungan Umum
                </Button>

                <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                  <h4 className="font-semibold text-warning mb-2">
                    Persyaratan Kunjungan:
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Membawa identitas resmi (KTP/SIM/Paspor)</li>
                    <li>• Mengisi form registrasi lengkap</li>
                    <li>• Mematuhi tata tertib perpustakaan</li>
                    <li>• Maksimal kunjungan 3 jam per hari</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Visitor Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Informasi Kunjungan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Jam Operasional</p>
                      <p className="text-xs text-muted-foreground">
                        Senin-Jumat: 08:00-16:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Lokasi</p>
                      <p className="text-xs text-muted-foreground">
                        Gedung Perpustakaan Lt.2
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Fasilitas untuk Umum:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start"
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Akses Koleksi Umum (1000+ buku)
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Internet & WiFi Gratis
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="justify-start"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Ruang Baca Nyaman
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Data Kunjungan Umum</CardTitle>
                <CardDescription>
                  Log kunjungan masyarakat umum real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/1EEKh93Vl_mH6e9fvVqIhA4qEOTzwkziSP0U5ZsAHkLE/edit#gid=1234567890"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Data Kunjungan Umum"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Top Pengunjung Umum
                </CardTitle>
                <CardDescription>
                  Pengunjung umum yang paling aktif bulan ini
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topVisitors.map((visitor) => (
                  <div
                    key={visitor.rank}
                    className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:scale-105 ${
                      visitor.rank === 1
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : visitor.rank === 2
                        ? "bg-accent/20 border border-accent/30"
                        : visitor.rank === 3
                        ? "bg-secondary/20 border border-secondary/30"
                        : "bg-muted/20 border border-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          visitor.rank === 1
                            ? "bg-yellow-400 text-black"
                            : visitor.rank === 2
                            ? "bg-gray-300 text-black"
                            : visitor.rank === 3
                            ? "bg-amber-600 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {visitor.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{visitor.name}</p>
                        <p className="text-sm opacity-80">{visitor.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs mb-1">
                        {visitor.visits} kunjungan
                      </Badge>
                      <p className="text-xs opacity-70">{visitor.purpose}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Statistik Pengunjung Umum</CardTitle>
                <CardDescription>
                  Data aktivitas pengunjung umum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">127</div>
                    <p className="text-sm text-muted-foreground">
                      Total Kunjungan
                    </p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">45</div>
                    <p className="text-sm text-muted-foreground">
                      Pengunjung Bulan Ini
                    </p>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">89</div>
                    <p className="text-sm text-muted-foreground">Buku Dibaca</p>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning">4.8</div>
                    <p className="text-sm text-muted-foreground">
                      Rating Layanan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visitor Types */}
            <Card>
              <CardHeader>
                <CardTitle>Kategori Pengunjung</CardTitle>
                <CardDescription>
                  Distribusi pengunjung berdasarkan kategori
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded">
                  <span>Mahasiswa/Peneliti</span>
                  <Badge>45%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/10 rounded">
                  <span>Orang Tua Siswa</span>
                  <Badge>25%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-success/10 rounded">
                  <span>Alumni</span>
                  <Badge>20%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-warning/10 rounded">
                  <span>Masyarakat Umum</span>
                  <Badge>10%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
