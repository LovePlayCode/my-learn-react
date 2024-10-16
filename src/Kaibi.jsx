/**
 * Open/Closed Principle(OCP) - 开闭原则
 * 软件实体(类、模块、函数等)应该对扩展开放，对修改关闭。
 * 也就是说，添加新功能时应该通过扩展现有代码而不是修改他
 */

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
const PrimaryButton = () => {
  return (
    <Button>
      <span style={{ backgroundColor: "red" }}>123</span>
    </Button>
  );
};
export { Button, PrimaryButton };
