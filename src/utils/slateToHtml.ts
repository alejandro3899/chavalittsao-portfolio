import { Element, Text } from "domhandler";
import {
  slateToHtml as slateToHtmlSerializer,
  payloadSlateToDomConfig,
  SlateToDomConfig,
} from "slate-serializers";

export const richTextConfig: SlateToDomConfig = {
  ...payloadSlateToDomConfig,
  elementTransforms: {
    ...payloadSlateToDomConfig.elementTransforms,
    upload: ({ node }: any) => {
      const children = [
        new Element("img", {
          src: node.value.imagekit.url + "?tr=w-1000",
          alt: node.value.altText,
          loading: "lazy",
        }),
      ];
      if (node.value.showCaption) {
        children.push(
          new Element("figcaption", {}, [
            node.value.captionLink
              ? new Element(
                  "a",
                  { target: "_blank", href: node.value.captionLink },
                  [new Text(node.value.altText)]
                )
              : new Text(node.value.altText),
          ])
        );
      }
      return new Element("figure", {}, children);
    },
    video: ({ node }: any) => {
      return new Element("iframe", {
        src: `https://www.youtube.com/embed/${node.id}`,
        width: "853",
        height: "480",
        frameBorder: "0",
        allowFullScreen: "true",
        style: "max-width: 100%; height: auto; aspect-ratio: 16 / 9;",
        class: "richtext-video",
      });
    },
    hr: () => {
      return new Element("hr", {});
    },
    left: ({ children }: any) => {
      return new Element("p", { style: "text-align: left;" }, children);
    },
    center: ({ children }: any) => {
      return new Element("p", { style: "text-align: center;" }, children);
    },
    right: ({ children }: any) => {
      return new Element("p", { style: "text-align: right;" }, children);
    },
    "uppercase-heading": ({ children }: any) => {
      return new Element(
        "p",
        {
          style:
            "letter-spacing: -0.14px; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; line-height: 1;",
        },
        children
      );
    },
  },
};

const slateToHtml = (
  slateData?: {
    [k: string]: unknown;
  }[],
  config?: SlateToDomConfig
) => {
  const pSlateData = slateData?.map((item) => {
    if (!item.type) {
      return {
        ...item,
        type: "p",
      };
    }

    return item;
  });
  return {
    __html: pSlateData ? slateToHtmlSerializer(pSlateData, config) : "",
  };
};

export default slateToHtml;
