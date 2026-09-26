import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Components
import { SandboxRoot } from "@sandbox/layout/sandbox-root";
import { Root } from "@design-system/layouts/root";
//Styles
import "@styles/globals.css"
// Utils
import { cn } from "@lib/utils/css-utils";
import { getEnvVariable } from "@lib/utils/env-utils";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Motion",
    default: "Dashboard"
  },
  description: "Motion - Dashboard page",
  icons: {
    icon: "./assets/logo/motion-logo-32x32.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {

    const sandBoxActive: string = getEnvVariable("NEXT_PUBLIC_SANDBOX") as string;

    if (sandBoxActive === "true") {
        return (
            <html
              lang="en"
              suppressHydrationWarning data-vibrant-palette="true" // HeroUI config
              className={cn("font-sans", manrope.variable)}
            >
              <body
                  className={cn(
                    "w-dvw h-dvh", // Box & sizing
                    `${manrope.variable}` // Font
                  )}
              >
                  <SandboxRoot />
              </body>
            </html>
        );
    }
    else {
        return (
            <html
              lang="en"
              suppressHydrationWarning data-vibrant-palette="true" // HeroUI config
              className={cn("font-sans", manrope.variable)}
            >
                <body
                    className={cn(
                      "flex flex-col", // Positioning
                      "overflow-hidden w-dvw h-dvh", // Box & sizing
                      `${manrope.variable}` // Font
                    )}
                >
                    <Root>
                        {children}
                    </Root>
                </body>
            </html>
        );
    }
};