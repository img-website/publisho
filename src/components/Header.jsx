import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
  } from "@nextui-org/react";
  import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
  } from "@nextui-org/react";
  import { Input } from "@nextui-org/react";
  import { SearchIcon } from "../component/Icons";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
      "home",
      "About us",
      "Category",
      "Sign In",
      "Sign UP",
      "log Out",
    ];
  return (
    <div>
          <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        className="mx-auto w-full bg-indigo-50 shadow-xl"
      >
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">BLOGERA</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem>
            <Link color="foreground" href="/home">
              Home
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            <Link href="/about" aria-current="page">
              About us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/category">
              Category
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarItem className="hidden sm:flex">
          <Input
            isClearable
            radius="lg"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-white/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </NavbarItem>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <div className="flex gap-4 items-center">
              <Button
                isIconOnly
                color="primary"
                variant="faded"
                aria-label="Take a photo"
                className="sm:hidden"
              >
                <SearchIcon />
              </Button>
            </div>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/signUp"
              variant="flat"
              className="hidden sm:flex"
            >
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <div className="flex items-center">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarItem>
          <NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden ms-4"
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

export default Header