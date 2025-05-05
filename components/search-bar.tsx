"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearch } from "@/context/search-context"

export function SearchBar() {
  const { searchQuery, setSearchQuery, isSearching, setIsSearching } = useSearch()
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)

  // Update local query when context query changes
  useEffect(() => {
    setLocalQuery(searchQuery)
  }, [searchQuery])

  // Set search query from URL if present
  useEffect(() => {
    const query = searchParams.get("search")
    if (query) {
      setSearchQuery(query)
      setLocalQuery(query)
    }
  }, [searchParams, setSearchQuery])

  // Focus input when isSearching becomes true
  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearching])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(localQuery)

    if (localQuery.trim()) {
      router.push(`/galeri?search=${encodeURIComponent(localQuery.trim())}`)
    }

    setIsSearching(false)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Ara..."
        className="w-full pl-8 rounded-full bg-muted"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
    </form>
  )
}
