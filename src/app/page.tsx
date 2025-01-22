'use client'

import { usePathname } from "next/navigation"

export default function Home() {
  const nomeHref = usePathname();

  return <div>Hello world! {nomeHref}</div>
}
