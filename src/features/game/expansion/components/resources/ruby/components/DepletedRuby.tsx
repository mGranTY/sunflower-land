import React, { useState } from "react";
import ruby from "assets/resources/ruby_small.png";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { TimeLeftPanel } from "components/ui/TimeLeftPanel";

interface Props {
  timeLeft: number;
}

const DepletedRubyComponent: React.FC<Props> = ({ timeLeft }) => {
  const [showTimeLeft, setShowTimeLeft] = useState(false);

  return (
    <div
      className="absolute w-full h-full"
      onMouseEnter={() => setShowTimeLeft(true)}
      onMouseLeave={() => setShowTimeLeft(false)}
    >
      <div className="absolute w-full h-full pointer-events-none">
        <img
          src={ruby}
          className="absolute opacity-50"
          style={{
            width: `${PIXEL_SCALE * 14}px`,
            bottom: `${PIXEL_SCALE * 3}px`,
            left: `${PIXEL_SCALE * 1}px`,
          }}
        />
        <div
          className="flex justify-center absolute w-full"
          style={{
            top: `${PIXEL_SCALE * -20}px`,
          }}
        >
          <TimeLeftPanel
            text="Recovers in:"
            timeLeft={timeLeft}
            showTimeLeft={showTimeLeft}
          />
        </div>
      </div>
    </div>
  );
};

export const DepletedRuby = React.memo(DepletedRubyComponent);
