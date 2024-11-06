import { getMountainList } from '@/app/(home)/api'

export default async function MountainListCard() {
  const data = await getMountainList()

  return (
    <div>
      {data?.map((item) => (
        <div className="mb-4" key={item.mntiListNo}>
          <div className="relative  h-[200px] w-full overflow-hidden rounded-xl">
            <img
              src={
                item?.potoFile
                  ? `data:image/jpeg;base64,${item?.potoFile}`
                  : '/images/empty_img.png'
              }
              alt={item.name || 'Empty Image'}
              className="size-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <p>{item.mntiName}</p>
              <p>{item.height}m</p>
            </div>
            <p> {item.mntiAdd}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
