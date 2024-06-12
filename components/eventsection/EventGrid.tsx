import { Event } from '@/app/types'
import { FC } from 'react'
import EventTileBig from './EventTileBig'
import EventTileSmall from './EventTileSmall'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

interface EventListProps {
  events: Event[]
}

const EventGrid: FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden lg:grid lg:grid-cols-10 lg:grid-rows-6 lg:gap-0 lg:border-b-2 lg:border-white">
        <div className="col-span-3 row-span-2 col-start-8 row-start-1">
          <EventTileSmall {...events[1]} />
        </div>
        <div className="col-span-3 row-span-2 col-start-8 row-start-3">
          <EventTileSmall {...events[2]} />
        </div>
        <div className="col-span-3 row-span-2 col-start-8 row-start-5">
          <EventTileSmall {...events[3]} />
        </div>
        <div className="col-span-7 row-span-2 col-start-1 row-start-1">
          <EventTileBig {...events[0]} />
        </div>
        <div className="col-span-7 row-span-4 col-start-1 row-start-3">
          <Image
            width={100}
            height={100}
            src={`${prefix}/infball.webp`}
            alt="Wide CompSoc logo"
            className="w-full h-full object-cover border-white border-2 border-b-0"
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden flex flex-col space-y-4 mt-0 border-white border-b-2">
        <EventTileBig {...events[0]} />
        <Image
          width={100}
          height={100}
          src={`${prefix}/infball.webp`}
          alt="Wide CompSoc logo"
          className="w-full h-full object-cover border-white border-2 border-b-0"
          style={{ marginTop: '0px' }}
        />
        <EventTileBig {...events[1]} />
        <EventTileBig {...events[2]} />
        <EventTileBig {...events[3]} />
      </div>
    </div>
  )
}

export default EventGrid