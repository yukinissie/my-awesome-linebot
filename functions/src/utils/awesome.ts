// 句読点を検索して猫語に置換します
export const addNyan = (text: string): string => {
  return text.replace(/。/g, 'にゃん。').replace(/．/g, 'にゃん．').replace(/、/g, 'にゃ、').replace(/，/g, 'にゃ，')
}
