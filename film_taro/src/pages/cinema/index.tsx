import { View, Text } from '@tarojs/components'
import Footer from "../../components/Footer"
import './index.styl'
export default function Index() {

  return (
    <View className="cinema">
      <View className="header">header</View>
      <View className="cinema-item">
        <Text className="name">name</Text>
        <Text className="detail">name</Text>
        <View className="tags">
          <Text className="tag">tag1</Text>
          <Text className="tag">tag2</Text>
          <Text className="tag">tag3</Text>
        </View>
      </View>
      <Footer />
    </View>
  )
}
