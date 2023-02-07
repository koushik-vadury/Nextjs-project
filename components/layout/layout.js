import Notification from "../ui/notification";
import MainHeader from "./main-header";
const Layout = (props) => {
  return (
    <>
      <Notification />
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
