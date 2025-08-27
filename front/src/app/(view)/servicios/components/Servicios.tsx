"use client"

import { useSearchParams } from "next/navigation"
import { SearchBar } from "@/components/servicios/serchBar"
import { SearchResults } from "@/components/servicios/serchResult"

export default function Servicios() {
  const searchParams = useSearchParams()

  const filters = {
    query: searchParams.get("query") || "",
    category: searchParams.get("category") || "all",
    location: searchParams.get("location") || "all",
    minRating: searchParams.get("minRating") || "all",
    maxPrice: searchParams.get("maxPrice") || "all",
    availability: searchParams.get("availability") || "all",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container px-4 py-8 mx-auto">
        {/* Barra de búsqueda */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold logo font-Title ">
            Buscar Profesionales
          </h2>
          <SearchBar showFilters={true} initialQuery={filters.query} />
        </div>

        {/* Resultados */}
        <SearchResults searchParams={filters} />
      </div>
    </div>
  )
}