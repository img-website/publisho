import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
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
import { useUser } from '../context/UserContext';
import { useAuthentication } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {currentUser, isAuthenticated} = useUser();
  const {handleLogout} = useAuthentication();

  const menuItems = [
    { heading: "Home", href: "/" },
    { heading: "About Us", href: "/about" },
    { heading: "Category", href: "/category" },
    { heading: "Sign In", href: "/login", authRequired: false },
    { heading: "Sign Up", href: "/signup", authRequired: false },
    { heading: "Log Out", href: "#", authRequired: true, action: handleLogout },
  ];

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        className="mx-auto fixed z-[9999] top-0 w-full bg-indigo-50 shadow-xl"
      >
        <NavbarBrand>
          <Link href="/"className="font-bold text-inherit ">BLOGERA</Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" to="/about" >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/category">
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
          
          {!isAuthenticated ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link to="/login" className='text-black'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  to="/signUp"
                  variant="flat"
                  className="hidden sm:flex hover:text-white border-black border-2 font-semibold hover:!bg-black bg-red-50/10 text-black"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          ) : (
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
                      <p className="font-semibold">{currentUser ? currentUser.email : 'Loading...'}</p>
                    </DropdownItem>
                    <DropdownItem key="settings"><Link to="/admin">Dashboard</Link></DropdownItem>
                    <DropdownItem key="team_settings">My Settings</DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarItem>
          )}
          <NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden ms-4"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => {
            if ((!isAuthenticated && item.authRequired) || (isAuthenticated && !item.authRequired)) {
              return null;
            }
            return (
              <NavbarMenuItem key={index} onClick={item.action ? item.action : null}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  to={item.href}
                  size="lg"
                >
                  {item.heading}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

export default Header;
