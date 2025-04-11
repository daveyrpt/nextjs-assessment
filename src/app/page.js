import axios from "axios";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function fetchItems(page = 1, limit = 5) {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/item?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export default async function PostsPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const limit = 5;
  const items = await fetchItems(page, limit);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Next.js Assessment</h1>

      {/* Item Cards */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="shadow-lg transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items available</p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {page > 1 && (
          <Link href={`?page=${page - 1}`}>
            <Button variant="outline">Previous</Button>
          </Link>
        )}
        <span className="text-lg font-semibold"> Page {page} </span>
        {items.length === limit && (
          <Link href={`?page=${page + 1}`}>
            <Button>Next</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
