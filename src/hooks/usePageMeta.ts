import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function usePageMeta({ title, description, url, image }: PageMetaOptions) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Description
    if (description) {
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        document.head.appendChild(descTag);
        }
        descTag.setAttribute("content", description);
    }

    // Open Graph tags
    const ogTags = [
        { property: "og:title", content: title },
        { property: "og:description", content: description || "" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url || window.location.href },
        { property: "og:image", content: image || "/social-share.png" },
    ];

    ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property='${property}']`);
        if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
    });

    // Twitter tags
    const twitterTags = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description || "" },
        { name: "twitter:image", content: image || "/social-share.png" },
    ];

    twitterTags.forEach(({ name, content }) => {
        let tag = document.querySelector(`meta[name='${name}']`);
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("name", name);
            document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
        });
    }, [title, description, url, image]);

    // JSON-LD structured data
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ascensus Academy",
    "url": url || window.location.href,
    "description": description || "",
    "logo": "https://yourdomain.com/main-logo.svg"
    };

    let script = document.querySelector(`script[type='application/ld+json']`) as HTMLScriptElement | null;
    if (!script) {
    script = document.createElement("script") as HTMLScriptElement;
    script.type = "application/ld+json";
    document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
}