export const TURKISH = "TURKISH";
export const ENGLISH = "ENGLISH";
export const CHANGE_MODE = "CHANGE_MODE";
export const MOD_AL = "MOD_AL";
export const DIL_AL = "DIL_AL";

export const turkish = () => {
  return { type: TURKISH };
};

export const english = () => {
  return { type: ENGLISH };
};

export const changeMode = () => {
  return { type: CHANGE_MODE };
};

export const modeAl = (boolean) => {
  return { type: MOD_AL, payload: boolean };
};

export const dilAl = (ln) => {
  return { type: DIL_AL, payload: ln };
};