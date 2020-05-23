import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tab-bar.scss"
import "taro-ui/dist/style/components/badge.scss"
import "taro-ui/dist/style/components/icon.scss"
import './index.styl'
import { useState, useCallback, useRouter } from '@tarojs/taro'

enum ROUTES {
  '/pages/index/index',
  '/pages/movie/index',
  '/pages/cinema/index',
  '/pages/mine/index'
}

function router(index: number) {
  Taro.navigateTo({
    url: ROUTES[index]
  })
}

export default function Index() {
  const { path } = useRouter()
  const [index, setIndex] = useState(ROUTES[path + ''] || 0)
  const handClick = useCallback((index: number) => {
    router(index)
    setIndex(index)
  }, [setIndex])
  return (
    <AtTabBar
      tabList={[
        { title: '首页', iconType: 'home' },
        { title: '电影', iconType: 'list' },
        { title: '影院', iconType: 'video' },
        { title: '我的', iconType: 'user' }
      ]}
      onClick={handClick}
      current={index}
      fixed
    />
  )
}