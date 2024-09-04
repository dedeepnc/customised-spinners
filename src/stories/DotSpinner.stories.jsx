import DotSpinner from "../components/DotSpinner";
export default {
  title: "Dot Spinner",
  component: DotSpinner,
};
const Template = (args) => {
  return <DotSpinner {...args}></DotSpinner>;
};
export const Default = Template.bind({});

Default.args = {
  colors: ["#22333B", "#EAE0D5", "#C6AC8F"],
};

// export const Default = () => {
//   <DotSpinner colors={["#22333B", "#EAE0D5", "#C6AC8F"]} />;
// };
