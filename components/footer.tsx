import { profileData } from "@/lib/data";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made by{" "}
            <span className="font-medium text-foreground">
              {profileData.name}
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
