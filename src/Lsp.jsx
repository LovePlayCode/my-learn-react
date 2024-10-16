/**
 * Liskov Substitution Principle(里氏替换原则)
 * 派生类或子类应该能够替换基类，而不影响程序的正常性。
 * 子类必须能够在任何基类可以使用的地方正常工作
 */
const Lsp = () => {};
export default Lsp;

class Bird {
  move() {}
}
class Penguin extends Bird {
  move() {}
}
class Eagle extends Bird {
  move() {
    console.log("Eagle is flying...");
  }
}
