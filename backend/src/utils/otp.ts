interface Otp {
  value: string;
  expiresAt: Date;
}

export const generateOtp = (): Otp => {
  return {
    value: Math.floor(100000 + Math.random() * 900000).toString(),
    expiresAt: new Date(Date.now() + 10 * 60 * 1000),
  };
};
