export const imageSetupInBaground = (url) => {
  // console.log("SS", url)
  return {
    backgroundSize: 'cover',
    backgroundImage: `url(${url})`,
    height: '150px',
    backgroundRepeat: 'no-repeat',
  };
}