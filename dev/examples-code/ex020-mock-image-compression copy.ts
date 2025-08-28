(() => {

  type CompressorOptions = {
    success: (result: string) => void;
    error: (err: Error) => void
  }

  class Compressor {
    constructor(image: string, options: CompressorOptions) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          options.success(`COMPRESSED: "${image.slice(0, 15)}"`);
        } else {
          options.error(new Error('Problem occurred with image compression'));
        }
      }, 1000);
    }
  }

  const compressImage = async (image: string): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {

      const success = (result: string) => {
        resolve(result);
      }

      const error = (err: Error) => {
        console.log(`LOGGING: Error occurred "${err.message}"`)
        resolve(undefined);
      }

      new Compressor(image, {
        success,
        error
      });
    });
  }

  async function main() {
    const result = await compressImage("image-as-string-as-a-test");
    if (result) {
      console.log(`(${typeof (result)})`, result);
    }
  }

  main();

})();