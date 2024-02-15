import Map from '@/components/Map'
import Marksers from '@/components/Markers'
import StoreBox from '@/components/StoreBox'
import stores from '@/data/store_data.json'
import { useState } from 'react'

export default function Home() {
  const [map, setMap] = useState(null)
  const [currentStore, setCurrentStore] = useState(null)
  const storeDataList = stores['DATA']

  return (
    <>
      <Map setMap={setMap} />
      <Marksers
        storeDataList={storeDataList}
        map={map}
        setCurrentStore={setCurrentStore}
      />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  )
}
