import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export function Icon(props: IconPropsType) {
  return (
    <svg width={props.width || "26"} height={props.height || "21"} viewBox={props.viewBox || "0 0 26 21"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
