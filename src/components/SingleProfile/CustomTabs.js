import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import UsersComponent from "./UsersComponent";
import GroupsComponent from "./GroupsComponent";
import UsersPrivileges from "./UsersPrivileges";

export default function CustomTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider"
          }}
        >
          <TabList onChange={handleChange} aria-label="customTabs">
            <Tab sx={{ textTransform: "capitalize" }} label="Users" value="1" />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="Groups"
              value="2"
            />
            <Tab
              sx={{ textTransform: "capitalize" }}
              label="User Privileges"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UsersComponent />
        </TabPanel>
        <TabPanel value="2">
          <GroupsComponent />
        </TabPanel>
        <TabPanel value="3">
          <UsersPrivileges />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
