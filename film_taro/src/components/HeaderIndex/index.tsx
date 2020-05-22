import { View, Text, Input } from "@tarojs/components"
import './index.styl'
export default function Index() {

  return (
    <View className="header-index">
      <Text>成都</Text>
      <Input
        id="search"
        placeholder='搜索'
      />
      {/* <Image id="calendar" src={require('./images/calendar.svg')} /> */}
    </View>
  )
}