import _ from "lodash";
import { GetVideoCompositionFn, GetElementsFn } from "@clipisode/theme";

export const getVideoComposition: GetVideoCompositionFn = () => {
  let foo = _.chunk([1, 2, 3], 2);

  return {
    videos: [
      { type: "clip", clipId: "" },
      { type: "clip", clipId: "2907842408240724" },
    ],
    backgroundColor: "#000000",
  };
};

export const getElements: GetElementsFn = (
  replyClipId: string,
  answerClipId: string,
  askEpisodeTitle: string,
  replyClipDuration: number,
  replyClipDisplayName: string,
  answerClipDuration: number,
  answerClipDisplayName: string,
  hostPromoText: string | null
) => {
  const WIDTH = 720;
  const HEIGHT = 1280;
  const SPACING = 25;
  const TITLEH = 760;
  const LOGOWIDTH = 260;
  const LOGOHEIGHT = 39.3;
  const YOYOMIN = 5.0;
  const TITLEDURATION = 2.0;
  const ENDINGDURATION = 3.0;

  const bottomFadeRect = {
    x: 0,
    y: HEIGHT - 210,
    width: WIDTH,
    height: 210,
  };

  const displayNameTextProps = {
    fontName: "OpenSans-Regular",
    fontSize: 44,
    lineHeight: 48,
    textAlign: "center",
    x: SPACING,
    y: 1150,
    originY: "center",
    width: WIDTH - SPACING * 2,
    height: 100,
    color: "#FFFFFF",
  };

  const endingTextProps = {
    fontName: "OpenSans-Regular",
    textAlign: "center",
    x: SPACING,
    width: WIDTH - SPACING * 2,
    color: "#FFFFFF",
  };

  return [
    {
      type: "frame",
      name: "frame.reply.first",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        videoKey: replyClipId,
        position: "first",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "frame",
      name: "frame.reply.last",
      startAt: 2 + replyClipDuration - 0.5,
      endAt: 2 + replyClipDuration,
      props: {
        videoKey: replyClipId,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "video",
      name: "video.reply",
      videoKey: replyClipId,
      startAt: 2,
      endAt: 2 + replyClipDuration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "frame",
      name: "frame.answer.last",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration - 0.5,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        videoKey: answerClipId,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "video",
      name: "video.answer",
      videoKey: answerClipId,
      startAt: TITLEDURATION + replyClipDuration,
      endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "rect",
      name: "title.shade",
      startAt: 0,
      endAt: 2,
      props: {
        textAlign: "left",
        color: "#000000",
        alpha: 0.65,
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.4,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.65,
          to: 0.0,
        },
      ],
    },
    {
      type: "rect",
      name: "title.line",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        color: "#0066BB",
        alpha: 1.0,
        x: 2 * SPACING,
        y: 880,
        width: 280,
        height: 2.5,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.title",
      startAt: 0,
      endAt: TITLEDURATION - 0.1,
      props: {
        value: askEpisodeTitle, // " 🔥🔥🔥 mighty mighty bosstones carl weathers scarlett johansson arnold schwarzenegger"
        color: "#FFFFFF",
        fontName: "FiraSans-ExtraBold",
        fontSize: 80,
        textAlign: "left",
        x: 2 * SPACING,
        y: 860,
        width: WIDTH - 4 * SPACING,
        height: TITLEH,
        originY: "bottom",
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.host",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: answerClipDisplayName,
        color: "#FFFFFF",
        fontName: "OpenSans-Regular",
        fontSize: 36,
        lineHeight: 36,
        textAlign: "left",
        x: 2 * SPACING,
        y: 910,
        width: WIDTH - 6 * SPACING,
        height: 54,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "text",
      name: "title.guest",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: "and " + replyClipDisplayName,
        color: "#FFFFFF",
        fontName: "OpenSans-Regular",
        fontSize: 36,
        lineHeight: 36,
        textAlign: "left",
        x: 2 * SPACING,
        y: 966,
        width: WIDTH - 6 * SPACING,
        height: 54,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "image",
      name: "title.logo",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        imageKey: "logo",
        x: WIDTH - 2 * SPACING - LOGOWIDTH,
        y: HEIGHT - 3 * SPACING - LOGOHEIGHT,
        width: LOGOWIDTH,
        height: LOGOHEIGHT,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION - 0.5,
          endAt: TITLEDURATION - 0.1,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION - 0.1,
          endAt: TITLEDURATION,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "image",
      name: "combination.icon",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      props: {
        imageKey: "icon",
        alpha: 0.8,
        x: 575,
        y: 50,
        width: 90,
        height: 90,
      },
      animations:
        replyClipDuration + answerClipDuration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 1.0,
                field: "alpha",
                from: 0,
                to: 0.8,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 0.8,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.5,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.5,
                endAt: TITLEDURATION + 1.0,
                field: "alpha",
                from: 0,
                to: 0.8,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "width",
                from: 0,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "height",
                from: 0,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "x",
                from: 620,
                to: 575,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "y",
                from: 95,
                to: 50,
              },

              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "width",
                from: 90,
                to: 100,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "height",
                from: 90,
                to: 100,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "x",
                from: 575,
                to: 570,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "y",
                from: 50,
                to: 45,
              },

              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "width",
                from: 100,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "height",
                from: 100,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "x",
                from: 570,
                to: 575,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "y",
                from: 45,
                to: 50,
              },

              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                field: "width",
                from: 90,
                to: 100,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                field: "height",
                from: 90,
                to: 100,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                field: "x",
                from: 575,
                to: 570,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                field: "y",
                from: 50,
                to: 45,
              },

              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                field: "width",
                from: 100,
                to: 90,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                field: "height",
                from: 100,
                to: 90,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                field: "x",
                from: 570,
                to: 575,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.9,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                field: "y",
                from: 45,
                to: 50,
              },

              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                field: "width",
                from: 90,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                field: "height",
                from: 90,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                field: "x",
                from: 575,
                to: 620,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                field: "y",
                from: 50,
                to: 95,
              },

              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.0,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.5,
                field: "alpha",
                from: 0.8,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.5,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "gradient",
      name: "question.fade",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + replyClipDuration,
      props: {
        alpha: 1,
        ...bottomFadeRect,
      },
      animations:
        replyClipDuration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.8,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 1.6,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ],
    },
    {
      type: "text",
      name: "question.name",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + replyClipDuration,
      props: {
        alpha: 1,
        value: replyClipDisplayName,
        ...displayNameTextProps,
      },
      animations:
        replyClipDuration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + replyClipDuration - 0.2,
                endAt: TITLEDURATION + replyClipDuration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + replyClipDuration - 1.4,
                endAt: TITLEDURATION + replyClipDuration - 0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt: TITLEDURATION + replyClipDuration - 0.2,
                endAt: TITLEDURATION + replyClipDuration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "gradient",
      name: "answer.fade",
      startAt: TITLEDURATION + replyClipDuration,
      endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      props: {
        alpha: 1,
        ...bottomFadeRect,
      },
      animations:
        answerClipDuration < YOYOMIN
          ? [
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.4,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.6,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.8,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "text",
      name: "answer.name",
      startAt: TITLEDURATION + replyClipDuration,
      endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      props: {
        alpha: 1,
        value: answerClipDisplayName,
        ...displayNameTextProps,
      },
      animations:
        answerClipDuration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION + replyClipDuration,
                endAt: TITLEDURATION + replyClipDuration + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION + replyClipDuration,
                endAt: TITLEDURATION + replyClipDuration + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + replyClipDuration + 0.2,
                endAt: TITLEDURATION + replyClipDuration + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 1.4,
                endAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION + replyClipDuration + answerClipDuration - 0.2,
                endAt: TITLEDURATION + replyClipDuration + answerClipDuration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "rect",
      name: "ending.shade",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration - 0.25,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        color: "#000000",
        alpha: 0.8,
        x: 0,
        y: 0,
        width: 720,
        height: 1280,
      },
      animations: [
        {
          startAt:
            TITLEDURATION + replyClipDuration + answerClipDuration - 0.25,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.25,
          field: "alpha",
          from: 0,
          to: 0.8,
        },
      ],
    },
    {
      type: "text",
      name: "ending.name",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.4,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        alpha: 1,
        value: answerClipDisplayName,
        fontSize: 54,
        lineHeight: 54,
        y: 480,
        height: 80,
        ...endingTextProps,
      },
      animations: [
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.4,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 1.0,
          field: "alpha",
          from: 0,
          to: 1,
        },
      ],
    },
    {
      type: "text",
      name: "ending.promo",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        alpha: 1,
        value: hostPromoText || "clipisode.com",
        fontSize: 32,
        lineHeight: 45,
        y: 570,
        height: 225,
        ...endingTextProps,
      },
      animations: [
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.0,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.8,
          field: "alpha",
          from: 0,
          to: 0,
        },
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.8,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 1.6,
          field: "alpha",
          from: 0,
          to: 1,
        },
      ],
    },
    {
      type: "image",
      name: "ending.icon",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        imageKey: "icon",
        x: 250,
        y: 210,
        width: 220,
        height: 220,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.0,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.2,
          field: "alpha",
          from: 0,
          to: 0,
        },
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 0.2,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 1.0,
          field: "alpha",
          from: 0,
          to: 1,
        },
      ],
    },
    {
      type: "image",
      name: "ending.logo",
      startAt: TITLEDURATION + replyClipDuration + answerClipDuration,
      endAt:
        TITLEDURATION + replyClipDuration + answerClipDuration + ENDINGDURATION,
      props: {
        imageKey: "logo",
        x: WIDTH - 2 * SPACING - LOGOWIDTH,
        y: HEIGHT - 3 * SPACING - LOGOHEIGHT,
        width: LOGOWIDTH,
        height: LOGOHEIGHT,
        alpha: 1,
      },
      animations: [
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration,
          endAt: TITLEDURATION + replyClipDuration + answerClipDuration + 1.5,
          field: "alpha",
          from: 0.0,
          to: 0.0,
        },
        {
          startAt: TITLEDURATION + replyClipDuration + answerClipDuration + 1.5,
          endAt:
            TITLEDURATION +
            replyClipDuration +
            answerClipDuration +
            ENDINGDURATION,
          field: "alpha",
          from: 0.0,
          to: 1.0,
        },
      ],
    },
  ];
};
