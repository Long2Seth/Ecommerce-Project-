'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from "next-auth/react"
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/navbar';
import { DropdownItem, Button, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { link as linkStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { ThemeSwitch } from '@/components/card/theme-switch';
import { usePathname } from 'next/navigation';

export const NavbarComponent = () => {
  const { data: session } = useSession();
  const route = useRouter();
  const pathname = usePathname();

  const isLoggedIn = !!session;

  return (
    <NextUINavbar maxWidth="2xl" shouldHideOnScroll>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink href="/">
            <img width={65} src="../E-commerce-Store.png" alt="logo" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify={'center'} className={'hidden lg:flex gap-10 '}>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.href === pathname}>
            <NextLink
              className={clsx(
                linkStyles({
                  color: item.href === pathname ? 'primary' : 'foreground',
                  underline: 'hover',
                }),
                'transition-all duration-500 ease-in-out text-xl '
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden basis-1/5 sm:flex sm:basis-full" justify="end">
        <NavbarItem className="hidden gap-2 lg:flex">
          <ThemeSwitch />
        </NavbarItem>
        {!isLoggedIn && (
          <>
            <NavbarItem className="hidden gap-2 lg:flex">
              <Button className="text-lg bg-[#F07423] text-white" onClick={() => route.push('/signIn')} radius="sm">
                Sign In
              </Button>
              <Button className="text-lg bg-[#0f766e] text-white" onClick={() => route.push('/signUp')} radius="sm">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="pl-4 lg:hidden" justify="end">
        <ThemeSwitch />
        {!isLoggedIn && (
          <>
            <Button className="text-lg" onClick={() => route.push('/signIn')} radius="sm" color="primary">
              Sign In
            </Button>
            <Button className="text-lg bg-[#0f766e] text-white" onClick={() => route.push('/signUp')} radius="sm">
              Sign Up
            </Button>
          </>
        )}
        <NavbarMenuToggle />
      </NavbarContent>

      {isLoggedIn && (
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={session?.user?.image as string}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{session?.user?.email}</p>
              </DropdownItem>
              <DropdownItem onClick={() => signOut()} key="logout" color="danger">
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      )}



      
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === pathname}>
              <NextLink
                className={clsx(
                  linkStyles({
                    color: item.href === pathname ? 'primary' : 'foreground',
                    underline: 'hover',
                  }),
                  'transition-all duration-500 ease-in-out'
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
