import { Skeleton } from "antd";

export function DocIconSkeleton({ size = 120 }) {
  return (
    <Skeleton.Avatar
      active
      shape="square"
      size={size}
      style={{ borderRadius: 8 }}
    />
  );}