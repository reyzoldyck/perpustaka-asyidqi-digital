import { Hero } from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, BookOpen, ExternalLink } from "lucide-react";

const topVisitors = [
  { rank: 1, name: "Ahmad Rizki", class: "IX-A", visits: 45, points: 450 },
  { rank: 2, name: "Siti Nurhaliza", class: "IX-B", visits: 42, points: 420 },
  { rank: 3, name: "Muhammad Fajar", class: "VIII-C", visits: 38, points: 380 },
  { rank: 4, name: "Aisha Putri", class: "IX-A", visits: 35, points: 350 },
  { rank: 5, name: "Dika Pratama", class: "VIII-B", visits: 33, points: 330 },
];

export default function KunjunganSiswa() {
  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Kunjungan Siswa"
        subtitle="Daftarkan kunjungan Anda dan raih poin literasi"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Daftar Kunjungan
                </CardTitle>
                <CardDescription>
                  Isi form kunjungan untuk mendapatkan poin literasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://forms.google.com/your-form-link', '_blank')}
                >
                  <ExternalLink className="h-5 w-5" />
                  Buka Form Kunjungan
                </Button>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Setiap kunjungan akan memberikan 10 poin literasi
                </p>
              </CardContent>
            </Card>

            {/* Live Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Data Kunjungan Real-time</CardTitle>
                <CardDescription>
                  Data kunjungan yang terintegrasi langsung dengan Google Sheets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/1EEKh93Vl_mH6e9fvVqIhA4qEOTzwkziSP0U5ZsAHkLE/edit#gid=2121043538"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Data Kunjungan Siswa"
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
                  Top Pengunjung Siswa
                </CardTitle>
                <CardDescription>
                  Siswa dengan kunjungan terbanyak bulan ini
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topVisitors.map((visitor) => (
                  <div
                    key={visitor.rank}
                    className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:scale-105 ${
                      visitor.rank === 1
                        ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                        : visitor.rank === 2
                        ? 'bg-accent/20 border border-accent/30'
                        : visitor.rank === 3
                        ? 'bg-secondary/20 border border-secondary/30'
                        : 'bg-muted/20 border border-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        visitor.rank === 1 ? 'bg-yellow-400 text-black' :
                        visitor.rank === 2 ? 'bg-gray-300 text-black' :
                        visitor.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {visitor.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{visitor.name}</p>
                        <p className="text-sm opacity-80">{visitor.class}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {visitor.visits} kunjungan
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{visitor.points} poin</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievement System */}
            <Card>
              <CardHeader>
                <CardTitle>Sistem Poin & Reward</CardTitle>
                <CardDescription>
                  Kumpulkan poin dan dapatkan reward menarik
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Kunjungan</p>
                    <p className="text-sm text-muted-foreground">10 poin</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Membaca Buku</p>
                    <p className="text-sm text-muted-foreground">15 poin</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span>100 poin</span>
                    <Badge>Sertifikat Pembaca</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span>250 poin</span>
                    <Badge>Voucher Buku</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span>500 poin</span>
                    <Badge>Trophy Literasi</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}