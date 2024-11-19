import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, priority, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} priority={priority} {...rest} />
)

export default Image
