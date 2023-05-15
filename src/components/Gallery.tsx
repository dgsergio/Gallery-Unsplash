import { GalleryType } from '../app.model';

export default function Gallery({
  gallery,
  onSelectImg,
}: {
  gallery: GalleryType[];
  onSelectImg: (img: GalleryType) => void;
}) {
  return (
    <section className="image-container">
      <ul>
        {gallery.map((item) => (
          <li key={item.id} onClick={() => onSelectImg(item)}>
            <img src={item.thumb} alt={item.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
