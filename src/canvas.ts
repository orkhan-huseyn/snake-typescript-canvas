export const canvas = document.querySelector(".canvas") as HTMLCanvasElement;

export const ctx = canvas.getContext("2d");
export const scale = 10;

export const rows = canvas.height / scale;
export const columns = canvas.width / scale;
