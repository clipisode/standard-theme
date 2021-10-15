import { OriginY, TextAlign, ThemeElement, VideoData } from "@clipisode/theme";
import { ForegroundMetaData } from ".";

export function clip(
  video: VideoData,
  index: number,
  meta: ForegroundMetaData
): ThemeElement[] {
  const clipStartAt =
    video.clips
      .slice(0, index)
      .reduce((total, clip) => total + clip.duration, 0) + meta.titleDuration;

  // const durationOfAllClips = video.clips.reduce(
  //   (totalDuration, clip) => totalDuration + clip.duration,
  //   0
  // );
  const bottomFadeRect = {
    x: 0,
    y: meta.height - 210,
    width: meta.width,
    height: 210,
  };
  const displayNameTextProps = {
    fontName: "OpenSans-Regular",
    fontSize: 44,
    lineHeight: 48,
    textAlign: TextAlign.Center,
    x: meta.spacing,
    y: 1150,
    originY: OriginY.Center,
    width: meta.width - meta.spacing * 2,
    height: 100,
    color: "#FFFFFF",
  };

  const clip = video.clips[index];

  return [
    {
      type: "gradient",
      name: "question.fade",
      startAt: clipStartAt,
      endAt: clipStartAt + clip.duration,
      props: {
        alpha: 1,
        ...bottomFadeRect,
      },
      animations:
        clip.duration < meta.yoyoMin
          ? [
              {
                startAt: clipStartAt,
                endAt: clipStartAt + 0.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ]
          : [
              {
                startAt: clipStartAt,
                endAt: clipStartAt + 0.8,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: clipStartAt + 0.8,
                endAt: clipStartAt + 1.6,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ],
    },
    {
      type: "text",
      name: "question.name",
      startAt: clipStartAt,
      endAt: clipStartAt + clip.duration,
      props: {
        alpha: 1,
        value: clip.displayName,
        ...displayNameTextProps,
      },
      animations:
        clip.duration < meta.yoyoMin
          ? [
              {
                startAt: clipStartAt,
                endAt: clipStartAt + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: clipStartAt + clip.duration - 0.2,
                endAt: clipStartAt + clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: clipStartAt,
                endAt: clipStartAt + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: clipStartAt + 0.2,
                endAt: clipStartAt + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: clipStartAt + clip.duration - 1.4,
                endAt: clipStartAt + clip.duration - 0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt: clipStartAt + clip.duration - 0.2,
                endAt: clipStartAt + clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
  ];
}
