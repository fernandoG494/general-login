import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanelProps } from "../interfaces/LoginInterfaces";

import "../styles/layout/LoginRegisterSection.scss";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const LoginRegisterSection = () => {
  const [value, setValue] = React.useState(0);

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="form-container">
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LoginForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RegisterForm />
      </CustomTabPanel>
    </div>
  );
};

export default LoginRegisterSection;
