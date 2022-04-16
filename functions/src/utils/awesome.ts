export const addHoge = (text: string): string => {
  return text + 'hoge'
}

export const addNyan = (text: string): string => {
  return text.replace(/(。|．)/g, 'にゃん。')
}
