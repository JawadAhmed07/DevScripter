import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IconButton, Typography } from "@mui/material";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../components/Icons";

export default function Header() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  };
  return (
    <Navbar
      isBordered
      className="text-balance text-center bg-slate-50 z-10"
      position="sticky"
    >
      {/* Left section of Navbar */}
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6tzwkSJr3mPy9yIuMQcpjV7AI-O7z8hXSA&s"
                alt="Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <p className="hidden px-2 sm:block font-bold text-inherit">
                DevScripters
              </p>
            </Link>
          </IconButton>
        </NavbarBrand>

        {/* Middle section of Navbar */}
        <NavbarContent className="hidden sm:flex gap-7">
          <NavbarItem className="list-none">
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Our Services
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label="devscripters"
                className="custom-dropdown-menu w-[180px]"
                itemClasses={{ base: "custom-dropdown-menu-item gap-4" }}
              >
                <DropdownItem
                  key="webdevelopment"
                  textValue="Web Development"
                  href="/webdevelopment"
                >
                  Web Development
                </DropdownItem>
                <DropdownItem key="usage_metrics" textValue="SEO" href="/seo">
                  SEO
                </DropdownItem>
                <DropdownItem
                  key="seo"
                  textValue="Graphic Design"
                  href="/graphicdesign"
                >
                  Graphic Design
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/writeforus">
              Write For Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="contact">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      {/* Right section of Navbar */}
      {/* <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="custom-dropdown-menu"
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" className="custom-dropdown-menu-item">
              My Settings
            </DropdownItem>
            <DropdownItem
              key="team_settings"
              className="custom-dropdown-menu-item"
            >
              Team Settings
            </DropdownItem>
            <DropdownItem key="analytics" className="custom-dropdown-menu-item">
              Analytics
            </DropdownItem>
            <DropdownItem key="system" className="custom-dropdown-menu-item">
              System
            </DropdownItem>
            <DropdownItem
              key="configurations"
              className="custom-dropdown-menu-item"
            >
              Configurations
            </DropdownItem>
            <DropdownItem
              key="help_and_feedback"
              className="custom-dropdown-menu-item"
            >
              Help & Feedback
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="custom-dropdown-menu-item"
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent> */}
    </Navbar>
  );
}
