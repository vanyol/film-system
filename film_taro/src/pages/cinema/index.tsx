import { View, Text } from '@tarojs/components'
import Footer from "../../components/Footer"
import './index.styl'
import ajax from '../../api/ajax'
import { useState, useEffect } from '@tarojs/taro'

function getCinemas() {
  return ajax.get('getCinemaList')
}

interface Cinema {
  cinema_name: string,
  specified_address: string,
  cinema_id: number
}

export default function Index() {
  const [cinemaList, setCinemaList] = useState<Cinema[]>([])
  useEffect(() => {
    getCinemas().then(({ data }) => setCinemaList(data.data))
  }, [setCinemaList])
  return (
    <View className="cinema">
      <View className="header">header</View>
      {cinemaList.map(cinema => (
        <View className="cinema-item">
          <Text className="name">{cinema.cinema_name}</Text>
          <Text className="detail">{cinema.specified_address}</Text>
          <View className="tags">
            <Text className="tag">小吃</Text>
            <Text className="tag">4D厅</Text>
            <Text className="tag">巨幕厅</Text>
            <Text className="tag">杜比全景声厅</Text>
          </View>
        </View>
      ))}
      <Footer />
    </View>
  )
}
