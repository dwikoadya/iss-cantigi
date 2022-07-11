import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import id from "timeago.js/lib/lang/id_ID";

timeago.register("id", id);

type Props = {
  poto: string;
  title: string;
  desc: string
  width: number
  height: number
  classCard: string
  classTitle: string
  classDesc: string
  type?: string
  time: Date
}

export default function Card({
  poto, title, desc, width, height,
  classCard, classTitle, classDesc, type, time,
}: Props) {
  return (
    <div className="w-full px-2 cursor-grab text-left">
      <Image
        alt="umkm"
        className="object-cover"
        height={height}
        src={poto}
        width={width}
      />
      <div className={classCard}>
        <h5 className={classTitle}>{title}</h5>
        <p className={classDesc}>{desc}</p>
        {
          type === "GALERI_DESA" && (
            <span className="text-slate-600">
              <TimeAgo
                datetime={time}
                locale="id"
              />
            </span>
          )
        }
      </div>
    </div>
  );
}
