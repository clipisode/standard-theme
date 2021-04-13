import _ from "lodash";
import { GetVideoCompositionFn } from "@clipisode/theme";

export const getVideoComposition: GetVideoCompositionFn = () => {
  let foo = _.chunk([1, 2, 3], 2);

  return {
    videos: [{ type: "clip", clipId: "" }],
  };
};
