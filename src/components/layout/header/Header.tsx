"use client"
import Link from "next/link"
import { FC } from "react"
import { RiShoppingBagLine } from "react-icons/ri"
// import { Menu } from "./menu/Menu";
import dynamic from "next/dynamic"
import { useMediaQuery } from "react-responsive"
import { Button, buttonVariants } from "@/components/ui/button"
// import { MobileMenu } from "./menu/MobileMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import Image from "next/image"
interface Props {}
const MobileMenu = dynamic(() => import("./menu/mobile-menu/MobileMenu"), {
  ssr: false, // Отключаем SSR для динамической загрузки
  loading: () => <div></div>
})
const DesktopMenu = dynamic(() => import("./menu/desktop-menu/DesktopMenu"), {
  ssr: false, // Отключаем SSR для динамической загрузки
  loading: () => <div></div>
})
export const Header: FC<Props> = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="border-b border-border py-3 sticky top-0 bg-secondary z-50 w-full h-fit px-2">
      <div className="flex items-center max-w-6xl w-full mx-auto gap-4 font-medium justify-between">
        <Link className="text-xl" href={"/"}>
          Vapor{" "}
          <sup>
            <span className="text-primary">P</span>ub
          </sup>
          {/* <div className="relative">
            <Image
              src={"/image_2.png"}
              alt=""
              width={500}
              height={500}
              className="object-contain w-20"
              quality={100}
            />
          </div> */}
        </Link>
        <div className="text-sm md:flex hidden">
          {/* <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/catalog"}>
              Каталог
            </Link>
          </Button> */}
          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent !text-foreground",
                    buttonVariants({ variant: "link" })
                  )}
                >
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-52">
                  <NavigationMenuLink className="py-2 text-center hover:bg-accent" asChild>
                    <Link href="/catalog">Все</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="py-2 text-center hover:bg-accent grid grid-cols-2 whitespace-nowrap gap-2"
                    asChild
                  >
                    <Link href="/catalog/vozol-gear">
                      <span>Vozol Gear</span>
                      <span className="">10000</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="py-2 text-center hover:bg-accent grid grid-cols-2 whitespace-nowrap gap-2"
                    asChild
                  >
                    <Link href="/catalog/vozol-star">
                      <span>Vozol Star</span>
                      <span>6000</span>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    className="py-2 text-center hover:bg-accent grid grid-cols-2 whitespace-nowrap gap-2"
                    asChild
                  >
                    <Link href="/catalog/elfbar-ebdesign">
                      <span>Elfbar EBdesing</span>
                      <span>5000</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
          <Popover>
            <PopoverTrigger
              className={cn(
                "bg-transparent !text-foreground",
                buttonVariants({ variant: "link" })
              )}
            >
              Каталог
            </PopoverTrigger>
            <PopoverContent className="flex flex-col p-0 w-fit">
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors"
                  href={"/catalog"}
                >
                  Все
                </Link>
              </PopoverClose>
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/crazy-ace"
                >
                  <span>CrazyAce</span>
                  <span className="text-center">15000</span>
                </Link>
              </PopoverClose>
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/geek-bar"
                >
                  <span>Geek Bar</span>
                  <span className="text-center">15000</span>
                </Link>
              </PopoverClose>
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/vozol-gear"
                >
                  <span>Vozol Gear</span>
                  <span className="text-center">10000</span>
                </Link>
              </PopoverClose>
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/vozol-star"
                >
                  <span>Vozol Star</span>
                  <span className="text-center">9000</span>
                </Link>
              </PopoverClose>
              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/funky-lands"
                >
                  <span>Funky Lands</span>
                  <span className="text-center">7000</span>
                </Link>
              </PopoverClose>
              {/* <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/elfbar-ebdesign"
                >
                  <span>Elfbar EBdesing</span>
                  <span className="text-center">6000</span>
                </Link>
              </PopoverClose> */}

              <PopoverClose asChild>
                <Link
                  className="w-full py-2 px-3 hover:bg-secondary transition-colors grid grid-cols-2"
                  href="/catalog/mystery"
                >
                  <span>Mystery Box</span>
                  <span className="text-center">3k-8k</span>
                </Link>
              </PopoverClose>
            </PopoverContent>
          </Popover>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/garantiya"}>
              Гарантия
            </Link>
          </Button>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className="" href={"/delivery"}>
              Оплата и доставка
            </Link>
          </Button>
          <Button className="text-foreground" variant={"link"} asChild>
            <Link className=" " href={"/blog"}>
              Блог
            </Link>
          </Button>
        </div>
        {/* <div className="items-center gap-2 sm:flex hidden">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <button>Авторизация</button>
          </div>
          <button className="hover:text-primary p-2 rounded-full hover:bg-accent transition-colors text-base">
            <RiShoppingBagLine />
          </button>
        </div> */}
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </div>
  )
}
