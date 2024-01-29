import mongoose from 'mongoose';

const TambolaSchema = new mongoose.Schema({

    tickets:{
        type:[[Object]],
    },

    expireAt:{
      type:Date,
      default: Date.now,
      index:{expires:'10'}
    }
})

/*schema.pre('save', async function (next) {
    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.id = Math.random()
      .toString(36)
      .substr(2, randomInteger(6, 10));
    next();
  });*/


  /*schema.pre('save', async function (next) {
    const idInteger = () => {
      let value = 11;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this.id = Math.random()
      .toString(36)
      .substr(2, randomInteger(6, 10));
    next();
  });*/


  export default mongoose.model("Tambola", TambolaSchema);