"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface SearchFilters {
  query: string
  category: string
  location: string
  minRating: string
  maxPrice: string
  availability: string
}

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void
  showFilters?: boolean
  initialQuery?: string
}

export function SearchBar({ onSearch, showFilters = false, initialQuery = "" }: SearchBarProps) {
  const router = useRouter()
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    category: "all",
    location: "all",
    minRating: "all",
    maxPrice: "all",
    availability: "all",
  })
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(showFilters)

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters)
    } else {
      // Navegar a la página de resultados
      const searchParams = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== "all") {
          searchParams.set(key, value)
        }
      })
      router.push(`/servicios?${searchParams.toString()}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const clearFilters = () => {
    setFilters({
      query: "",
      category: "all",
      location: "all",
      minRating: "all",
      maxPrice: "all",
      availability: "all",
    })
  }

  const activeFiltersCount =
    Object.values(filters).filter((value) => value && value !== "all").length - (filters.query ? 1 : 0)

  return (
    <div className="w-full space-y-4">
      {/* Barra de búsqueda principal */}
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <Input
            type="text"
            placeholder="Buscar profesionales, servicios, ubicación..."
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            onKeyPress={handleKeyPress}
            className="py-3 pl-10 pr-4 text-lg border-2 border-gray-200 focus:border-orange-500"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center space-x-2 bg-transparent"
          >
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </Button>

          <Button onClick={handleSearch} className="px-6 text-white bg-orange-500 hover:bg-orange-600">
            Buscar
          </Button>
        </div>
      </div>

      {/* Filtros avanzados */}
      {showAdvancedFilters && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="grid gap-4 mb-4 md:grid-cols-5">
            {/* Categoría */}
            <div>
              <label className="block mb-2 text-sm font-medium">Categoría</label>
              <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="electricista">Electricista</SelectItem>
                  <SelectItem value="plomero">Plomero</SelectItem>
                  <SelectItem value="pintor">Pintor</SelectItem>
                  <SelectItem value="limpieza">Limpieza</SelectItem>
                  <SelectItem value="mascotas">Cuidado de Mascotas</SelectItem>
                  <SelectItem value="jardineria">Jardinería</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ubicación */}
            <div>
              <label className="block mb-2 text-sm font-medium">Ubicación</label>
              <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las ubicaciones</SelectItem>
                  <SelectItem value="cdmx">Ciudad de México</SelectItem>
                  <SelectItem value="guadalajara">Guadalajara</SelectItem>
                  <SelectItem value="monterrey">Monterrey</SelectItem>
                  <SelectItem value="puebla">Puebla</SelectItem>
                  <SelectItem value="tijuana">Tijuana</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Calificación mínima */}
            <div>
              <label className="block mb-2 text-sm font-medium">Calificación mín.</label>
              <Select value={filters.minRating} onValueChange={(value) => setFilters({ ...filters, minRating: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier calificación</SelectItem>
                  <SelectItem value="4.5">4.5+ estrellas</SelectItem>
                  <SelectItem value="4.0">4.0+ estrellas</SelectItem>
                  <SelectItem value="3.5">3.5+ estrellas</SelectItem>
                  <SelectItem value="3.0">3.0+ estrellas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Precio máximo */}
            <div>
              <label className="block mb-2 text-sm font-medium">Precio máx./hora</label>
              <Select value={filters.maxPrice} onValueChange={(value) => setFilters({ ...filters, maxPrice: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Sin límite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Sin límite</SelectItem>
                  <SelectItem value="25">Hasta $25</SelectItem>
                  <SelectItem value="35">Hasta $35</SelectItem>
                  <SelectItem value="50">Hasta $50</SelectItem>
                  <SelectItem value="75">Hasta $75</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Disponibilidad */}
            <div>
              <label className="block mb-2 text-sm font-medium">Disponibilidad</label>
              <Select
                value={filters.availability}
                onValueChange={(value) => setFilters({ ...filters, availability: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Cualquier momento</SelectItem>
                  <SelectItem value="today">Disponible hoy</SelectItem>
                  <SelectItem value="weekend">Fines de semana</SelectItem>
                  <SelectItem value="emergency">Emergencias 24/7</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filtros activos y botón limpiar */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.category !== "all" && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>Categoría: {filters.category}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters({ ...filters, category: "all" })} />
                  </Badge>
                )}
                {filters.location !== "all" && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>Ubicación: {filters.location}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters({ ...filters, location: "all" })} />
                  </Badge>
                )}
                {filters.minRating !== "all" && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>Min. {filters.minRating}★</span>
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setFilters({ ...filters, minRating: "all" })}
                    />
                  </Badge>
                )}
                {filters.maxPrice !== "all" && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>Max. ${filters.maxPrice}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters({ ...filters, maxPrice: "all" })} />
                  </Badge>
                )}
              </div>
              <Button variant="ghost" onClick={clearFilters} className="text-gray-500">
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
