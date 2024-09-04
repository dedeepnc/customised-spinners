import CircularSpinner from "../components/CircularSpinner";


export default {
  title: "Circular Spinner",
  component: CircularSpinner,
};
const Template = (args) => <CircularSpinner {...args} />;

//copy function using bind
export const Default = Template.bind({});

// <CircularSpinner color="red" opacity="0.3"></CircularSpinner>

Default.args = {
  color: "red",
  opacity: "0.3",
};
