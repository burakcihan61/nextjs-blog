import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Beautifully designed components <br className="hidden sm:inline" />
        built with Radix UI and Tailwind CSS.
      </h1>
    </div>
  )
}
