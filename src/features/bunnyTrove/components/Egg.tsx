import React, { useContext } from "react";

import { MapPlacement } from "features/game/expansion/components/MapPlacement";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { EasterHunt } from "features/game/types/game";
import { ITEM_DETAILS } from "features/game/types/images";
import { Context } from "features/game/GameProvider";

export const Egg: React.FC<Omit<EasterHunt, "generatedAt">> = ({ eggs }) => {
  const { gameService } = useContext(Context);

  return (
    <>
      {eggs.map((egg, index) => (
        <MapPlacement x={egg.x} y={egg.y} key={index}>
          <div className="relative cursor-pointer hover:img-highlight">
            <img
              style={{
                width: `${PIXEL_SCALE * 8}px`,
              }}
              src={ITEM_DETAILS[egg.name].image}
              alt={egg.name}
              onClick={() =>
                gameService.send("easterEgg.collected", {
                  eggIndex: index,
                })
              }
            />
          </div>
        </MapPlacement>
      ))}
    </>
  );
};