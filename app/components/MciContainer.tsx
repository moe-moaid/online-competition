import React from "react";

// this container applies the style of padding left and right along with other common styles so that it is easier to change if needed, instead of changing accross whole platform
type MciContainerProps = {
  children: React.ReactNode;
  className?: string;
};
function MciContainer({ children, className }: MciContainerProps) {
  return (
    <div className={`px-3 lg:px-[90px] xl:px-[150px] ${className}`}>
      {children}
    </div>
  );
}

export default MciContainer;
