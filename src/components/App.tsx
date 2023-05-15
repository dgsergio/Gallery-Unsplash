import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import { GalleryType } from '../app.model';
import FullImg from './FullImg';

interface Unsplash {
  id: string;
  blur_hash: string;
  urls: {
    thumb: string;
    regular: string;
  };
  alt_description: string;
}

function App() {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [imgSelected, setImgSelected] = useState<GalleryType>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const transformData = (data: Unsplash[]) => {
    let newData: GalleryType[] = [];
    for (const item of data) {
      newData.push({
        id: item.id,
        thumb: item.urls.thumb,
        image: item.urls.regular,
        title: item.alt_description,
      });
    }
    setGallery(newData);
  };

  const selectImgHandler = (img: GalleryType): void => {
    setImgSelected(img);
  };

  const callApi = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${
          import.meta.env.VITE_UNSPLASH_KEY
        }`
      );
      if (!response.ok) throw new Error('Something went wrong');
      const data = await response.json();
      transformData(data);
    } catch (err: any) {
      setError('Error: ' + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log('eff');
    callApi();
  }, []);

  return (
    <>
      <header>
        <h1>Image Gallery</h1>
      </header>
      <main>
        {imgSelected && <FullImg image={imgSelected} />}
        {loading && <div>loading...</div>}
        {error && <div className="error">{error}</div>}
        {gallery && !loading && (
          <Gallery gallery={gallery} onSelectImg={selectImgHandler} />
        )}
      </main>
    </>
  );
}

export default App;
