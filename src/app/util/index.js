export const imageSetupInBaground = (url) => {
  // console.log("SS", url)
  return {
    backgroundSize: 'cover',
    backgroundImage: `url(${url})`,
    height: '150px',
    backgroundRepeat: 'no-repeat',
  };
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}