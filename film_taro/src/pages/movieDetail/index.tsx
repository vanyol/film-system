import { View, Text, Image } from "@tarojs/components"
import './index.styl'
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/rate.scss"
import { AtRate } from "taro-ui"
import ajax from "../../api/ajax"
import { movie, getMovie } from "../movie"
import { useState, useEffect, useRouter } from "@tarojs/taro"

function getMovieDetail(id: number) {
  return ajax.get(`getMovieDetail?movieId=${id}`)
}
function getComments(id: number) {
  return ajax.get(`getAllUserPassComment?movieId=${id}`)
}

interface Comment {
  avatar: string
  birthday: string
  comment_content: string
  comment_date: string
  comment_id: number
  is_pass: number
  movie_id: number
  password: string
  phone: string
  sex: string
  sign: string
  support_num: number
  support_user: string
  user_id: number
  user_name: string
  user_score: number
}

export default function Index() {
  const [movie, setMovie] = useState<any>({})
  const [comments, setComments] = useState<any>([])
  const { id } = useRouter().params
  useEffect(() => {
    getComments(+id).then(e => setComments(e.data.data))
    getMovieDetail(+id).then(e => setMovie(e.data.data[0]))
  }, [])
  return (
    <View className="detail">
      <View className="header">
        <Text className="back at-icon at-icon-chevron-left"
          onClick={() => Taro.navigateBack()}
        ></Text>
        <Text className="name">{movie.name}</Text>
      </View>
      <View className="movie-info">
        <View className="item1">
          <View className="movie-detail">
            <Image className="cover" src={movie.poster} />
            <View className="info">
              <View className="name">{movie.name}</View>
              <View className="desc-info">
                <Text className="type">类型：{movie.type}</Text>
                <Text className="actor">主演：{movie.actor}</Text>
                <Text className="long">片长：{movie.movie_long}</Text>
                <Text className="show-time">上映：{movie.public_date}</Text>
              </View>
            </View>
          </View>
          <View className="action">
            <Text className="will-watch btn at-icon at-icon-heart">想看</Text>
            <Text className="watched btn at-icon at-icon-star">看过</Text>
          </View>
        </View>
        <View className="item2">
          <View className="titles">
            <Text>口碑</Text>
            <Text>{movie.wish_num > 0 ? `${movie.wish_num}人` : '暂无'}想看</Text>
          </View>
          <View className="rate">
            <AtRate size={25} max={5} value={movie.score / 2} ></AtRate>
            <Text className="score">{movie.score}分({comments.length > 0 ? `${comments.length}人` : '暂无'}评论)</Text>
          </View>
        </View>
        <View className="item3">
          <View className="titles">
            <Text>简介</Text>
          </View>
          {movie.intro}
        </View>
      </View>
      <View className="comments">
        <View className="comment-header">
          <Text className="title">评论</Text>
          <View className="do-comment">参与评论</View>
        </View>
        <View className="comment-list">
          <View className="title">精彩评论</View>
          {comments.map(comment => (
            <View className="comment-item">
              <Image className="avatar" src={comment.avatar}></Image>
              <View className="info">
                <Text className="user">{comment.user_name}</Text>
                <Text className="rate">给这部作品打了{comment.user_score}分</Text>
                <Text className="comment-detail">{comment.comment_content}</Text>
                <View className="bottom">
                  <Text className="date">{comment.comment_date.substr(0, 10)}</Text>
                  <Text className="thumb at-icon at-icon-heart  ">{comment.support_num}</Text>
                </View>
              </View>
            </View>
          ))}
          {comments.length < 1 ? (<Text>暂无评论</Text>) : ''}

        </View>
        <View className="buy-wrapper">
          <Text className="buy">特惠购票</Text>
        </View>
      </View>
    </View>
  )
}