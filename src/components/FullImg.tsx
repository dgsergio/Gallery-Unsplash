import { GalleryType } from '../app.model';

export default function FullImg({ image }: { image: GalleryType }) {
  return (
    <section className="full-size">
      <img src={image.image} alt={image.title} />
    </section>
  );
}
