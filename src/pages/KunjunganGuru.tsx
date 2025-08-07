import { Hero } from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, BookOpen, ExternalLink, Award } from "lucide-react";

const topTeachers = [
  { rank: 1, name: "Dr. Siti Aminah, M.Pd", subject: "Bahasa Indonesia", visits: 28, books: 45 },
  { rank: 2, name: "Ahmad Syarif, S.Pd", subject: "Matematika", visits: 25, books: 38 },
  { rank: 3, name: "Fatimah Zahra, M.A", subject: "Bahasa Arab", visits: 23, books: 42 },
  { rank: 4, name: "Muhammad Yusuf, S.Pd.I", subject: "PAI", visits: 22, books: 35 },
  { rank: 5, name: "Nurul Hidayah, S.Pd", subject: "IPA", visits: 20, books: 31 },
];

export default function KunjunganGuru() {
  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Kunjungan Guru"
        subtitle="Platform khusus untuk para pendidik dalam mengakses sumber belajar digital"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Registrasi Kunjungan Guru
                </CardTitle>
                <CardDescription>
                  Daftarkan kunjungan dan akses koleksi khusus untuk pendidik
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://forms.google.com/your-teacher-form-link', '_blank')}
                >
                  <ExternalLink className="h-5 w-5" />
                  Form Kunjungan Guru
                </Button>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Akses Khusus</p>
                    <p className="text-xs text-muted-foreground">Koleksi Guru</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold text-sm">RPP Digital</p>
                    <p className="text-xs text-muted-foreground">Template Siap</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teacher Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Sumber Daya Khusus Guru</CardTitle>
                <CardDescription>
                  Koleksi materi pembelajaran dan pengembangan profesi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Buku Panduan Kurikulum Merdeka
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  Template RPP & Modul Ajar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Jurnal Pendidikan Terbaru
                </Button>
              </CardContent>
            </Card>

            {/* Live Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Data Kunjungan Guru</CardTitle>
                <CardDescription>
                  Statistik kunjungan dan aktivitas guru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 border rounded-lg overflow-hidden">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/1EEKh93Vl_mH6e9fvVqIhA4qEOTzwkziSP0U5ZsAHkLE/edit#gid=0"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Data Kunjungan Guru"
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
                  Top Pengunjung Guru
                </CardTitle>
                <CardDescription>
                  Guru yang paling aktif menggunakan perpustakaan digital
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topTeachers.map((teacher) => (
                  <div
                    key={teacher.rank}
                    className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:scale-105 ${
                      teacher.rank === 1
                        ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                        : teacher.rank === 2
                        ? 'bg-accent/20 border border-accent/30'
                        : teacher.rank === 3
                        ? 'bg-secondary/20 border border-secondary/30'
                        : 'bg-muted/20 border border-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        teacher.rank === 1 ? 'bg-yellow-400 text-black' :
                        teacher.rank === 2 ? 'bg-gray-300 text-black' :
                        teacher.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {teacher.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{teacher.name}</p>
                        <p className="text-sm opacity-80">{teacher.subject}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {teacher.visits} kunjungan
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {teacher.books} buku
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Statistik Bulanan</CardTitle>
                <CardDescription>
                  Ringkasan aktivitas perpustakaan untuk guru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">85</div>
                    <p className="text-sm text-muted-foreground">Total Guru</p>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">347</div>
                    <p className="text-sm text-muted-foreground">Kunjungan Bulan Ini</p>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">156</div>
                    <p className="text-sm text-muted-foreground">Buku Dipinjam</p>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning">42</div>
                    <p className="text-sm text-muted-foreground">RPP Downloaded</p>
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