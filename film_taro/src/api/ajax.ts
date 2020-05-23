import Taro from '@tarojs/taro'
const baseUrl = `/api/`

async function get(url: string) {
  const res = await Taro.request({ url: baseUrl + url, dataType: 'json' })
  return res
}

export default {
  get
}