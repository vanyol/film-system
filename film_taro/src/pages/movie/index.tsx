import { View, Image, Text } from '@tarojs/components'
import Footer from "../../components/Footer"
import './index.styl'
import ajax from "../../api/ajax"
import { useState, useEffect } from '@tarojs/taro'

export function getMovie() {
  return ajax.get('getMovieList')
}
export interface movie {
  actor: string
  cinema_id: number
  director: string
  hall_name: string
  intro: string
  language: string
  movie_id: number
  movie_long: string
  name: string
  poster: string
  price: number
  public_date: string
  schedule_id: number
  score: number
  seat_info: string
  show_date: string
  show_time: string
  type: string
  wish_num: number
}
export default function Index() {
  const [movieList, setMovieList] = useState<movie[]>([])
  useEffect(() => {
    getMovie().then(({ data }) => setMovieList(data.data))
  }, [setMovieList])

  return (
    <View>
      <View className="movie-item">
        <Image className="cover" style="width:75px;height:100px;" src="http://localhost:3000/images/movie/hot4.jpg" />
        <View className="info">
          <View className="name">比悲伤更悲伤的故事</View>
          <View className="desc-info">
            <View>
              评分：
              <Text className="number">9.0</Text>
            </View>
            <Text className="type">类型：言情</Text>
            <Text className="actor">主演：陈庭妮</Text>
          </View>
        </View>
        <View className="buy">购票</View>
      </View>
      {movieList.map(movie => (
        <View className="movie-item">
          <Image
            className="cover"
            style="width:75px;height:100px;"
            src={movie.poster}
            onClick={() => Taro.navigateTo({ url: `/pages/movieDetail/index?id=${movie.movie_id}` })}
          />
          <View className="info">
            <View className="name">{movie.name}</View>
            <View className="desc-info">
              <View>
                评分：
                <Text className="number">{movie.score}</Text>
              </View>
              <Text className="type">类型：{movie.type}</Text>
              <Text className="actor">主演：{movie.actor}</Text>
            </View>
          </View>
          <View className="buy">购票</View>
        </View>
      )
      )}
      <Footer />
    </View>
  )
}
