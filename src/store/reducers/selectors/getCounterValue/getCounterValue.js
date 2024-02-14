// селектор для получ.знач.счётчика(fn приним.state и возвращ.его часть)
export const getCounterValue = (state) => state?.counter?.value || 0;
