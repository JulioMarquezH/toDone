import { useState } from "react";
import CreateProject from "components/projects/create";
import CreateGoal from "components/goals/create";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
const optionsUser = [{ value: 2, label: "m@gmail.com" }];
function PipeAddProject() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTab = (index) => setTabIndex(index);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={handleTab}>
      <TabList>
        <Tab>Project</Tab>
        <Tab>Goals</Tab>
      </TabList>
      <TabPanel>
        <CreateProject />
      </TabPanel>
      <TabPanel>
        <CreateGoal optionsUser={optionsUser} />
      </TabPanel>
    </Tabs>
  );
}

export default PipeAddProject;

/*
import useUser from "stores/useUser";
import postProject from "services/post/project";

  const token = useUser((state) => state.token);
  const has = useUser((state) => state.userId);
    toast.promise(postProject({ ...data, has }, token), {
      pending: "Processing your request",
      success: "You have logged in 👌",
      error: "Your credentials were rejected 🤯",
    });

*/
