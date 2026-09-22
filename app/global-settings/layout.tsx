import type { Metadata } from "next";
// Components
import { Sidebar } from "@design-system/layouts/sidebar";
// Routes
import { GlobalSettingsRouteOptions } from "@routes/global-settings-route-options";
//Styles
import "@styles/globals.css"
// Utils
import { cn } from "@lib/utils/css";

export const metadata: Metadata = {
  title: {
    template: "%s | Motion",
    default: "Global settings"
  },
  description: "Motion - Global settings",
};

export default function GlobalSettingsRootLayout({ children }: LayoutProps<"/">) {

  return (
    <div className={cn("grid grid-cols-[250px_1fr] gap-x-3 p-3 h-full")}>
        <aside>
            <Sidebar
              code="global_settings_sidenav"
              title="Global settings"
              navigationRouteGroups={GlobalSettingsRouteOptions}
            />
        </aside>
        <section className={cn("shrink-0")}>
            {children}
        </section>
    </div>
  );
};