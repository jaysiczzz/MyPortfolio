import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mb-8">
            This is the home page of my portfolio website.
          </p>
          <Button variant="outline">Get Started</Button>
        </div>
      </main>
    </div>
  )
}