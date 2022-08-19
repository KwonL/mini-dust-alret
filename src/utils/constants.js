export const OPTIONS = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

export const strGrade = (data) => {
  if (data === 1) {
    return '좋음'
  } else if (data === 2) {
    return '보통'
  } else if (data === 3) {
    return '나쁨'
  } else {
    return '매우 나쁨'
  }
}
