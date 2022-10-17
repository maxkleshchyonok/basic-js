const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    encrypt(text, key) {
        // // const alphabet = {
        // //   0: "A", 1: "B",
        // //   2: "C", 3: "D",
        // //   4: "E", 5: "F",
        // //   6: "G", 7: "H",
        // //   8: "I", 9: "J",
        // //   10: "K", 11: "L",
        // //   12: "M", 13: "N",
        // //   14: "O", 15: "P",
        // //   16: "Q", 17: "R",
        // //   18: "S", 19: "T",
        // //   20: "U", 21: "V",
        // //   22: "W", 23: "X",
        // //   24: "Y", 25: "Z",
        // // }
        // let alphabet = [0, "A", 1, "B",
        //     2, "C", 3, "D",
        //     4, "E", 5, "F",
        //     6, "G", 7, "H",
        //     8, "I", 9, "J",
        //     10, "K", 11, "L",
        //     12, "M", 13, "N",
        //     14, "O", 15, "P",
        //     16, "Q", 17, "R",
        //     18, "S", 19, "T",
        //     20, "U", 21, "V",
        //     22, "W", 23, "X",
        //     24, "Y", 25, "Z",]
        //
        // let textCode = [];
        // let keyCode = [];
        // let cipherNumbers = [];
        // let upperKey = key.toUpperCase();
        // let upperText = text.toUpperCase();
        //
        // for (let i = 0; i < upperText.length; i++) {
        //     for (let k = 0; k < alphabet.length; k++) {
        //         if (upperText[i] === alphabet[k]) {
        //             textCode.push(alphabet[k - 1])
        //         }
        //     }
        // }
        // for (let i = 0; i < upperKey.length; i++) {
        //     for (let k = 0; k < alphabet.length; k++) {
        //         if (upperKey[i] === alphabet[k]) {
        //             keyCode.push(alphabet[k - 1])
        //         }
        //     }
        // }
        // console.log('^^^^^^^^^^')
        // console.log(textCode)
        // console.log('-------------------')
        // console.log(keyCode)
        // console.log('0000000000000000')
        // for (let i=0;i<textCode.length;i++){
        //     for(let k=0;k<keyCode.length;k++){
        //         if(k !== keyCode.length -1) {
        //             if (textCode[i] + keyCode[k] < 26) {
        //                 cipherNumbers.push(textCode[i] + keyCode[k])
        //             } else {
        //                 cipherNumbers.push((textCode[i] + keyCode[k] - 26))
        //             }
        //         } else {
        //             if (textCode[i] + keyCode[k] < 26) {
        //                 cipherNumbers.push(textCode[i] + keyCode[k])
        //             } else {
        //                 cipherNumbers.push((textCode[i] + keyCode[k] - 26))
        //             }
        //             k = 0;
        //         }
        //     }
        //     if(i === textCode.length -1){
        //         break;
        //     }
        // }

        if(text === undefined || key === undefined){
            throw new Error('error')
        }
        let keyUC = key.toUpperCase();
        const keyUCDried = keyUC.replace(/\s/g,'');
        const messageUC = text.toUpperCase();
        const messageUCDried = messageUC.trim();
        const res = []
        const keyLength = keyUCDried.length;
        const msgLength = messageUCDried.length;
        for(let i=0, n=0;i<msgLength;i +=1,n+=1){
            const messageChar = messageUCDried[i];
        }

    }

    decrypt(text, key) {
        let kf = Math.ceil(text.length / key.length);
        key = key.repeat(kf);

        let codeA = 'A'.charCodeAt(0);
        let abcCount = 26;

        let result = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                result.push(text[i]);
            } else {
                let letterIdx = text.charCodeAt(i) - codeA;
                let shift = key.charCodeAt(i) - codeA;

                result.push(
                    String.fromCharCode(codeA + (letterIdx - shift + abcCount) % abcCount)
                );
            }
        }

        return result.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};
