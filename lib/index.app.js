import _ from "lodash";
export const getVideoComposition = () => {
    let foo = _.chunk([1, 2, 3], 2);
    return {
        videos: [{ type: "clip", clipId: "" }],
    };
};
