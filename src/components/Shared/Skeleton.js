import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={230}
    height={200}
    // viewBox="0 0 330 200"
    backgroundColor="#f5f5f5"
    foregroundColor="#fafafa"
    {...props}
  >
    <rect x="10" y="10" rx="5" ry="5" width="215" height="200" /> 
  </ContentLoader>
)
 
export default Skeleton
