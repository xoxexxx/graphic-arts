import React from "react";
import { useSelector } from "react-redux";
import { MediaAndPhotoTemplates } from "./MediaAndPhotoTemplates";
import { MediaAndPhotoSettings } from "./MediaAndPhotoSettings";

export const MediaAndPhoto: React.FC = () => {
  const isEditFilters = useSelector((state: any) => state.check.isEditFilters);

  return (
    <>
      <div>
        <div>
          <input
            className="block py-2 px-12 rounded-md mt-8 mr-0 mb-5 ml-2 text-base text-[#7b7c7d]
                  max-[1380px]:w-44 
                  "
            type="text"
            placeholder="Поиск шаблонов"
          />
        </div>
        {isEditFilters ? <MediaAndPhotoSettings /> : <MediaAndPhotoTemplates />}
      </div>
    </>
  );
};
