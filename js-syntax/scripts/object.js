const obj = {
    name: "Alice",
    age: 33,

    regular: function() {
      console.log(this.name); // fungerar – this är obj
    },
    arrow: () => {
      console.log(this.name); // this är inte obj – kan ge `undefined`
    },
    test: () => {
      console.log(obj.name);
    },
    method1: function() {
      console.log("name:", this.name, "age:", this.age);
    },
  };

  obj.regular();
  obj.arrow();
  obj.test();
  obj.method1();