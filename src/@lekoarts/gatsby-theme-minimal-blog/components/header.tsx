/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
// import ColorModeToggle from "./colormode-toggle";
import Navigation from "./navigation";
import replaceSlashes from "../utils/replaceSlashes";
import Behance from "../../../../static/behance.svg";
import Instagram from "../../../../static/instagram.svg"
import Twitter from "../../../../static/twitter.svg"
import Linkedin from "../../../../static/linkedin.svg"
import Github from "../../../../static/github.svg"
import socialStyles from "../styles/social.module.css"

const Header = () => {
  const { siteTitle } = useSiteMetadata();
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig();
  // const [colorMode, setColorMode] = useColorMode();
  // const isDark = colorMode === `dark`;
  // const toggleColorMode = (e: any) => {
  //   e.preventDefault();
  //   setColorMode(isDark ? `light` : `dark`);
  // };

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
            {siteTitle}
          </h1>
        </Link>
        {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`
        }}
      >
        <Navigation nav={nav} />
        {/* {externalLinks && externalLinks.length > 0 && (
          <div
            sx={{ "a:not(:first-of-type)": { ml: 4 }, fontSize: [1, `18px`] }}
          >
            {externalLinks.map(link => (
              <Styled.a key={link.url} href={link.url}>
                {link.name}
              </Styled.a>
            ))}
          </div>
        )} */}
        <div class={socialStyles.icon_tray}>
          <a
            href="https://www.behance.net/ShreyasGupta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="behance link"
          >
            <Behance class={socialStyles.svgs} />
          </a>
          <a
            href="https://www.instagram.com/awwmaaigawwd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram link"
          >
            <Instagram class={socialStyles.svgs} />
          </a>
          <a
            href="https://twitter.com/awwmaaigawwd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter link"
          >
            <Twitter class={socialStyles.svgs} />
          </a>
          <a
            href="https://www.linkedin.com/in/shreyas-gupta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin link"
          >
            <Linkedin class={socialStyles.svgs} />
          </a>
          <a
            href="https://github.com/GLaDO8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
          >
            <Github class={socialStyles.svgs} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
