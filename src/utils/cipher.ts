export const encrypt = (plaintext: string, key: number): string => {
  return plaintext
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        let shiftedCode = charCode + key;

        if (charCode >= 65 && charCode <= 90) {
          if (shiftedCode > 90) shiftedCode -= 26;
          if (shiftedCode < 65) shiftedCode += 26;
        } else if (charCode >= 97 && charCode <= 122) {
          if (shiftedCode > 122) shiftedCode -= 26;
          if (shiftedCode < 97) shiftedCode += 26;
        }
        return String.fromCharCode(shiftedCode);
      }
      return char;
    })
    .join('');
};

export const decrypt = (ciphertext: string, key: number): string => {
  return encrypt(ciphertext, -key);
};
