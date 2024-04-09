//import css from "./Loader.module.css";
// import { ThreeDots } from "react-loader-spinner";
// export default function Loader() {
//   return (
//     <ThreeDots
//       visible={true}
//       height="80"
//       width="80"
//       color="#ccc"
//       radius="9"
//       ariaLabel="three-dots-loading"
//       wrapperStyle={{}}
//       wrapperClass=""
//     />
//   );
// }

import LinearProgress from "@mui/material/LinearProgress";

const Loader = () => {
  return (
    <LinearProgress color="primary" variant="indeterminate" sx={{ mt: 2 }} />
  );
};

export default Loader;
