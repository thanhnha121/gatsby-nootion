import React from "react"
import { Link } from "gatsby"
import { parseImageUrl } from "@conradlin/notabase/src/utils"

const PostItem = ({ data }) => {
  const {
    title,
    tags,
    cover_image,
    publish_date,
    desc,
    read_time,
    url,
    slug,
  } = data
  let coverimageURL = parseImageUrl(cover_image[0], 1000, slug)

  return (
    <div style={{ margin: 10 }}>
      <Link to={`posts/${url}/`}>
        <img
          alt={`${title} cover`}
          style={{ width: "100%" }}
          src={coverimageURL}
        />
        <div style={{ color: "grey" }}>
          Tags: {tags && tags.join(", ")} • Published: {publish_date.startDate}{" "}
          • {read_time} MIN READ
        </div>
        <h2>{title}</h2>
        <p
          style={{ color: "black" }}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </Link>
    </div>
  )
}

export default PostItem