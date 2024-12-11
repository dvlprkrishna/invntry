import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [],
    },
    {
      title: "Inventory",
      url: "/inventory",
      items: [
        {
          title: "All Cakes",
          url: "/inventory/all-cakes",
        },
        {
          title: "Add New Cake",
          url: "/inventory/add-new-cake",
        },
      ],
    },
    {
      title: "Expired Cakes",
      url: "/expired",
      items: [
        {
          title: "View Expired",
          url: "/expired/view-expired",
        },
        {
          title: "Near Expiry",
          url: "/expired/near-expiry",
        },
      ],
    },

    {
      title: "Sales/Orders",
      url: "/sales",
      items: [
        {
          title: "New Sale/Order",
          url: "/sales/new-sale",
        },
        {
          title: "View All Sales",
          url: "/sales/view-all-sales",
        },
      ],
    },
  ],
};

// Reports

// Inventory Reports
// Sales Trends
// Notifications

// Expiry Alerts
// Low Stock Alerts
// Settings

// Shop Preferences
// Notification Settings
// User Management (if applicable)

// Staff Roles
// Permissions
// Help & Support

// Documentation
// Contact Support

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-lg font-semibold">Invntry</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-semibold">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
