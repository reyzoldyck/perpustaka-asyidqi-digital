import { Hero } from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, Library, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/library-hero.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Koleksi Digital",
    description: "Ribuan buku digital tersedia untuk pembelajaran dan penelitian"
  },
  {
    icon: Users,
    title: "Akses Multi-User",
    description: "Akses untuk siswa, guru, dan masyarakat umum"
  },
  {
    icon: Library,
    title: "Rak Buku Terkategorisasi",
    description: "Buku terorganisir berdasarkan kategori dan tingkat kelas"
  },
  {
    icon: Award,
    title: "Sistem Poin",
    description: "Dapatkan poin dari setiap kunjungan dan aktivitas membaca"
  }
];

const stats = [
  { number: "5000+", label: "Buku Digital" },
  { number: "1200+", label: "Siswa Aktif" },
  { number: "85+", label: "Guru Terdaftar" },
  { number: "24/7", label: "Akses Online" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Perpustakaan MTSN 39 Jakarta"
        subtitle="Membangun budaya literasi untuk generasi cerdas dan berkarakter melalui teknologi digital"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/rak-buku">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Library className="h-5 w-5" />
              Jelajahi Rak Buku
            </Button>
          </Link>
          <Link to="/kunjungan-siswa">
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <Clock className="h-5 w-5" />
              Daftar Kunjungan
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Hero Image */}
      <section className="relative -mt-10 mb-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={heroImage} 
              alt="Perpustakaan Digital MTSN 39 Jakarta" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fasilitas <span className="text-primary">Perpustakaan Digital</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nikmati berbagai fasilitas modern yang mendukung kegiatan belajar mengajar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-neon transition-smooth hover:-translate-y-2 bg-gradient-card border-border/50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mulai Perjalanan <span className="text-primary">Literasi Digital</span> Anda
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa dan guru yang telah merasakan manfaat perpustakaan digital kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kunjungan-siswa">
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5" />
                Daftar Sebagai Siswa
              </Button>
            </Link>
            <Link to="/kunjungan-guru">
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5" />
                Daftar Sebagai Guru
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}