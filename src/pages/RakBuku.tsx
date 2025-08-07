import { Hero } from "@/components/shared/Hero";
import { BookCard } from "@/components/books/BookCard";
import { FlipBookModal } from "@/components/books/FlipBookModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Book, FileText, Heart } from "lucide-react";
import { useState } from "react";

import mathBook from "@/assets/books/math-7.jpg";
import paiBook from "@/assets/books/pai-book.jpg";
import indoBook from "@/assets/books/indo-book.jpg";
import scienceBook from "@/assets/books/science-book.jpg";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  grade?: string;
  cover: string;
  pages: number;
  size: string;
  subcategory?: string;
}

const books: Book[] = [
  // Buku Pelajaran - Kelas VII
  {
    id: "math-7",
    title: "Matematika untuk SMP/MTs Kelas VII",
    author: "Tim Kemendikbud",
    category: "Buku Pelajaran",
    grade: "Kelas VII",
    cover: mathBook,
    pages: 296,
    size: "15.2 MB",
    subcategory: "Kelas VII"
  },
  {
    id: "indo-7",
    title: "Bahasa Indonesia SMP Kelas VII",
    author: "Dr. Siti Anisah",
    category: "Buku Pelajaran",
    grade: "Kelas VII",
    cover: indoBook,
    pages: 268,
    size: "18.4 MB",
    subcategory: "Kelas VII"
  },
  {
    id: "science-7",
    title: "Ilmu Pengetahuan Alam Kelas VII",
    author: "Prof. Ahmad Sutrisno",
    category: "Buku Pelajaran",
    grade: "Kelas VII",
    cover: scienceBook,
    pages: 312,
    size: "22.1 MB",
    subcategory: "Kelas VII"
  },
  
  // Buku Pelajaran - Kelas VIII
  {
    id: "math-8",
    title: "Matematika untuk SMP/MTs Kelas VIII",
    author: "Tim Kemendikbud",
    category: "Buku Pelajaran",
    grade: "Kelas VIII",
    cover: mathBook,
    pages: 324,
    size: "16.8 MB",
    subcategory: "Kelas VIII"
  },
  {
    id: "indo-8",
    title: "Bahasa Indonesia SMP Kelas VIII",
    author: "Dr. Siti Anisah",
    category: "Buku Pelajaran",
    grade: "Kelas VIII",
    cover: indoBook,
    pages: 289,
    size: "19.2 MB",
    subcategory: "Kelas VIII"
  },

  // Buku Agama
  {
    id: "pai-1",
    title: "Pendidikan Agama Islam dan Budi Pekerti",
    author: "KH. Muhammad Yasin",
    category: "Buku Agama",
    cover: paiBook,
    pages: 245,
    size: "14.6 MB"
  },
  {
    id: "akidah",
    title: "Akidah Akhlak untuk Madrasah Tsanawiyah",
    author: "Ustadz Ahmad Fauzi",
    category: "Buku Agama",
    cover: paiBook,
    pages: 198,
    size: "12.3 MB"
  },

  // Buku Fiksi
  {
    id: "laskar-pelangi",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Buku Fiksi / Non-Fiksi",
    cover: indoBook,
    pages: 529,
    size: "8.4 MB"
  },
  {
    id: "bumi-manusia",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Buku Fiksi / Non-Fiksi",
    cover: indoBook,
    pages: 535,
    size: "9.1 MB"
  },

  // Karya Tulis
  {
    id: "penelitian-1",
    title: "Metodologi Penelitian untuk Pemula",
    author: "Dr. Budi Hermawan",
    category: "Karya Tulis",
    cover: scienceBook,
    pages: 187,
    size: "6.8 MB"
  },
  {
    id: "karya-ilmiah",
    title: "Panduan Menulis Karya Ilmiah Remaja",
    author: "Prof. Sari Wulandari",
    category: "Karya Tulis",
    cover: scienceBook,
    pages: 156,
    size: "5.2 MB"
  }
];

