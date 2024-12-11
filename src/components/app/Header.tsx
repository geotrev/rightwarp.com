import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import LogoDark from "@/app/_assets/logo-dark.svg"
import { Button } from "../core/Button"

export const Header = () => {
  return (
    <header className="sticky top-0 lg:px-24 lg:py-10 md:px-12 md:py-12 px-8 py-8">
      <nav className="flex justify-between items-center relative">
        <div className="absolute lg:-rotate-90 lg:-left-[10.5rem] rotate-0 left-0">
          <Link href="/">
            <Image
              src={LogoDark}
              alt="Right Warp logo"
              className="w-[60px] md:w-[85px]"
            />
          </Link>
        </div>
        <div className="flex ms-auto lg:ms-0 items-center lg:w-full gap-4 lg:justify-between">
          <Button>
            Warp Zone <ArrowRight />
          </Button>
          <div className="hidden md:flex">Wide nav</div>
          <div className="md:hidden">
            <Button>
              <Menu />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
