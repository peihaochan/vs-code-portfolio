import { useEffect } from "react";
import TagCloud from "TagCloud";
import { skillsArray } from "../../../constants/strings";

const SphereTagCloud = () => {
  useEffect(() => {
    const sphereRadius =
      window.innerWidth <= 600 ? 150 : window.innerWidth <= 800 ? 200 : 250;

    const radius = sphereRadius;
    return () => {
      const container: string = ".tagcloud";
      const options: any = {
        radius: radius,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, skillsArray, options);
    };
  }, []);

  return (
    <>
      <div className="relative top-0 w-full tablet:w-1/2 pt-10 flex justify-center items-center">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default SphereTagCloud;
