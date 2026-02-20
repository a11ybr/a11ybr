import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  type: "workshop" | "meetup" | "congresso" | "webinar" | "curso";
  registrationUrl?: string;
  online?: boolean;
  organizer?: string;
}

const typeColors: Record<EventCardProps["type"], "default" | "primary" | "muted" | "success" | "warning"> = {
  workshop: "default",
  meetup: "success",
  congresso: "primary",
  webinar: "warning",
  curso: "muted",
};

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  type,
  registrationUrl,
  online,
  organizer,
}: EventCardProps) {
  return (
    <article className="card-base rounded-lg overflow-hidden">
      {/* Date bar */}
      <div
        className="flex items-center gap-3 px-5 py-3 border-b border-border"
        style={{ background: "hsl(var(--primary-light))" }}
      >
        <Calendar size={15} className="text-primary flex-shrink-0" aria-hidden />
        <span className="text-sm font-semibold text-primary">{date}</span>
        {time && (
          <>
            <span className="text-primary/40">·</span>
            <Clock size={13} className="text-primary flex-shrink-0" aria-hidden />
            <span className="text-sm text-primary">{time}</span>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* Type badge */}
        <Tag variant={typeColors[type]} className="self-start capitalize">
          {type}
        </Tag>

        {/* Title */}
        <h3 className="text-base font-bold text-foreground leading-snug">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} className="flex-shrink-0 text-primary" aria-hidden />
          <span>{location}</span>
          {online && (
            <Tag variant="muted" className="text-xs ml-1">
              Online
            </Tag>
          )}
        </div>

        {organizer && (
          <p className="text-xs text-muted-foreground">Organização: {organizer}</p>
        )}

        {/* CTA */}
        {registrationUrl && (
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-1 px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground no-underline transition-colors self-start"
            style={{ background: "hsl(var(--primary))" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary-hover))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary))";
            }}
          >
            Inscrever-se <ExternalLink size={13} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
