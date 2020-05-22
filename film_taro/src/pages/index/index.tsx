import { View } from '@tarojs/components'
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Header from "../../components/HeaderIndex"
import './index.styl'
export default function Index() {

  return (
    <View className="home" >
      <Footer />
      <Banner />
      <View className="header">
        <Header />
      </View>

    </View>
  )
}
