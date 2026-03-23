const preloadImages = (images: string[]) => {
  return Promise.all(
    images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // prevent blocking
      });
    })
  );
};

export default preloadImages;