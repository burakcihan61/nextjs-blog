import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"

interface MainNavProps {
  items?: NavItem[]
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export function MainNavHamburger({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/*<Link href="/" className="flex items-center space-x-2">*/}
      {/*  <Icons.logo className="h-6 w-6" />*/}
      {/*  <span className="inline-block font-bold">{siteConfig.name}</span>*/}
      {/*</Link>*/}
      {items?.length ? (
        <nav className="flex gap-6 flex-col">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={classNames(
                    item.disabled
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.disabled ? "page" : undefined}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
