const obj = {
    name: "Alice",
    regular: function() {
      console.log(this.name); // fungerar – this är obj
    },
    arrow: () => {
      console.log(this.name); // this är inte obj – kan ge `undefined`
    },
    test: () => {
        console.log(obj.name)
    }
  };

  obj.arrow();
  obj.regular();
  obj.test();