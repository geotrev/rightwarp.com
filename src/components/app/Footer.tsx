import { AnchorHTMLAttributes, PropsWithChildren } from "react"

import { Container } from "@/components/core"

const FooterLink = ({
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
  <a {...props} rel="noreferrer noopener" className="link">
    {children}
  </a>
)

export const Footer = () => {
  return (
    <Container tag="footer" className="grid gap-6 text-center">
      <div>
        <div className="relative mx-auto mb-4 h-[1.6875rem] w-[3.75rem]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 101 47"
            version="1.1"
            xmlSpace="preserve"
            fill="currentColor"
            style={{ color: "currentColor" }}
          >
            <rect id="Artboard3" x="0" y="-0" width="100.768" height="46.774" fill="none" />
            <path
              d="M9.434,42.723c-0,-11.881 -0.799,-20.004 -2.265,-25.553c-1.234,-4.668 -2.828,-7.277 -4.974,-8.617c-1.432,-0.895 -1.869,-2.784 -0.974,-4.217c0.895,-1.433 2.784,-1.869 4.217,-0.975c2.56,1.599 4.85,4.244 6.571,8.828c0.156,0.417 0.308,0.853 0.456,1.307c2.037,-6.435 5.015,-9.5 8.27,-11.075c2.812,-1.36 5.96,-1.569 9.26,-1.561c1.689,0.004 3.057,1.379 3.052,3.069c-0.004,1.689 -1.379,3.057 -3.068,3.052c-2.335,-0.006 -4.588,-0.012 -6.578,0.951c-2.229,1.078 -3.937,3.438 -5.285,8.017c-1.639,5.573 -2.561,14.012 -2.561,26.774l0,0.007c0,1.689 -1.371,3.061 -3.06,3.061c-1.69,-0 -3.061,-1.372 -3.061,-3.061l0,-0.007Zm37.91,-0.143c0,-11.885 -0.798,-20.01 -2.265,-25.56c-1.234,-4.668 -2.828,-7.277 -4.974,-8.617c-1.432,-0.895 -1.869,-2.784 -0.974,-4.217c0.895,-1.433 2.784,-1.87 4.217,-0.975c2.56,1.599 4.85,4.243 6.571,8.828c0.157,0.418 0.31,0.855 0.458,1.311c0.131,-0.417 0.267,-0.819 0.405,-1.206c1.645,-4.585 3.821,-7.266 6.206,-8.904c3.799,-2.609 8.35,-2.512 13.106,-2.512c4.903,-0 9.298,0.468 12.879,3.618c2.083,1.833 3.941,4.614 5.345,8.954c0.367,-1.146 0.763,-2.175 1.183,-3.098c1.617,-3.553 3.636,-5.738 5.87,-7.134c1.433,-0.895 3.323,-0.458 4.217,0.975c0.895,1.433 0.459,3.322 -0.974,4.217c-1.381,0.862 -2.542,2.282 -3.542,4.478c-2.396,5.262 -3.697,14.285 -3.697,29.699c0,1.689 -1.371,3.06 -3.06,3.06c-1.69,0 -3.061,-1.371 -3.061,-3.06c-0,-12.646 -0.9,-21.027 -2.55,-26.574c-1.355,-4.556 -3.105,-6.918 -5.435,-8.008c-2.123,-0.993 -4.566,-1.006 -7.175,-1.006c-3.474,0 -6.866,-0.468 -9.641,1.437c-2.03,1.394 -3.569,4.06 -4.774,8.786c-1.42,5.574 -2.214,13.693 -2.214,25.508c0,1.689 -1.371,3.06 -3.06,3.06c-1.69,0 -3.061,-1.371 -3.061,-3.06Z"
              fill="currentColor"
              style={{ color: "currentColor" }}
            />
          </svg>
        </div>
        <p>&copy; 2024 Right Warp LLC / Madison, Wisconsin</p>
      </div>
      <div>
        <p>
          This website is built with <FooterLink href="https://nextjs.org/">Next JS</FooterLink>,{" "}
          <FooterLink href="https://www.sanity.io/">Sanity CMS</FooterLink>, deployed on{" "}
          <FooterLink href="https://www.netlify.com/">Netlify</FooterLink>, registered on{" "}
          <FooterLink href="https://www.namecheap.com/">NameCheap</FooterLink>. Type set with Krona
          One and Public Sans.
        </p>
      </div>
    </Container>
  )
}
