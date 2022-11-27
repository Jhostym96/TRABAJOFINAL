import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../image/assets/icons/project1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("../../image/assets/icons/project2.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("../../image/assets/icons/project3.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
