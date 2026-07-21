export const playClick = () => {
  const audio = new Audio(process.env.PUBLIC_URL + "/sounds/click.mp3");
  audio.preload = "auto";
  audio.volume = 0.3;

  audio.play().catch((err) => {
    console.error("Click Sound Error:", err);
  });
};

export const playHover = () => {
  const audio = new Audio(process.env.PUBLIC_URL + "/sounds/hover.mp3");
  audio.preload = "auto";
  audio.volume = 0.2;

  audio.play().catch((err) => {
    console.error("Hover Sound Error:", err);
  });
};

export const playSuccess = () => {
  const audio = new Audio(process.env.PUBLIC_URL + "/sounds/success.mp3");
  audio.preload = "auto";
  audio.volume = 0.4;

  audio.play().catch((err) => {
    console.error("Success Sound Error:", err);
  });
};

export const playWhoosh = () => {
  const audio = new Audio(process.env.PUBLIC_URL + "/sounds/whoosh.mp3");
  audio.preload = "auto";
  audio.volume = 0.3;

  audio.play().catch((err) => {
    console.error("Whoosh Sound Error:", err);
  });
};