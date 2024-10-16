import { useEffect, useState } from "react";

/**
 * Dependency Inversion Principle (DIP) - 依赖倒置原则
 * 高层模块不应该依赖低层模块，两者都依赖抽象。
 * 组件或类应该依赖于抽象接口，而不是具体实现。
 */
const Dip = ({ userService }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    userService.getUser().then(setUser);
  }, [userService]);
  return <div>{user ? `User: ${user.name}` : "Loading..."}</div>;
};
export default Dip;
