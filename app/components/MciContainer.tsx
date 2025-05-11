import React from 'react'

// this container applies the style of padding left and right along with other common styles so that it is easier to change if needed, instead of changing accross whole platform
function MciContainer({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
      <div className={`px-3 lg:px-[90px] xl:px-[150px]`}>
          {children}
    </div>
  )
}

export default MciContainer