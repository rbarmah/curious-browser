import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  image?: string;
  achievements?: string[];
  specialization?: string[];
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamMemberDialogProps {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TeamMemberDialog = ({ member, open, onOpenChange }: TeamMemberDialogProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden bg-card/95 backdrop-blur-xl border-[hsl(var(--coral))]/20">
        <div className="grid md:grid-cols-[300px,1fr] gap-0 h-full">
          {/* Left Column - Profile Section */}
          <div className="bg-gradient-to-br from-[hsl(var(--coral))]/10 via-[hsl(var(--peach))]/10 to-background p-8 flex flex-col items-center space-y-6 border-r border-border/50">
            <DialogHeader className="sr-only">
              <DialogTitle>{member.name}</DialogTitle>
              <DialogDescription>{member.role}</DialogDescription>
            </DialogHeader>

            {/* Avatar */}
            <div className="relative mt-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] blur-lg opacity-50" />
              <Avatar className="relative w-40 h-40 border-4 border-card shadow-[var(--shadow-soft)]">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                ) : null}
                <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] text-white text-4xl font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name & Role */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--coral))] to-[hsl(var(--peach))] bg-clip-text text-transparent">
                {member.name}
              </h2>
              <p className="text-sm font-medium text-muted-foreground">
                {member.role}
              </p>
            </div>

            {/* Specializations */}
            {member.specialization && member.specialization.length > 0 && (
              <div className="w-full space-y-3">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialization.map((spec, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-[hsl(var(--coral))]/10 to-[hsl(var(--peach))]/10 text-foreground border-[hsl(var(--coral))]/20"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Contact & Social Links */}
            <div className="w-full space-y-3 pt-4 border-t border-border/50">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg",
                    "bg-card/50 hover:bg-card",
                    "border border-border/50 hover:border-[hsl(var(--coral))]/30",
                    "transition-all duration-300",
                    "group"
                  )}
                >
                  <Mail className="w-4 h-4 text-[hsl(var(--coral))]" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Contact
                  </span>
                </a>
              )}

              {member.socialLinks && (
                <div className="flex gap-2">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center p-3 rounded-lg",
                        "bg-card/50 hover:bg-card",
                        "border border-border/50 hover:border-[hsl(var(--coral))]/30",
                        "transition-all duration-300 flex-1"
                      )}
                    >
                      <Linkedin className="w-4 h-4 text-[hsl(var(--coral))]" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center p-3 rounded-lg",
                        "bg-card/50 hover:bg-card",
                        "border border-border/50 hover:border-[hsl(var(--coral))]/30",
                        "transition-all duration-300 flex-1"
                      )}
                    >
                      <Twitter className="w-4 h-4 text-[hsl(var(--coral))]" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Bio & Achievements */}
          <ScrollArea className="h-[90vh] md:h-auto">
            <div className="p-8 space-y-8">
              {/* Biography */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[hsl(var(--coral))] to-[hsl(var(--peach))] rounded-full" />
                  About
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
              </div>

              {/* Achievements */}
              {member.achievements && member.achievements.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-[hsl(var(--coral))] to-[hsl(var(--peach))] rounded-full" />
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-4 rounded-lg",
                          "bg-gradient-to-br from-[hsl(var(--coral))]/5 to-[hsl(var(--peach))]/5",
                          "border border-[hsl(var(--coral))]/10",
                          "hover:border-[hsl(var(--coral))]/20",
                          "transition-all duration-300",
                          "group"
                        )}
                      >
                        <div className="flex gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[hsl(var(--coral))] to-[hsl(var(--peach))] flex-shrink-0 group-hover:scale-150 transition-transform" />
                          <p className="text-sm text-foreground/90 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--coral))]/20 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[hsl(var(--peach))]/20 to-transparent rounded-tr-full pointer-events-none" />
      </DialogContent>
    </Dialog>
  );
};
