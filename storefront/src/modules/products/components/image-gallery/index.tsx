import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
      
  {/* Hlavný veľký obrázok */}
  {images[0] && (
    <Container
      key={images[0].id}
      className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
    >
      <Image
        src={images[0].url}
        priority
        className="absolute inset-0 rounded-rounded"
        alt="Main product image"
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        style={{
          objectFit: "cover",
        }}
      />
    </Container>
  )}

  {/* Ostatné malé obrázky v riadku */}
  {images.length > 1 && (
    <div className="grid grid-cols-4 gap-2">
      {images.slice(1).map((image, index) => (
        <Container
          key={image.id}
          className="relative aspect-square w-full overflow-hidden bg-ui-bg-subtle"
        >
          <Image
            src={image.url}
            priority={index <= 2 ? true : false}
            className="absolute inset-0 rounded-md"
            alt={`Thumbnail ${index + 2}`}
            fill
            sizes="(max-width: 768px) 25vw, 200px"
            style={{
              objectFit: "cover",
            }}
          />
        </Container>
      ))}
    </div>
  )}
</div>
  )
}

export default ImageGallery
