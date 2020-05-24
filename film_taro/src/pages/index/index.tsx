import { View, Image, Text } from '@tarojs/components'
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Header from "../../components/HeaderIndex"
import './index.styl'

import { getMovie, movie } from '../movie'
import { useEffect, useState } from '@tarojs/taro'

export default function Index() {
  const [movieList, setMovieList] = useState<movie[]>([])
  useEffect(() => {
    getMovie().then(({ data }) => setMovieList(data.data))
  }, [setMovieList])
  return (
    <View className="home" >
      <Banner />
      <View className="header">
        <Header />
      </View>
      <View className="main">
        <View className="panel">
          <View className="header">
            <Text className="name">正在热映</Text>
            <Text className="more">全部24部 ></Text>
          </View>
          <View className="body">
            <View className="item">
              <View className="movie">
                <Image className="poster" src="http://localhost:3000/images/movie/hot4.jpg" />
                <View className="badget">
                  <View className="name">比悲伤更悲伤的故事</View>
                  <Text className="score">9</Text>
                </View>
              </View>
              <View className="buy">购票</View>
            </View>
            {movieList.map(movie => (
              <View className="item">
                <View className="movie">
                  <Image className="poster" src={movie.poster} />
                  <View className="badget">
                    <View className="name">{movie.name}</View>
                    <Text className="score">{movie.score}</Text>
                  </View>
                </View>
                <View className="buy">购票</View>
              </View>
            ))}
          </View>
        </View>
        <View className="panel">
          <View className="header">
            <Text className="name">即将上映</Text>
            <Text className="more">0部 ></Text>
          </View>
        </View>
      </View>

      <Footer />

    </View>
  )
}
