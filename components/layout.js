// import Header from "./header";
import stylesheet from "antd/dist/antd.min.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = Page => {
  return () => (
    <Layout>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style jsx>{`
        #components-layout-demo-top-side-2 .logo {
          width: 120px;
          height: 31px;
          background: #333;
          border-radius: 6px;
          margin: 16px 28px 16px 0;
          float: left;
        }
      `}</style>
      <Layout>
        <Layout>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Page />
        </Content>
      </Layout>
      </Layout>
    </Layout>
  );
};

export default withLayout;
