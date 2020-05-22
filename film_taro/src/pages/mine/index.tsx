import { View, Text } from "@tarojs/components"
import Footer from "../../components/Footer"
import { AtAvatar, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/avatar.scss"
import "taro-ui/dist/style/components/list.scss"
import './index.styl'

export default function Index() {

  return (
    <View>
      <View id="avatar-box">
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        <Text className="login">登录/注册</Text>
      </View>
      <AtListItem title='我的订单' arrow='right' />
      <AtListItem title='想看的电影' arrow='right' />
      <AtListItem title='看过的电影' arrow='right' />
      <Footer />
    </View>
  )
}