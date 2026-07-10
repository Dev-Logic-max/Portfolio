import type { SVGProps } from "react";

/**
 * Brand glyphs (GitHub, LinkedIn, X). lucide-react removed brand icons over
 * trademark concerns, so we ship these as small inline SVGs. currentColor +
 * className make them behave like any lucide icon.
 */

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.33-1.73-1.33-1.73-1.09-.72.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.29-5.47-5.75 0-1.27.47-2.31 1.23-3.12-.12-.29-.53-1.46.12-3.05 0 0 1-.31 3.3 1.19a11.6 11.6 0 0 1 6 0c2.28-1.5 3.29-1.19 3.29-1.19.65 1.59.24 2.76.12 3.05.77.81 1.23 1.85 1.23 3.12 0 4.47-2.81 5.45-5.49 5.74.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56A11.8 11.8 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65Z" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="1em" height="1em" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.44-9.42 2.52 0 4.89.98 6.67 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.19-4.23 9.42-9.42 9.42Zm8.02-17.44A11.32 11.32 0 0 0 12.05.72C5.8.72.72 5.8.72 12.04c0 2 .52 3.95 1.51 5.67L.63 23.28l5.7-1.5a11.31 11.31 0 0 0 5.72 1.46h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.03-1.18-5.87-3.32-8.01Z" />
    </svg>
  );
}

export function FiverrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="1em" height="1em" {...props}>
      <path d="M16.25 16.25v-6.5h-4.5v-.25c0-.83.67-1.5 1.5-1.5h1.5V4h-1.5a4 4 0 0 0-4 4v1.75H7v3h2.25v3.5H7V19h7.5v-2.75h-1.75v-3.5h1.5v3.5h2ZM19 7.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm-1.25 8.75V9.75h-2.5v6.5H14V19h6v-2.75h-2.25Z" />
    </svg>
  );
}

export function UpworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="1em" height="1em" {...props}>
      <path d="M18.56 13.29c-1.15 0-2.23-.49-3.2-1.28l.24-1.11.01-.04c.21-1.17.87-3.14 2.95-3.14a2.29 2.29 0 0 1 0 4.57Zm0-6.87c-2.66 0-4.72 1.73-5.56 4.57-1.28-1.92-2.25-4.23-2.82-6.18H7.4v7.47a2.29 2.29 0 0 1-4.57 0V4.81H0v7.47a5.11 5.11 0 0 0 10.22.06c.5.99 1.11 2 1.85 2.9l-1.57 7.38h2.83l1.13-5.33c1 .64 2.14 1.04 3.5 1.04a5.14 5.14 0 0 0 5.13-5.16 5.13 5.13 0 0 0-5.13-5.13Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width="1em" height="1em" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

export const brandIcons: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
  WhatsApp: WhatsappIcon,
  Fiverr: FiverrIcon,
  Upwork: UpworkIcon,
  Facebook: FacebookIcon,
};
