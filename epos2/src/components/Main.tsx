import * as React from "react";
// import history from '../history'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import SideBar from "./SideBar";
import NewOrder from "./NewOrder";
import Orders from "./Orders";
import Customers from "./Customers";
import Inventory from "./Inventory";
import Dashboard from "./Dashboard";
import OrderPay from "./OrderPay";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component<any, any> {
  componentWillMount() {
    // history.push('/customers')
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{ minHeight: "100vh" }}
          collapsible={true}
          collapsed={true}
        >
          {/* make specific menus for user permission levels */}
          <Route
            path="/"
            history={this.props.history}
            render={props => <SideBar {...props} />}
          />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path="/new-order" component={NewOrder} />
              <Route path="/orders" component={Orders} />
              <Route path="/customers" component={Customers} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/payments/:orderId?" component={OrderPay} />
              <Redirect from="/" to="/new-order" />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter<any, any>(Main);
