import bombay_hair from "../assets/projects/bombay_hair.png";
import multipoint_inspect from "../assets/projects/multipoint_inspect.png";
import be_kinder_you from "../assets/projects/be_kinder_you.png";
import return_ranger from "../assets/projects/return_ranger.png";

const projects = [
  {
    imgSrc: return_ranger,
    title: "Return Ranger",
    description: `Return Ranger is a comprehensive application designed to simplify and enhance the customer return process by integrating advanced technology and robust features. Built on Node.js, React, AWS (EC2), and MySQL, the app provides seamless workflows for managing returns, tracking shipments, and generating analytics. 

The app includes secure user authentication and role-based access control to ensure data integrity and restricted access. Its return management system offers a full lifecycle solution, from initiating and tracking returns to issuing refunds and closing cases. Real-time notifications keep customers updated at every stage, while seamless integration with UPS automates shipment tracking and label generation.

With Shopify integration, Return Ranger embeds return functionalities directly into Shopify order pages, improving usability for businesses. It also integrates with the DecoNet application to sync return data effortlessly. The app features detailed analytics, offering insights into return trends, common reasons, and frequently returned products, enabling businesses to improve their operations and reduce returns.

Additional functionalities like package management, customizable return reasons, and an event timeline further streamline the return process. By automating workflows and providing powerful integrations, Return Ranger enhances operational efficiency, customer satisfaction, and overall business performance.`,
    technologies: [
      "Node",
      "Express",
      "MySql",
      "Sequelize",
      "Shopify GraphQl API",
      "UPS API",
      "JWT",
    ],
    url: "https://returns.framemytv.com/",
    images: [
      "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
      "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
    ],
  },
  {
    imgSrc: bombay_hair,
    title: "Bombay Hair",
    description:
      "Designed and implemented an automatic shipping protection plan within the Shopify ecosystem, seamlessly adding a 2% fee to the total cart value for customers in the US and Canada, leading to increased customer satisfaction and reduced manual effort. Automated the backorder notification process to eliminate manual product title updates, ensuring real-time customer communication about product availability and reducing related inquiries by 20%. Enhanced operational efficiency by 100% through automation, streamlining inventory management and reducing manual workloads. Successfully deployed and integrated the extension app into Shopify with a flawless 0% error rate, ensuring a seamless user experience and robust performance post-deployment.",
    technologies: ["Remix", "Shopify GraphQl API", "Nodejs"],
    url: "https://bombayhair.com/",
    images: [
      "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
      "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
    ],
  },
  {
    imgSrc: multipoint_inspect,
    title: "Multi Point Inspection",
    description:
      "Implemented data encryption for securing sensitive information in MongoDB, significantly improving data security compliance and introducing a robust backup strategy to minimize data loss. Optimized inspection processes by streamlining workflows, reducing inspection time, and enhancing user customization options. Developed a comprehensive Multi-Point Inspection Web App, further improving inspection efficiency and boosting report generation effectiveness, leading to a substantial enhancement in the overall inspection process. These efforts greatly strengthened data security, operational productivity, and user experience.",
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDb",
      "Mongoose",
      "JWT",
      "SMTP",
    ],
    url: "https://multipointinspect.com/",
    images: [
      "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
      "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
    ],
  },

  {
    imgSrc: be_kinder_you,
    title: "Be kinder you",
    description:
      "Designed and implemented a comprehensive backend application leveraging PHP and MySQL to efficiently manage and schedule push notifications for a large-scale system delivering over 10,000 messages monthly. This included developing a robust mechanism to store and manage Firebase Cloud Messaging (FCM) tokens alongside associated metadata in a MySQL database. To optimize performance, cache coherence was utilized for seamless operation across multiple processors. A key feature of the system was an intelligent scheduling algorithm that accounted for the complexities of daylight saving time, ensuring notifications were consistently delivered at scheduled times—7 AM, 3 PM, and 9 PM—without errors. This solution significantly enhanced operational accuracy and customer satisfaction.",
    technologies: ["PHP", "MySql"],
    url: "https://www.bekinderyou.com/",
    images: [
      "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
      "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
    ],
  },
  // {
  //   imgSrc: "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
  //   title: "Be kinder you",
  //   description:
  //     "An internal admin panel to manage returns and orders across multiple platforms, integrated with Shopify and UPS APIs for tracking and label generation.",
  //   technologies: ["React", "Redux", "Tailwind CSS", "UPS API"],
  //   url: "",
  //   images:[
  //     "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
  //     "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
  //     "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  //     "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
  //   ]
  // },
  // {
  //   imgSrc: "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
  //   title: "Be kinder you",
  //   description:
  //     "An internal admin panel to manage returns and orders across multiple platforms, integrated with Shopify and UPS APIs for tracking and label generation.",
  //   technologies: ["React", "Redux", "Tailwind CSS", "UPS API"],
  //   url: "",
  //   images:[
  //     "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
  //     "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
  //     "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  //     "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
  //   ]
  // },
];
export default projects;
