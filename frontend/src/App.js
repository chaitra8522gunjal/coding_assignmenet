import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import Transactions from './components/Transactions';
import Stats from './components/Stats';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const { Header, Content, Footer } = Layout;


const navItems = [
  {
    key: 1,
    label: ( <NavLink to="/">Transactions</NavLink> )
  },
  {
    key: 2,
    label: ( <NavLink to="/stats">Stats</NavLink> )
  }
];
const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


const App = () => {
  let [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor:"#d7d7d7",
            borderBottom :'1px solid black',
            borderTop: '1px solid black'
          }}
        >
          
          <Menu
            theme="white"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navItems}
            style={{
              flex: 1,
              padding: "0 60px",
              marginLeft:'500px',
              color: 'blue',
              fontSize: '20px'
            }}
          />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            style={{
              width: 200,
              marginTop: '130px'
            }}
            options={options.map((text, i) => {
              return {
                value: i,
                label: text
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: "0px 48px",
            backgroundColor: "#cfe2f3",
            minHeight: 600
          }}
        >
          <Routes>
            <Route path="/" element={
              <Transactions month={month} monthText={options[month]} />
            } />
            <Route path="/stats" element={
              <Stats month={month} monthText={options[month]} />
            } />
          </Routes>

        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          Created by <strong>Chaitralee Gunjal</strong>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;