const categories = [
  {
    id: "pelajaran",
    name: "Buku Pelajaran",
    icon: GraduationCap,
    description: "Buku pembelajaran sesuai kurikulum",
    count: books.filter(b => b.category === "Buku Pelajaran").length,
    subcategories: ["Kelas VII", "Kelas VIII", "Kelas IX"]
  },
  {
    id: "agama",
    name: "Buku Agama",
    icon: Book,
    description: "Koleksi buku keagamaan dan spiritual",
    count: books.filter(b => b.category === "Buku Agama").length
  },
  {
    id: "fiksi",
    name: "Buku Fiksi / Non-Fiksi",
    icon: Heart,
    description: "Novel, cerpen, dan karya sastra",
    count: books.filter(b => b.category === "Buku Fiksi / Non-Fiksi").length
  },
  {
    id: "karya-tulis",
    name: "Karya Tulis",
    icon: FileText,
    description: "Penelitian dan karya ilmiah",
    count: books.filter(b => b.category === "Karya Tulis").length
  }
];

export default function RakBuku() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const handleFlipRead = (book: Book) => {
    setSelectedBook(book);
  };

  const getFilteredBooks = (category: string) => {
    let filtered = books.filter(book => book.category === category);
    
    if (category === "Buku Pelajaran" && selectedSubcategory !== "all") {
      filtered = filtered.filter(book => book.subcategory === selectedSubcategory);
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Rak Buku Digital"
        subtitle="Jelajahi koleksi buku digital yang tersedia untuk pembelajaran dan pengembangan diri"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="text-center hover:shadow-neon transition-smooth">
                <CardContent className="p-4">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <p className="text-sm text-muted-foreground">{category.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="pelajaran" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Buku Pelajaran */}
          <TabsContent value="pelajaran" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Buku Pelajaran
                </CardTitle>
                <CardDescription>
                  Koleksi buku pembelajaran sesuai dengan kurikulum yang berlaku
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Grade Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge 
                    variant={selectedSubcategory === "all" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedSubcategory("all")}
                  >
                    Semua Kelas
                  </Badge>
                  {categories.find(c => c.id === "pelajaran")?.subcategories?.map((grade) => (
                    <Badge
                      key={grade}
                      variant={selectedSubcategory === grade ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedSubcategory(grade)}
                    >
                      {grade}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getFilteredBooks("Buku Pelajaran").map((book) => (
                    <BookCard
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      category={book.category}
                      grade={book.grade}
                      cover={book.cover}
                      pages={book.pages}
                      size={book.size}
                      onFlipRead={() => handleFlipRead(book)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buku Agama */}
          <TabsContent value="agama" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-6 w-6 text-primary" />
                  Buku Agama
                </CardTitle>
                <CardDescription>
                  Koleksi buku keagamaan untuk memperkuat iman dan akhlak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getFilteredBooks("Buku Agama").map((book) => (
                    <BookCard
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      category={book.category}
                      cover={book.cover}
                      pages={book.pages}
                      size={book.size}
                      onFlipRead={() => handleFlipRead(book)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buku Fiksi */}
          <TabsContent value="fiksi" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Buku Fiksi / Non-Fiksi
                </CardTitle>
                <CardDescription>
                  Koleksi sastra, novel, dan bacaan untuk rekreasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getFilteredBooks("Buku Fiksi / Non-Fiksi").map((book) => (
                    <BookCard
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      category={book.category}
                      cover={book.cover}
                      pages={book.pages}
                      size={book.size}
                      onFlipRead={() => handleFlipRead(book)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Karya Tulis */}
          <TabsContent value="karya-tulis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Karya Tulis
                </CardTitle>
                <CardDescription>
                  Penelitian, jurnal, dan karya ilmiah untuk referensi akademik
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getFilteredBooks("Karya Tulis").map((book) => (
                    <BookCard
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      category={book.category}
                      cover={book.cover}
                      pages={book.pages}
                      size={book.size}
                      onFlipRead={() => handleFlipRead(book)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Flip Book Modal */}
      {selectedBook && (
        <FlipBookModal
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
          bookTitle={selectedBook.title}
          totalPages={selectedBook.pages}
        />
      )}
    </div>
  );
}