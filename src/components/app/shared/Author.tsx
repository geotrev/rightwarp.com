import Image from "next/image"

export const Author = ({ name, image }: { name: string; image: string }) => {
  return (
    <div
      className="flex flex-row items-center gap-2 lg:flex-col lg:items-start xl:flex-row xl:items-center"
      key={name}
    >
      <div className="avatar mask mask-squircle relative size-10">
        <Image src={image} fill alt="" />
      </div>
      <span className="flex flex-col">
        <span className="text-black dark:text-white">{name}</span>
      </span>
    </div>
  )
}
