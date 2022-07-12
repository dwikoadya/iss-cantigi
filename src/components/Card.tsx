/* eslint-disable react/no-danger */
import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import id from "timeago.js/lib/lang/id_ID";

import useTextEllipsis from "hooks/useTextEllipsis";

timeago.register("id", id);

type Props = {
  poto: string;
  title: string;
  desc: string | undefined
  width: number
  height: number
  classCard: string
  classTitle: string
  classDesc: string
  type?: string
  time: string | Date
}

export default function Card({
  poto, title, desc, width, height,
  classCard, classTitle, classDesc, type, time,
}: Props) {
  const {
    ellipsisText,
    onCollapse,
    onShowMore,
    isTruncated,
  } = useTextEllipsis(desc || "", 150);

  const text = type === "GALERI_DESA" ? ellipsisText : desc;

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
        <p className={classDesc} dangerouslySetInnerHTML={{ __html: text || "" }} />
        {desc && desc.length > 150 && type === "GALERI_DESA" && (
          <a
            className="inline text-secondary underline text-light dark:text-blue-400"
            onClick={isTruncated ? onShowMore : onCollapse}
          >
            {isTruncated ? "Baca Selengkapnya" : "Sembunyikan"}
          </a>
        )}
        {
          type === "GALERI_DESA" && (
            <span className="text-slate-600 dark:text-white">
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
