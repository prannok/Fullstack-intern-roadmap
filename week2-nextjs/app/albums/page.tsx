"use client";

import { useState, useEffect, use } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Album {
  id: number;
  title: string;
}

export default function AlbumsPage() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fecthAlbum() {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
      );

      console.log("response :", response);
      const data: Album[] = await response.json();
      setAlbums(data);
    } catch (error: any) {
      setError(error.massage || "เกิดข้อผิดพลาดในการดึงข้อมูล");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fecthAlbum();
  }, []);

  // 4. แสดงผลแยกตามสถานะ (Loading / Error / Success)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((n) => (
          <Card key={n}>
            <CardHeader>
              <Skeleton className="h-6 w-1/2 bg-gray-200" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-3/4 bg-gray-200" />
              <Skeleton className="h-4 w-1/3 bg-gray-200" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (albums.length === 0) {
    return (
      <div className="p-10 text-xl font-bold text-red-500">ไม่พบข้อมูล</div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-xl font-bold text-red-500">
        ❌ เกิดข้อผิดพลาด: {error}
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        รายการอัลบั้ม (Albums List) 📸
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {albums.map((album) => (
          <Card key={album.id}>
            <CardHeader>
              <CardTitle>{album.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
