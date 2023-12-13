import NextImage, { ImageProps } from 'next/image'

// const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/blog${src}`} {...rest} />
// const Image = ({ src, ...rest }: ImageProps) => (
//   <NextImage src={src.startsWith('http') ? src : `/blog${src}`} {...rest} />
// )
// export default Image

const Image = ({ src, ...rest }: ImageProps) => {
  const imagePath = typeof src === 'string' && !src.startsWith('http') ? `/blog${src}` : src
  return <NextImage src={imagePath} {...rest} />
}
export default Image
