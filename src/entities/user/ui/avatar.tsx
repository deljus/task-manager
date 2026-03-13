import React from "react";
import NextImage from "next/image";
import { User } from "../model/types";

export function UserAvatar({ image }: Pick<User, "image" | "name"> = {}) {
  return image ? (
    <div className="w-10 h-10 rounded-full">
      <div className="relative w-full h-full overflow-hidden rounded-full">
        <NextImage alt="user avatar" src={image} fill />{" "}
      </div>
    </div>
  ) : (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-10 rounded-full">
        <span className="text-xs">--</span>
      </div>
    </div>
  );
}
